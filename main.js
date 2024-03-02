const resDiv = document.querySelector('#ltwo');
const ressDiv = document.querySelector('#lone');
const resBtn = document.querySelector('#hope');



resBtn.addEventListener('click', () => {
  getAdvice();
});

window.onload = () => {
  getAdvice();
};



function getAdvice() {

  fetch('	https://api.adviceslip.com/advice').then(response => {
    return response.json();
  }).then(adviceData => {
    const Adviceobj = adviceData.slip;
    resDiv.innerHTML = `<p>${Adviceobj.advice}</p>`;
    ressDiv.innerHTML = `<p>${"ADVICE #"+Adviceobj.id}</p>`;

  }).catch(error => {
    console.log(error);
  });

}