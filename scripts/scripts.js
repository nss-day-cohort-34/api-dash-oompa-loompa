fetch('https://jsonplaceholder.typicode.com/photos')
  .then(response => response.json())
  .then(json => console.table(json))

// Todo Create a place to inject the HTML within the <body> tag
const whereToDisplayTheImages = document.querySelector("#image-container");


// todo Create an HTML representation of the data
const createPhotoComponent = (title, thumbnail) => {
    return `
        <section class="photos">
            <h1 class="title">${title}</h1>
            <a href="${thumbnail}" class="thumbnail">link text</a>
        </section>   `
};


// todo Invoke the function 
// todo Inject the HTML
photos.forEach(photo => {
    const htmlRepresentation = createPhotoComponent(photo.title, photo.thumbnail)
    whereToDisplayTheImages.innerHTML += htmlRepresentation

    });