import React, { Component } from "react";
import {  Table } from "semantic-ui-react";
import Axios from "axios";

class AdminJobsTable extends Component {
  state = {
    dataSave: []
  };

  componentDidMount() {
    Axios.get("http://localhost:3002/api/company/jobs").then(res => {
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
            }}>Posted Jobs Information</h2>
      <Table compact celled definition>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell />

            <Table.HeaderCell>Job Title</Table.HeaderCell>
            <Table.HeaderCell>Company Name</Table.HeaderCell>
            <Table.HeaderCell>Job Description</Table.HeaderCell>
            <Table.HeaderCell>Salary</Table.HeaderCell>
            <Table.HeaderCell>Date</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {this.state.dataSave.map(item => {
            return (
              <Table.Row key={item._id}>
                <Table.Cell collapsing />
                <Table.Cell>{item.title}</Table.Cell>
                <Table.Cell>{item.companyName}</Table.Cell>
                <Table.Cell>{item.description}</Table.Cell>
                <Table.Cell>{item.salary}</Table.Cell>
                <Table.Cell>{item.date}</Table.Cell>
                <Table.Cell>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
      </div>
    );
  }
}

export default AdminJobsTable;
