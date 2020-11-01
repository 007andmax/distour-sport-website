export class User {
    _id: string;
    ban: boolean;
    money: number;
    name: string;
    photo: string;
    email: string;
    rank: string;
    current_experience: number;
    required_experience: number;
    role: string;
    anonimno: boolean = true;
    constructor(data = null) {
         if (data) {
       /* this.ban = false;
            this.current_experience = 0;
            this.email = "distourandmax@gmail.com";
            this.money = 0.25;
            this.name = "Maxim Ivanov";
            this.photo = "https://lh6.googleusercontent.com/-cZLHZLvuTCc/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclvkj7nNb7zla-layETwIxmDpAp8w/s96-c/photo.jpg"
            this.rank = "JUNIOR";
            this.required_experience = 100;
            this.role = "USER";
            this._id = "5f626bc9cd3e3f46b51e51e2";
           this.anonimno = false;*/
           
             this._id = data._id;
                this.ban = data.ban;
                this.money = data.money;
                this.name = data.name;
                this.photo = data.photo;
                this.email = data.email;
                this.rank = data.rank;
                this.current_experience = data.current_experience;
                this.required_experience = data.required_experience;
                this.role = data.role;
                this.anonimno = false; 
                
        }
    }
    public isAnonimno() {
        return this.anonimno;
    }

}