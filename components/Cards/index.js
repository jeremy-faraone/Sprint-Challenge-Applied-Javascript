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
const articleMaker = (art) => {
    const card = document.createElement('div')
    const head = document.createElement('div')
    const auth = document.createElement('div')
    const divImage = document.createElement('div')
    const image = document.createElement('img')
    const authName = document.createElement('span')

    card.appendChild(head)
    card.appendChild(auth)
    auth.appendChild(divImage)
    divImage.appendChild(image)
    auth.appendChild(authName)

    card.classList.add('card')
    head.classList.add('headline')
    auth.classList.add('author')
    divImage.classList.add('img-container')

    head.textContent = object.headline
    divImage.src = object.authorImage
    authName = object.authorName

    return card
}
const entryPoint2 = document.querySelector('.cards-container')

axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        console.log('Array of Articles', response.data.articles)
           
        // const boot = response.data.articles.bootstrap
        // const java = response.data.articles.javascript
        // const tech = response.data.articles.technology
        // const jquery = response.data.articles.jquery
        // const node = response.data.articles.node

        response.data.articles.bootstrap.forEach(element => {
    const bootStrap = articleMaker(element)
    entryPoint2.appendChild(bootStrapS)
});

        // // response.data.articles.forEach((article) => {
        // //     const newArtCard = articleMaker(article)
        // //     entryPoint2.appendChild(newArtCard)
        // // })
        // // console.log(node)
        console.log(topics)
    })
    .catch(err => {
        console.log('Uh oh')
    })
    .then(() => {
        console.log('ok')
    })