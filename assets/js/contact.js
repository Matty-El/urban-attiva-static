function sendMail(contact) {
    emailjs.send("service_wgx3ahn", "contact_form", {
        "to_first_name": contact.first_name.value,
        "to_last_name": contact.last_name.value,
        "to_email": contact.email_address.value,
        "customer_comments": contact.comments.value
    })
    .then(
        function (response) {
            console.log("SUCCESS", response);
            location.reload();
        },
        function (error) {
            console.log("FAILED", error);
        }
    );
    return false;
}


$("#contact-form").on("hidden.bs.modal", function () {
    $(this).find("contact-form").trigger("reset");
});
