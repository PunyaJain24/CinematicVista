const setAuthState = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
  };
  
  const getAuthState = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  };
  
  export { setAuthState, getAuthState };