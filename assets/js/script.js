// Rest form on closing modal
$(document).ready(function() {
    $("#contactModal").on("hidden.bs.modal", function(e) {
        $(this).find('.contact-form')[0].reset();
    });
});

// $(document).ready(function() {
//     $("#thankYouToast").click(function(e) {
//         $('.toast').toast('show');
//     });
// });
//
// $(document).ready(function() {
//     $("#contactModal").on("hidden.bs.modal", function(e) {
//         $('.toast').toast('show');
//         $(this).find('.contact-form')[0].reset();
//     });
// });
