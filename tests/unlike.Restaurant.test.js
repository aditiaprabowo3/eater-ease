/* eslint-disable import/no-duplicates */
// eslint-disable-next-line import/no-duplicates
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb.js';
import * as TestFactories from './helpers/testFactories.js';

describe('Unliking A Restaurant', () => {
    const addLikeButtonContainer = () => {
        document.body.innerHTML = '<div class="like_button"></div>';
    };

    beforeEach(async() => {
        addLikeButtonContainer();
        await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
    });

    afterEach(async() => {
        await FavoriteRestaurantIdb.deleteRestaurant(1);
    });

    it('should display unlike widget when the restaurant has been liked', async() => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

        expect(document.querySelector('[aria-label="unlike this restaurant"]'))
            .toBeTruthy();
    });

    it('should not display like widget when the restaurant has been liked', async() => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

        expect(document.querySelector('[aria-label="like this restaurant"]'))
            .toBeFalsy();
    });

    it('should be able to remove liked restaurant from the list', async() => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

        document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));

        expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
    });

    it('should not throw error when user click unlike restaurant is not in the list', async() => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

        // Hapus dulu film dari daftar film yang disukai
        await FavoriteRestaurantIdb.deleteRestaurant(1);

        // Kemudian, simulasikan pengguna menekan widget batal menyukai film
        document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));
        expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
    });
});