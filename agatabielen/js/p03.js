(function (){
    const IMG = document.querySelector('.collpage03__img');
    IMG.onload = () => {
        const EXPOSITION01 = document.querySelector('.collpage03__exposition01');
        EXPOSITION01.style.width = `${IMG.offsetWidth}px`;
    }
})();