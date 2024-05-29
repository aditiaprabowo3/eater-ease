import UrlParser from '../../routes/url-parser.js';
import RestaurantDbSource from '../../data/restaurantdb-source.js';
import postReview from '../../utils/addReview.js';
import LikeButtonInitiator from '../../utils/like-button-presenter.js';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb.js';
import {
    createRestaurantDetailTemplate,
    createSkeletonRestaurantDetail,
} from '../templates/template-creator.js';

const Detail = {
    async render() {
        return `
        <div class="detail-container">
            ${createSkeletonRestaurantDetail()}
        </div>
      `;
    },

    async afterRender() {
        // Fungsi ini akan dipanggil setelah render()
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const resto = await RestaurantDbSource.detailRestaurant(url.id);
        const detailContainer = document.querySelector('.detail-container');
        // const hero = document.querySelector('hero-content');
        const skipLink = document.querySelector('skip-to-content>a');
        const mainContent = document.querySelector('#main-content');

        mainContent.setAttribute('tabindex', '-1');
        skipLink.setAttribute('href', '#likeButton');

        // hero.style.display = 'none';
        detailContainer.innerHTML = createRestaurantDetailTemplate(resto);
        console.log(resto);

        LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('.like_button'),
            favoriteRestaurants: FavoriteRestaurantIdb,
            restaurant: {
                id: resto.id,
                name: resto.name,
                pictureId: resto.pictureId,
                description: resto.description,
                city: resto.city,
                rating: resto.rating,
            },
        });

        const postReviewContainer = document.querySelector('.add_container');
        const nameInput = postReviewContainer.querySelector('.inputName');
        const reviewInput = postReviewContainer.querySelector('.inputDescription');

        postReviewContainer.addEventListener('submit', (event) => {
            event.preventDefault();

            postReview({
                url: url.id,
                name: nameInput.value,
                review: reviewInput.value,
            });

            postReviewContainer.reset();
        });
    },
};

export default Detail;