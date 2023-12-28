const User = {
    _email: 's@s.com',
    _password: "abc",

    get email(){
        return this._email.toUpperCase()
    },

    set email(val){
        this._email = val
    }

}

// console.log(User.email)

const tea = Object.create(User);

console.log(tea.email);

