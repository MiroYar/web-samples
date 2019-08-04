(function (){
    const IMG = document.querySelector('.collpage03__img');
    const EXPOSITION01 = document.querySelector('.collpage03__exposition01');
    EXPOSITION01.style.width = `${IMG.offsetWidth}px`;
    console.log(IMG, IMG.naturalWidth);
    IMG.onload = () => {
        console.log(IMG, IMG.naturalWidth);
    }
})();