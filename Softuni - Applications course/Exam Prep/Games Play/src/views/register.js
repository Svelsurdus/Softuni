import { register } from '../api/users.js';
import { html } from '../lib.js';

const registerViewTempalte = (onSubmit) => html`
<section id="register-page" class="content auth">
    <form @submit=${onSubmit} id="register">
        <div class="container">
            <div class="brand-logo"></div>
            <h1>Register</h1>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="maria@email.com" />

            <label for="pass">Password:</label>
            <input type="password" name="password" id="register-password" />

            <label for="con-pass">Confirm Password:</label>
            <input type="password" name="confirm-password" id="confirm-password" />

            <input class="btn submit" type="submit" value="Register" />

            <p class="field">
                <span>If you already have profile click <a href="#">here</a></span>
            </p>
        </div>
    </form>
</section>`;

export async function registerView(ctx){
    ctx.render(registerViewTempalte(onSubmit));

    async function onSubmit(event){
        event.preventDefault();
        const formData = new FormData(event.target);

        const email = formData.get('email');
        const password = formData.get('password');
        const rePass = formData.get('confirm-password');

        if(!email || !password){
            return alert('All fields are required!');
        };

        if(password !== rePass){
            return alert('Passwords don\'t match!');
        };

        await register(email, password);
        ctx.updateNav();
        ctx.page.redirect('/');
    };
};