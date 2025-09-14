function funn(event) {
  event.preventDefault();

  const form = event.target;
  const data = {
    firstName: form.firstName.value,
    lastName: form.lastName.value,
    email: form.email.value,
    jobTitle: form.jobTitle.value,
    mobile: form.mobile.value,
    dob: form.dob.value,
    address: form.address.value,
    city: form.city.value,
    pincode: form.pincode.value,
  };

  // Save to localStorage
  localStorage.setItem("applicationData", JSON.stringify(data));

  alert("Application Successful");

  form.reset(); 
  return true;
}
