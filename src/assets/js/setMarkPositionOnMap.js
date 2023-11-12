export const setMarkPos = () => {
    try {
        const park = document.querySelector('.park');
        const mark = document.querySelector('.park__mark');
        const markOnSchema = document.querySelector('.schema__mark');
        const pathElement = document.querySelectorAll('.schema .schema__img svg path')[27];
        const dialogBox = document.querySelector('.schema__dialog');
        mark.style.left = 793 - (1440 - park.clientWidth) / 2 + 'px';
        window.addEventListener('resize', (e) => {
            mark.style.left = 793 - (1440 - park.clientWidth) / 2 + 'px';
        })
        pathElement.addEventListener('mouseenter', () => {
            markOnSchema.classList.add('schema__mark_active');
            dialogBox.classList.add('dialog-schema_active');
        })
        pathElement.addEventListener('mouseleave', () => {
            markOnSchema.classList.remove('schema__mark_active');
            dialogBox.classList.remove('dialog-schema_active');
        })
        markOnSchema.addEventListener('mouseenter', () => {
            markOnSchema.classList.add('schema__mark_active');
            dialogBox.classList.add('dialog-schema_active');
        })
        markOnSchema.addEventListener('mouseleave', () => {
            markOnSchema.classList.remove('schema__mark_active');
            dialogBox.classList.remove('dialog-schema_active');
        })
    } catch (error) {
        console.log(error)
    }
}