export const openCloseModal = () => {
    try {
        const body = document.querySelector('body');
        const modal = document.querySelector('.modal');
        const close = document.querySelector('.modal__close');
        const btns = document.querySelectorAll('.btn-modal');

        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                openModal();
            })
        })
        close.addEventListener('click', () => {
            closeModal();
        })
        window.addEventListener('resize', () => {
            closeModal();
        })

        function closeModal() {
            modal.classList.remove('modal_active');
            body.style.overflow = 'visible';
            body.style.marginRight = 'unset';
        }
        function openModal() {
            modal.classList.add('modal_active');
            body.style.overflow = 'hidden';
            body.style.marginRight = removeTwitching() + 'px';
        }
        function removeTwitching() {
            let div = document.createElement('div');
            div.style.visibility = 'none';
            div.style.opacity = '0';
            div.style.width = '50px;';
            div.style.height = '50px;';
            div.style.overflow = 'scroll';
            body.appendChild(div);
            let offset = div.offsetWidth - div.clientWidth;
            div.remove();
            return offset;
        }
    } catch (error) {
        console.log(error)
    }
}