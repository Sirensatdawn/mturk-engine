import { Hit, HitMap } from '../types';
import { HitPageAction } from '../actions/hits';
import { TOpticonAction } from '../actions/turkopticon';
import { FETCH_HIT_PAGE_SUCCESS, FETCH_TURKOPTICON_SUCCESS } from '../constants';
import { Map } from 'immutable';
import sampleHits from '../utils/sampleHits';

const initial: HitMap = Map<string, Hit>(sampleHits);

type FetchAction = HitPageAction | TOpticonAction;

export default (state = initial, action: FetchAction): HitMap => {
  let partialState: HitMap | undefined;

  switch (action.type) {
    case FETCH_HIT_PAGE_SUCCESS:
      partialState = action.data;
      break;
    case FETCH_TURKOPTICON_SUCCESS:
      partialState = state
        .map((hit: Hit): Hit => ({
          ...hit,
          turkopticon: action.data.get(hit.requesterId)
        }))
        .toMap();
      break;
    default:
      return state;
  }
  return state.merge(partialState);
};