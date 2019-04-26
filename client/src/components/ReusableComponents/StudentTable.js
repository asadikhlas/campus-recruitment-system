import React, { Component } from "react";
import {  Table } from "semantic-ui-react";
import Axios from "axios";

class StudentTable extends Component {
  state = {
    dataSave: []
  };

  componentDidMount() {
    Axios.get("http://localhost:3002/api/student").then(res => {
      const data = res.data.userData;
      this.setState({
        dataSave: data
      });
      // console.log(this.state.dataSave)
    });
  }

  render() {
    return (
        <div>
            <h2 style={{
                textAlign:"center"
            }}>Student Information</h2>
      <Table compact celled definition>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell />

            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>E-mail address</Table.HeaderCell>
            <Table.HeaderCell>Contact No</Table.HeaderCell>
            
          </Table.Row>
        </Table.Header>

        <Table.Body>
          
            {this.state.dataSave.map(item => {
              return (
                <Table.Row key={item.email}>
                  <Table.Cell collapsing />
                  <Table.Cell>{item.name}</Table.Cell>
                  <Table.Cell>{item.lastname}</Table.Cell>
                  <Table.Cell>{item.email}</Table.Cell>
                  <Table.Cell>{item.contact}</Table.Cell>
                </Table.Row>
              );
            })}
        </Table.Body>
      </Table>
      </div>
    );
  }
}

export default StudentTable;
