import React from "react";
import InputField from "components/inputField";
import moment from 'moment';
import InputDatePicker from "components/inputDatePicker";
import axios from 'axios';

interface AddChildState {
  firstName: string;
  lastName: string;
  middleName: string,
  guardianFirstName: string,
  guardianMiddleName: string,
  guardianLastName: string,
  address: string,
  city: string,
  state: string,
  zipcode: string | null,
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
      middleName: '',
      guardianFirstName: '',
      guardianMiddleName: '',
      guardianLastName: '',
      address: '',
      city: '',
      state: '',
      zipcode: '',
      doB: new Date(),
    }
  }

  handleDataChange = (date: Date) => {
    console.log(date)
    this.setState({
      doB: date
    })
  }

  handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    let zipCodeValue;
    console.log({ name })
    if (name === 'zipcode' && value.length >= 5) {
      zipCodeValue = value.slice(0, 5);
      try {
        console.log({ zipCodeValue });
        const { data } = await axios.get(`/children/city-state/${+zipCodeValue}`);

        console.log(data);
        this.setState({
          city: data.CityStateLookupResponse.ZipCode.City._text,
          state: data.CityStateLookupResponse.ZipCode.State._text,
          zipcode: zipCodeValue,
        })
      } catch (error) {
        console.log(error)
      }
    } else {
      this.setState({
        [name]: value,
      } as unknown as Pick<AddChildState, keyof AddChildState>)
    }

  }
  render() {
    const { firstName, lastName, doB, middleName, guardianFirstName, guardianLastName, guardianMiddleName, address, state, zipcode } = this.state;
    console.log(this.state);
    return <div>
      <h1>Add Child Information</h1>
      <div>
        <div>
          <InputField labelTitle={'First Name'} handleChange={this.handleChange} name='firstName' value={firstName} />
          <InputField labelTitle={'Middle Name'} handleChange={this.handleChange} name='middleName' value={middleName} />
          <InputField labelTitle={'Last Name'} handleChange={this.handleChange} name='lastName' value={lastName} />
          <InputDatePicker labelTitle={'Date of Birth'} handleChange={this.handleDataChange} name='doB' startDate={doB} />
        </div>
        <div>
          <h4>Guardian's Info</h4>
          <div>
            <InputField labelTitle={'First Name'} handleChange={this.handleChange} name='guardianFirstName' value={guardianFirstName} />
            <InputField labelTitle={'Middle Name'} handleChange={this.handleChange} name='guardianMiddleName' value={guardianMiddleName} />
            <InputField labelTitle={'Last Name'} handleChange={this.handleChange} name='guardianLastName' value={guardianLastName} />
          </div>
          <div>
            <tr>
              <td><InputField labelTitle={'Address'} handleChange={this.handleChange} name='address' value={address} /></td>
            </tr>

            <tr>
              <td><InputField labelTitle={'State'} handleChange={this.handleChange} name='state' value={state} /></td>
              <td><InputField labelTitle={'Zipcode'} handleChange={this.handleChange} name='zipcode' value={zipcode} /></td>
            </tr>


          </div>
        </div>
      </div>

    </div>;
  }
}

export default AddChild;
