import React, {Component} from 'react';

class ClassInterval extends Component {
    constructor(){
        super();
        this.state = {
            timer : 0,
            d : ''
        }
    }
    componentDidMount() {
        this.interval = setInterval(()=>{
            this.setState(prevState => ({
                timer : prevState.timer + 1
            }))
            },1000)
        }
     componentWillUnmount() {
        clearInterval(this.interval);

     }


    render() {
        return (
            <div>
                <p>Interval - {this.state.timer}</p>
                <button onClick={()=>clearInterval(this.interval)}>Clear</button>
            </div>
        );
    }
}

export default ClassInterval;