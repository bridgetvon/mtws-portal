import Table from 'react-bootstrap/Table';
import React from 'react';
import MyForm from '../Form/Form';

function MyTable() {
  return (
    <Table variant="dark">
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
          <td> Batman</td>
        </tr>
        <tr>
          <td>2</td>
          <td>another pretend issue</td>
          <td>Tom</td>
        </tr>
        <tr>
          <td>3</td>
          <td>another pretend issue</td>
          <td>Brian</td>
        </tr>
        <tr>
          <td>4</td>
          <td>another pretend issue</td>
          <td>Andrew</td>
        </tr>
        <tr>
          <td>5</td>
          <td>another pretend issue</td>
          <td>Adam</td>
        </tr>
        <tr>
          <td>6</td>
          <td>another pretend issue</td>
          <td>Thor</td>
        </tr>
        <tr>
          <td>2</td>
          <td>another pretend issue</td>
          <td>Loki</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default MyTable;