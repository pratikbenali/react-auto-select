import { call, put } from "redux-saga/effects";
import FetchApi from "../api/fetchApi";

// fetch the user's list
export function* fetchAutoCompleteSearch(action) {
    // call the api to get the users list
    let searchList = [];
    if (action.searchQuery) {
        const response = yield call(FetchApi.fetchAutoCompleteSearch, action.searchQuery);
        searchList = response.items;
    }
    yield put({
        type: 'FETCH_AUTOCOMPLETE_SEARCH_SAVE',
        searchList: searchList,
    });
}

export function* selectAutoCompleteItem(action) {
    yield put({
        type: 'SELECT_AUTOCOMPLETE_ITEM_SAVE',
        selectedItem: action.selectedItem,
    });
}
