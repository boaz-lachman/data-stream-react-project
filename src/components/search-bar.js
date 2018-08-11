import React, {Component} from 'react'
import {connect} from "react-redux";
import {filterUpdate} from "../actions";


class SearchBar extends Component{

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
          <div>
              <input type={"text"}
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