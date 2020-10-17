import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ItemListChallenge } from 'src/app/components/list-challenges/class/item-list-challenge';
import { environment } from 'src/environments/environment';
import { map, tap } from 'rxjs/operators';
import { InfoChallenge } from 'src/app/components/list-challenges/class/info-challenge';
@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  private apiUrl = environment.apiUrl;
  constructor(
    private http: HttpClient,) { }

  /**
   * add
   */
  public add(index, bet, rank, type) {
    return this.http.post(`${this.apiUrl}challenge/add`, { index: index, bet: bet, rank: rank, type: type });
  }
  public setWinner(challenge_id, user_id) {
    return this.http.post(`${this.apiUrl}challenge/setwinner`, { challenge_id: challenge_id, user_id: user_id });
  }
  public addJudge(challenge_id) {
    return this.http.post(`${this.apiUrl}challenge/addjudge`, { challenge_id: challenge_id });
  }
  public participate(_id) {
    return this.http.post(`${this.apiUrl}challenge/participate`, { _id: _id });

  }
  public getList(data) {
    return this.http.get(`${this.apiUrl}challenge/list?type=${data.type}&page=${data.page}&rank=${data.rank}&sort=${data.sort}`).pipe(map((data: any) => data.list.map(item => new ItemListChallenge(item))));
  }
  public getChallenge(_id) {
    return this.http.get(`${this.apiUrl}challenge?_id=${_id}`).pipe(map((data: any) => new InfoChallenge(data)));

  }
}
