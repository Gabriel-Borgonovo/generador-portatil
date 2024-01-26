export const scrollEfects = ($header) => {
    window.addEventListener('scroll', () => {
        
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if(scrollTop > 10){
            $header.classList.add('bg-body-tertiary');
        }else{
            $header.classList.remove('bg-body-tertiary');
        }
    })
}