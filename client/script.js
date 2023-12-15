
const url = 'http://localhost:3000';

fetch(url + '/users')
    .then(res => res.json())
    .then(data => {
      console.log(data)

    const user_ul = document.createElement("ul");
    data.forEach(user => {
        const user_li = document.createElement('li');
        user_li.innerHTML = `<p> ${user.firstName} ${user.lastName} <br> ${user.username} </p>`;
        user_ul.appendChild(user_li);

        user_li.style.backgroundImage = `linear-gradient(to right, ${user.color}, white)`;
        user_li.style.padding = "1px 1px 1px 15px";
        user_li.style.border = "solid black 2px";
        user_li.style.marginBottom = "3px";
       
      })
      
    document.body.appendChild(user_ul);}
);


