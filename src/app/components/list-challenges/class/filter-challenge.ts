export class FilterChallenge {
    type: string = "WORKOUT";
    rank: string = "JUNIOR";
    sort: string = "asc"
    page: number = 0;
    constructor() {

    }
    public getDataForRequest() {
        return {
            type: this.type,
            rank: this.rank,
            sort: this.sort,
            page: this.page,
        }
    }
}