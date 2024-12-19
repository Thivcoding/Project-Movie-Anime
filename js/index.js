$(document).ready(function () {
    $('#btnsee').on('click', function () {
        $('.height-content').css("transition", ".5s ease-in-out");
        var content = $('.height-content');
        var currentHeight = parseInt(content.css("height")); // Convert height to a number
        var currentWidth = content.outerWidth(); // Get width as a number

        if (currentHeight > 0) {
            // If height is not 0, collapse
            content.css("height", "0");
        } else {
            // Expand based on width conditions
            if (currentWidth < 576) {
                content.css("height", "1110px");
            } else if (currentWidth < 992) {
                content.css("height", "500px");
            } else {
                content.css("height", "280px");
            }
        }
    });
    // drom-chil-anime
    $('#drop-toggle-anime-1').on('click', function () {
        $('.menu-sidebar-anime').toggleClass('menu-sidebar-anime-0 menu-sidebar-anime-1');
        $('#drop-toggle-anime-2').removeClass("d-none")
        $('#drop-toggle-anime-1').addClass("d-none")
        $('.anime').css("color","red");
        $('.anime').css("transition", ".5s ease-in-out");
        $('.anime').removeClass("text-light");
    });
    $('#drop-toggle-anime-2').on('click', function () {
        $('.menu-sidebar-anime').toggleClass('menu-sidebar-anime-0 menu-sidebar-anime-1');
        $('#drop-toggle-anime-2').addClass("d-none")
        $('#drop-toggle-anime-1').removeClass("d-none")
        $('.anime').css("transition", ".5s ease-in-out");
        $('.anime').addClass("text-light");
    });
    // drom-chil-movies
    $('#drop-toggle-movies-1').on('click', function () {
        $('.menu-sidebar-movies').toggleClass('menu-sidebar-movies-0 menu-sidebar-moveis-1');
        $('#drop-toggle-movies-2').removeClass("d-none")
        $('#drop-toggle-movies-1').addClass("d-none")
        $('.movies').css("color","red");
        $('.movies').css("transition", ".5s ease-in-out");
        $('.movies').removeClass("text-light");
    });
    $('#drop-toggle-movies-2').on('click', function () {
        $('.menu-sidebar-movies').toggleClass('menu-sidebar-movies-0 menu-sidebar-moveis-1');
        $('#drop-toggle-movies-2').addClass("d-none")
        $('#drop-toggle-movies-1').removeClass("d-none")
        $('.movies').css("transition", ".5s ease-in-out");
        $('.movies').addClass("text-light");
    });
    // drom-chil-manga
    $('#drop-toggle-manga-1').on('click', function () {
        $('.menu-sidebar-manga').toggleClass('menu-sidebar-manga-0 menu-sidebar-manga-1');
        $('#drop-toggle-manga-2').removeClass("d-none")
        $('#drop-toggle-manga-1').addClass("d-none")
        $('.manga').css("color","red");
        $('.manga').css("transition", ".5s ease-in-out");
        $('.manga').removeClass("text-light");
    });
    $('#drop-toggle-manga-2').on('click', function () {
        $('.menu-sidebar-manga').toggleClass('menu-sidebar-manga-0 menu-sidebar-manga-1');
        $('#drop-toggle-manga-2').addClass("d-none")
        $('#drop-toggle-manga-1').removeClass("d-none")
        $('.manga').css("transition", ".5s ease-in-out");
        $('.manga').addClass("text-light");
    });
    // drom-chil-blog
    $('#drop-toggle-blog-1').on('click', function () {
        $('.menu-sidebar-blog').toggleClass('menu-sidebar-blog-0 menu-sidebar-blog-1');
        $('#drop-toggle-blog-2').removeClass("d-none")
        $('#drop-toggle-blog-1').addClass("d-none")
        $('.blog').css("color","red");
        $('.blog').css("transition", ".5s ease-in-out");
        $('.blog').removeClass("text-light");
    });
    $('#drop-toggle-blog-2').on('click', function () {
        $('.menu-sidebar-blog').toggleClass('menu-sidebar-blog-0 menu-sidebar-blog-1');
        $('#drop-toggle-blog-2').addClass("d-none")
        $('#drop-toggle-blog-1').removeClass("d-none")
        $('.blog').css("transition", ".5s ease-in-out");
        $('.blog').addClass("text-light");
    });
    // drom-chil-pages
    $('#drop-toggle-pages-1').on('click', function () {
        $('.menu-sidebar-pages').toggleClass('menu-sidebar-pages-0 menu-sidebar-pages-1');
        $('#drop-toggle-pages-2').removeClass("d-none")
        $('#drop-toggle-pages-1').addClass("d-none")
        $('.pages').css("color","red");
        $('.pages').css("transition", ".5s ease-in-out");
        $('.pages').removeClass("text-light");
    });
    $('#drop-toggle-pages-2').on('click', function () {
        $('.menu-sidebar-pages').toggleClass('menu-sidebar-pages-0 menu-sidebar-pages-1');
        $('#drop-toggle-pages-2').addClass("d-none")
        $('#drop-toggle-pages-1').removeClass("d-none")
        $('.pages').css("transition", ".5s ease-in-out");
        $('.pages').addClass("text-light");
    });
});