import React, { useState } from 'react';
import { Form, Container, button } from "react-bootstrap";
import { Table } from "react-bootstrap";

const VacationManagement = () => {
  const [selectedDate, setSelectedDate] = useState('');

  function handleDate(e) {
    console.log(e.target.value);
    setSelectedDate(e.target.value);
  }

  return (
    <>
      <div className="m-2">
        <input type="date" className="m-2" placeholder="date" aria-label="Username" aria-describedby="basic-addon1"
          onChange={handleDate} />
        <button type="button" className="btn btn-light">검색</button>
      </div>

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
    </>
  );
};
export default VacationManagement;
