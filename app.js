const form = document.querySelector('#formSearch');
form.addEventListener('submit', async function(e){
    e.preventDefault();
    const data = form.elements.query.value;
    const search = await axios.get(`https://api.tvmaze.com/search/shows?q=${data}`)
    makeImages(search.data);
});

const makeImages = (shows) => {
    console.log(shows)
    for (let movie of shows) {
        if (movie.show.image) {
            const img = document.createElement('img')
            img.src = `${movie.show.image.medium}`;
            const fig = document.createElement('figure')
            fig.append(img)
            const figCap = document.createElement('figCaption')
            figCap.innerText = `${movie.show.name}`;
            fig.append(figCap)
            const li = document.createElement('li')
            li.append(fig)
            const ul = document.querySelector('#ul')
            ul.append(li)
        }
    }
};