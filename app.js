function darkMode () {
    const pagina = document.body
    const btn = document.querySelector("button") 
    pagina.classList.toggle("dark-mode")

    const isDarkMode = document.body.classList.contains("dark-mode")

    let textoBotao = isDarkMode ? "Light Mode" : "Dark Mode";
    if (textoBotao) {
        btn.textContent = textoBotao;
        btn.style.color = isDarkMode ? "black" : "white";
        btn.style.backgroundColor = isDarkMode ? "white" : "black";
    }
}