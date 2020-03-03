

// window.addEventListener("DOMContentLoaded", (event)=>{
//     function displayfunctionOn(id) {
        
//         var euelement = document.getElementById(id);
//         euelement.style.color="red"
//     }
// });
//     function displayfunctionOff(id){
        
//     }

const eu = document.querySelector("#europe")

eu.addEventListener("mouseover", () => {
    let id = document.querySelector("#europeanCountryes");
    id.style.display = "flex"
});
eu.addEventListener("mouseout", () => {
    let id = document.querySelector("#europeanCountryes");
    id.style.display = "none"
});