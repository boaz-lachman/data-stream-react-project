import React, {PureComponent} from 'react'
import {connect} from "react-redux";
import '../styles/search-bar-styles.css';
import {filterUpdate} from "../actions";


class SearchBar extends PureComponent{

    constructor(props){
        super(props);
        this.handleChangeFilter = this.handleChangeFilter.bind(this);
    }

    handleChangeFilter(event){
        let changedText = event.target.value;
        this.props.filterUpdate(changedText);
    }

    render(){
        return(
          <div className="Search-bar-container">
              <img className="Search-bar-image"
                   src={require('../images/magnifying-glass-image.png')}/>
              <input
                  className="Search-bar-text-input"
                  type={"text"}
                     value={this.props.filterText}
                     onChange={this.handleChangeFilter}/>
          </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {filterText} = state.streamReducer;
    return {filterText}
};

export default connect(mapStateToProps, {
    filterUpdate
})(SearchBar)