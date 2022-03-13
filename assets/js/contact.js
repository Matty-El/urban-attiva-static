function sendMail(contact) {
    emailjs.send("service_wgx3ahn", "contact_form", {
        "to_first_name": contact.first_name.value,
        "to_last_name": contact.last_name.value,
        "to_email": contact.email_address.value,
        "customer_comments": contact.comments.value
    })
    .then(
        function (response) {
            if (response.status == 200 && response.text == 'OK')
            alert('Your message has been sent Successfully..!!!');
            else
            alert('Sorry there was a problem. Please try again...!');
            console.log("SUCCESS", response);
            location.reload();
        },
        function (error) {
            alert('Sorry there was a problem. Please try again...!');
            console.log("FAILED", error);
        }
    );
    return false;
}
