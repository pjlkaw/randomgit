document.getElementById("btnSearch").addEventListener("click", () => {
  const lang = document.querySelector("#selectLang").value;
  async function projetoAleatorio(lang) {
    const url = `https://api.github.com/search/repositories?q=language:${lang}&sort=stars&order=desc&per_page=100`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      const randomIndex = Math.floor(Math.random() * data.items.length);
      const projeto = data.items[randomIndex];
      console.log(projeto);
    } catch (erro) {
      console.error(`Erro ao buscar projeto ${erro}`);
    }
  }
  projetoAleatorio(lang);
});
