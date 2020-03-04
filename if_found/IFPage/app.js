

// window.addEventListener("DOMContentLoaded", (event)=>{
//     function displayfunctionOn(id) {
        
//         var euelement = document.getElementById(id);
//         euelement.style.color="red"
//     }
// });
//     function displayfunctionOff(id){
        
//     }

const eu = document.querySelector("#europe")
const eucontries = document.querySelector("#europeanCountryes");

eu.addEventListener("mouseover", () => {
    eucontries.style.display = "flex"
    nacontries.style.display = "none"
    // eu.classList = "hovereffect1"
});
eu.addEventListener("setTimeout, mouseout", () => {
    eucontries.style.display = "none"
},1000);
eucontries.addEventListener("mouseover", () => {
    eucontries.style.display = "flex";
    nacontries.style.display = "none"

});
eucontries.addEventListener("mouseout", () => {
    eucontries.style.display = "none"
});

const na = document.querySelector("#northAmericaRegion")
const nacontries = document.querySelector("#northAmerican");

na.addEventListener("mouseover", () => {
    nacontries.style.display = "flex"
    eucontries.style.display = "none"

});
na.addEventListener("setTimeout, mouseout", () => {
    nacontries.style.display = "none"
},4000);
nacontries.addEventListener("mouseover", () => {
    nacontries.style.display = "flex";
    eucontries.style.display = "none"

});
nacontries.addEventListener("mouseout", () => {
    let id = document.querySelector("#europeanCountryes");
    nacontries.style.display = "none"
});