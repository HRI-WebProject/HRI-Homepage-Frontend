const isAdmin = () => {
  return !!sessionStorage.getItem("isLogin");
};

export default isAdmin;
