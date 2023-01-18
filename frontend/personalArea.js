const porsBlock = document.querySelector(".pors_block");

const BASE_URL = "http://localhost:8080";

const fetchData = async (route) => {
    const response = await fetch(BASE_URL + route);
    return await response.json();
};

const drawUser = async () => {

    const user = JSON.parse(localStorage.getItem('user'))

    porsBlock.innerHTML = "";

    porsBlock.innerHTML = `
        <div class="area-info">
            <img class="per-img" src="./img/png-transparent-computer-icons-user-user-icon.png">
            <div class="per-info">
                <div>
                    <b class="user-info pThreeSurname">${user.surname}</b> <b class="user-info pThreeName">${user.name}</b>
                </div>
            <p class="pThreeAge">Возраст: ${user.age}</p>
            <button class="btn-red-info" onclick="editPro()">Pедактировать данные</button>
            <div class="fon-block">
                <div class="block">
                    <span>Name:</span><br>
                    <input class="newName" type="text"><br>
                    <span>Surname:</span><br>
                    <input class="newSurname" type="text"><br>
                    <span>Age:</span><br>
                    <input class="newAge" type="text"><br>
                    <button onclick="save1()">Save</button><br>
                    <button onclick="close1()">Close</button>
                </div>
            </div>
            </div>
        </div>
    `
};
drawUser()

let div1 = document.querySelector('.fon-block');
let div2 = document.querySelector('.block');
let body = document.querySelector('body');

function editPro() {
    div1.style.display = 'block';
    div2.style.display = 'block';
    div1.style.backgroundColor = "rgb(196, 193, 193, 0.5)";
}

function close1() {
    div1.style.display = 'none';
    body.style.backgroundColor = 'white';
}

function save1() {
    const users = JSON.parse(localStorage.getItem('Users'))
    const user = JSON.parse(localStorage.getItem('user'));
    let pThreeName = document.querySelector(".pThreeName");
    let pThreeSurname = document.querySelector(".pThreeSurname");
    let pThreeAge = document.querySelector(".pThreeAge");
    let newName = document.querySelector(".newName").value;
    let newSurname = document.querySelector(".newSurname").value;
    let newAge = document.querySelector(".newAge").value;

    users.name = (pThreeName.textContent = newName);
    users.surname = (pThreeSurname.textContent = newSurname);
    users.age = (pThreeAge.textContent = newAge);

    for (let i = 0; i < user.length; i++) {
        if (users.email == user[i].email) {
            user[i].name = users.name
            user[i].surname = users.surname
            user[i].age = users.age
        }
    }

    localStorage.setItem("Users", JSON.stringify(users))
    localStorage.setItem("user", JSON.stringify(user))
    div1.style.display = "none";
    
    const userId = user._id

    fetch(BASE_URL + `/emails/${userId}`, {
        method: 'PUT',
        headers: {
         'Content-type': 'application/json; charset=UTF-8' 
        },
        body: JSON.stringify(user)
    })
}