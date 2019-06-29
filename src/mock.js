export default {
  mock_recommend(index) {
  	let ls = []
  	for (let i=1; i<6; i++) {
  		ls.push({
  			id: i,
  			info: "mock-information " + i,
  			link: "movie-example-" + (index + 1) + ".png"
  		})
  	}
  	return ls
  },

  mock_like(index) {
  	let ls = []
  	for (let i=1; i<6; i++) {
  		ls.push({
  			id: i,
  			info: "mock-information " + i,
  			link: "movie-example-" + (index + 1) + ".png"
  		})
  	}
  	return ls
  }
}
