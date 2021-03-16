import { SupportListItem } from './support-list-item';

export class SupportItem {
    _id: string;
    subject: string;
    userId: string;
    date: number;
    cancel: boolean;
    list: Array<SupportListItem> = [];
    constructor(data) {
        this._id = data._id;
        this.subject = data.subject;
        this.userId = data.userId;
        this.date = data.date;
        this.cancel = data.cancel;
        this.list = data.list.map(item => new SupportListItem(item));
    }
    public addQuestion(question) {
        this.list.push(new SupportListItem({
            answer: "none",
            question: question,
            viewed: true,
            time: new Date().getTime(),
            _id: null
        }))
    }
    public setCancel(data) {
        this.cancel = data;
    }
}