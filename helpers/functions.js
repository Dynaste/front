


export const isLog = (tokenStore) => {
    const jwt = tokenStore.jwt;
    const uniqueCode = tokenStore.uniqueCode;

    console.log({jwt})
    console.log({uniqueCode})

    if( jwt || uniqueCode) {
        return true
    }
    else{
        return false
    }
}

export const ValidateEmail = (mail) =>
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    return (false)
}

export const isPasswordStrong = (pwd) => {
    // if(
    //     (/?=.*[a-z]/.test(pwd)) && (/?=.*[A-Z]/.test(pwd)) && (/?=.*[0-9]/.test(pwd)) && pwd.length >= 8)
    // {
    //     return (true)
    // }
    // return (false)

    let re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if(re.test(pwd)){
        return true;
    }
    return false
}