// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

function articleMaker(artData) {
    const card = document.createElement("div")
    const head = document.createElement("div")
    const author = document.createElement("div")
    const imgBox = document.createElement("div")
    const image = document.createElement("img")
    const name = document.createElement("span");

    card.appendChild(head);
    card.appendChild(author);
    author.appendChild(imgBox);
    imgBox.appendChild(image);
    author.appendChild(name);

    card.classList.add("card");
    head.classList.add("headline");
    author.classList.add("author");
    imgBox.classList.add("img-container");

    head.textContent = artData.headline;
    image.src = artData.authorPhoto;
    name.textContent = artData.authorName;

    return card;
}

let articleCard = document.querySelector(".cards-container");

axios.get("https://lambda-times-backend.herokuapp.com/articles")
    // .then(response => {
    //         console.log('Array of Articles', response.data.articles)
    //     })
    .then(response => {
        response.data.articles['bootstrap'].forEach(data =>{
            articleCard.appendChild(articleMaker(data))
        });
        response.data.articles['javascript'].forEach(data =>{
            articleCard.appendChild(articleMaker(data))
        });
        response.data.articles['jquery'].forEach(data =>{
            articleCard.appendChild(articleMaker(data))
        });
        response.data.articles['node'].forEach(data =>{
            articleCard.appendChild(articleMaker(data))
        });
        response.data.articles['technology'].forEach(data =>{
            articleCard.appendChild(articleMaker(data))
        })
    });