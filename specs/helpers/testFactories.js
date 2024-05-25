import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter.js';
import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-restaurant-idb.js';

const createLikeButtonPresenterWithRestaurant = async(restaurant) => {
    const likeButtonContainer = document.querySelector('.like_button');
    console.log('likeButtonContainer:', likeButtonContainer);

    if (!likeButtonContainer) {
        console.error('Element with class "like_button" not found in the DOM');
        return;
    }

    await LikeButtonPresenter.init({
        likeButtonContainer,
        favoriteRestaurants: FavoriteRestaurantIdb,
        restaurant,
    });
};

// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonPresenterWithRestaurant };