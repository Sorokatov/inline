/* App JS */

;(function () {

    var app = {

        SELECTORS: {
            categoryNavItem: '.js-category-nav-item',
            categoryNavMenu: '.js-category-nav-menu',
            categoryNavArrow: '.js-category-nav-arrow'
        },

        CLASSES: {
            active: '_active',
            hidden: '_hidden'
        },

        init: function () {
            this.initEventListeners();
        },

        initEventListeners: function () {
            $(document).on('click', this.SELECTORS.categoryNavItem, this.categoryNavToggle.bind(this));
        },

        categoryNavToggle: function (event) {
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
        }
    };

    $(document).ready(function () {
        app.init();
    });
}());