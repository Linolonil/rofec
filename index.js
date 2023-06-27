const links = [
  "https://www.youtube.com/",
  "https://www.facebook.com/groups/IDFOficial",
  "https://www.google.com/sky/",
];

let linkAtual = 0;

function acessarProximoLink() {
  if (linkAtual < links.length) {
    window.open(links[linkAtual], "_blank");
    linkAtual++;
  } else {
    window.location.href = "https://www.orkut.com/index_pt.html";
  }
}
