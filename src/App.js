import React, { Component } from 'react';
import './App.css';
import Sockette from 'sockette';
import {connect} from "react-redux";
import {itemListUpdate} from "./actions";
import DataList from "./components/data-list";
import SearchBar from "./components/search-bar";




class App extends Component {
    ws;
    constructor(props){
        super(props);
    }


    componentDidMount(){
        this.ws = new Sockette('ws://events-stream.herokuapp.com/', {
            timeout: 5e3,
            maxAttempts: 10,
            onopen: e => {console.log('Connected!', e);
                this.ws.json({type: 'ping'});},
            onmessage: e => {
                this.props.itemListUpdate(this.props.listData,JSON.parse(e.data))},
            onerror: e => console.log('Error:', e)
        });

    }

    componentWillUnmount(){
        this.ws.close();
    }



  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h1 className='App-text-header'>Axonize Stream</h1>
            <h2 className='App-text-header-desc'>Review and filter the data stream</h2>
        </header>
          <SearchBar/>
          <DataList
          items={this.props.listData.filter((value) => {
              return this.props.filterText === '' ? true :
                  value.name.toLowerCase().indexOf(this.props.filterText) != -1;
          })}/>
          <footer className="footer-container">
              <p className="footer-text">{this.props.listData.length} Items</p>
          </footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    const {filterText, listData} = state.streamReducer;
    return {filterText, listData}
};

export default connect(mapStateToProps, {
    itemListUpdate
})(App)
