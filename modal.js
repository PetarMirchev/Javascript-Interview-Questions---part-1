// Question 7 - Create Modal which closes by clicking on negative space?


const container =  document.querySelector(".modalContainer");
const button = document.querySelector(".modalButton");


//open modal window box
button.addEventListener("click", () => {
    toggleModal(true);
});




function toggleModal(toggle) {
    //if 'toggle' is true show the box "flex", else is hidden 'display: none'
    container.style.display = toggle ? "flex" : "none";   //css --> .modalContainer --> display: none;
};


//close modal box window only on click on gray background/"modalContainer" (or icon 'X'...)
container.addEventListener("click", (e) => {
    if (e.target.className === "modalContainer"){
        toggleModal(false);
    }   
});