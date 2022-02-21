// let toggleNavStatus = false;

// let toggleNav = function(){
//     let getSidebar = document.querySelector('.sidebar');
//     let getSidebarlinks = document.querySelectorAll('.sidebar a');

//     if(toggleNavStatus === false){
//         getSidebar.style.visibility = "visible";

//         let arrayLenght = getSidebarlinks.length;
//         for (let i = 0; i < arrayLenght; i++){
//             getSidebarlinks[i].style.opacity = '1';
//         }

//         toggleNavStatus = true;
//     }

//     else if(toggleNavStatus === true){


//         let arrayLenght = getSidebarlinks.length;
//         for (let i = 0; i < arrayLenght; i++){
//             getSidebarlinks[i].style.opacity = '0';
//         }
//         getSidebar.style.visibility = "hidden";
        
//         toggleNavStatus === false;
//     }
// }

// let toggleNav = function(){
//     document.querySelector('.sidebar').style.width="320px"
// }
// let closeNav = function(){
//     document.querySelector('.sidebar').style.width="0px"
// }

let navToggle = document.querySelector('.toggle');
let sidebar = document.querySelector('.sidebar');

navToggle.addEventListener('click',function(){

    if(navToggle.firstElementChild.classList.contains('fa-bars')){
        navToggle.firstElementChild.classList.replace('fa-bars','fa-times');
    }
    else{
        navToggle.firstElementChild.classList.replace('fa-times','fa-bars');
    }
    sidebar.classList.toggle('show-sidebar')
})