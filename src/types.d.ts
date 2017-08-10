import * as Immutable from 'immutable';

export interface RootState {
  readonly hits: HitMap;
  readonly requesters: RequesterMap;
}

export type HitMap = Immutable.Map<string, Hit>;
export type RequesterMap = Immutable.Map<string, Requester>;

export interface SearchParams {
  readonly selectedSearchType: string;
  readonly sortType: string;
  readonly pageSize: number;
  readonly minReward: number;
  readonly qualifiedFor: 'on' | 'off';
}

export interface Hit {
  readonly title: string;
  readonly requesterName: string;
  readonly requesterId: string;
  readonly reward: string;
  readonly groupId: string;
  readonly turkopticon?: Requester;
}

export interface TOpticonResponse {
  readonly name: string;
  readonly attrs: RequesterScores;
  readonly reviews: number;
  readonly tos_flags: number;
}

export interface RequesterScores {
  readonly comm?: string;
  readonly pay?: string;
  readonly fair?: string;
  readonly fast?: string;
}

/**
 * Each string should be parseFloat()-able into a number.
 */
export interface Requester extends TOpticonResponse {
  readonly id?: string;
}