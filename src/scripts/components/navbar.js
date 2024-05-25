class navbar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <nav>
            <div class="logo">
                <a href="#">
                    <img src="./images/logo/Restoman.png" width="175" alt="logo">
                </a>
            </div>
            <button type="button" id="hamburger" aria-label="navigation-menu" tabindex="0">☰</button>
            <ul class="nav-list" aria-label="Navigation Menu">
                <li aria-label="home">
                    <a href="#/home" class= "nav-link" tabindex="0">Home</a>
                </li>
                <li aria-label="favorite">
                    <a href="#/favorite" class= "nav-link" tabindex="0">Favorite</a>
                </li>
                <li aria-label="about us">
                    <a href="https://github.com/aditiaprabowo3" class= "nav-link" tabindex="0">About Us</a>
                </li>
            </ul>
        </nav>
        `;
    }
}

customElements.define('navbar-content', navbar);