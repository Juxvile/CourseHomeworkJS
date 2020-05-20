let currentIndex = 0
let btn1 = document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')
btn1.onclick = () => {
    currentIndex = currentIndex + 1
    const img1 = document.querySelector('.images1');
    const img2 = document.querySelector('.images2');
    const img3 = document.querySelector('.images3');
    [img1, img2, img3].forEach((item) => {
        item.style.display = 'none';
    });
    switch (currentIndex) {
        case 1:
            img1.style.display = 'block';
            break;
        case 2:
            img2.style.display = 'block'
            break;
        case 3:
            img3.style.display = 'block';
            currentIndex = 0;
            break;
    }
};

btn2.onclick = () => {
    currentIndex = currentIndex - 1;
    const img1 = document.querySelector('.images1');
    const img2 = document.querySelector('.images2');
    const img3 = document.querySelector('.images3');
    [img1, img2, img3].forEach((item) => {
        item.style.display = 'none';
    });
    switch (currentIndex) {
        case -1:
            img1.style.display = 'block';
            break;
        case -2:
            img2.style.display = 'block'
            break;
        case -3:
            img3.style.display = 'block';
            currentIndex = 0;
            break;
    }
};








