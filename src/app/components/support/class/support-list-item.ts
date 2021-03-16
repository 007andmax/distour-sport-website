export class SupportListItem {
    answer: string;
    question: string;
    viewed: boolean;
    time: number;
    _id: string;
    constructor(data) {
        this.answer = data.answer;
        this.question = data.question;
        this.viewed = data.viewed;
        this.time = data.time;
        this._id = data._id;
    }
    public setViewed(data) {
        this.viewed = data;
    }
    public setAnswer(data) {
        this.answer = data;
    }
    public setTime(data) {
        this.time = data;
    }
}