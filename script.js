const arrayPostagens = [
  {
    img: "https://lh3.googleusercontent.com/p/AF1QipP3S5a0C_tDooxKzXJUd2UiLlcmEYkqjtwCydJq=s680-w680-h510 ",
    titulo: "Pop Vegan",
    subtitulo: "Comida vegana para todos!",
    data: "06/07/2022",
    texto: "Restaurante em Consolação com comida por kilo no almoço e rodízio de pizzas à noite, tudo 100% vegano. Vale muito a pena conhecer :)"
  },
  {
    img: "https://vejasp.abril.com.br/wp-content/uploads/2022/11/Ambiente_7.jpg?quality=70",
    titulo: "Make Hommus. Not War",
    subtitulo: "Só delivery, para curtir em casa!",
    data: "18/08/2022",
    texto: "Neste restaurante não só pode, como é encorajado comer o antepasto como prato principal. Recomendamos os kibes e a kafta bonina."
  },
  {
    img: "https://preprod.vejasp.abril.com.br/wp-content/uploads/2022/06/Churrascada-do-Mar-051-1.jpg-1.jpg?quality=70&strip=info&w=1024",
    titulo: "Churrascada do Mar",
    subtitulo: "Melhor do que estar na praia!",
    data: "30/08/2022",
    texto: "Todos conhecemos e amamos um bom churrasco, mas o que você acha de experimentar um churrasco focado em frutos do mar? Nós gostamos, experimente e nos conte o que você achou!"
  },
 {
    img: "https://i.pinimg.com/originals/f7/b7/d6/f7b7d6b86630272f5c1b5606290e459f.jpg",
    titulo: "Lilóri",
    subtitulo: "Pães, bolos e doces sem glúten e sem lactose",
    data: "30/08/2022",
    texto: "A Lilóri é uma padaria e confeitaria sem glúten e sem lactose. A casa oferece pães, bolos, doces, salgados, tortas, quiches, sanduíches, pizzas, massas, sorvetes e bebidas. O cardápio é assinado pela chef e nutricionista Paula Weber, que também é celíaca. A casa também oferece opções veganas."
  },
]

// add arrayPostagens to main element
const main = document.querySelector('main');
arrayPostagens.forEach(postagem => {
  const article = document.createElement('article');
  article.classList.add('postagem');
  article.innerHTML = `
  <div class="data">${postagem.data}</div>
  <br>
    <h2>${postagem.titulo}</h2>
    <img src="${postagem.img}" alt="${postagem.titulo}">
    <h3>${postagem.subtitulo}</h3>
    <p>${postagem.texto}</p>
  `;
  main.appendChild(article);
}
)
