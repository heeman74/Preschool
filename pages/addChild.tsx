import React from "react";
import InputField from "components/inputField";
import moment from 'moment';
import InputDatePicker from "components/inputDatePicker";
import axios from 'axios';
import Select from 'react-select';
import CheckBox from "components/checkBox";
import { Agency } from "model/constants";


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
  isAgency: boolean;
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
      isAgency: false,
    }
  }

  toggleIsAgency = () => this.setState(state => ({ isAgency: !state.isAgency }))

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

  onSelect = (key: string, target: any) => {
    this.setState({
      [key]: target.value,
    })
  }
  render() {
    const { firstName, lastName, doB, middleName, guardianFirstName, guardianLastName, guardianMiddleName, address, state, zipcode, city, isAgency } = this.state;
    console.log(this.state);
    const agencyOptions = [
      { value: Agency.OC, label: 'OC' },
      { value: Agency.CHS, label: 'CHS' }
    ]
    return (
      <>
        <h1>Add Child Information</h1>
        <table>
          <tbody>

            <tr>
              <td><InputField labelTitle={'First Name'} handleChange={this.handleChange} name='firstName' value={firstName} /></td>
              <td><InputField labelTitle={'Middle Name'} handleChange={this.handleChange} name='middleName' value={middleName} /></td>
              <td><InputField labelTitle={'Last Name'} handleChange={this.handleChange} name='lastName' value={lastName} /></td>
              <td><InputDatePicker labelTitle={'Date of Birth'} handleChange={this.handleDataChange} name='doB' startDate={doB} /></td>
            </tr>
          </tbody>
        </table>
        <h4>Guardian's Info</h4>
        <table>
          <tbody>
            <tr> <td><InputField labelTitle={'First Name'} handleChange={this.handleChange} name='guardianFirstName' value={guardianFirstName} /> </td>
              <td><InputField labelTitle={'Middle Name'} handleChange={this.handleChange} name='guardianMiddleName' value={guardianMiddleName} /></td>
              <td><InputField labelTitle={'Last Name'} handleChange={this.handleChange} name='guardianLastName' value={guardianLastName} /></td></tr>

            <tr>
              <td><InputField labelTitle={'Address'} handleChange={this.handleChange} name='address' value={address} /></td>
            </tr>
            <tr>
              <td><InputField labelTitle={'City'} handleChange={this.handleChange} name='city' value={city} /></td>

              <td><InputField labelTitle={'State'} handleChange={this.handleChange} name='state' value={state} /></td>
              <td><InputField labelTitle={'Zipcode'} handleChange={this.handleChange} name='zipcode' value={zipcode} /></td>
            </tr>
            <tr>
              <td><CheckBox label={'Is Agency?'} onChange={this.toggleIsAgency} checked={isAgency}></CheckBox></td>
              {isAgency && <td><Select defaultValue={agencyOptions[0]} options={agencyOptions} onChange={event => this.onSelect('agencyType', event)} name='agency'> </Select></td>}
            </tr>
          </tbody>

        </table>

      </>
    )

  }
}

export default AddChild;
