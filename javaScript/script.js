'use strict';

const login = document.getElementById('login'),
    signIn = document.getElementById('sign-in'),
    times = document.getElementById('times'),
    timesIn = document.getElementById('times-in'),
    body = document.querySelector('body'),
    loginContainer = document.querySelector('.login-container'),
    loginContainerup = document.querySelector('.login-container-up');

/** ------------------------------------------------------------------------------ Login ------------------------------------------------------------------------------- */


login.addEventListener('click', (event) => {
    event.preventDefault();
    body.style.overflow = 'hidden';
    loginContainer.style.display = 'flex'
})

times.onclick = (event) => {
    event.preventDefault();
    body.style.overflow = 'auto';
    loginContainer.style.display = 'none'
}

/** ------------------------------------------------------------------------------Sign In ------------------------------------------------------------------------------- */

signIn.addEventListener('click', (event) => {
    event.preventDefault();
    body.style.overflow = 'hidden';
    loginContainerup.style.display = 'flex'
})


timesIn.addEventListener('click', (event) => {
    event.preventDefault();
    body.style.overflow = 'auto';
    loginContainerup.style.display = 'none'
})

// --------------------------------------------------------------------------------navbar ----------------------------------------------------------------------------------

// const navbar = document.querySelector('.navbar');

// window.addEventListener('scroll', (event) => {
//     navbar.classList.toggle(
//         "navbar-active",
//         event.path[event.path.length - 1].scrollY > 100
//     )
// })


// --------------------------------------------------------------------------------cart shop ---------------------------------------------------------------------------------

const cartShopping = document.querySelectorAll('#cart-shop'),
    paragraph = document.getElementById('paragraph'),
    shoppingGroup = document.getElementById('shopping-group');

let i = 0;

cartShopping.forEach((cartShop) => {
    cartShop.addEventListener('click', () => {
        if (confirm("Siz haqiqatdan ham bu maxsulotni sotib olmoqchimisiz?")) {
            i++;
            paragraph.innerHTML = i;
        }

        shoppingGroup.onclick = () => {
            if (i > 0) {
                if (confirm("Siz haqiqatdan ham bu maxsulotni bekor qilmoqchimisiz?")) {
                    if (i >= 1) {
                        i--;
                        paragraph.innerHTML = i;
                    } 
                }
            } else (
                alert("Siz barcha xaridlaringizni bekor qildingiz iltimos qaytadan xarid qiling!")
            )
        }
    })
});

//------------------------------------------------------------------------------img-slider---------------------------------------------------------------------------------


const boxItemOne = document.getElementById('box-item-one-t'),
    imgIdOne = document.getElementById('img-id-one-hun');

boxItemOne.addEventListener('click', function () {
    imgIdOne.src = '/image/today deal/Rectangle 34.png';
    imgIdOne.style.width = "60%"
})


//---------------------------------------------------------------------------------local-storage------------------------------------------------------------------------------

 
imgIdOne.onclick = () => {
   localStorage.setItem(`image =>`, `${boxItemOne.innerHTML}`)
}

const bodyImage = document.querySelectorAll('body img');

bodyImage.forEach((imageGroup, index) => {
    imageGroup.addEventListener('click', () => {
        for (let i = 0; i < bodyImage.length; i++) {
            
        }
    })
})