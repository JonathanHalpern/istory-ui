import * as React from 'react';

export type MainProps = any;
type MainState= any;


class Player extends React.Component<MainProps, MainState>{

  constructor(props: any) {
    super(props);
    const { story, name, gender } = this.props;
    console.log(this.props)
    const url = `http://localhost:9000/?storyId=${story}&name=${name}&gender=${gender}`;

    this.state = {
      pause: true,
      play: false,
      audio: new Audio(url)
    }
    console.log(url)
  }

  public componentWillUnmount() {
    this.state.audio.pause();
  }

  public play = () => {
  this.setState({ play: true, pause: false })
    this.state.audio.play();
  }
  
  public pause = () => {
  this.setState({ play: false, pause: true })
    this.state.audio.pause();
  }
  
  public render() {
    
  return (
    <div>
      <button onClick={this.play}>Play</button>
      <button onClick={this.pause}>Pause</button>
    </div>
    );
  }
}

export default Player;
