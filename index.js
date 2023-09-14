let box = document.querySelectorAll(".box");
let box2 = document.querySelectorAll(".box2");
const body = document.querySelector("body");

box.forEach(function(elm){


elm.addEventListener("click",function(e){

    body.style.backgroundColor = e.target.id;
     
})

})

box2.forEach(function(elm){


    elm.addEventListener("mouseover",function(e){
    
        body.style.backgroundColor = e.target.id;
         
    })
    
    })


