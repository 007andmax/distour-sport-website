export class Alert {
    type: string;
    message: string;
    show: boolean = false;
    constructor() {
        
    }
    public setData(type, message) {
        this.type = type;
        this.message = message;
        this.show = true;
    }
    public close() {
        this.show = false;
    }
}