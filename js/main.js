let image = document.querySelector(".landing .images-slider .image");
let left = document.querySelector(".landing .images-slider .left");
let right = document.querySelector(".landing .images-slider .right");
let navigationUL = document.querySelector(".landing .images-slider ul");

const maxValue = 5;
let currentValue = 1;

function changeImage() {
  image.style.backgroundImage = `url("../asset/images/${currentValue}.jpg")`
}

function removeActive() {
  navigationLIs.forEach((li) => li.classList.remove('active'))
}

function validatePosition(){
  left.classList.remove('disable')
  right.classList.remove('disable')
  if(currentValue == 1 || currentValue == maxValue){
    currentValue == 1 ? left.classList.add('disable') : right.classList.add('disable')
  }
  
  changeImage(currentValue);
  removeActive();
  navigationLIs[currentValue - 1].classList.add('active');
}

function createNavigationLI(i) {
  let li = document.createElement('li')
  li.setAttribute(`data-num`, i);
  return li;
}

function createNavigationUL(j) {
  for (let i = 1; i <= j; i++) {
    let li = createNavigationLI(i)
    navigationUL.appendChild(li)
  }
}

createNavigationUL(maxValue);

let navigationLIs = document.querySelectorAll(".landing .images-slider ul li")
navigationLIs[0].classList.add('active')

for (let i = 0; i < navigationLIs.length; i++) {
  navigationLIs[i].addEventListener('click', navigationLIsClick)
}
function navigationLIsClick(e) {
  currentValue = parseInt(e.target.getAttribute('data-num'));
  validatePosition()
}


left.addEventListener('click', leftClick)
function leftClick() {
  if(currentValue>=2){
    currentValue--;
    validatePosition();
  }
}

right.addEventListener('click', rightClick)
function rightClick() {
  if (currentValue <= maxValue-1) {
    currentValue++;
    validatePosition();
  }
}

document.onkeydown = checkKey;
function checkKey (e){
  // 722 => 100vh on my screen
  if (window.scrollY < 722){
    if (e.key == 'ArrowRight') {
      rightClick()
    }
    if (e.key == 'ArrowLeft') {
      leftClick()
    }
  }
}