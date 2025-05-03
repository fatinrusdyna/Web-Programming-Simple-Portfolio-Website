function validateForm(event) {
    event.preventDefault();






    const name = document.forms["contactForm"]["name"].value;
    const email = document.forms["contactForm"]["email"].value;
    const message = document.forms["contactForm"]["message"].value;


    console.log("Validation started");


    if (name === "" || email === "" || message === "") {
      alert("All fields must be filled out");
      return false;
    }


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }


    alert("Form submitted successfully!");
    document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";


    return true;
}




