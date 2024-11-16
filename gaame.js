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
        }

    }, 1000)

}
    

timeing();



let mathredom = Math.floor(Math.random() * 10 * 10);


var hit = 0;
var hiting = function () {
    hit = document.getElementById("getnumber").textContent = mathredom;


}
hiting();


var bhg = "";
var circle = function () {

    // let mathredom2 = Math.floor(Math.random() * 100);


    for (i = 0; i < 108; i++) {
        let mathredom1 = Math.floor(Math.random() * 10 * 10);
        // if (i = mathredom2) {
        //     bhg += '<button  style="background-color: red; border-radius: 50%; width: 50px; height: 50px; font-size: 20px;"">' + hit + '</button> '
        // }
        // else {
            // let mathredom1 = Math.floor(Math.random() * 10*10);
            bhg += '<button  style="background-color: red; border-radius: 50%; width: 50px; height: 50px; font-size: 20px;"">' + mathredom1 + '</button> '

        // }
    }
    document.querySelector("#bubbles").innerHTML = bhg;



}
circle();


var score = 0
var score_board = document.getElementById("#getscore");
var scoreing = function () {
    
    
    
        document.querySelector("#bubbles").addEventListener("click", (e) => {
    
            if (e.target.textContent = hit) {
    
                score = score + 10;
                hiting();
                document.querySelector("#getscore").textContent=score;
                timeing();
            }
            else {
                hiting();
                timeing();
            }
        })
}
scoreing();



