import * as React from 'react';
import Selector from './Selector';
import ObjectSelector from './ObjectSelector';

const api = 'http://localhost:9000/api'

const getNames = async () => {
  const url = `${api}/names`;
  const response = await fetch(url);
  const { names } = await response.json();
  return names;
  // return names.map((name: string) => name.charAt(0).toUpperCase() + name.slice(1));
}

const getStories = async () => {
  const url = `${api}/stories`;
  const response = await fetch(url);
  return await response.json();
}

const genders = ['male', 'female'];

interface Props {
  gender: string,
  name: string,
  story: string,
  updateField: (event: any)=>void,
  onConfirm: ()=>void,
}

interface Story {
  name: string,
  key: string,
  description: string,
  length: number,
  index: number
}

interface Stories extends Array<Story>{}

interface State {
  names: string[],
  stories: Stories
}

class DetailsForm extends React.Component<Props, State> {

  constructor(props: any) {
    super(props);
    this.state = {
      names: [],
      stories: []
    }
  }

  public componentDidMount() {
    getNames().then(names => {
      this.setState({
        names
      })
    });
    getStories().then((stories: Stories) => {
      this.setState({
        stories: stories.map((story, index) => ({...story, index}))
      })
    })
  }
  
  public render() {
    const { gender, name, story, updateField, onConfirm } = this.props;
    const { names, stories } = this.state
    return (
      <div>
        <Selector title="Name" name="name" list={names} onChange={updateField} selected={name} />
        <Selector title="Gender" name="gender" list={genders} onChange={updateField} selected={gender} />
        <br/>
        <ObjectSelector title="story" name="story" list={stories} selected={story} onChange={updateField} />
        <br/>
        <button onClick={onConfirm}>Ready</button>
      </div>
    );
  }
}

export default DetailsForm;
