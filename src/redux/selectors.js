const UserSelector = {
    getUsers(state){
        return state?.users
    },
    getAcessLogin(state){
        return state?.accessLogin
    },
    getUser(state){
        return state?.user
    }
}

export default UserSelector;