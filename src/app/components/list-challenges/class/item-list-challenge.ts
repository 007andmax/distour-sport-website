import { ParticipantChallenge } from "./participant-challenge";

export class ItemListChallenge {
    _id: string;
    index: number;
    bet: number;
    bank: number;
    rank: string; //Junior, Middle, Senior 
    type: string;
    participants: Array<ParticipantChallenge> = [];
    constructor(data) {
        this._id = data._id;
        this.index = data.index;
        this.bet = data.bet;
        this.bank = data.bank;
        this.rank = data.rank;
        this.type = data.type;
        this.participants = data.participants.map(item => {
            return new ParticipantChallenge(item);
        });
    }
}