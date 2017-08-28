//scripts for the testimonial carousel
$('document').ready(function () {
    $("#subscribe").click(function (event) {
        event.preventDefault();
        var subscribedemail = $("#emailaddress").val();
        alert(subscribedemail + " has been successfully subscribed. Thank you for joining our mailing list. ");
        $("#emailaddress").val(""); //clear input field after successfully subscribing.

    });

});
