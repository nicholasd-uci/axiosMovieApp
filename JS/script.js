// Axios CDN - GitHub
// Promise Base Function
document.getElementById('search').addEventListener('click', event => {
    event.preventDefault()
    let title = document.getElementById('title').value

    axios.get(`http://www.omdbapi.com/?t=${title}&apikey=11bc5e4c`)
    .then(res => {
        let movie = res.data
        let movieElem = document.createElement('div')
        movieElem.innerHTML = `

            <center><img src="${res.data.Poster}" alt="${res.data.Title}"></center>
            <h2><center>Movie Title: ${res.data.Title}</center></h2>
            <h3><center>Directed by: ${res.data.Director}</center></h3>
            <center><p>Movie Plot: ${res.data.Plot}</p></center>
            <h3><center>Movie Rating</center></h3>
            <h4><center>${res.data.Metascore}</center></h4>

        `
        document.getElementById('movie').prepend(movieElem)
    })
    .catch( err => { console.log(err) })
})





