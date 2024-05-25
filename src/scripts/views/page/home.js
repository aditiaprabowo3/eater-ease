import RestaurantDbSource from '../../data/restaurantdb-source.js';
import { createRestaurantListTemplate } from '../templates/template-creator.js';

const Home = {
    // Fungsi render() digunakan untuk menghasilkan atau men-generate tampilan atau markup HTML dari suatu komponen.
    async render() {
        return `
        <hero-content></hero-content>

        <div class="content" id="resto-content">
            <div class="text-head">
                <h2>Explore Restaurants</h2>
            </div>
            <div class="restaurant" id="card-resto"></div>
        </div>

        <service-content></service-content>
    
        <testimobnial-content></testimobnial-content>

        <qna-content></qna-content>
    `;
    },

    // Fungsi afterRender() biasanya digunakan untuk melakukan aksi atau operasi setelah komponen selesai dirender dan ditampilkan di layar.
    // fungsi afterRender() ini sering digunakan untuk menginisialisasi data, mengaitkan event listener, atau melakukan operasi yang membutuhkan tampilan sudah tersedia di DOM.
    async afterRender() {
        const restaurants = await RestaurantDbSource.restaurantList();
        console.log(restaurants);
        const restoContainer = document.querySelector('#card-resto');
        const hero = document.querySelector('hero-content');
        hero.style.display = 'block';
        const skipLink = document.querySelector('skip-to-content>a');
        const mainContent = document.querySelector('#main-content');

        mainContent.setAttribute('tabindex', '-1');
        skipLink.setAttribute('href', '#main-content');

        restaurants.forEach((restaurant) => {
            // Tambahkan template ke restoList
            restoContainer.innerHTML += createRestaurantListTemplate(restaurant);
        });

        // faq
        const faqElements = document.querySelectorAll('.content-item');

        faqElements.forEach((faq) => {
            faq.addEventListener('click', () => {
                faq.classList.toggle('active');
            });
        });
    },
};

export default Home;