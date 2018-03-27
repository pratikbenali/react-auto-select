import React from "react";
import { connect } from "react-redux";
import CustomAutoComplete from './CustomAutoComplete';
// Home page component
export class Home extends React.Component {
  constructor(props) {
    super(props);
  }


  onChangeAutoComplete(value) {
    this.props.dispatch({
      type: 'FETCH_AUTOCOMPLETE_SEARCH',
      searchQuery: value,
    });
  }

  onSelectAutoComplete(selectedItem){
    this.props.dispatch({
      type: 'SELECT_AUTOCOMPLETE_ITEM',
      selectedItem: selectedItem,
    });
  }
  // render
  render() {
    return (
      <div className="page-home">
        <CustomAutoComplete {...this.props} onChangeAutoComplete={this.onChangeAutoComplete.bind(this)} 
           onSelectAutoComplete={this.onSelectAutoComplete.bind(this)}
        />
        {this.props.selectedItem && <h3>Selected Item: {this.props.selectedItem.login}</h3>}
      </div>
    );
  }
}


// export the connected class
function mapStateToProps(state) {
  return {
    searchResult: state.customAutoComplete.searchResult,
    selectedItem: state.customAutoComplete.selectedItem
  };
}
export default connect(mapStateToProps)(Home);