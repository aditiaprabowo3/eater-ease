class footer extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <footer>
            <div class="container ">
                <div class="row ">
                    <div class="footer-col img-link">
                        <a href="#">
                            <img src="./images/logo/Restoman.png " width="160" alt="logo">
                        </a>
                        <p>We stay help you find best restaurant in your area with high ratings and best quality</p>
                    </div>
                    <div class="footer-col ">
                        <h3>Links</h3>
                        <ul>
                            <li>
                                <a id="active" href="index.html">Home</a>
                            </li>
                            <li>
                                <a href="#">Favorite</a>
                            </li>
                            <li>
                                <a href="https://github.com/aditiaprabowo3">About Us</a>
                            </li>
                        </ul>
                    </div>
                    <div class="footer-col ">
                        <h3>Legal</h3>
                        <ul>
                            <li>
                                <a href="# ">Terms Us</a>
                            </li>
                            <li>
                                <a href="# ">Terms Condition</a>
                            </li>
                            <li>
                                <a href="# ">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="# ">testimonial</a>
                            </li>
                        </ul>
                    </div>
                    <div class="footer-col ">
                        <h3>Media Social</h3>
                        <ul>
                            <li>
                                <a href="# ">Instagram</a>
                            </li>
                            <li>
                                <a href="# ">Facebook</a>
                            </li>
                            <li>
                                <a href="# ">Twitter</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="copyright">
                    <p>Copyright © 2024 - Eater Ease</p>
                </div>
            </div>
        </footer>
        `;
    }
}

customElements.define('footer-content', footer);