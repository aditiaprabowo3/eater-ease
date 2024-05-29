import CONFIG from '../../globals/config.js';

const small = 'small/';
const medium = 'medium/';
const large = 'large/';

const createSkeletonRestaurantTemplate = (count) => {
    let template = '';

    for (let i = 0; i < count; i += 1) {
        template += `
        <article class="restaurant-item" key="${i}" tabindex="0">
            <div class="card-image">
                <picture>
                    <img src="/images/placeholder.png" alt="skeleton" width="100%" height="200px"/>
                </picture>
            </div>
                <div class="card-body">
                    <div class="heading">
                        <h2 class= "skeleton">lorem ipsum dolorsit</h2>
                        <p class= "skeleton">Lorem Ipsum</p>
                    </div>
                    <div class="location">
                        <p class="skeleton">lorem ipsum dolor</p>
                    </div>
                    <div class="restaurant-description">
                        <p class="skeleton">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda suscipit libero dolorem magni praesentium incidunt nemo. Eius error vitae dolor magni, quae voluptatum doloribus omnis dicta nostrum libero, aspernatur dolorum aperiam, minima id fugiat obcaecati dolores consequatur tempora rerum ratione? Amet, eos? Iure magni ratione quidem optio in, nulla porro sint praesentium dicta quaerat sit et at quos nemo eius quae eveniet sed, aspernatur voluptas, dolores ea laudantium quo recusandae placeat. Ut dicta beatae consequuntur tempore consectetur necessitatibus quas eum voluptates a. Libero ex esse repudiandae, laborum magni adipisci perferendis! Reiciendis illum quo, beatae doloribus accusantium dolores autem similique unde!</p>
                    </div>
                </div>
        </article>
        `;
    }
    return template;
};

const createSkeletonRestaurantDetail = (count) => {
    let template = '';

    for (let i = 0; i < count; i += 1) {
        template += `
        <div class="detail-page">
            <section class="detail-content">
                <div class="container-detail">
                    <div class="header-detail">
                        <div class= "breadcrumbs">
                            <p><a href="#/home">Home</a> <span>/</span> Detail</p>
                        </div>
                        <div class="button">
                            <div class="like_button"></div>
                        </div>   
                    </div>
                    <div class="img-content-main">
                        <div class="img-content"> 
                            <img src="/images/placeholder.png" alt="skeleton">
                        </div>
                    </div>
                    <div class="detail-content-text" tabindex="0">
                        <div class="detail-text">
                            <h1 class="skeleton" >lorem ipsum dolorsit</h1>
                            <div class="location">
                                <p class="skeleton">lorem ipsum dolor</p>
                            </div>
                            <p class= "skeleton">Lorem Ipsum</p>
                            <h2 class= "skeleton">Lorem Ipsum</h4>
                            <div class="skeleton">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci</div>
                            <h2 class= "skeleton">Lorem Ipsum</h4>
                            <div class="skeleton">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci</div>
                            <h2 class= "skeleton">Lorem Ipsum</h4>
                            <div class="skeleton">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis</div>
                        </div>
                    </div>
                </div>
                <div class="descrip" tabindex="0">
                    <h2 class="skeleton">lorem ipsum</h2>
                    <p class= "skeleton">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</p>
                </div>
            </section>
        </div>
        `;
    }
    return template;
};

