const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// min 5 digits max 20 digits
const phoneRegex = /^[0-9]{5,20}$/;

const validate = (data: Data): FormErrors => {
  const errors: FormErrors = {};

  if (!data.name.trim()) {
    errors.name = "Name is required";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!emailRegex.test(data.email)) {
    errors.email = "Invalid email format";
  }

  if (!data.phone.trim()) {
    errors.phone = "Phone number is required";
  } else if (!phoneRegex.test(data.phone)) {
    errors.phone = "Invalid phone number";
  }

  if (!data.about.trim()) {
    errors.about = "About is required";
  } else if (data.about.length < 10) {
    errors.about = "About must be at least 10 characters";
  }

  if (!data.role.trim()) {
    errors.role = "Role is required";
  }

  return errors;
};

export default validate;
