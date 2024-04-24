const validData = (email,password) => {
    const verifyEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email) ;
    const verifyPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password) ;

    if(!verifyEmail) return "Email is not valid";
    if(!verifyPassword) return "password is not valid";

    return null;
};

export default validData;