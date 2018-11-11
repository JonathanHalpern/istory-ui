import * as React from 'react';

class DetailsForm extends React.Component<any, any> {
  
  public render() {
    const { gender, name, story, updateField, onConfirm } = this.props;
    return (
      <div>
        <p>Chlild's name</p>
        <input type="text" value={name} onChange={updateField} name="name"/>
        <p>Chlild's gender</p>
        <input type="text" value={gender} onChange={updateField} name="gender"/>
        <p>Story number</p>
        <input type="text" value={story} onChange={updateField} name="story"/>
        <br/>
        <br/>
        <button onClick={onConfirm}>Ready</button>
      </div>
    );
  }
}

export default DetailsForm;
