import { takeLatest } from "redux-saga";
import { fork } from "redux-saga/effects";
import { fetchAutoCompleteSearch, selectAutoCompleteItem } from './customAutoComplete';
export function* sagas() {
  yield [
    fork(takeLatest, 'FETCH_AUTOCOMPLETE_SEARCH', fetchAutoCompleteSearch),
    fork(takeLatest, 'SELECT_AUTOCOMPLETE_ITEM', selectAutoCompleteItem)
  ];
}
