import { ChallengeItemParticipant } from './socket-challenge-item-participant';

export interface ChallengeItem {
    _id: string;
    index: number;
    bet: number;
    bank: number;
    type: string;
    rank: string;
    participants: Array<ChallengeItemParticipant>;
}