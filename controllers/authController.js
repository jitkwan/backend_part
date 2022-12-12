const register = async(req,res) => { //13
    res.send('register user')
}

const login = async(req,res) => {  //14
    res.send('login user')
}

const updateUser = async(req,res) => {  //15
    res.send('updateUser')
}

export {register, login, updateUser} //16