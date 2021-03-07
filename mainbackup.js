const doc = document
const dBody = doc.body;

// Footer date

let currentDate = doc.querySelectorAll('.current-date');

const today = new Date();
const date = today.getFullYear();

currentDate.forEach(el => {
    el.innerHTML = '&nbsp' + date + '&nbsp'
});

// Mobile Menu trigger 

let menuTrigger = doc.querySelector('#trigger');

menuTrigger.addEventListener('click', () => {
    if (!dBody.classList.contains('show-mobile-menu')) {
        dBody.classList.add('show-mobile-menu')
    }
    else {
        dBody.classList.remove('show-mobile-menu')
    }
})

// Overlay toggle
let overlay = doc.querySelector('#overlay')

overlay.addEventListener('click', () => {
    dBody.classList.remove('show-mobile-menu')
})

// Search toggle

let search = doc.querySelectorAll('.search')
let searchContainer = doc.getElementById('search-box-container');

search.forEach(el => {
    el.addEventListener('click', (e) => {
        e.stopPropagation();
        dBody.classList.remove('show-mobile-menu')
        if (!dBody.classList.contains('show-search-box')) {
            setTimeout(() => {
                doc.getElementById('search-box').focus();
            }, 200);
        }
        dBody.classList.toggle('show-search-box')
    })
});

window.addEventListener('click', () => {
    dBody.classList.remove('show-search-box')
})

searchContainer.addEventListener('click', (e) => {
    e.stopPropagation();
})


// Account dropdown

let account = doc.getElementById('account')


account.addEventListener('mouseenter', () => {
    account.classList.add('show')
})

account.addEventListener('mouseleave', () => {
    account.classList.remove('show')
})


//// Seperate listner for tablet < devices (in particular ipads/iphone)
let mobileAccount = doc.getElementById('mobile-account')

mobileAccount.addEventListener('click',() => {
    mobileAccount.classList.toggle('show')
})


// Bag dropdown

let bag = doc.querySelectorAll('.bag')

bag.forEach(el => {
    el.addEventListener('mouseenter', () => {
        el.classList.add('show')
    })

    el.addEventListener('mouseleave', () => {
        el.classList.remove('show')
    })
});

// Close banner

let banner = doc.querySelector('.banner')
let bannerClose = doc.querySelector('.close-banner')

bannerClose.addEventListener('click', () => {
    banner.remove()
})

// Sign up checkbox

let signUp = doc.getElementById('sign-up')
let signUpCheckbox = doc.getElementById('email-results-checkbox')

signUp.addEventListener('click', () => {
    if (signUpCheckbox.checked) {
        signUpCheckbox.checked = false
    }
    else {
        signUpCheckbox.checked = true
    }
    console.log(signUpCheckbox.checked)
})

// Form submit

formSubmit = (e) => {
    e.preventDefault();
    var target = e.target;
    var parent = target.parentElement;
    let input = parent.querySelector('input.email')
    if (input.value.length < 1) {
        showNotification('Please enter email address', 'error')
        return
    }
    input.value = '';
    showNotification('Email sent Successfully', 'success')
}

showNotification = (message, status) => {
    let notificationContainer = doc.getElementById('notification-container')
    let notification = doc.getElementById('notification')

    if (notificationContainer.classList.contains('show')) {
        notificationContainer.classList.remove('show')
        notification.textContent = ""
        clearTimeout(showNotify)
        clearTimeout(removeNotify)
    }

    notificationContainer.classList.add('show')
    showNotify = setTimeout(() => {
        notification.classList = 'show ' + status
        notification.textContent = message
    }, 200);

    removeNotify = setTimeout(() => {
        notification.classList.add("hide")
        setTimeout(() => {
            notificationContainer.classList.remove('show')
        }, 750);
    }, 3000);
}

