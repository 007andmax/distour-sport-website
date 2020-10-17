import { Judge } from './judge';
import { ParticipantChallenge } from './participant-challenge';

export class InfoChallenge {
    _id: string;
    index: number;
    bet: number;
    bank: number;
    createAt: number;
    type: string; //workout
    rank: string; //Junior, Middle, Senior 
    participants: Array<ParticipantChallenge> = [];
    cancel: boolean;
    judge: Judge = null;
    constructor(data) {
        this._id = data._id;
        this.index = data.index;
        this.bet = data.bet;
        this.bank = data.bank;
        this.createAt = data.createAt;
        this.type = data.type;
        this.rank = data.rank;
        this.participants = data.participants.map(item => new ParticipantChallenge(item));
        this.cancel = data.cancel;
        if (data.judge) {
            this.judge = new Judge(data.judge);
        }
       
    }
}