import DrawerInitiator from '../utils/drawer-initiator.js';
import UrlParser from '../routes/url-parser.js';
import routes from '../routes/routes.js';

class app {
    constructor({ button, drawer, content }) {
        this._button = button;
        this._drawer = drawer;
        this._content = content;

        this.initialAppShell();
    }

    initialAppShell() {
        DrawerInitiator.init({
            button: this._button,
            drawer: this._drawer,
            content: this._content,
        });
    }

    async renderPage() {
        const url = UrlParser.parseActiveUrlWithCombiner();
        const page = routes[url];
        this._content.innerHTML = await page.render();
        await page.afterRender();

        const skipLinkElem = document.querySelector('.skip-link');
        skipLinkElem.addEventListener('click', (event) => {
            event.preventDefault();
            document.querySelector('#main-content').focus();
        });
    }
}

export default app;