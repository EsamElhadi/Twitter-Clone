// loader

let loading = document.querySelector(".load");
window.onload = function(){
loading.style.display = 'none';
}




// const textarea = doucment.querySelector('textarea').value();
// const tweet = document.querySelector('.tweet');
// Posts
const posts = 'https://jsonplaceholder.typicode.com/posts/2',
      post = document.querySelector('.post');
fetch(posts)
  .then(response => response.json())
  .then(json =>
    post.innerHTML = json.body
    )

// Photos
const photos = 'https://jsonplaceholder.typicode.com/photos/2',
      photo = document.querySelector('.photo');
fetch(photos)
  .then(response => response.json())
  .then(json =>
    photo.src = json.url
    )
// Users
const users = 'https://jsonplaceholder.typicode.com/users/2',
      myName = document.querySelector('.name'),
      user = document.querySelector('.user');
fetch(users)
  .then(response => response.json())
  .then(json => {
    myName.innerHTML = json.name
    // user.innerHTML = json.username
})

// tweet.onclick = function (){
//     myName.innerHTML = `Esam : ${textarea}`;
// }