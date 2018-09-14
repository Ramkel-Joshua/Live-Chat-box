let chatBox = document.querySelector(".chat-box");
let toggleButton = document.querySelector(".chat-header button")
let chatContent = document.querySelector(".chat-content");

toggleButton.addEventListener('click', () => {
  if (chatContent.style.maxHeight){
    chatContent.style.maxHeight = null;
    chatContent.classList.remove('active');
    toggleButton.innerText = "Show"
  } else {
    chatContent.style.maxHeight = (chatContent.scrollHeight + 30) + "px";
    chatContent.classList.add('active');
    toggleButton.innerText = "Hide"
  } 
})

// Outside click
window.addEventListener('click', function(e){   
  if (!chatBox.contains(e.target)){
    chatContent.style.maxHeight = null;
    chatContent.classList.remove('active');
    toggleButton.innerText = "Show"
  }
});

(() => {
  chatContent.style.maxHeight = (chatContent.scrollHeight + 30) + "px";
  chatContent.classList.add('active');
  toggleButton.innerText = "Hide"
})()