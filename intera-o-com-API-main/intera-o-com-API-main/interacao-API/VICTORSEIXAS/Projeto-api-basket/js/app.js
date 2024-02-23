document.addEventListener("DOMContentLoaded", function () {
    const playerNameInput = document.getElementById("playerNameInput");
    const searchButton = document.getElementById("searchButton");
    const playerStatsDiv = document.getElementById("playerStats");
  
    searchButton.addEventListener("click", function () {
      const playerName = playerNameInput.value.trim();
      if (playerName === "") {
        alert("Please enter a player name.");
        return;
      }
  
      fetchPlayerStats(playerName);
    });
  
    function fetchPlayerStats(playerName) {
      const url = `https://nba-stats-db.herokuapp.com/api/playerdata/name/${playerName}`;
      
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error('Player not found');
          }
          return response.json();
        })
        .then(data => {
          displayPlayerStats(data);
        })
        .catch(error => {
          console.error(error);
          playerStatsDiv.innerHTML = "<p>Player not found</p>";
        });
    }
  
    function displayPlayerStats(playerData) {
      const stats = playerData.stats;
      const playerInfo = `
        <h2>${playerData.name}</h2>
        <p>Team: ${playerData.team}</p>
        <p>Position: ${playerData.position}</p>
      `;
      let statsList = "<h3>Season Stats</h3>";
      for (const stat in stats) {
        statsList += `<p>${stat}: ${stats[stat]}</p>`;
      }
      playerStatsDiv.innerHTML = playerInfo + statsList;
    }
  });
  