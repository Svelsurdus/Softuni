import {html, render} from './node_modules/lit-html/lit-html.js';
const url = `http://localhost:3030/jsonstore/advanced/dropdown`;

const root = document.getElementById('menu');
const form = document.querySelector('form');
form.addEventListener('submit', onSubmit);

onloadContent();
async function onloadContent(){
    const response = await fetch(url);
    const data = await response.json();

    const result = Object.values(data).map(x => createOptionTemplate(x));
    render(result, root)
};

function createOptionTemplate(option){
    return html `
        <option value=${option._id}>${option.text}</option>
    `
};

function onSubmit(event){
    event.preventDefault();
    const value = document.getElementById('itemText').value;
    value && addItem(value);
};

async function addItem(data) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': "Application/json"
        },
        body: JSON.stringify({text: data}) 
    });
    form.reset();
    onloadContent();
};