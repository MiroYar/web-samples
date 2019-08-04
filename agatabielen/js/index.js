const SUBMENU = document.querySelector('.submenu');

(function setBTNOnClick(){
    const SUBMENU_BTNS = SUBMENU.querySelectorAll('.submenu__btn');
    SUBMENU_BTNS.forEach(e => {
        e.onclick = toCollPage;
    });
})();

function toCollPage(){
    selectSubmenuBTN(parseInt(this.textContent, 10) - 1);
    setLengthyDividers(parseInt(this.textContent, 10) - 2, parseInt(this.textContent, 10) - 1);
    ajaxCollPage(`page0${parseInt(this.textContent, 10)}.html`);
}

function selectSubmenuBTN(ind){
    const SUBMENU_BTNS = SUBMENU.querySelectorAll('.submenu__btn');
    SUBMENU_BTNS[ind].classList.add('submenu__btn-selected');
    
    // удалить класс "submenu__btn-selected" на остальных кнопка
    SUBMENU_BTNS.forEach(e => {
        if (e != SUBMENU_BTNS[ind]){
            e.classList.remove('submenu__btn-selected');
        }
    });
}

function setLengthyDividers(beforeInd, afterInd){
    const DIVIDERS = SUBMENU.querySelectorAll('.submenu__divider');
    if (DIVIDERS[beforeInd] != undefined){
        DIVIDERS[beforeInd].classList.add('submenu__divider-lengthy');
    }
    if (DIVIDERS[afterInd] != undefined){
        DIVIDERS[afterInd].classList.add('submenu__divider-lengthy');
    }
    
        // удалить класс "submenu__divider-lengthy" на остальных разделителях
    DIVIDERS.forEach(e => {
        if (e != DIVIDERS[beforeInd] && e != DIVIDERS[afterInd]){
            e.classList.remove('submenu__divider-lengthy');
        }
    });
}

let ajaxCollPage = (src, parent, done) => {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState === 4 && xhr.status === 200) {
			parent.innerHTML = xhr.responseText;
			done();
        }
    });

    xhr.open('GET', src);
    // xhr.overrideMimeType('image/svg+xml');
    xhr.send('');
}