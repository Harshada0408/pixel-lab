let btns = document.querySelectorAll('.button');
btns.forEach((btn) => {
  btn.onclick = () => {
    document.body.style.backgroundColor = btn.id;
  };
});

// let btn1 = document.querySelectorAll('.button');
// btn1.forEach((funct) => {
//   if (funct.id === 'grey') {
//     funct.onclick = () => {
//       document.body.style.backgroundColor = funct.id;
//     };
//   } else if (funct.id === 'white') {
//     funct.onclick = () => {
//       document.body.style.backgroundColor = funct.id;
//     };
//   }
//   else if (funct.id === 'blue') {
//     funct.onclick = () => {
//       document.body.style.backgroundColor = funct.id;
//     };
//   }
//   else if (funct.id === 'yellow') {
//     funct.onclick = () => {
//       document.body.style.backgroundColor = funct.id;
//     };
//   }
// });


// const buttons = document.querySelectorAll('.button');
// const body = document.querySelector('body');

// buttons.forEach(function (button) {
//   console.log(button);
//   button.addEventListener('click', function (e) {
//     console.log(e);
//     console.log(e.target);
//     if (e.target.id === 'grey') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'white') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'blue') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'yellow') {
//       body.style.backgroundColor = e.target.id;
//     }
    
//   });
// });

