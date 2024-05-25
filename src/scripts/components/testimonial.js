class Testimonial extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <section class= "section-testimonials">
            <div class="text-head">
                <h2>What Our Peaple are Saying!</h2>
            </div>
            <div class="testimonial-content">
                <article class="card-testimonial" tabindex="0">
                    <div class="text-card">
                        <p tabindex="0">"This application really helped me find a restaurant that suits my taste. Apart from that the UI/UX is very good, highly recommended!"</p>
                    </div>
                    <div class="profile">
                        <img src="/images/testimonial/testi1.png" alt="testimonial" width="50 ">
                        <div class="text ">
                            <h3>Benjamin Jackson</h3>
                            <p>Software Engineer</p>
                        </div>
                    </div>
                </article>
                <article class="card-testimonial" tabindex="0">
                    <div class="text-card">
                        <p tabindex="0">"I never run out of ideas for places to eat after using this application. With up-to-date recommendations, I always have diverse and interesting culinary options to try"</p>
                    </div>
                    <div class="profile">
                        <img src="/images/testimonial/testi3.png" alt="testimonial" width="50 ">
                        <div class="text ">
                            <h3>Anissa Almulk</h3>
                            <p>Designer</p>
                        </div>
                    </div>
                </article>
                <article class="card-testimonial" tabindex="0">
                    <div class="text-card">
                        <p tabindex="0">"This application really helped me find a restaurant that suits my taste. Apart from that the UI/UX is very good, highly recommended!"</p>
                    </div>
                    <div class="profile">
                        <img src="/images/testimonial/testi2.png" alt="testimonial" width="50 ">
                        <div class="text ">
                            <h3>Amanda Putri</h3>
                            <p>Software Engineer</p>
                        </div>
                    </div>
                </article>
                <article class="card-testimonial" tabindex="0">
                    <div class="text-card">
                        <p tabindex="0">"This application really helped me find a restaurant that suits my taste. Apart from that the UI/UX is very good, highly recommended!"</p>
                    </div>
                    <div class="profile">
                        <img src="/images/testimonial/testi4.png" alt="testimonial" width="50 ">
                        <div class="text ">
                            <h3>Muhamad Ibrahim</h3>
                            <p>Student</p>
                        </div>
                    </div>
                </article>
                <article class="card-testimonial" tabindex="0">
                    <div class="text-card">
                        <p tabindex="0">"the experience of using this application is very pleasant. I was able to discover new restaurants that I had never tried before, and they all suited my tastes."</p>
                    </div>
                    <div class="profile">
                        <img src="/images/testimonial/testi5.png" alt="testimonial" width="50 ">
                        <div class="text ">
                            <h3>Alysa</h3>
                            <p>Singer</p>
                        </div>
                    </div>
                </article>
                <article class="card-testimonial" tabindex="0">
                    <div class="text-card">
                        <p tabindex="0">"With this application, I can find restaurants that are suitable for various occasions, from casual lunches to romantic dinners. It's really practical and useful!"
                        </p>
                    </div>
                    <div class="profile">
                        <img src="/images/testimonial/testi6.png" alt="testimonial" width="50 ">
                        <div class="text">
                            <h3>Alena Syafira</h3>
                            <p>Artist</p>
                        </div>
                    </div>
                </article>
            </div>
        </section>
        `;
    }
}

customElements.define('testimobnial-content', Testimonial);