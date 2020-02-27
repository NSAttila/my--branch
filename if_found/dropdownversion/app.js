// function check(e) {
//     if (e.target.className != "item") return;
//     this.onmouseout = function(e) {
//       e.target.classList.remove("cool");
//     }
//     e.relatedTarget.classList.remove("cool");
//     e.target.classList.add("cool");
//   }
  
//   let table = document.getElementById("container");
//   table.onmouseover = check;


function myFunction() {
    var element = document.getElementById("myDIV");
  
    if (element.classList) { 
      element.classList.toggle("mystyle");
    } else {
      var classes = element.className.split(" ");
      var i = classes.indexOf("mystyle");
  
      if (i >= 0) 
        classes.splice(i, 1);
      else 
        classes.push("mystyle");
        element.className = classes.join(" "); 
    }
  }

  
  const element = document.querySelector("#headingOne");

element.addEventListener("mouseover", event => {
  console.log("Mouse in");

});

element.addEventListener("mouseout", event => {
  console.log("Mouse out");
});