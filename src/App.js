import React from'react';
import './App.css';
import Simpsons from'./components/Simpsons';


class App extends React.Component{
  state = {
    simpsons : ''
  }
  componentDidMount() {
    this.fetchData()
  }
  fetchData = () => {
    fetch('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then(res => res.json())
    .then(data => {
      this.setState({ simpsons : data[0] })
    })
  }
  render() {
    console.log(this.state.simpsons);
  return (
    <div className="App">
      <h1>Hello this is an App</h1>
      <input type='button' value='Click' onClick={this.fetchData}/>
      <Simpsons simpsons= {this.state.simpsons} />
    </div>
  );
}
}

export default App;
