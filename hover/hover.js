$(function() {



    $('body').on('mouseenter', '.star', function(e) {
        var target = $(e.currentTarget); // box that is clicked is target

        target.addClass('hover');
        target.prevAll('.star').addClass('hover');
    });

    $('body').on('mouseleave', '.star', function() {
        var target = $('.star');

        target.removeClass('hover');
        target.prevAll('.star').removeClass('hover');
    });

    // e.stopPropagation stops the event that's set on the box from bubbling up through parent
    $('body').on('click', '.star', function(e) {
        e.stopPropagation();
        highlightCorrectBoxes(e);
        countHighlightedBoxes();
    });


    $('body').on('click','.container', function() {
        $('.star').removeClass('selected');
        countHighlightedBoxes();
    });

    function highlightCorrectBoxes(e) {
        var target = $(e.currentTarget);

        target.addClass('selected');
        target.prevAll('.star').addClass('selected');
        target.nextAll('.star').removeClass('selected');
    }

    function countHighlightedBoxes() {
        var currentStars = $('.selected').length + ' ' + 'stars';

        if ( $('.selected').length === 1) {
            return $('.count_box').text('1 star');
        }
       else {
            return $('.count_box').text(currentStars);  //text in box how many stars selected
        }
    }


});


