(function (){
    const IMG = document.querySelector('.collpage03__img');
    const EXPOSITION01 = document.querySelector('.collpage03__exposition01');

    // Если изображение имеется в кэше, то ширина текста под изображением установится
    // по ширине этого изображения и событие "onload" не сработает,
    // иначе установится значение "0" пока изображение загружается.
    EXPOSITION01.style.width = `${IMG.offsetWidth}px`;

    // Если изображения нет в кеше, то после загрузки изображения сработает событие "onload"
    // и изменит значение ширины текста под изображением с "0" на величину ширины изображения.
    IMG.onload = () => {
        EXPOSITION01.style.width = `${IMG.offsetWidth}px`;
    }
})();