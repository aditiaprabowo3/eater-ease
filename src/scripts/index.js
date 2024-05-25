import 'regenerator-runtime'; /* for async await transpile */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/main.css';
import '../styles/responsive.css';
import './components/navbar.js';
import './components/footer.js';
import './components/hero.js';
import './components/skipToContent.js';
import './components/testimonial.js';
import './components/loading.js';
import './components/qna.js';
import './components/ourService.js';
import App from './views/app.js';
import swRegister from './utils/sw-register.js';

const app = new App({
    button: document.querySelector('#hamburger'),
    drawer: document.querySelector('.nav-list'),
    content: document.querySelector('#main-content'),
    nav: document.querySelector('#navigation>li>a'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('DOMContentLoaded', async() => {
    app.renderPage();
    await swRegister();

    const loading = document.querySelector('loading-component');

    loading.classList.add('loading-hidden');

    loading.addEventListener('transitionend', () => {
        document.body.removeChild(loading);
    });
});