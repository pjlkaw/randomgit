document.getElementById("btnSearch").addEventListener("click", () => {
    const alertP = document.getElementById('alertP')
    if (alertP) alertP.style.display = "none";


  const lang = document.querySelector("#selectLang").value;
  async function projetoAleatorio(lang) {
    const url = `https://api.github.com/search/repositories?q=language:${lang}&sort=stars&order=desc&per_page=100`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      const randomIndex = Math.floor(Math.random() * data.items.length);
      const projeto = data.items[randomIndex];

      // Anexar informções ao HTML
      const result = document.querySelector(".result");
      result.innerHTML = `
        <p id="name">${projeto.name}</h3>
        <p id="description">${projeto.description}</p>
        <p id="creator"> Feito por: ${projeto.owner.login}</p>
        <p id="stars">${projeto.stargazers_count} <i class="fa-solid fa-star"></i> </p>
        <a id="link" href="${projeto.html_url}" target="_blank">Ver projeto</a>
      `;
    } catch (erro) {
      console.error(`Erro ao buscar projeto ${erro}`);
    }
  }
  projetoAleatorio(lang);
});
