// Your code goes here

const header = document.querySelector('.logo-heading');
  header.addEventListener('click', (event) => {
    header.innerText = "Hover Over Some Objects";
  header.addEventListener('keypress', (event) =>{
    header.innerText = `You pressed ${input}`
  })
});


const uppercontent = document.querySelector('.intro');
uppercontent.addEventListener('click', (event) => {
  uppercontent.style.backgroundColor = 'grey';
  uppercontent.addEventListener('dblclick', (event) => {
    uppercontent.style.backgroundColor = 'transparent';
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
content.addEventListener('mouseover', function() {
  document.querySelector('.content-section').style = "scale: 1.5; background-color: white; z-index: 1;"; //increases full section image and text included
  content.addEventListener('mouseleave', function(){
    document.querySelector('.content-section').style = "scale: 1; z-index: -1";
  }); //reverts back to normal size
});


const inverse = document.querySelector('.inverse-content');
inverse.addEventListener('mouseover', function () {
  document.querySelector('.inverse-content').style = "scale: 1.5; background-color: white; z-index: 1";
  inverse.addEventListener('mouseleave', function () {
    document.querySelector('.inverse-content').style = "scale: 1; z-index: -1";
  });
});
