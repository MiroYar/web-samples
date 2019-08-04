(function (){
    const IMG = document.querySelector('.collpage03__img');
    console.log(IMG, IMG.naturalWidth, 1);
    IMG.onload = () => {
        const EXPOSITION01 = document.querySelector('.collpage03__exposition01');
        EXPOSITION01.style.width = `${IMG.offsetWidth}px`;
        console.log(IMG, IMG.naturalWidth, 2);
    }
})();