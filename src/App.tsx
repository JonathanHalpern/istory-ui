import * as React from 'react';
import './App.css';

import Player from './Components/Player';
import DetailsForm from './Components/DetailsForm';

import logo from './logo.svg';

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state={
      gender: 'female',
      name: '',
      story: 2,
      ready: false,
    }
    this.updateField = this.updateField.bind(this);
    this.onConfirm = this.onConfirm.bind(this)
  }

  public updateField( event: any) {
    this.setState({
      [event.target.name]: event.target.value,
      ready: false
    })
  }
  public onConfirm () {
    this.setState({ready: true})
  }
  public render() {
    const { gender, name, story, ready } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">I Story</h1>
        </header>
        <DetailsForm gender={gender} name={name} story={story} updateField={this.updateField} onConfirm={this.onConfirm}/>
        {ready && <Player gender={gender} name={name} story={story}/>}
      </div>
    );
  }
}

export default App;
