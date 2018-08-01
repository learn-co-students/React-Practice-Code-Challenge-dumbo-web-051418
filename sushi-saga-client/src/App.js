import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    start: 0,
    end: 4,
    money: 100,
    platestack: [],
  }

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(data => {
        this.setState({
          sushis: data
      })
    })
  }

  // REMOVE PLATE UPON SUSHI BEING CLICKED
  onClickSushi = (e) => {
    if(this.state.money - e.price >= 0) {
      this.setState(
        { platestack: [...this.state.platestack, e.name],
          money: this.state.money - e.price
        })
    } else {
    alert("you got no money")
    }
  }


  moreSushi = () => {
    this.setState( (prevState) => {
      return {
      start: prevState.start + 4,
      end: prevState.end + 4
    }
  })
}


  // persistSushiChange = () => {
  //   const burger = this.selectedBurger()
  //   const options = {
  //     method: "PATCH",
  //     headers: {
  //       "content-type":"application/json"
  //     },
  //     body: JSON.stringify({ category: burger.category })
  //   }
  //   fetch(`http://localhost:3001/burgers/${burger.id}`, options)
  // }

  render() {
    return (
      <div className="app">
        <SushiContainer
          start={this.state.start}
          end={this.state.end}
          onClickSushi={this.onClickSushi}
          moreSushi={this.moreSushi}
          sushis={this.state.sushis}
        />
        <Table money={this.state.money} platestack={this.state.platestack} />
      </div>
    );
  }
}

export default App;
