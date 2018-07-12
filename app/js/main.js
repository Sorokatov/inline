/* App JS */

;(function () {

    var app = {

        SELECTORS: {
            categoryNavItem: '.js-category-nav-item',
            categoryNavMenu: '.js-category-nav-menu',
            categoryNavArrow: '.js-category-nav-arrow',
            catalogueMenuItem: '.js-catalogue-menu-item',
            catalogueMenuToggler: '.js-catalogue-menu-toggler',
            catalogueSubMenu: '.js-catalogue-submenu',
            itemPopupShowButton: '.js-show-item-popup',
            itemPopup: '.js-item-popup',
            contactPopupShowButton: '.js-show-contact-popup',
            contactPopup: '.js-contact-popup'
        },

        CLASSES: {
            active: '_active',
            hidden: '_hidden',
            open: '_open'
        },

        init: function () {
            this.initEventListeners();
            this.initPopups()
        },

        initEventListeners: function () {
            $(document).on('click', this.SELECTORS.categoryNavItem, this.toggleCategoryNav.bind(this));
            $(document).on('click', this.SELECTORS.catalogueMenuToggler, this.toggleCatalogueSubmenu.bind(this));
        },

        initPopups: function () {

            $(this.SELECTORS.itemPopupShowButton).magnificPopup({
                items: {
                    src: this.SELECTORS.itemPopup,
                    type: 'inline'
                }
            });

            $(this.SELECTORS.contactPopupShowButton).magnificPopup({
                items: {
                    src: this.SELECTORS.contactPopup,
                    type: 'inline'
                }
            })
        },

        toggleCategoryNav: function (event) {
            var $self = $(event.currentTarget),
                $navMenu = $(this.SELECTORS.categoryNavMenu);

            if ($self.hasClass(this.CLASSES.active)) {
                $self.removeClass(this.CLASSES.active);
                $navMenu.addClass(this.CLASSES.hidden)
            } else {
                $(this.SELECTORS.categoryNavItem + '.' + this.CLASSES.active)
                    .removeClass(this.CLASSES.active);
                $self.addClass(this.CLASSES.active);
                $navMenu.removeClass(this.CLASSES.hidden);
                this.moveCategoryNavArrow($self);
            }
        },

        moveCategoryNavArrow: function (elementForAlign) {
            var offsetFromElem = 30; // for visual goodness
            $(this.SELECTORS.categoryNavArrow).css('left', elementForAlign.get(0).offsetLeft - offsetFromElem);
        },

        toggleCatalogueSubmenu: function (event) {
            var $self = $(event.currentTarget);

            $self.closest(this.SELECTORS.catalogueMenuItem)
                .find(this.SELECTORS.catalogueSubMenu)
                .slideToggle();
        }
    };

    $(document).ready(function () {
        app.init();
    });
}());