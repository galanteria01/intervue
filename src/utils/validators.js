export const validateEmail = (email) => {
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) return;
  return "Email is invalid";
}

export const validatePassword = (password) => {
  if (password.length < 8) return "Password length is small"
}