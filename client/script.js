
const url = 'http://localhost:3000';

document.createElement(ul)

fetch(url + '/users')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      data.forEach(user => {
      })
});