const createRestaurantDetailTemplate = (restaurant) => `
    <div class="detail-page">
        <section class="detail-content">
            <div class="container-detail">
                <div class="header-detail">
                    <div class= "breadcrumbs">
                        <p><a href="#/home">Home</a> <span>/</span> Detail</p>
                    </div>
                    <div class="button">
                        <div class="like_button"></div>
                    </div>   
                </div>
                <div class="img-content-main">
                    <div class="img-content"> 
                    <picture>
                        <source class="lazyload" media="(max-width: 600px)" data-srcset="${CONFIG.BASE_IMAGE_URL + small + restaurant.pictureId}">
                        <source class="lazyload" media="(max-width: 1200px)" data-srcset="${CONFIG.BASE_IMAGE_URL + medium + restaurant.pictureId}">
                        
                        <!-- Gambar default jika browser tidak mendukung WebP -->
                        <img class="lazyload" src="/images/placeholder.png" data-src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + large + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="Restoran ${restaurant.name || '-'} Kota ${restaurant.city}">
                    </picture>

                    </div>
                </div>
                <div class="detail-content-text" tabindex="0">
                    <div class="detail-text">
                        <h1 class="name">${restaurant.name}</h1>
                        <div class="location">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" id="location"><g fill="none" fill-rule="evenodd" stroke="#4F4F4F" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" transform="translate(3.5 2)"><path d="M0.739130438,8.39130439 C0.753537867,4.15071799 4.2028919,0.72472301 8.4434783,0.739085164 C12.6840647,0.753537867 16.1100597,4.2028919 16.0956975,8.4434783 L16.0956975,8.53043483 C16.0434783,11.2869566 14.5043479,13.8347827 12.6173914,15.826087 C11.5382412,16.9467164 10.3331375,17.9388114 9.026087,18.7826088 C8.67659293,19.0849173 8.15818976,19.0849173 7.80869569,18.7826088 C5.86019813,17.5143538 4.15006533,15.9131279 2.75652175,14.052174 C1.51448066,12.4293903 0.809295599,10.4597355 0.739130438,8.41739135 L0.739130438,8.39130439 Z"></path><circle cx="8.417" cy="8.539" r="2.461"></circle></g></svg>
                            <p class="city">${restaurant.city}</p>
                        </div>
                        <p class="restaurant_rating"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" id="star"><path style="marker:none" fill="#f8b84e" d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z" color="#000" overflow="visible" transform="matrix(.04574 0 0 .04561 68.85 -40.34)"></path></svg><span> ${restaurant.rating}</span></p>
                        <h2>Categories</h4>
                        <div class="categories-wrapper">${restaurant.categories.map((categorie) => `<div class="categorie">${categorie.name}</div>`).join(' ')}</div>
                        <h2>Makanan Populer</h2>
                        <div class="foods-wrapper">${restaurant.menus.foods.map((food) => `<div class="food">${food.name}</div>`).join(' ')}</div>
                        <h2>Minuman Populer</h2>
                        <div class="drinks-wrapper">${restaurant.menus.drinks.map((drink) => `<div class="drink">${drink.name}</div>`).join(' ')}</div>
                    </div>
                </div>
            </div>
            <div class="descrip" tabindex="0">
                <h2>Description</h2>
                <p>${restaurant.description}</p>
            </div>
        </section>
    </div>

    <div class="review-container">
        <h1>What people are saying</h1>
        <div class="card_review">
            ${restaurant.customerReviews.map((review) => `
            <div class="review_item">
                <div class="reviewer_item">
                    <div class="reviewer">
                        <h4>${review.name}</h4>
                        <p>${review.date}</p>
                    </div>
                </div>
                <div class="desc">
                    <p>${review.review}</p>
                </div>
            </div>
            `).join('')}
        </div>
    </div>
    
    <form class="add_container">
        <h2>Add Review</h2>
        <label for="name">Name</label>
        <input type="text" name="name" placeholder="Name" class="inputName" required/>
        <label for="review">Review</label>
        <textarea type="text" name="review" placeholder="Review" class="inputDescription" required></textarea>
        <div class="submit">
            <button type="submit">Submit</button>
        </div>
    </form>
`;

const createRestaurantListTemplate = (restaurant) => `
    <article class="restaurant-item" tabindex="0">
        <div class="card-image">
            <picture>
                <source class="lazyload" media="(max-width: 600px)" data-srcset="${CONFIG.BASE_IMAGE_URL}small/${restaurant.pictureId}">
                <source class="lazyload" media="(max-width: 1200px)"  data-srcset="${CONFIG.BASE_IMAGE_URL}medium/${restaurant.pictureId}">
            
                <img class="lazyload" src="/images/placeholder.png" crossorigin="anonymous" data-src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + large + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="Restoran ${restaurant.name || '-'} Kota ${restaurant.city}" title="${restaurant.name}" />
            </picture>
        </div>
            <div class="card-body">
                <div class="heading">
                    <h2 class= "card-title"><a href="/#/detail/${restaurant.id}">${restaurant.name || '-'}</a></h2>
                    <div class="ratting">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" id="star"><path style="marker:none" fill="#f8b84e" d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z" color="#000" overflow="visible" transform="matrix(.04574 0 0 .04561 68.85 -40.34)"></path></svg>
                        <p class="">${restaurant.rating}</p>
                    </div>
                </div>
                <div class="location">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" id="location"><g fill="none" fill-rule="evenodd" stroke="#4F4F4F" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" transform="translate(3.5 2)"><path d="M0.739130438,8.39130439 C0.753537867,4.15071799 4.2028919,0.72472301 8.4434783,0.739085164 C12.6840647,0.753537867 16.1100597,4.2028919 16.0956975,8.4434783 L16.0956975,8.53043483 C16.0434783,11.2869566 14.5043479,13.8347827 12.6173914,15.826087 C11.5382412,16.9467164 10.3331375,17.9388114 9.026087,18.7826088 C8.67659293,19.0849173 8.15818976,19.0849173 7.80869569,18.7826088 C5.86019813,17.5143538 4.15006533,15.9131279 2.75652175,14.052174 C1.51448066,12.4293903 0.809295599,10.4597355 0.739130438,8.41739135 L0.739130438,8.39130439 Z"></path><circle cx="8.417" cy="8.539" r="2.461"></circle></g></svg>
                    <p class="city">${restaurant.city}</p>
                </div>
                <div class="restaurant-description">
                    <p class="card-des" tabindex="0">${restaurant.description || '-'}</p>
                </div>
            </div>
    </article>
`;

const createLikeRestaurantButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like red">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`;

export {
    createSkeletonRestaurantTemplate,
    createSkeletonRestaurantDetail,
    createRestaurantListTemplate,
    createRestaurantDetailTemplate,
    createLikeRestaurantButtonTemplate,
    createUnlikeRestaurantButtonTemplate,
};