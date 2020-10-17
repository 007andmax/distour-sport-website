export class Judge {
    _id: string;
    name: string;
    photo: string;
    rank: string;
    role: string;
    constructor (data) {
        this._id = data._id;
        this.name = data.name;
        this.photo = data.photo;
        this.rank = data.rank;
        this.role = data.role;
    }
}