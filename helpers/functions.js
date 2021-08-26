


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

export const refactObjectToArrayResponseApi = (data = {}) => {
    let arr = []
    Object.keys(data).filter(item => {
        return item !== '_options';
    }).forEach(i => {
        arr.push(data[i]);
    })
    return arr;
} 

export const filterParties = (data) => {
    const obj = {incoming: [], previous: []};
    const arr = refactObjectToArrayResponseApi(data);
    arr.forEach((party) => {
        if (new Date(party.date).getTime() > Date.now()) {
            obj.incoming.push({...party});
            obj.incoming = obj.incoming.sort((a, b) => {
                return new Date(a.date).getTime() < new Date(b.date).getTime();
            });
        } else if (new Date(party.date).getTime() < Date.now()) {
            obj.previous.push({...party});
            obj.previous = obj.previous.sort((a, b) => {
                return new Date(a.date).getTime() > new Date(b.date).getTime();
            });
        }
    });
    return obj;
}

export const getNearParty = (parties, type = 'incoming') => {
    try {
        let last = null;
        parties.forEach(p => {
            const current = new Date(p.date).getTime();
            if (type === 'incoming') {
                if (current < Date.now()) {
                    if (!last || current < new Date(last.date).getTime()) {
                        last = {...p};
                    }
                }
            } else if (type === 'previous') {
                if (current > Date.now()) {
                    if (!last || current > new Date(last.date).getTime()) {
                        last = {...p};
                    }
                }
            } else {
                throw "Wrong type, you have to choose: 'incoming' or 'previous'.";
            }
        })
        setParty({...last});
    } catch (err) {
        console.warn({err});
    }
}