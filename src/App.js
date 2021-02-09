import React from 'react';
import './App.css';

import ToyHeader from './ToyHeader'
import SearchBar from './SearchBar'
import ToysContainer from './ToysContainer'
import ToyForm from './ToyForm'

class App extends React.Component {

  state={search: '', toys: []}

  componentDidMount(){
    fetch("http://localhost:3000/toys")
      .then(res => res.json())
      .then(toysObj => this.setState({toys: toysObj}))
  }

  changeStateValue = (string) => {
    this.setState({search: string})
  }

  addToy = (toyObj) => {
    //setState uses the spread operator, meaning that although the key value pairs of the object pass in as an argument to setState will be spread into the other key value pairs

    //setState is asynchronous, and WHENEVER you need to reference this.state to get a value, you need to use a function as an argument to get access to the conventionally-naned prevState object

    fetch("http://localhost:3000/toys", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(toyObj)
    })
      .then(() => console.log("Fetch request complete!"))

    this.setState((pS) => {
      return {toys: [...pS.toys, toyObj]}
    }, () => console.log("Set state is done running!"))
  }

  render(){
    return(
      <div className="App">
        <ToyHeader />
        <ToyForm addToy={this.addToy}/>
        <br/>
        <SearchBar changeStateValue={this.changeStateValue}/>
        <ToysContainer toys={this.state.toys} search={this.state.search}/>
      </div>
    )
  }
}

export default App;
