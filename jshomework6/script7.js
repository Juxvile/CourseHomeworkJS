let pc = document.querySelector(".pc");

pc.addEventListener("click", (e) => {
    let disk = e.target.children[2];
    disk.classList.toggle("hidden");
});

pc.onmo