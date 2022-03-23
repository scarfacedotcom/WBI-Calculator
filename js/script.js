// function calcBodyMassIndex() {
//   let weight = Number(document.getElementById("weight").value)
//   let height = Number(document.getElementById("height").value)

//   if(weight || height > 0) {
//     result = weight / (height**2);
//     document.getElementById('result').innerHTML = result;
//   } else if (weight || height < 0) {
//     console.log('Invalid Input')
//   }
// }

function calcBodyMassIndex() {
  let weight = Number(document.getElementById("weight").value)
  let height = Number(document.getElementById("height").value)

  let result = weight / (height**2);
  let result1 = weight / (height**2);

  if(!isNaN(result)){
    document.getElementById("result").innerHTML = result;
    if (result1 < 0){
      console.log('Invalid Input');
      // document.getElementById("status").innerHTML = "Underweight";

    }
    else if(result > 0 && result < 18.5){
        document.getElementById("status").innerHTML = "Underweight";
    }
    else if(result < 25){
        document.getElementById("status").innerHTML = "Healthy, Kudos";
    }
    else if(result < 30){
        document.getElementById("status").innerHTML = "Overweight";
    }
    else{
        document.getElementById("status").innerHTML = "Obese Please try and see Doctor";
    }
}

}




// Get DOM Elements
const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');

// Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  modal.style.display = 'block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}