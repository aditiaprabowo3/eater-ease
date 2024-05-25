class questionsAnswer extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="qna-section">
            <div class="text-head">
                <h2>Frequently Asked Questions</h2>
            </div>
            <div class="main-content">
                <article class="content-item" tabindex="0">
                    <div class="question ">
                        <h3>What do you can help all peaple ?</h3>
                        <svg xmlns="http://www.w3.org/2000/svg " id="arrow " x="0 " y="0 " version="1.1 " viewBox="0 0 29 29 " xml:space="preserve " width="24px " height="24px ">
                        <path fill="none " stroke="#000 " stroke-linecap="round " stroke-linejoin="round " stroke-miterlimit="10 " stroke-width="2 " d="m20.5 11.5-6 6-6-6 "></path>
                        </svg>
                    </div>
                    <div class="answer">
                        <p>
                            Yes, we can help you anytime and anywhere easily with many of the best restaurants in your area with the highest to lowest ratings, so you can choose a restaurant according to your wishes.
                        </p>
                    </div>
                </article>
                <article class="content-item" tabindex="0">
                    <div class="question">
                        <h3>Does this website display location and opening hours ?</h3>
                        <svg xmlns="http://www.w3.org/2000/svg " id="arrow " x="0 " y="0 " version="1.1 " viewBox="0 0 29 29" xml:space="preserve " width="24px " height="24px ">
                        <path fill="none" stroke="#000 " stroke-linecap="round " stroke-linejoin="round " stroke-miterlimit="10 " stroke-width="2 " d="m20.5 11.5-6 6-6-6 "></path>
                        </svg>
                    </div>
                    <div class="answer">
                        <p>
                            Yes, information about restaurant locations and operating hours is available on each restaurant's detail page. You can view this information before visiting the desired restaurant.
                        </p>
                    </div>
                </article>
                <article class="content-item" tabindex="0">
                    <div class="question">
                        <h3>Are the features on this website free?</h3>
                        <svg xmlns="http://www.w3.org/2000/svg " id="arrow " x="0 " y="0 " version="1.1 " viewBox="0 0 29 29 " xml:space="preserve " width="24px " height="24px ">
                        <path fill="none " stroke="#000 " stroke-linecap="round " stroke-linejoin="round " stroke-miterlimit="10 " stroke-width="2 " d="m20.5 11.5-6 6-6-6 "></path>
                        </svg>
                    </div>
                    <div class="answer">
                        <p>
                            Yes, all the features in Eater Ease are free and you don't need to worry because you don't have to pay a penny to be able to use the features, of course you can use all the features for free and these are all special to help you get the restaurant you want.
                        </p>
                    </div>
                </article>
                <article class="content-item" tabindex="0">
                    <div class="question">
                        <h3>Why Eater Ease the best web?</h3>
                        <svg xmlns="http://www.w3.org/2000/svg " id="arrow " x="0 " y="0 " version="1.1 " viewBox="0 0 29 29 " xml:space="preserve " width="24px " height="24px ">
                        <path fill="none " stroke="#000 " stroke-linecap="round " stroke-linejoin="round " stroke-miterlimit="10 " stroke-width="2 " d="m20.5 11.5-6 6-6-6 "></path>
                        </svg>
                    </div>
                    <div class="answer">
                        <p>
                            because restaurant has many features that you can use and with these many features you can use them to find the best restaurants with the lowest to highest ratings in your area, of course you can access all of this for free without any costs, this is
                            what makes this website the best best.
                        </p>
                    </div>
                </article>
            </div>
        </div>
        `;
    }
}

customElements.define('qna-content', questionsAnswer);