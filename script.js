const traducciones = {
  es: {
    nombre: "Juan Alberto",
    apellidos: "Sánchez Hernández",
    organismo: "Organismo: Universidad de Las Palmas de Gran Canaria",
    curriculum: ["Diplomado en Informática", "Licenciado en Informática", "Gestor de Proyectos de Desarrollo de Aplicaciones desde 1999", "Investigador en IA y Big Data"]
  },
  en: {
    nombre: "Juan Alberto",
    apellidos: "Sánchez Hernández",
    organismo: "Organization: University of Las Palmas de Gran Canaria",
    curriculum: ["Associate Degree in Computer Science", "Bachelor's Degree in Computer Science", Application Development Project Manager since 1999", "Researcher in AI and Big Data"]
  }
};

let idiomaActual = "es";

function cambiarIdioma() {
  idiomaActual = idiomaActual === "es" ? "en" : "es";
  const t = traducciones[idiomaActual];
  document.getElementById("nombre").textContent = t.nombre;
  document.getElementById("organismo").textContent = t.organismo;

  const lista = document.querySelector("#curriculum ul");
  lista.innerHTML = "";
  t.curriculum.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    lista.appendChild(li);
  });
}
