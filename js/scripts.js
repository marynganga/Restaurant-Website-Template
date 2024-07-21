$(document).ready(function () {
    $("#subscribe").on("click", function (event) {
        event.preventDefault();
        
        var subscribedEmail = $("#emailaddress").val().trim();
        
        if (subscribedEmail) {
            alert(subscribedEmail + " has been successfully subscribed. Thank you for joining our mailing list.");
            $("#emailaddress").val(""); // Clear input field after successfully subscribing
        } else {
            alert("Please enter a valid email address.");
        }
    });
});
