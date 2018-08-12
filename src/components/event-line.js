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
              <div className="name-container-style">
                <span className="name-style">{this.props.name}</span>
              </div>
              <div className="unit-container">
                <p className="unit-style">{this.props.value}</p>
                  <p className="unit-style">{this.props.unit}</p>
              </div>
              <div className="date-container-style">
              <p className="date-style">{this.props.date}</p>
              </div>
          </div>
        );
    }
}

export default EventLine;