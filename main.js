// loader

let loading = document.querySelector(".load");
window.onload = function(){
loading.style.display = 'none';
textArea.focus()
}



  let no = document.querySelector('.no');
  let textArea = document.querySelector('textarea');
  let tweet = document.querySelector('.tweet');
  

tweet.onclick = function (e){
  e.preventDefault();
  let myInfo = document.createElement('div');
  let image = document.createElement('img');
  let name = document.createElement('p');
  let userName = document.createElement('span');
  let post = document.createElement('div');
  let postText = document.createElement('p');
  let create = document.createElement('div');
  let reacts = document.createElement('div');
  let heart = document.createElement('div');
  let comment = document.createElement('div');
  let retweet = document.createElement('div');
  let share = document.createElement('div');
  let heartIcon = document.createElement('i');
  let commentIcon = document.createElement('i');
  let retweetIcon = document.createElement('i');
  let shareIcon = document.createElement('i');
  
  post.appendChild(postText)
  post.appendChild(reacts);


  heart.className = "tweet-icon hover:text-red-400"
  heartIcon.className="fa-solid fa-heart mr-2 text-lg"
  heart.appendChild(heartIcon)

  comment.className = "tweet-icon hover:text-blue-400"
  commentIcon.className="fa-solid fa-comment mr-2 text-lg"
  comment.appendChild(commentIcon)

  retweet.className = "tweet-icon hover:text-green-400"
  retweetIcon.className="fa-solid fa-retweet mr-2 text-lg"
  retweet.appendChild(retweetIcon)

  share.className = "tweet-icon hover:text-blue-400"
  shareIcon.className="fa-solid fa-share mr-2 text-lg"
  share.appendChild(shareIcon)

  reacts.className = "flex items-center justify-between w-full"
  reacts.appendChild(comment)
  reacts.appendChild(retweet)
  reacts.appendChild(heart)
  reacts.appendChild(share)

  post.className ="pl-8 xl:pl-16 pr-4"
  myInfo.className = "flex p-4 pb-0"
  myInfo.appendChild(image)
  myInfo.appendChild(name)
  image.src = "profile.jpg"
  image.className ="w-9 h-9 rounded-full"
  name.innerHTML = "Esam Elhadi"
  name.appendChild(userName)
  userName.className ="ml-1 text-sm leading-5 text-gray-400"
  userName.innerHTML = "@Esam_Alkhalifa .Now 2"
  name.className = "ml-2 flex flex-shrink-0 items-center font-medium text-gray-800 dark:text-white"
  postText.className = "w-auto font-medium text-gray-800 dark:text-white capitalize"
  postText.innerHTML = textArea.value;
  create.className ="border border-gray-200 dark:border-dim-200 cursor-pointer pb-4 bg-blue-800";
  create.appendChild(myInfo);
  create.appendChild(post);
  textArea.value = '';
  no.appendChild(create);
}
      