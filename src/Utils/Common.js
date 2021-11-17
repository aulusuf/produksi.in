// return the user data from the session storage
export const getUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);
  else return null;
};

// return the token from the session storage
export const getToken = () => {
  const token = localStorage.getItem("token");
  if (token) return JSON.parse(token);
  else return null;
};

// remove the token and user from the session storage
export const removeUserSession = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

// set the token and user from the session storage
export const setUserSession = (token, user) => {
  localStorage.setItem("token", JSON.stringify(token));
  localStorage.setItem("user", JSON.stringify(user));
};
