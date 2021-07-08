import React, { Component } from 'react';

let runner: any = null;

export default class DigitalClock extends Component<any, any>{
  constructor(props: any){
    super(props);
    this.state = {
      time: new Date()
    }
  }
  componentDidMount(){
    runner = setInterval(() => {
      this.setState({time: new Date()});
    }, 1000);
  }
  componentWillUnmount(){
    if(runner){
      clearInterval(runner);
    }
  }
  render(){
    return(
      <span>{this.state.time.toLocaleTimeString()}</span>
    )
  }
}