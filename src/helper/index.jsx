const TOKEN = "token";

export const saveToken = (data) => {
  try {
    localStorage.setItem(TOKEN, data);
  } catch (error) {
    console.log("Error", error);
  }
};

export const getToken = (data) => {
  try {
    return localStorage.getItem(TOKEN);
  } catch (error) {
    console.log("Error", error);
  }
};
