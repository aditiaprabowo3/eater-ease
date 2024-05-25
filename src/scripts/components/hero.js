class hero extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="hero">
            <div class="text-content">
                <h1>Find best restaurant near you easily and fast</h1>
                <p>Now you don't worry to find the best restaurant near you easily and easily with this web you can save the time you have to get restaurant</p>
                <div class="btn">
                    <a href="#resto-content">Explore Now</a>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define('hero-content', hero);