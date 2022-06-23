import React, { Component } from "react";
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      numero: 0,
      nomeBotao: 'START'
    };
    this.timer = null;
    this.start = this.start.bind(this);
    this.zerar = this.zerar.bind(this);
  }

  start(){
    let state = this.state;

    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
      state.nomeBotao = 'START'
    }else{
      this.timer = setInterval(()=>{
        let state = this.state;
        state.numero += 0.1;
        state.nomeBotao = 'PAUSE';
        this.setState(state);
      },100);
    }
    this.setState(state);
  }

  zerar(){
    let state = this.state;
    state.numero = 0.0;
    clearInterval(this.timer);
    this.timer = null;
    state.nomeBotao = 'START';
    this.setState(state);
  }

  render(){
    return(
      <div className="container">
        <img src={require('./assets/cronometro.png')} className="img" />
        <a className="timer" >{this.state.numero.toFixed(1)}</a>
        <div className="playBtn">
          <a className="botao" onClick={this.start}>{this.state.nomeBotao}</a>
          <a className="botao" onClick={this.zerar}>ZERAR</a>
        </div>
      </div>
    )
  }
}