function submitForm() {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const genderCheckboxes = document.querySelectorAll('input[name="gender"]:checked');
    const genderValues = Array.from(genderCheckboxes).map(checkbox => checkbox.value);
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
  
    // Validate the form (add your validation logic here)
    const isValidEmail = validateEmail(email);
    const isValidMobile = validateMobile(mobile);

    if (
        firstName &&
        lastName &&
        dob &&
        country &&
        genderValues.length > 0 &&
        profession &&
        isValidEmail &&
        isValidMobile
      ) {
      const results = {
        'First Name': firstName,
        'Last Name': lastName,
        'Date of Birth': dob,
        'Country': country,
        'Gender': genderValues.join(', '),
        'Profession': profession,
        'Email': email,
        'Mobile Number': mobile,
      };
  
      const popup = document.getElementById('popup');
      const popupResults = document.getElementById('popup-results');
      const popupContent = document.querySelector('.popup-content');
  
      let popupHTML = '<ul>';
      for (const key in results) {
        popupHTML += `<li><strong>${key}:</strong> ${results[key]}</li>`;
      }
      popupHTML += '</ul>';
  
      popupResults.innerHTML = popupHTML;
      popup.style.display = 'block';
    }
    else
    {
        alert("kindly fill all the fields properly")
    }
  }
  
  function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
    document.getElementById('survey-form').reset();
  }
  function validateEmail(email) {
    
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
  
  function validateMobile(mobile) {
 
    const mobileRegex = /^\d{10}$/;
    return mobileRegex.test(mobile);
  }