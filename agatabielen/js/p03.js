(function (){
    const IMG = document.querySelector('.collpage03__img');
    const EXPOSITION01 = document.querySelector('.collpage03__exposition01');
    EXPOSITION01.style.width = `${IMG.offsetWidth}px`;
    IMG.onload = () => {
        EXPOSITION01.style.width = `${IMG.offsetWidth}px`;
    }
})();