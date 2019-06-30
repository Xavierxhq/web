export default {
  mock_recommend() {
  	let ls = []
  	for (let i=1; i<26; i++) {
      let _example_idx = Math.floor(Math.random() * 8) + 1
  		ls.push({
  			id: i,
  			info: "mock-information " + i,
  			link: "movie-example-" + (_example_idx) + ".png"
  		})
  	}
  	return ls
  },

  mock_like() {
  	let ls = []
  	for (let i=1; i<6; i++) {
      let _example_idx = Math.floor(Math.random() * 8) + 1
  		ls.push({
  			id: i,
  			info: "mock-information " + i,
  			link: "movie-example-" + (_example_idx) + ".png"
  		})
  	}
  	return ls
  },

  mock_history() {
    let ls = []
    for (let i=1; i<101; i++) {
      let _example_idx = Math.floor(Math.random() * 8) + 1
      ls.push({
        id: i,
        info: "mock-history " + i,
        link: "history-" + (_example_idx) + ".png"
      })
    }
    return ls
  },
}
