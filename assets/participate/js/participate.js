$(function () {

    'use strict'

    $("div.refresh-cards").click(function() {
        $.ajax({
            url : '../../api/refresh_cards',
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
    });

    $("div.bingo-play").click(function() {
        if (!confirm("Esta seguro?")) {
            return false;
        }
    });

});
