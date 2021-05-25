$(function () {

    'use strict'

    $("button.play-execute").click(function() {

        var host = 'ws://http://localhost/bingo/public/index.php/api/play_board';
        var socket = new WebSocket(host);
        socket.onmessage = function(e) {
            console.log("e.data:: " + e.data);
        };


        /*
        $.ajax({
            url : '../api/play_board',
            data : {
                id : $("div.refresh-cards").data("card")
            },
            type : "POST",
            dataType : "html",
            beforeSend: function() {
                $(".bingo-cards-box").html("Process...");
            },
            success : function(data) {
                $(".bingo-cards-box").html(data);
            },
            error : function(xhr, status) {
                console.log("cards :: error");
            },
            complete : function(xhr, status) {

            }
        });
        */

    });

});
