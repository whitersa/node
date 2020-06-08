const axios = require('axios')
const fs = require('fs').promises  // experimental!!

saveMovies = async () => {
	try {	
		let res = await axios.get('https://ghibliapi.herokuapp.com/films')
		let movieList = ''
		res.data.forEach(movie => {
			movieList += `${movie['title']} \t ${movie['release_date']}\n`
		})
		await fs.writeFile('asyncAwaitMovies.csv', movieList)
	} catch (err) {
		console.error(`Could not save the Ghibli movies to a file: ${err}`)
	}
}

saveMovies()