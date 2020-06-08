const axios = require('axios')
const fs = require('fs').promises  // experimental!!
axios.get('https://ghibliapi.herokuapp.com/films')
	.then(res => {
		console.log('Successfully retrieved our list of movies')
		let movieList = ''
		res.data.forEach(movie => {
      movieList += `${movie['title']} \t ${movie['release_date']}\n`
			return fs.writeFile('promiseMovies.csv', movieList)
		})
	})
	.then(() => {
		console.log('Saved our list of movies to promiseMovies.csv')
	})
	.catch((err) => {
    console.error(`Could not save the Ghibli movies to a file: ${err}`)
  })