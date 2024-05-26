import FavoriteRestaurantSearchPresenter from '../src/scripts/views/page/liked restaurants/favorite-restaurant-search-presenter.js';
import FavoriteRestaurantSearchView from '../src/scripts/views/page/liked restaurants/favorite-restaurant-search-view.js';

describe('Searching favorite restaurants', () => {
    let presenter;
    let favoriteRestaurants;
    let view;

    const searchRestaurants = (query) => {
        const queryElement = document.getElementById('query');
        queryElement.value = query;

        queryElement.dispatchEvent(new Event('change'));
    };

    const setRestaurantSearchContainer = () => {
        view = new FavoriteRestaurantSearchView();
        document.body.innerHTML = view.getTemplate();
    };

    const constructPresenter = () => {
        favoriteRestaurants = {
            getAllRestaurant: jest.fn(),
            searchRestaurants: jest.fn(),
        };
        presenter = new FavoriteRestaurantSearchPresenter({
            favoriteRestaurants,
            view,
        });
    };

    beforeEach(() => {
        setRestaurantSearchContainer();
        constructPresenter();
    });

    describe('when query is not empty', () => {
        it('should be able to capture the query typed by the user', () => {
            favoriteRestaurants.searchRestaurants.mockImplementation(() => []);

            searchRestaurants('restoran a');

            expect(presenter.latestQuery).toEqual('restoran a');
        });

        it('should ask the model to search for liked restaurants', () => {
            favoriteRestaurants.searchRestaurants.mockImplementation(() => []);
            searchRestaurants('restoran a');

            expect(favoriteRestaurants.searchRestaurants)
                .toHaveBeenCalledWith('restoran a');
        });

        it('should show the restaurants found by Favorite restaurants', (done) => {
            document.getElementById('card-resto').addEventListener('card-resto:updated', () => {
                expect(document.querySelectorAll('.restaurant-item').length).toEqual(3);

                done();
            });

            favoriteRestaurants.searchRestaurants.mockImplementation((query) => {
                if (query === 'restoran a') {
                    return [
                        { id: 111, title: 'restoran abc' },
                        { id: 222, title: 'ada juga restoran abcde' },
                        { id: 333, title: 'ini juga restoran film a' },
                    ];
                }

                return [];
            });

            searchRestaurants('restoran a');
        });

        it('should show the name of the restaurants found by Favorite restaurants', (done) => {
            document.getElementById('card-resto').addEventListener('card-resto:updated', () => {
                const restaurantNames = document.querySelectorAll('.card-title');

                expect(restaurantNames.item(0).textContent).toEqual('restoran abc');
                expect(restaurantNames.item(1).textContent).toEqual('ada juga restoran abcde');
                expect(restaurantNames.item(2).textContent).toEqual('ini juga boleh restoran a');

                done();
            });

            favoriteRestaurants.searchRestaurants.mockImplementation((query) => {
                if (query === 'restoran a') {
                    return [
                        { id: 111, name: 'restoran abc' },
                        { id: 222, name: 'ada juga restoran abcde' },
                        { id: 333, name: 'ini juga boleh restoran a' },
                    ];
                }

                return [];
            });

            searchRestaurants('restoran a');
        });

        it('should show - when the restaurant does not contain a name', (done) => {
            document.getElementById('card-resto').addEventListener('card-resto:updated', () => {
                const restaurantTitles = document.querySelectorAll('.card-title');
                expect(restaurantTitles.item(0).textContent).toEqual('-');

                done();
            });

            favoriteRestaurants.searchRestaurants.mockImplementation((query) => {
                if (query === 'restoran a') {
                    return [{ id: 444 }];
                }

                return [];
            });

            searchRestaurants('restoran a');
        });
    });

    describe('when query is empty', () => {
        it('should capture the query as empty', () => {
            favoriteRestaurants.searchRestaurants.mockImplementation(() => []);
            searchRestaurants(' ');

            expect(presenter.latestQuery.length).toEqual(0);
        });

        it('should show all favorite restaurants', () => {
            favoriteRestaurants.searchRestaurants.mockImplementation(() => []);
            searchRestaurants('    ');
            expect(favoriteRestaurants.getAllRestaurant)
                .toHaveBeenCalled();
        });
    });

    describe('When no favorite restaurant could be found', () => {
        it('should show the empty message', (done) => {
            document.getElementById('card-resto').addEventListener('card-resto:updated', () => {
                expect(document.querySelectorAll('.restaurantIsEmpty').length).toEqual(1);
                done();
            });

            // eslint-disable-next-line no-unused-vars
            favoriteRestaurants.searchRestaurants.mockImplementation((query) => []);

            searchRestaurants('restoran a');
        });

        it('should not show any restaurant', (done) => {
            document.getElementById('card-resto').addEventListener('card-resto:updated', () => {
                expect(document.querySelectorAll('.restaurant-item').length).toEqual(0);
                done();
            });

            // eslint-disable-next-line no-unused-vars
            favoriteRestaurants.searchRestaurants.mockImplementation((query) => []);

            searchRestaurants('restoran a');
        });
    });
});