let bntAdd = document.querySelector('button');
let table = document.querySelector('table');

let nameInput = document.querySelector('#name');
let ageInput = document.querySelector('#age');
let countryInput = document.querySelector('#country');

// nameInput.onblur = function(){
//     Validate(this)
// }
// nameInput.onkeyup = function(){
//     Validate(this)
// }
// nameInput.onkeydown = function(){
//     Validate(this)
// }
// btnAdd.addEventListener("click", function(e){
//     e.preverDefault();
//     Validate(this.previousElementSibling.children[1]);
// })

// function Validate(elem){
//     if(elem.value.trim() == ""){
//         elem.nextElementSibling.classList.remove("d-none");
//     }
//     else{
//         elem.nextElementSibling.classList.add("d-none")
//     }
// }






bntAdd.addEventListener('click',() =>{
    let name = nameInput.value;
    let age = ageInput.value;
    let country = countryInput.value;

    let template = `
        <tr>
            <td>${name}</td>
            <td>${age}</td>
            <td>${country}</td>
        </tr>
    `;
    table.innerHTML += template;
});
