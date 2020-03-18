// Your code goes here

//just keeps the nap on top
const nav = document.querySelector('.main-navigation');
nav.style = "z-index: 1";

//stopPropagation and preventDefault
const navlinks = document.querySelectorAll('.nav-link');
navlinks.forEach(el => {
  el.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
  });
});

//never gonna give you up gif on keypress
const ricky = document.querySelector('img');
  window.addEventListener('keypress', (event) => {
    if (event.keyCode == 112) {
      ricky.src = 'img/rick.gif';
      event.stopPropagation();
    } else{
      ricky.src = 'img/fun-bus.jpg';
    }
  });

//just adding drag to the image
  ricky.addEventListener('drag', (event) => {
    event.target.style = 'scale: 2; opacity: .3; transition: .5s'
  })
  ricky.addEventListener('dragend', (event) => {
    event.target.style = 'scale: 1; opacity: 1; transition: .5s'
  })


//click and dblclick
const header = document.querySelector('.logo-heading');
header.addEventListener('click', (event) => {
    header.innerText = 'Hover Over Some Objects';
    header.style.color = 'blue';
  });
header.addEventListener('dblclick', (event) => {
    header.innerText = 'Fun Bus';
    header.style.color = 'black';
});

//another keypress to change header
window.addEventListener('keypress', (event) => {
    if (event.keyCode == 110) {
      header.innerText = 'Never Gonna Give You Up';
      event.stopPropagation();
    } else {
      header.innerText = 'Fun Bus';
    }
  });

//mouse enter nad mouse leave on both sections
const uppercontentname = document. querySelector ('.intro h2');
uppercontentname.addEventListener('mouseenter', (event) => {
    uppercontentname.innerText = "See What's Inside!";
    event.stopPropagation();
    uppercontentname.addEventListener('mouseleave', (event) => {
        uppercontentname.innerText = "Welcome To Fun Bus!";
        event.stopPropagation();
  });
});

const content = document.querySelectorAll('.content-section');
content.forEach( el => {
  el.addEventListener('mouseover', (event) => {
    el.style = "scale: 1.5; background-color: white; z-index: 1; transition: .3s";
    nav.style = "z-index: 2" //increases full section image and text included
    event.stopPropagation();
  });
  el.addEventListener('mouseleave', (event) => {
    el.style = "scale: 1; z-index: 0; transition: .3s";
    nav.style = "z-index: 1"
    event.stopPropagation();
  }); //reverts back to normal size
});


const inverse = document.querySelector('.inverse-content');
inverse.addEventListener('mouseover', (event) => {
  inverse.style = "scale: .5; background-color: white; z-index: 1; transition: .1s";
  nav.style = "z-index: 2";
  event.stopPropagation();
  inverse.addEventListener('mouseleave', (event) => {
    inverse.style = "scale: 1; z-index: 0; transition: .3s";
    nav.style = "z-index: 1";
    event.stopPropagation();
  });
});

const destination = document.querySelector('.content-destination');
destination.addEventListener('mouseover', (event) => {
  destination.style = "scale: 1.5; background-color: white; z-index: 1; transition: .3s";
  nav.style = "z-index: 2"
  event.stopPropagation();
  destination.addEventListener('mouseleave', (event) => {
    destination.style = "scale: 1; z-index: 0; transition: .3s";
    nav.style = "z-index: 1"
    event.stopPropagation();
  });
});


const astley = document.querySelectorAll('.btn');
console.log(astley);
for (let i = 0; i < astley.length; i++) {
  astley[i].addEventListener('click', (event) => {
    if (event.target === astley[0]) {
      if (astley[0].innerText == 'Sign Me Up!') {
            astley[0].textContent = "Never Gonna Let You Down";
      } else {
        astley[0].textContent = "Sign Me Up!";
      }
    } else if (event.target === astley[1]) {
			if (astley[1].textContent == 'Sign Me Up!') {
				astley[1].textContent = 'Never Gonna Turn Around';
			} else {
				astley[1].textContent = 'Sign Me Up!';
			}
		} else {
			if (astley[2].textContent == 'Sign Me Up!') {
				astley[2].textContent = "And Desert You";
			} else {
				astley[2].textContent = 'Sign Me Up!';
			}
		}
  });
}
