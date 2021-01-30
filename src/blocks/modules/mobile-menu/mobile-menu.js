(() => {
    const mobileMenuWrapper = document.querySelector('.mobile-menu');
    const burgerBlock = mobileMenuWrapper.querySelector('.burger');
    const mobileMenuBlock = mobileMenuWrapper.querySelector('.mobile-menu__items');
    const body = document.body;

    if(burgerBlock && mobileMenuBlock) {
        const addVisibility = (open) => {
            if(open) {
                mobileMenuBlock.classList.add('mobile-menu__items_open');
                body.classList.add('no-scroll');
            } else {
                mobileMenuBlock.classList.remove('mobile-menu__items_open');
                body.classList.remove('no-scroll');
            }
        }
    
        burgerBlock.addEventListener('click', function () {
            burgerBlock.classList.toggle('burger-active');
            addVisibility(burgerBlock.classList.contains('burger-active'));
        });
    }

})();
