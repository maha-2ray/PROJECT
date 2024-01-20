// document.addEventListener('DOMContentLoaded', function(){
//    let menuOptions = document.querySelector('.menu-option');
//    let menuToggle = document.querySelector('.menu-toggle');

//    menuToggle.addEventListener('click', function(){
//       menuOptions.style.display = (menuOptions.style.display === 'none' || menuOptions.style.display === '')? 'flex' : 'none';
//       alert("The hamburger menu is clicked")
//    });
// });
function toggleMenu(){
   let menuOptions = document.querySelector(".menu-option");
   menuOptions.style.display = (menuOptions.style.display === 'none' || menuOptions.style.display === '')? 'flex' : 'none';
}