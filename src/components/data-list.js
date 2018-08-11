import React, { PureComponent } from 'react';
import '../App.css';
import EventLine from "./event-line";
import moment from 'moment';


class DataList extends PureComponent {
    constructor(props){
        super(props);
        this.renderLines = this.renderLines.bind(this);
        this.state = {
            items: props.items,
        }
    }

    componentWillReceiveProps(newProps){
        this.setState({items: newProps.items})
    }

    renderLines(){
        let lines = this.state.items.map((value, index) => {
            return (
                <div
                    key={value.name+ value.device + ''}
                    className={index === 0 ? "Separator-first-line" : "Separator-line"}>
                    <EventLine
                        logo={value.logo}
                        name={value.name}
                        value={value.value}
                        unit={value.unit}
                        date={moment(value.date).format('M/D/YYYY, hh:MM:SS A')}
                    />
                </div>)
        });
        return lines;
    }



    render() {
        return (
            <div>
                <ul className="List-container">
                    {this.renderLines()}
                </ul>
            </div>
        );
    }
}

export default DataList;
