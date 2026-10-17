// Função assíncrona para realizar o fetch.
async function getApod() {
  if (!document.getElementById("apod-container")) return;
  const api_key = "DEMO_KEY";
  const url = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`;

  // Tratamento de erros.
  try {
    const response = await fetch(url); // Await diz para o código não executar outra linha enquanto o fetch não for concluído.

    if (!response.ok) { // Se a const response for diferente de ok(status 200), cria um erro.
      throw new Error(`NASA API request failed: ${response.status}`);
    }

    const data = await response.json(); // Transforma os dados em json(uma forma que o JS consegue utilizar).
    
    renderData(data);

  } catch (error) {
    console.error("Error: ", error);

    const container = document.getElementById("apod-container");
    container.innerHTML = `
      <div>
        <p> A meteor may have hit the antenna, check the network and try again. </p>
      </div>
  `
  }
}

function renderData(data) {
  const container = document.getElementById("apod-container");

  container.innerHTML = "";

  const title = document.createElement("h2");
  title.textContent = data.title;
  title.className = "apod-title";

  if (data.media_type === "video") {

    const video = document.createElement("iframe");
    video.src = data.url;
    video.title = data.title;
    video.height = "100%";
    video.width = "400px";
    video.className = "apod-video";
    container.appendChild(video);

  } else {

    const img = document.createElement("img");
    img.src = data.url;
    img.alt = data.title
    img.className = "apod-img";
    container.appendChild(img);
  }

  const exp = document.createElement("p");
  exp.textContent = data.explanation;
  exp.className = "apod-explain";

  const date = document.createElement("p");
  date.textContent = data.date;
  date.className = "apod-date";

  const label = document.createElement('h3');
  label.className = "apod-explain-label"
  label.textContent = "Picture explanation:";

  container.appendChild(title);
  container.appendChild(date);

  container.appendChild(label);
  container.appendChild(exp);
}

getApod();

