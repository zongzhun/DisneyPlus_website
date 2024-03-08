$(document).ready(() => {
    // setting owl carousel

    let navText = ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"]

    $('#hero-carousel').owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: navText,
        autoplay: true,
        autoplayHoverPause: true
    })

    $('#top-movies-slide').owlCarousel({
        item: 6,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            500: {
                items: 3
            },
            1280: {
                items: 4
            },
            1600: {
                items: 6
            }
        }
    })

    $('.movies_slide').owlCarousel({
        item: 2,
        dots: false,
        nav: true,
        navText: navText,
        margin: 25,
        responsive: {
            500: {
                items: 2
            },
            1280: {
                items: 4
            },
            1600: {
                items: 6
            }
        }
    })

    // Dynamically set data-title attribute for each movie-item
    $('.movie_item img').each(function() {
        var imageAlt = $(this).attr('alt'); // Get the alt text of the image
        $(this).closest('.movie_item').attr('data-title', imageAlt); // Set the data-title attribute to the alt text
    })

    $('#search').on("keyup", function(){
        var value = $(this).val().toLowerCase();
    
        $(".movie_item").filter(function(){
            $(this).toggle($(this).attr('data-title').toLowerCase().indexOf(value) > -1);
        });
    });
})