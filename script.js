const dropdowns = document.querySelectorAll('.dropdown');
const name1 = document.getElementById('name1');
const regno = document.getElementById('reg1');
const email = document.getElementById('email1');
const git = document.getElementById('git1');
const form = document.getElementById('form');

if (dropdowns) {
    dropdowns.forEach(dropdown => {
        const select = dropdown.querySelector('.select');
        const caret = dropdown.querySelector('.caret');
        const menu = dropdown.querySelector('.menu');
        const options = dropdown.querySelectorAll('.menu li');
        const selected = dropdown.querySelector('.selected');

        if (select) {
            select.addEventListener('click', () => {
                select.classList.toggle('select-clicked');
                caret.classList.toggle('caret-rotate');
                menu.classList.toggle('menu-open');
            });
        }

        if (options) {
            options.forEach(option => {
                option.addEventListener('click', () => {
                    selected.innerText = option.innerText;
                    select.classList.remove('select-clicked');
                    caret.classList.remove('caret-rotate');
                    menu.classList.remove('menu-open');
                    options.forEach(option => {
                        option.classList.remove('active');
                    });
                    option.classList.add('active');
                });
            });
        }
    });
}

if (form) {
    form.addEventListener('submit', e => {
        e.preventDefault();
        Validate();
    });
}

const seterror = (element, message) => {
    const inputbox = element.parentElement;
    const errordisp = inputbox.querySelector('.error');
    errordisp.innerText = message;
    inputbox.classList.add('error');
    inputbox.classList.remove('success');
};

const setsuccess = element => {
    const inputbox = element.parentElement;
    const errordisp = inputbox.querySelector('.error');
    errordisp.innerText = '';
    inputbox.classList.add('success');
    inputbox.classList.remove('error');
};

const validemail = email => {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase());
};

const Validate = () => {
    const nameval = name1 ? name1.value.trim() : '';
    const emailval = email ? email.value.trim() : '';
    const regnoval = regno ? regno.value.trim() : '';
    const gitval = git ? git.value.trim(): '';

    if (nameval === '') {
        seterror(name1, 'name required');
    } else {
        setsuccess(name1);
    }
    if (emailval === '') {
        seterror(email, 'email is required');
    } else if (!validemail(emailval)) {
        seterror(email, 'enter a valid email');
    } else {
        setsuccess(email);
    }
    if (regnoval === '') {
        seterror(regno, 'registration no required');
    } else {
        setsuccess(regno);
    }
    if (gitval === '') {
        seterror(git, 'github profile id required');
    } else {
        setsuccess(git);
    }
};
