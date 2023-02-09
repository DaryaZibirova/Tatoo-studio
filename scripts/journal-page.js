//Tabs

let tab = function () {
    let tabNav = document.querySelectorAll('.journal-block__tab-item'),
        tabContent = document.querySelectorAll('.journal-wrapper__tab-content'),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav);
    });

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('journal-block__tab-item_active');
        });
        this.classList.add('journal-block__tab-item_active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    };

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('journal-block__tab-item_active') : item.classList.remove('journal-block__tab-item_active');
        });
    };
};

tab()