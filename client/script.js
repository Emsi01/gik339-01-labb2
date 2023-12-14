
const url = 'http://localhost:3000/users';
const responsePromise = fetch(url);

responsePromise.then((response) => {
    console.log(response);
    return response.json();
})
.then((users) => console.log(users));
