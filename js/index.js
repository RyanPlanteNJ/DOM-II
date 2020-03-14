// Your code goes here

const nav = document.querySelector('.main-navigation');
nav.style = "z-index: 1";

const navlinks = document.querySelectorAll('.nav-link');

navlinks.forEach(el => {
  el.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
  });
});


const ricky = document.getElementsByTagName('img');
  window.addEventListener('keypress', (event) => {
    console.log(event.keyCode);
  });

const header = document.querySelector('.logo-heading');
  header.addEventListener('click', (event) => {
    header.innerText = "Hover Over Some Objects";
    header.style.color = "blue";
  header.addEventListener('dblclick', (event) =>{
    header.innerText = `Fun Bus`;
    header.style.color = "black";
  })
});


const uppercontent = document.querySelector('.intro');
uppercontent.addEventListener('mouseenter', (event) => {
  uppercontent.style.backgroundColor = 'grey';
  event.stopPropagation();
  uppercontent.addEventListener('mouseleave', (event) => {
    uppercontent.style.backgroundColor = 'transparent';
    event.stopPropagation();
  });
});

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
  inverse.style = "scale: 1.5; background-color: white; z-index: 1; transition: .3s";
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
