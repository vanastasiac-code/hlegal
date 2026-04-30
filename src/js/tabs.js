const tabs = document.querySelectorAll('.tabs__title-item');

// Functions
const changeTab = (event) => {
    // remove class ".active" from the current active tab
    document.querySelector('.tabs-active').classList.remove('tabs-active');

    // add class ".active" to the clicked tab
    event.currentTarget.classList.add('tabs-active');

    // remove class ".show" from the current active panel
    document.querySelector('.show').classList.remove('show');

    // add class ".show" to the corresponding new active's tab panel
    document
        .querySelector(event.currentTarget.dataset.panel)
        .classList.add('show');
};

// Event Listeners
tabs.forEach((tab) => {
    tab.addEventListener('click', changeTab);
});
