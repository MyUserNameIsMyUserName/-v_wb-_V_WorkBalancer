const { performance, PerformanceObserver } = require("perf_hooks")
const axios = require('axios')

const perfObserver = new PerformanceObserver((items) => {
  items.getEntries().forEach((entry) => {
    console.log(entry) // fake call to our custom logging solution
  })
})

perfObserver.observe({ entryTypes: ["measure"], buffer: true })


try {
	performance.mark('swapi-start')
  axios.get('https://swapi.dev/api/people/1/')
} catch(err) {
	console.error(err)
} finally {
	performance.mark('swapi-end')
	performance.measure('https://swapi.dev/api/people/1/', 'swapi-start', 'swapi-end')
}