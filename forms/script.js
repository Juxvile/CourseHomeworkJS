document.querySelector("name").addEventListener("submit", sbm);

function sbm(e) {
    e.preventDefault();
    alert(getElementById("name").value);
}