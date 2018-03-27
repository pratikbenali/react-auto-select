const  initialState = {
     searchResult: [],
     selectedItem: {}
}
export default function customAutoComplete(state = initialState, action) {
    switch (action.type) {
      case 'FETCH_AUTOCOMPLETE_SEARCH_SAVE':
        return {
            ...state,
            searchResult: action.searchList
        };
        case 'SELECT_AUTOCOMPLETE_ITEM_SAVE':
        return {
          ...state,
          selectedItem: action.selectedItem
        }
      default:
        return state;
    }
  }