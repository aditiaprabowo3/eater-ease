class Loading extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="loading"></div>
    `;
    }
}

customElements.define('loading-component', Loading);