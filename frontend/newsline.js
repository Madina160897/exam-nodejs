const postsBlock = document.querySelector(".posts_block");

const BASE_URL = "http://localhost:8080";
const loadData = async () => {
    const responsePosts = await fetch(BASE_URL + "/posts");
    const posts = await responsePosts.json();

    postsBlock.innerHTML = "";

    for (const post of posts) {
        postsBlock.innerHTML += `
        <div class="post-block-box">

                    <div class="img-sn">

                        <div>
                            <img class="img-user" src="./img/png-transparent-computer-icons-user-user-icon.png">
                        </div>

                        <div class="name-sn">
                            <b class="surname-user ml-5"> ${post.user?.surname || ""} </b> <b class="name-user ml-5"> ${post.user?.surname || ""}
                            </b>
                        </div>
                    </div>
                    <div class="post-like">
                        <h2 class="post-title">${post.title}</h2>
                        <div class="post">${post.post}</div>
                        <img class="post-img" src="${post.img}" alt=""> <br>

                        <button class="like"> <img class="acc" src="./img/free-icon-thumb-up-3193028.png"></button>
                    </div>
                </div>
            `;
    }
};
loadData();