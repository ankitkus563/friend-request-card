let btn = document.querySelector(".btn");
let istaus = document.querySelector("h2");
console.log(istaus);

let inp = 1 
btn.addEventListener("click",function(){


    if (inp == 1){

        istaus.innerText = "Friend";
        istaus.style.color = "green"
        btn.innerText = "Remove Friend"
        btn.style.backgroundColor = "red"
        inp = 0;
    } else {

        istaus.innerText = "Stranger";
        istaus.style.color = "red"
        btn.innerText = "Add Friend"
        btn.style.backgroundColor = "green"
        inp = 1;
    }

})