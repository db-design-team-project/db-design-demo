import React, { useState } from 'react';
import { Form,Container, button } from "react-bootstrap";
import { Table } from "react-bootstrap";

const VacationManagement = () => {



  return (
    <Container>
      
      <div class="m-2"> 
       <input type="date" class="m-2" placeholder="date" aria-label="Username" aria-describedby="basic-addon1"/>
        <button type="button" class="btn btn-light">검색</button>
      </div>

      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>휴가ID</th>
              <th>직원ID</th>
              <th>휴가종류</th>
              <th>휴가시작날짜</th>
              <th>휴가종료날짜</th>
              <th>업무대리인ID</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>50000</td>
              <td>1</td>
              <td>연가</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>2</td>
            </tr>
            <tr>
              <td>2</td>
              <td>50001</td>
              <td>22</td>
              <td>연가</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>23</td>
            </tr>
            <tr>
              <td>3</td>
              <td>50002</td>
              <td>97</td>
              <td>반가</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>98</td>
            </tr>
          </tbody>
        </Table>
        
      </div>
    </Container>
  );
};
export default VacationManagement;
