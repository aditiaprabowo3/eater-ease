import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb.js';
import FavoriteRestaurantSearchView from './liked restaurants/favorite-restaurant-search-view.js';
import FavoriteRestaurantShowPresenter from './liked restaurants/favorite-restaurant-show-presenter.js';
import FavoriteRestaurantSearchPresenter from './liked restaurants/favorite-restaurant-search-presenter.js';

const view = new FavoriteRestaurantSearchView();

const Favorite = {
    async render() {
        return view.getTemplate();
    },

    async afterRender() {
        // Fungsi ini akan dipanggil setelah render()
        const restoList = document.querySelector('#card-resto');
        restoList.style.marginTop = '110px';
        new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
        new FavoriteRestaurantSearchPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
    },
};

export default Favorite;