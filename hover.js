$(function() {

    $('body').on('mouseenter', '.box', function(e) {
        var target = $(e.currentTarget); // box that is clicked is target

        target.addClass('hover');
        target.prevAll('.box').addClass('hover');
    });

    $('body').on('mouseleave', '.box', function() {
        var target = $('.box');

        target.removeClass('hover');
        target.prevAll('.box').removeClass('hover');
    });

    // e.stopPropagation stops the event that's set on the box from bubbling up through parent
    $('body').on('click', '.box', function(e) {
        e.stopPropagation();
        highlightCorrectBoxes(e);
        countHighlightedBoxes();
    });


    $('body').on('click','.container', function() {
        $('.box').removeClass('selected');
        countHighlightedBoxes();
    });

    function highlightCorrectBoxes(e) {
        var target = $(e.currentTarget);

        target.addClass('selected');
        target.prevAll('.box').addClass('selected');
        target.nextAll('.box').removeClass('selected');
    }

    function countHighlightedBoxes() {
        return $('.selected').length;
    }

});


