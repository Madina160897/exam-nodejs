const btnReg = document.querySelector(".btn-reg");


const BASE_URL = "http://localhost:8080";

const fetchData = async (route) => {
    const response = await fetch(BASE_URL + route);
    return await response.json();
};

btnReg.addEventListener("click", () => {
    const users = fetchData("/emails")
    
    let currentUser = {
        email: document.querySelector(".pOneEmail").value,
        password: document.querySelector(".pOnePassword").value,
    }

    let findUser = users.filter(users => users.email == currentUser.email)
    
    if (!findUser) {
        alert("No user with that email")
        return
    }

    if (findUser.password != currentUser.password) {
        alert("Password is incorrect")
        return
    }
    
    if (findUser && findUser.password === currentUser.password){
        return window.location.href = "./newsline.html"
    }
});

