import React from "react";

export default class CustomAutoComplete extends React.Component {
    // render
    constructor(props) {
        super(props);
        this.state = {
            autoCompleteControl: false,
            currentSearchItem: 0,
            searchValue: ''
        }
    }

    onFocusAutoComplete(e) {
        this.setState({
            autoCompleteControl: true
        })
    }

    onBlurAutoComplete(e) {
        this.setState({
            autoCompleteControl: false
        })
    }

    onKeyChangeAutoComplete(event) {
        const keyCode = event.keyCode;
        const { searchResult } = this.props;
        let { currentSearchItem } = this.state;
        const maxIndexlength = searchResult.length;
        if (maxIndexlength > 0) {
            if (keyCode === 40 && maxIndexlength > 0 && currentSearchItem < maxIndexlength - 1) {
                currentSearchItem++;
            } else if (keyCode === 38 && currentSearchItem > 0) {
                currentSearchItem--;
            }
            this.setState({
                currentSearchItem
            }, () => this.scrollToItem())
        }
    }

    onChangeAutoComplete(e) {
        console.log(e)
        this.setState({
            searchValue: e.target.value
        }, () => this.props.onChangeAutoComplete(this.state.searchValue))

    }

    scrollToItem() {
        const { currentSearchItem } = this.state;
        const listElement = document.getElementById('auto-complete-list');
        listElement.scrollTop = currentSearchItem * 50;
    }

    onSelectAutoComplete(user) {
        this.setState({
            searchValue: user.login
        })
        this.props.onSelectAutoComplete(user);
        this.onBlurAutoComplete();
    }

    render() {
        const { searchResult } = this.props;
        const { autoCompleteControl, currentSearchItem, searchValue } = this.state;
        return (
            <div className="page-home">
                <h4>AutoComplete</h4>
                <div className="auto-list">
                    <input type="text" value={searchValue} onChange={(e) => this.onChangeAutoComplete(e)}
                        onFocus={(e) => this.onFocusAutoComplete(e)} onKeyDown={(e) => this.onKeyChangeAutoComplete(e)} />
                    {searchResult.length > 0 && autoCompleteControl && <div className="auto-complete">
                        <ul className="auto-complete-list" id="auto-complete-list">
                            {
                                searchResult.map((user, index) => (
                                    <li className={currentSearchItem === index ? 'active auto-complete-list-item' : 'auto-complete-list-item'} key={index} onClick={this.onSelectAutoComplete.bind(this, user)}>

                                        <img src={user.avatar_url} />
                                        <label>{user.login}</label>

                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    }
                </div>
            </div>
        );
    }
}
