import React,{PureComponent} from 'react';
import '../styles/line-item-styles.css';

class EventLine extends PureComponent{


    constructor(props){
        super(props);
    }


    render(){
        return(
          <div className="line-container">
              <div className="cell-container">
            <img className="imageStyle" src={this.props.logo}/>
              </div>
              <div className="name-style">
              <p>{this.props.name}</p>
              </div>
              <div className="unit-container">
                <p>{this.props.value}</p>
                  <p>{this.props.unit}</p>
              </div>
              <div className="cell-container">
              <p>{this.props.date}</p>
              </div>
          </div>
        );
    }
}

export default EventLine;