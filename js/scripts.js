//scripts for the testimonial carousel
$('document').ready(function() {
  $("#subscribe").click(function(event) {
    event.preventDefault();
    var subscribedemail = $("#emailaddress").val();
    $('p#output').text(subscribedemail + " has been successfully subscribed. Thank you for joining our mailing list. ");

  });

});
