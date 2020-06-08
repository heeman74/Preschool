import React from "react";
import InputField from "components/inputField";
import moment from 'moment';
import InputDatePicker from "components/inputDatePicker";


interface AddChildState {
  firstName: string;
  lastName: string;
  doB: Date;
  sex: string;

}

interface AddChildProps {

}

class AddChild extends React.Component<AddChildProps, AddChildState> {

  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      doB: new Date(),
    }
  }

  handleDataChange = (date: Date) => {
    console.log(date)
    this.setState({
      doB: date
    })
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    } as unknown as Pick<AddChildState, keyof AddChildState>)

  }
  render() {
    const { firstName, lastName, doB } = this.state;
    console.log(this.state);
    return <div>
      <h1>Add Chile Information</h1>
      <div>
        <InputField labelTitle={'First Name'} handleChange={this.handleChange} name='firstName' value={firstName} />
        <InputField labelTitle={'Last Name'} handleChange={this.handleChange} name='lastName' value={lastName} />
        <InputDatePicker labelTitle={'Date of Birth'} handleChange={this.handleDataChange} name='doB' startDate={doB} />
      </div>

    </div>;
  }
}

export default AddChild;
