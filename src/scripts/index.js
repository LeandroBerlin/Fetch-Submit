// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
import "babel-polyfill";


// \/ All of your javascript should go here \/
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const message = document.getElementById("message");
const checkbox = document.getElementById("checkbox");
const form = document.querySelector("form");

// Non Async:
/* form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    const user = {
        name: name.value,
        email: email.value,
        password: password.value,
        message: message.value,
        checkbox: checkbox.checked,
    }

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(user),
    })
        .then(response => response.json())
        .then(result => {
            console.log(result);
            alert(`You submitted \nUser Id:${result.id}`);
        })
        .catch("error");
}); */

// Async
form.addEventListener("submit", async (e) => {
    e.preventDefault(); 
    try {
        const postedUser = await postUser();
        alert(`You posted a new User\nUserID: ${postedUser.id}`)
        console.log(postedUser);
    } catch (err) {
        console.warn("Error:", err);
    }
});

const postUser = async () => {
    const user = {
        name: name.value,
        email: email.value,
        password: password.value,
        message: message.value,
        checkbox: checkbox.checked,
    } 
    try {
        const data = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(user),
        });
        return data.json();
    } catch (err) {
        console.warn("Error:", err);
    }
};


