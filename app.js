//using selectors inside the element
// traversing the dom
const btns = document.querySelectorAll('.question-btn');

btns.forEach(function(btn){
  btn.addEventListener('click', function(e){
    const target = e.currentTarget
    target.parentElement.parentElement.classList.toggle("show-text")
  })
})
