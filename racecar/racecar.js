$(document).ready(function() {

    var player1 = $('#player1');
    var player2 = $('#player2');

    var course_length = $('.lane').width();
    var piece_length = player1.width();


    $(document).on('keyup', function(event) {


        if (event.keyCode === 81) {    // if 'q' is pressed (lane 1)
            var current_left = parseInt(player1.css('left'));
            current_left += piece_length;
            player1.css("left", current_left);
            if (current_left + piece_length >= course_length) {
                // player1 has won
                player1Wins();
                reset();
            }

        } else if (event.keyCode === 80) {   // if 'p' is pressed (lane 2)

            var current_left = parseInt(player2.css('left'));
            current_left += piece_length;
            player2.css("left", current_left);
            if (current_left + piece_length >= course_length) {
                // player2 has won
                player2Wins();
                reset();
            }
        }
    });


    function player1Wins () {
        $('.winner').show("slow", function (){
            $('.winner').html("Player 1 Wins!!")
        });
    }

    function player2Wins () {
        $('.winner').show("slow", function (){
            $('.winner').html("Player 2 Wins!!")
        });
    }

    function reset() {
        player1.css({"left": 0});
        player2.css({"left": 0});
    }

});

