$(document).ready(function() {
    $("#registrationForm").submit(function(event) {
        event.preventDefault();

        // Perform form validation
        if (!validateForm()) {
            return;
        }

        // Perform AJAX registration request
        $.ajax({
            type: "POST",
            url: "php/register.php",
            data: $(this).serialize(),
            success: function(response) {
                // Handle the response (e.g., show a success message)
            }
        });
    });

    function validateForm() {
        // Implement form validation logic
        // Return true if the form is valid, false otherwise
        // You can use additional JavaScript/jQuery to perform validation checks
        return true;
    }
});
$(document).ready(function() {
    $("#registrationForm").submit(function(event) {
        event.preventDefault();

        // Perform form validation
        if (!validateForm()) {
            return;
        }

        // Serialize the form data
        var formData = $(this).serialize();

        // Perform AJAX registration request
        $.ajax({
            type: "POST",
            url: "php/register.php",
            data: formData,
            success: function(response) {
                // Handle the response (e.g., show a success message)
                if (response === "Registration successful") {
                    // Redirect to the login page with email parameter
                    window.location.href = "login.html?email=" + encodeURIComponent($('#email').val());
                } else {
                    // Handle registration failure
                    alert("Registration failed. Please try again.");
                }
            }
        });
    });

    function validateForm() {
        // Implement form validation logic
        // Return true if the form is valid, false otherwise
        // You can use additional JavaScript/jQuery to perform validation checks
        return true;
    }
});
$(document).ready(function() {
    // Fetch user details and populate the form
    $.ajax({
        type: "GET",
        url: "php/fetch_profile.php",
        success: function(response) {
            // Parse the JSON response and fill in the form fields
            var userData = JSON.parse(response);
            $("#firstName").val(userData.firstName);
            $("#lastName").val(userData.lastName);
            $("#age").val(userData.age);
            $("#dob").val(userData.dob);
            $("#contact").val(userData.contact);
        }
    });

    $("#profileForm").submit(function(event) {
        event.preventDefault();

        // Perform AJAX profile update request
        $.ajax({
            type: "POST",
            url: "php/update_profile.php",
            data: $(this).serialize(),
            success: function(response) {
                // Handle the response (e.g., show a success message)
                alert(response);
            }
        });
    });
});