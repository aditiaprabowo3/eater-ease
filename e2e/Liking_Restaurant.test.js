const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
    I.seeElement('#query');
    I.see('Oops.. Restaurant is empty', '.restaurantIsEmpty h3');
});

Scenario('liking one restaurant', async({ I }) => {
    I.see('Oops.. Restaurant is empty', '.restaurantIsEmpty h3');

    I.amOnPage('/');

    I.seeElement('.card-title a');

    const firstRestaurant = locate('.card-title a').first();
    const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.restaurant-item');

    const likedRestaurantName = await I.grabTextFrom('.card-title');
    assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('unliking one restaurant', async({ I }) => {
    I.see('Oops.. Restaurant is empty', '.restaurantIsEmpty h3');

    I.amOnPage('/');

    I.seeElement('.card-title a');

    const firstRestaurant = locate('.card-title a').first();
    const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.restaurant-item');

    const likedRestaurantName = await I.grabTextFrom('.card-title');
    assert.strictEqual(firstRestaurantName, likedRestaurantName);

    I.click(likedRestaurantName);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');

    const FavoriteRestaurantIsEmpty = await I.grabTextFrom('.restaurantIsEmpty h3');
    assert.strictEqual('Oops.. Restaurant is empty', FavoriteRestaurantIsEmpty);
});

Scenario('Add Review', async({ I }) => {
    I.see('Oops.. Restaurant is empty', '.restaurantIsEmpty h3');

    I.amOnPage('/');

    I.seeElement('.card-title a');
    I.click(locate('.card-title a').first());

    I.seeElement('.add_container');

    const textReview = 'Makanannya enak sekali dan harganya terjangkau';
    const outputTextReview = 'Makanannya enak sekali dan harganya terjangkau';
    I.fillField('input', 'Alysa');
    I.fillField('textarea', textReview);

    I.click('button[type="submit"]');

    I.waitForElement('.desc p', 10);
    I.seeElement('.desc p');

    const lastReview = locate('.desc p').last();
    const lastReviewText = await I.grabTextFrom(lastReview);

    assert.strictEqual(outputTextReview, lastReviewText);
});