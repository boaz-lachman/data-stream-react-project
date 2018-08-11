import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EventLine from "./components/event-line";
import Sockette from 'sockette';
import moment from 'moment';
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
            onopen: e => {console.log('Connected!', e)
                this.ws.json({type: 'ping'});},
            onmessage: e => {
                this.props.itemListUpdate(this.props.listData,JSON.parse(e.data))},
            onreconnect: e => console.log('Reconnecting...', e),
            onmaximum: e => console.log('Stop Attempting!', e),
            onclose: e => console.log('Closed!', e),
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
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <h1 className="App-intro">OH Hi asdasdasd Mark!</h1>
          <SearchBar/>
          <DataList
          items={this.props.listData.filter((value) => {
              return this.props.filterText === '' ? true :
                  value.name.toLowerCase().indexOf(this.props.filterText) != -1;
          })}/>
          <div style={{position: 'sticky', bottom: 0}}>
              {this.props.listData.length} Items
          </div>
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
