import FavoriteRestaurantShowPresenter from '../src/scripts/views/page/liked restaurants/favorite-restaurant-show-presenter.js';
import FavoriteRestaurantSearchView from '../src/scripts/views/page/liked restaurants/favorite-restaurant-search-view.js';

describe('Showing all favorite restaurant ', () => {
    let view;

    const renderTemplate = () => {
        view = new FavoriteRestaurantSearchView();
        document.body.innerHTML = view.getTemplate();
    };

    beforeEach(() => {
        renderTemplate();
    });

    describe('When no restaurant have been liked', () => {
        it('should ask for the favorite restaurant', () => {
            const favoriteRestaurants = {
                getAllRestaurant: jest.fn().mockImplementation(() => []),
            };

            new FavoriteRestaurantShowPresenter({
                favoriteRestaurants,
                view,
            });

            expect(favoriteRestaurants.getAllRestaurant).toHaveBeenCalledTimes(1);
        });

        it('should show the information that no restaurant have been liked', (done) => {
            document.getElementById('card-resto').addEventListener('card-resto:updated', () => {
                expect(document.querySelectorAll('.restaurantIsEmpty').length).toEqual(1);
                done();
            });

            const favoriteRestaurants = {
                getAllRestaurant: jest.fn().mockImplementation(() => []),
            };
            new FavoriteRestaurantShowPresenter({
                view,
                favoriteRestaurants,
            });
        });
    });

    describe('When favorite restaurant exist', () => {
        it('should show the restaurant', (done) => {
            document.getElementById('card-resto').addEventListener('card-resto:updated', () => {
                expect(document.querySelectorAll('.restaurant-item').length).toEqual(2);

                done();
            });

            const favoriteRestaurants = {
                getAllRestaurant: jest.fn().mockImplementation(() => [{
                        id: 11,
                        city: 'C',
                        name: 'A',
                        rating: 3,
                        description: 'Sebuah restoran A',
                    },
                    {
                        id: 22,
                        city: 'D',
                        name: 'B',
                        rating: 4,
                        description: 'Sebuah restoran B',
                    },
                ]),
            };

            new FavoriteRestaurantShowPresenter({
                view,
                favoriteRestaurants,
            });
        });
    });
});