/* App JS */

;(function () {

    var app = {

        SELECTORS: {
            header: '.js-header',
            headerPlaceholder: '.js-header-placeholder',
            categoryNavItem: '.js-category-nav-item',
            categoryNavMenu: '.js-category-nav-menu',
            categoryNavArrow: '.js-category-nav-arrow',
            catalogueMenuItem: '.js-catalogue-menu-item',
            catalogueMenuToggler: '.js-catalogue-menu-toggler',
            catalogueSubMenu: '.js-catalogue-submenu',
            itemPopupShowButton: '.js-show-item-popup',
            itemPopup: '.js-item-popup',
            contactPopupShowButton: '.js-show-contact-popup',
            contactPopup: '.js-contact-popup',
            slider: '.js-slider',
            itemColor: '.js-item-color',
            itemShowcaseImg: '.js-item-showcase-img',
            itemThumbImg: '.js-item-thumb-img'
        },

        CLASSES: {
            active: '_active',
            hidden: '_hidden',
            open: '_open',
            flowing: '_flowing'
        },

        init: function () {
            this.initEventListeners();
            this.initSlider();
            this.initPopups();
            this.initHeaderPlaceholder();
        },

        initEventListeners: function () {
            $(document).on('click', this.SELECTORS.catalogueMenuToggler, this.toggleCatalogueSubmenu.bind(this));
            $(document).on('click', this.SELECTORS.itemColor, this.selectColor.bind(this));
            $(document).on('click', this.SELECTORS.itemThumbImg, this.changeShowcaseImg.bind(this));
            $(document).on('scroll', this.setHeaderState.bind(this));
        },

        initPopups: function () {

            $(this.SELECTORS.itemPopupShowButton).magnificPopup({
                items: {
                    src: this.SELECTORS.itemPopup,
                    type: 'inline'
                },
                    removalDelay: 300
            });

            $(this.SELECTORS.contactPopupShowButton).magnificPopup({
                items: {
                    src: this.SELECTORS.contactPopup,
                    type: 'inline'
                },
                removalDelay: 300
            })
        },

        toggleCatalogueSubmenu: function (event) {
            var $self = $(event.currentTarget);

            $self.toggleClass(this.CLASSES.open)
                .closest(this.SELECTORS.catalogueMenuItem)
                .find(this.SELECTORS.catalogueSubMenu)
                .slideToggle();
        },

        selectColor: function (event) {
            var $self = $(event.currentTarget);

            $(this.SELECTORS.itemColor).removeClass(this.CLASSES.active);
            $self.addClass(this.CLASSES.active);

        },

        changeShowcaseImg: function (event) {
            var $self = $(event.currentTarget),
                thumbImgPath = $self.attr('src');

            $(this.SELECTORS.itemShowcaseImg).attr('src', thumbImgPath);
        },

        initSlider: function (event) {
            $(this.SELECTORS.slider).owlCarousel({
                items: 3,
                center: true,
                loop: true,
                dots: true,
                smartSpeed: 800,
                autoplay: true,
                autoplayTimeout: 3000
            });
        },

        initHeaderPlaceholder: function () {
            $(this.SELECTORS.headerPlaceholder).css('height', $(this.SELECTORS.header).innerHeight());
        },

        setHeaderState: function () {

            if ($(document).scrollTop() > $(this.SELECTORS.header).innerHeight()) {
                $(this.SELECTORS.header).addClass(this.CLASSES.flowing);
            } else {
                $(this.SELECTORS.header).removeClass(this.CLASSES.flowing);
            }
        }
    };

    $(document).ready(function () {
        app.init();
    });
}());