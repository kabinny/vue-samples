import 'regenerator-runtime'

function fetchMovies(title) {
  return new Promise(function (resolve, reject) {
    fetch(`https://www.omdbapi.com/?apikey=$$$$=${title}`)
      .then(res => res.json())
      .then(function (res) {
        if (res.Error) {
          reject(res)
        }
        resolve(res)
      })
  })
}
fetchMovies('frozen')
  .then(movies => {
    console.log(movies)
    test()
  })
  .catch(err => {
    console.log(err.Error)
  })
  .finally(() => {
    console.log('Done!')
  })

async function test() {
  try {
    const movies = await fetchMovies('avengers')
    console.log(movies)
  } catch (err) {
    console.log(err.Error)
  } finally {
    console.log('Done!')
  }
}
test()