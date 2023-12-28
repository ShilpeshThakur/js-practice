class User{
    constructor(email,password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(val){
        this._email = val
    }
    get password(){
        // return this._password.toUpperCase()
        return `${this._password}Shilpesh`
    }
    set password(value){
        this._password = value
    }
}

const shilpesh = new User("S@s.com","abc")
console.log(shilpesh.password);
console.log(shilpesh.email);
