import { logout } from './api/users.js';
import { page, render } from './lib.js';
import { getUserData } from './utils.js';
import { createView } from './views/createView.js';
import { dashboardView } from './views/dashboard.js';
import { detailsView } from './views/details.js';
import { editView } from './views/edit.js';
import { homeView } from './views/home.js';
import { loginView } from './views/login.js';
import { registerView } from './views/register.js';

// imports for views will auto-generate as wel go;

// here we have to find the 'main' section in our HTML file;

const main = document.getElementById('main'); // example

// add event listener to the logout button - may have to add the ID manually;

document.getElementById('logoutBtn').addEventListener('click', onLogout);


// create middleware ->;
// Below views change on task;
page(decoreateContext);
page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/dashboard', dashboardView);
page('/create', createView);
page('/offer/:id', detailsView); // item => idea behind the task
page('/edit/:id', editView); // item => idea behind the task
page('/apply', () => console.log('Apply')); // additional task if any

updateNav();
page.start();

function decoreateContext(ctx, next){
    ctx.render = renderMain;
    ctx.updateNav = updateNav;
    next();
}; 

function renderMain(templateResult){
    render(templateResult, main);// where main is the 'main' element in the HTML file;
};

export function updateNav(){
    const userData = getUserData();
    // create user/guest view - may have to assign classes manually ->
    if(userData){
        document.querySelector('.user').style.display = 'block';
        document.querySelector('.guest').style.display = 'none';
        // if Welcome message ->
    } else {
        document.querySelector('.user').style.display = 'none';
        document.querySelector('.guest').style.display = 'block';
    };
};

// logout function;

function onLogout(){
    logout();
    updateNav();
    page.redirect('/');
};