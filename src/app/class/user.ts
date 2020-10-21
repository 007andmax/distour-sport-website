export class User {
    _id:string;
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
			
			this._id = "test_id";
this.ban = false;
this.money = 500;
this.name = "Max";
this.photo = "url";
this.email = "max@gmail.com";
this.rank = "JUNIOR";
this.current_experience = 0;
this.required_experience = 100;
this.role = "USER";
this.anonimno = false;
        /*    this._id = data._id;
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
			*/
        }
    }
    public isAnonimno () {
        return this.anonimno;
    }

}