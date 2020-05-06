// function click2(){
//     document.getElementById("qqq").innerHTML = "start qqq";
// }
//
// function click3(){
//     document.getElementById("qq").innerHTML = "start qq";
// }
//
// document.addEventListener("DOMContentLoaded", function(){
//     document.getElementById("qqq").addEventListener("click", click2);
// })
//
// // let elem = getElementById("qq");
// window.onload = function(){
//     qq.addEventListener("click", click3);
// }
//
// document.getElementById("q").onclick = function () {
//     this.innerHTML = "start";
// }
//
// document.getElementsByClassName("a")

// window.onload = function () {
//     q.addEventListener("click", innerTextForDiv());
// }

// let elem = getElementById ("q");
// q.addEventListener("click", function (elem.innerHTML("fefr"))

// getElementById("q").onclick = function(){
//     alert("djfnbdjfngjdnfjgnjdnfj")
// }

// document.getElementById("a").onclick = function () {
//     alert(" событие по div A");
// }
// document.getElementById("b").onclick = function () {
//     alert(" событие по div B");
//     event.stopPropagation();
// }
// document.getElementById("c").onclick = function () {
//     alert(" событие по div c");
//     event.stopPropagation();
// }
//
// document.getElementById("wd").onclick = function (event) {
//     event.preventDefault();
// }

document.onmousemove = function (event) {
    document.getElementById("rr").innerHTML = event.clientX+ " x " +event.clientY;
    document.getElementById("rr").style.top = event.clientY+ "px";
    document.getElementById("rr").style.left = event.clientX+ "px";
}