"use server";
const Signup = async (prevState, formData) => {
  const email = formData.get("email");
  const password = formData.get("password");
  let error = {};

  if (!email.includes("@")) {
    error.email = "Invalid email";
  }
  if (password.trim().length < 8) {
    error.password = "Password must be at least 8 characters";
  }

  if (Object.keys(error).length > 0) {
    return {
      error,
    };
  }
};

export default Signup;
