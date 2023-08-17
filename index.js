// sidebar
const menuItems = document.querySelectorAll('.menu-item');



// message
const MessageNotification = document.querySelector(
    '#messages-notifiaction'
);

const messages = document.querySelector('.messages')

const message = document.querySelectorAll('.message');
const messageSearch = document.querySelector('#search-message')

// theme
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span')
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');

// sidebar======================================================
// remove active after click on another
const changeActiveClass = () => {
    menuItems.forEach(item => {
        item.classList.remove("active")
    })
}

// put side bar active on click 
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveClass();
        item.classList.add("active")
        // notification popup
        if ((item.id != 'notification')) {
            document.querySelector('.notificaton_popup').style.display = 'none';
        } else {
            // displaying notifications
            document.querySelector('.notificaton_popup').style.display = 'block';
            // removing notification counts
            document.querySelector('#notification .notification-count').style.display = 'none';

        }
    })
})

// message=============================================

// highlight on click of message 
MessageNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';

    setTimeout(() => {
        messages.style.boxShadow = "none";
        document.querySelector('#messages-notifiaction .notification-count').style.display = 'none';
    }, 2000)
})

// search chat

const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            user.style.display = 'flex'
        } else {
            user.style.display = 'none'
        }
    })
}

messageSearch.addEventListener('keyup', searchMessage)


// THEME customizatiom===========================================

// open model
const openThemeModal = () => {
    themeModal.style.display = 'grid';

}

// close model
const closeThemeModel = (e) => {
    if (e.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none'
    }
}

themeModal.addEventListener('click', closeThemeModel)

theme.addEventListener('click', openThemeModal)

// font model

// remove active class from font changer
const removeSizeSelctor = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active')
    })
}

fontSizes.forEach(size => {

    size.addEventListener('click', () => {

        removeSizeSelctor();
        let fontSize;
        size.classList.toggle('active');

        if (size.classList.contains('font-size-1')) {
            fontSize = '10px';
            root.style.setProperty('----sticky-top-left', '5.4rem')
            root.style.setProperty('----sticky-top-right', '5.4rem');
        } else if (size.classList.contains('font-size-2')) {
            fontSize = '13px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '-7rem');
        } else if (size.classList.contains('font-size-3')) {
            fontSize = '16px';
            root.style.setProperty('----sticky-top-left', '-2rem');
            root.style.setProperty('----sticky-top-right', '-17rem');
        } else if (size.classList.contains('font-size-4')) {
            fontSize = '19px';
            root.style.setProperty('----sticky-top-left', '-5rem');
            root.style.setProperty('----sticky-top-right', '-25rem');
        } else if (size.classList.contains('font-size-5')) {
            fontSize = '22px';
            root.style.setProperty('----sticky-top-left', '-10rem');
            root.style.setProperty('----sticky-top-right', '-53rem');
        }

        // chnage font of the root html elemet
        document.querySelector('html').style.fontSize = fontSize;
    })


})

// color cutomize
// remove offclick color active
const changeActiveColor = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active')
    })
}



colorPalette.forEach(color => {
    color.addEventListener('click', () => {

        let primary;

        changeActiveColor();
        if (color.classList.contains('color-1')) {
            primaryHue = 252;
        } else if (color.classList.contains('color-2')) {
            primaryHue = 52;
        } else if (color.classList.contains('color-3')) {
            primaryHue = 352;
        } else if (color.classList.contains('color-4')) {
            primaryHue = 152;
        } else if (color.classList.contains('color-5')) {
            primaryHue = 202;
        }
        color.classList.add('active');

        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})


// customizing the theme of background changer

let lightColorBrightness;
let whiteColorBrightness;
let darkColorBrightness;

const chnageBg = () => {
    root.style.setProperty('--light-color-brightness', lightColorBrightness);
    root.style.setProperty('--white-color-brightness', whiteColorBrightness)
    root.style.setProperty('--dark-color-brightness', darkColorBrightness)

}

Bg1.addEventListener('click', () => {
    //add active class
    Bg1.classList.add('active')
    // remove active clas
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    // remove customize chnages from local
    window.location.reload();
})

Bg2.addEventListener('click', () => {
    darkColorBrightness = '95%';
    whiteColorBrightness = '20%';
    lightColorBrightness = '15%';

    // add active clas
    Bg2.classList.add('active');

    // remove it from active
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    chnageBg();
})

Bg3.addEventListener('click', () => {
    darkColorBrightness = '95%';
    whiteColorBrightness = '10%';
    lightColorBrightness = '0%';

    // add active clas
    Bg3.classList.add('active');

    // remove it from active
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    chnageBg();
})