import React from "react";
import {
  Grid,
  Form,
  Segment,
  Button,
  Header,
  Message
} from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";

const baseUrl = "http://localhost:3002";

class Register extends React.Component {
  state = {
    companyName: "",
    username: "",
    lastname: "",
    email: "",
    contact: "",
    password: "",
    passwordConfirmation: "",

    errors: [],
    role: "company"
  };

  isFormValid = () => {
    let errors = [];
    let error;

    if (this.isFormEmpty(this.state)) {
      error = { message: "Fill in all fields" };
      this.setState({ errors: errors.concat(error) });
      return false;
    } else if (!this.isPasswordValid(this.state)) {
      error = { message: "Password is invalid" };
      this.setState({ errors: errors.concat(error) });
      return false;
    } else {
      return true;
    }
  };

  isFormEmpty = ({
    username,
    lastname,
    email,
    contact,
    password,
    passwordConfirmation
  }) => {
    return (
      !username.length ||
      !lastname.length ||
      !email.length ||
      !contact.length ||
      !password.length ||
      !passwordConfirmation.length
    );
  };

  isPasswordValid = ({ password, passwordConfirmation }) => {
    if (password.length < 6 || passwordConfirmation.length < 6) {
      return false;
    } else if (password !== passwordConfirmation) {
      return false;
    } else {
      return true;
    }
  };

  displayErrors = errors =>
    errors.map((error, i) => <p key={i}>{error.message}</p>);

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleRole = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  getData = () => {
    const {
      companyName,
      role,
      email,
      password,
      username,
      lastname,
      contact
    } = this.state;
    if (role === "student") {
      axios
        .post(`${baseUrl}/api/student/register`, {
          name: username,
          lastname: lastname,
          email: email,
          password: password,
          contact: contact,
          role: "student"
        })
        .then(res => {
          if (res.status === 200) {
            alert("your details are submitted to us");
          }
        })
        .catch(err => {
          console.log(err);
        });
    } else if (role === "company") {
      axios
        .post(`${baseUrl}/api/company/register`, {
          CompanyCeo: username,
          email: email,
          password: password,
          CompanyName: companyName,
          role: "company"
        })
        .then(res => {
          if (res.status === 200) {
            alert("your details are submitted to us");
          } else {
            alert("something went wrong");
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  handleSubmit = event => {
    if (this.isFormValid()) {
      event.preventDefault();
      this.getData();
    }
  };

  render() {
    console.log(this.state.role);
    const {
      username,
      email,
      lastname,
      contact,
      password,
      passwordConfirmation,
      errors,
      companyName
    } = this.state;

    return (
      <Grid textAlign="center" verticalAlign="middle" className="app">
        <Grid.Column
          style={{
            maxWidth: 1000
          }}
        >
          <Header as="h2" icon color="violet" textAlign="center">
            Register Yourself
          </Header>
          <Form
            onSubmit={this.handleSubmit}
            size="large"
            inverted
            widths="equal"
          >
            <Segment color="teal" inverted>
              <label
                style={{
                  fontWeight: "bold"
                }}
              >
                Type
              </label>
              <select
                value={this.state.role}
                name="role"
                onChange={this.handleRole}
              >
                <option value="company">Company</option>
                <option value="student">Student</option>
              </select>
              <br />
              <Form.Input
                fluid
                name="username"
                icon="user"
                iconPosition="left"
                placeholder="Enter your name"
                onChange={this.handleChange}
                value={username}
                type="text"
                label="Username"
              />
              {this.state.role !== "company" ? (
                <div>
                  <Form.Input
                    fluid
                    name="lastname"
                    icon="user"
                    iconPosition="left"
                    placeholder="Enter your lastname"
                    onChange={this.handleChange}
                    value={lastname}
                    type="text"
                    label="Lastname"
                  />
                  <Form.Input
                    fluid
                    name="contact"
                    icon="user"
                    iconPosition="left"
                    placeholder="Enter your contact-no"
                    onChange={this.handleChange}
                    value={contact}
                    type="number"
                    label="Contact-No"
                  />
                </div>
              ) : null}

              <Form.Input
                fluid
                name="email"
                icon="mail"
                iconPosition="left"
                placeholder="Email Address"
                onChange={this.handleChange}
                value={email}
                type="email"
                label="Email"
              />

              <Form.Input
                fluid
                name="password"
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                onChange={this.handleChange}
                value={password}
                type="password"
                label="Password"
              />

              <Form.Input
                fluid
                name="passwordConfirmation"
                icon="repeat"
                iconPosition="left"
                placeholder="Password Confirmation"
                onChange={this.handleChange}
                value={passwordConfirmation}
                type="password"
                label="Password Confirmation"
              />
              {this.state.role === "company" ? (
                <Form.Input
                  fluid
                  name="companyName"
                  icon="copyright outline"
                  iconPosition="left"
                  placeholder="Company name"
                  onChange={this.handleChange}
                  value={companyName}
                  type="text"
                  label="Company name"
                />
              ) : null}
              <Button color="violet" fluid size="large">
                Submit
              </Button>
            </Segment>
          </Form>
          {errors.length > 0 && (
            <Message error>
              <h3>Error</h3>
              {this.displayErrors(errors)}
            </Message>
          )}
          <Message color="black">
            Have already an account ? <Link to="/login">Login here</Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Register;
