var body = document.querySelector("body");
var main = document.querySelector("#main");
var bodycolor = function () {
    let color = "#";

    let no;
    let num;
    for (i = 0; i < 6; i++) {
        no = Math.floor(Math.random() * 16);
        num = no.toString(16).toUpperCase();
        color += num;
    }
    return color;
}
var coooo;
main.addEventListener("mouseleave", function () {
    coooo = setInterval(() => {
        body.style.backgroundColor = bodycolor();
        console.log(bodycolor());
    }, 1000);


})
main.addEventListener("mouseover", function () {
    clearInterval(coooo);


})


var timer = 60;
var timinterval;
var time = 0;
var gettimer = document.querySelector("#gettime");
var timeing = function () {
    timinterval = setInterval(() => {
        if (timer > 0) {
            timer--;
            gettimer.textContent = timer;

        }
        else {
            clearInterval(timinterval());
            // if(timer==0){
            document.querySelector("#bubbles").ariaDisabled = "true";
            // }
        }
        
    }, 1000)

}







var hit = 0;
var hiting = function () {
    let mathredom = Math.floor(Math.random() * 10 * 10);
    hit = document.getElementById("getnumber").textContent = mathredom;


}
hiting();


var circle = function () {
    var bhg = "";

    // let mathredom2 = Math.floor(Math.random() * 100);
    
    
    for (i = 0; i < 100; i++) {
        let mathredom1 = Math.floor(Math.random() * 10 * 10);
        
        bhg += '<button class="mmm" style="background-color: red; border-radius: 50%; width: 50px; height: 50px; font-size: 20px;"">' + mathredom1 + '</button> '
        
        // }
    }
    document.querySelector("#bubbles").innerHTML = bhg;

    
    
}
circle();

timeing();

var score = 0
var score_board = document.getElementById("#getscore");
var scoreing = function () {
    
    

    document.querySelector("#bubbles").addEventListener("click", (e) => {

        if (e.target.textContent == hit) {

            score = score + 10;
            document.querySelector("#getscore").textContent = score;
            hiting();
            timeing();
            document.querySelector("#gettime").textContent = 60;
            timer = 60;
            circle();
        }
        else {
            hiting();
            // document.querySelector("#gettime").textContent=60;
            // timer=60;
            // timeing();
        }
    })
}
scoreing();

