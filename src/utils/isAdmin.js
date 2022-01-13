const isAdmin = () => {
  return !!localStorage.getItem("isLogin");
};

export default isAdmin;
