// Your code goes here

const nav = document.querySelector('.main-navigation');
nav.style = "z-index: 1";


const header = document.querySelector('.logo-heading');
  header.addEventListener('click', (event) => {
    header.innerText = "Hover Over Some Objects";
    header.style.color = "blue";
  header.addEventListener('dblclick', (event) =>{
    header.innerText = `Fun Bus`;
  })
});


const uppercontent = document.querySelector('.intro');
uppercontent.addEventListener('click', (event) => {
  uppercontent.style.backgroundColor = 'grey';
  event.stopPropagation();
  uppercontent.addEventListener('dblclick', (event) => {
    uppercontent.style.backgroundColor = 'transparent';
    event.stopPropagation();
  });
});

const uppercontentname = document. querySelector ('.intro h2');
uppercontentname.addEventListener('click', (event) => {
    uppercontentname.innerText = "See What's Inside!";
    event.stopPropagation();
    uppercontentname.addEventListener('dblclick', (event) => {
        uppercontentname.innerText = "Welcome To Fun Bus!";
        event.stopPropagation();
  });
});

const content = document.querySelector('.content-section');
content.addEventListener('mouseover', (event) => {
  content.style = "scale: 1.5; background-color: white; z-index: 1";
  nav.style = "z-index: 2" //increases full section image and text included
  event.stopPropagation();
  content.addEventListener('mouseleave', (event) => {
    content.style = "scale: 1; z-index: 0";
    nav.style = "z-index: 1"
    event.stopPropagation();
  }); //reverts back to normal size
});


const inverse = document.querySelector('.inverse-content');
inverse.addEventListener('mouseover', (event) => {
  inverse.style = "scale: 1.5; background-color: white; z-index: 1";
  nav.style = "z-index: 2"
  event.stopPropagation();
  inverse.addEventListener('mouseleave', (event) => {
    inverse.style = "scale: 1; z-index: 0";
    nav.style = "z-index: 1"
    event.stopPropagation();
  });
});
