// Reproduz música ao clicar em qualquer lugar da página
window.addEventListener('click', function () {
  const audio = document.getElementById('music');
  audio.play();
  audio.volume = 0.2;
});

/*
  Função responsável por alternar
  entre o mundo normal e o mundo invertido.
*/
function switchTheme() {
  // Alterna classes de tema
  document.body.classList.toggle("dark-theme");
  document.body.classList.toggle("light-theme");

  // Verifica qual tema está ativo
  const theme = document.body.classList[0];

  // Define música de acordo com o tema
  const music = theme === "light-theme"
    ? "normal-world.mpeg"
    : "inverted-world.mpeg";

  // Atualiza música de fundo
  const audio = document.getElementById('music');
  audio.src = `./assets/musics/${music}`;
  audio.play();
  audio.volume = 0.2;
}
