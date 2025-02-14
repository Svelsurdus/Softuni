import { html, render } from './node_modules/lit-html/lit-html.js';

const form = document.querySelector('form');
form.addEventListener('submit', onSubmit);
const root = document.getElementById('root');

function onSubmit (event){
    event.preventDefault();
    const formData = new FormData(form);
    const { towns } = Object.fromEntries(formData);
    const townsArr = towns.split(',');
    renderTownList(townsArr);
    form.reset();
};

function renderTownList(data){
    const result = createTownList(data);
    render(result, root)
};

function createTownList (data){
    const ul = html `
        <ul>
           ${data.map(el => html `<li>${el}</li>`)}
        </ul>
    `
    return ul;
};