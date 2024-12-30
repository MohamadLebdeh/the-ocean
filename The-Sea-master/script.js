$(document).ready(function() {
    $('#dive_button').on('click', function() {
        // Handle the dive_button click if needed
    });

    // Initialize smooth scrolling for all links with the class 'smoothScroll'
    $('.smoothScroll').on('click', function(event) {
        event.preventDefault(); // Prevent default anchor click behavior

        var target = $(this).attr('href'); // Get the target section
        var targetPosition = $(target).offset().top; // Get the target position
        var currentPosition = $(window).scrollTop(); // Get the current scroll position
        var diveOffset = 50; // Adjust this value for how far up you want the "dive" to go

        // Perform the dive effect in two steps
        $('html, body').animate({
            scrollTop: currentPosition - diveOffset // Scroll slightly up
        }, 300, 'swing', function() {
            // After the upward scroll, perform the downward scroll
            $('html, body').animate({
                scrollTop: targetPosition // Scroll to the target section
            }, 1000); // Duration of the scroll
        });
    });
});
