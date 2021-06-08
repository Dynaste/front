


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