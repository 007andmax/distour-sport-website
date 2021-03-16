export class FilterSupport {
    page: number = 0;
    cancel: boolean = false;
    constructor() {

    }
    public setCancel(data) {
        this.cancel = data;
    }
    public getDataForRequest() {
        return {
            page: this.page,
            cancel: this.cancel
        }
    }
}