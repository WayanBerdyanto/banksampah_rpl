const darkModeButton = document.querySelector('#dark-mode-button');
const body = document.body;

darkModeButton.addEventListener('click', () => {
  body.classList.toggle('dark');
});

function toggleNavbar(collapseID) {
    document.getElementById(collapseID).classList.toggle("hidden");
    document.getElementById(collapseID).classList.toggle("block");
}