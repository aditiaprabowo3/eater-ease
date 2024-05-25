import Home from '../views/page/home.js';
import Favorite from '../views/page/favorite.js';
import Detail from '../views/page/detail.js';

const routes = {
    '/': Home,
    '/home': Home,
    '/favorite': Favorite,
    '/detail/:id': Detail,
};

export default routes;