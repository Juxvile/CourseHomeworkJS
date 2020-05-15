// let selectors = document.querySelector("#one");
// for (let element of selectors) {
//     element.addEventListener("click", function () {this.remove("")});
// }

function addElem() {
    let newDiv = document.createElement("div");
    newDiv.id = "one";
    document.querySelector("#block").appendChild(newDiv);
}
// let selectors = document.querySelectorAll("#one");
//
// for (let element of selectors) {
//     element.addEventListener("click", function () {this.remove("")});
// }

document.getElementsByTagName("button")[0].addEventListener("click", addElem);

let removedDiv = document.querySelector("#block");

// function removeElement(event) {
//     removedDiv.removeChild(event.target);
// }
//
// removedDiv.addEventListener("click", event => removedDiv.removeChild(event.target));

function changeCss(event) {
    event.target.style.background = "rgb(156,234,15)";
}
removedDiv.addEventListener("click", changeCss);