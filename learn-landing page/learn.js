// const hamBurger = document.querySelector('.hamburger');
// const navLists = document.querySelector('.nav-lists');

// hamBurger.addEventListener('click', () => {
//     hamBurger.classList.toggle('active');
//     navLists.classList.toggle('active');
// })
// toggle active class to execute its properties

// document.querySelectorAll('.nav-item').forEach(n => n.addEventListener('click', () =>{
//     hamBurger.classList.remove('active');
//     navLists.classList.remove('active');
// }))

const slider = () => {
  const burger = document.querySelector(".hamburger");
  const navlists = document.querySelector(".nav-lists");

  burger.addEventListener("click", () => {
    navlists.classList.toggle("active");
    burger.classList.toggle("active");
  });
};

slider();



// const userRating = 90;

// if (userRating < 3) {
//   console.log("nigga please!");
// } else if (userRating === 3) {
//   console.log("MEETS EXPECTATION");
// } else {
//   console.log("GREAT JOB NIGGA");
// }

// let highScore = 120;
// let userScore = 140;

// if (userScore >= highScore){
//     console.log(`congrats! you now have the new highscore of ${userScore} `);
//     userScore = highScore
// }
// else{
//     console.log(`oopsy daisy! you could not beat the highscore of ${userScore}`)
// }

// Nesting conditionals

// let password = 'hello buddy';

// if (password.length >= 6){
//     if(password.indexOf (' ') === -1 ){
//         console.log('Valid password!');
//     }
//     else{
//         console.log('really nigga!');
//     }
// }
// else{
//     console.log('Invalid password');
// }

// let password = 'big kala';

// if(password.length >=6 && password.indexOf (' ') === -1){
//     console.log('Valid password')
// }
// else{
//     console.log('invalid password!')
// }


// let userInfo = ['lastname', 'dateOfBirth', 'username', 'firstname' ];
// console.log( indexOf ('userInfo'));


