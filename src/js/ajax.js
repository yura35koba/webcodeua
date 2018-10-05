$(document).ready(function(){

    // E-mail Ajax Send

    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "php/mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Спасибо, Ваша заявка отправлена!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });


});