// const hamBurger = document.querySelector('.hamburger');
// const navLists = document.querySelector('.nav-lists');

// hamBurger.addEventListener('click', () => {
//     hamBurger.classList.toggle('active');
//     navLists.classList.toggle('active');
// })
// toggle active class to carryout its properties

// document.querySelectorAll('.nav-item').forEach(n => n.addEventListener('click', () =>{
//     hamBurger.classList.remove('active');
//     navLists.classList.remove('active');
// }))
   
const slider = () =>{
    const burger = document.querySelector('.hamburger');
    const navlists = document.querySelector('.nav-lists');
    const navitem = document.querySelectorAll('.nav-item li');


    burger.addEventListener('click', () => {
        navlists.classList.toggle('active')
        burger.classList.toggle('active');
    })

    navitem.forEach((link, index) => {
        console.log('index');
    })
}

slider();