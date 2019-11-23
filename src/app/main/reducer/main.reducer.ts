import { createFeatureSelector, createSelector } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { increment, decrement, reset, MainAction, MainActions, MainActionTypes } from '../action/mian.action';

export interface State extends EntityState<Comment> {
    loading: boolean;
    comment: string;
    error?: any;
}

export const adapter: EntityAdapter<Comment> = createEntityAdapter<Comment>();

export const initialState: State = adapter.getInitialState({
    loading: false,
    comment: ''
});

export function reducer(
    state = initialState,
    action: MainActions
  ): State {
    switch (action.type) {
      case MainActionTypes.Main: {
        return state;
      }
      default: {
        return state;
      }
    }
}

const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();
export const selectChat = createFeatureSelector<State>('chat');
export const getChatLoading = createSelector(selectChat, state => state.loading);
export const selectAllChats = createSelector(selectChat, selectAll);
