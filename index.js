(function(){
    emailjs.init("BK27Otp71kgHbeNb1");
})();

function sendEmail(e) {
    e.preventDefault();

    var templateParams = {
        name: document.getElementById("name").value,
        father_name: document.getElementById("father_name").value,
        last_name: document.getElementById("last_name").value,
        family_members: document.getElementById("family_members").value,
        phone: document.getElementById("phone").value,
        mobile: document.getElementById("mobile").value,
        email: document.getElementById("email").value,
        address: document.getElementById("address").value,
        blood_group: document.getElementById("blood_group").value,
    };

    emailjs.send('service_i0ysc4r', 'template_h88b03v', templateParams)
        .then(function(response) {
            alert('The information you entered is incorrect please try again', response.status, response.text);
        }, function(error) {
            alert('Error please try again', error);
        });
}
