const fetch = require('node-fetch') // https://www.npmjs.com/package/node-fetch
const fs = require('fs')

// 吉卜力工作室的电影列表 可能需要梯子
fetch('https://ghibliapi.herokuapp.com/films')
	.then(res => res.json())
	.then(body => { 
			console.log('Processing our list of movies')
			let movieList = ''
			body.forEach(movie => {
				movieList += `${movie['title']}, ${movie['release_date']} \n`
			})

			fs.writeFile('callbackMovies.csv', movieList, err => {
				if (err) {
					console.error(`Could not save the Ghibli movies to a file: ${err}`)
					return
				}
				console.log('Saved our list of movies to callbackMovies.csv')
			})
		}
	)
	.catch(err => console.error(`Could not send request to API: ${err.message}`))


