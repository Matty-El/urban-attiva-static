function sendMail(contact) {
    emailjs.send("service_wgx3ahn", "contact", {
        "to_name": contact.first_name.value,
        "to_email": contact.email_address.value
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
