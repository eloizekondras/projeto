document.addEventListener("DOMContentLoaded", function() {
    // Seleciona os elementos necessários
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');
    const searchIcon = document.getElementById('search-icon');
    const searchBox = document.querySelector('.search-box');

    // Adiciona o evento de clique para o ícone de menu
    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    // Adiciona o evento de clique para o ícone de pesquisa
    searchIcon.addEventListener('click', () => {
        searchBox.classList.toggle('active');
    });

    // Fecha o menu quando um link é clicado
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
        });
    });
});
