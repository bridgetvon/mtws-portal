import Table from 'react-bootstrap/Table';
import React from 'react';
import MyForm from '../Form/Form';

function MyTable() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Submitted By</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Some pretend issue</td>
          <td></td>
        </tr>
        <tr>
          <td>2</td>
          <td>another pretend issue</td>
          <td>Thornton</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default MyTable;