// JQuery
(function($) {

    // Global Search Top
    $(".btn-search").on("click", function() {
        $("#brown-nav-region .google-cse").slideToggle("1000");
        $("#edit-search-block-form--2").focus();
    });

    // Brown Nav Hamburger Animation
    $(".hamburger").on("click", function() {
        $(".hamburger").toggleClass("is-active");
    });

    // Show/Hide Brown Nav
    $("a#brown-menu-button").on("click keypress", function() {
        $("#u-nav").slideToggle("fast");
        return false;
    });

    // Scroll To Top
    $("#back-to-top").on("click", function(e) {
        e.preventDefault();
        $("html,body").animate({
            scrollTop: 0
        }, 700);
    });

})(jQuery);
