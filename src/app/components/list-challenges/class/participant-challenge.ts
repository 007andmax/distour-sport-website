export class ParticipantChallenge {
    name: string;
    photo: string;
    rank: string;
    rating: number;
    video: string;
    winner: boolean;
    _id: string;
    constructor(data) {
        this.name = data.name;
        this.photo = data.photo;
        this.rank = data.rank;
        this.rating = data.rating;
        this.video = data.video;
        this.winner = data.winner;
        this._id = data._id;
    }
    
}