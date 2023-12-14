const url = 'http://localhost:3000/users';
const responsePromise = fetch(url);
fetch(request).then((response) => responsePromise);

responsePromise.then ((response) => {
console.log(response)
return response.json()
}).then((users) =>console.log(users));

//fetch(url).then((response) => response.json()).then((users) => {const html = `<p>${users[0].firstName}</p>`; });