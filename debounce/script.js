// Debounce function
function debounce(callback, delay = 500) {
  let timeoutId;

  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(() => {
      callback.apply(this, args)
    }, delay)
  }
}

// debouce button click
const fire = () => {
  console.log('fired!')
}

const fireDebouced = debounce(fire, 500)

// debounce input value

const handleSearch = (event) => {
  const query = event.target.value
  const searchingStatus = document.getElementById('search-status')
  if (query) {
    searchingStatus.innerHTML = `Searching for ${query}`
    console.log(`searching for ${query}`)
  } else {
    searchingStatus.innerHTML = ''
  }
}

const processSearch = debounce(handleSearch, 500)

const debouncedInput = document.getElementById('search-input')


debouncedInput.addEventListener('input', processSearch)