import React, { useState } from 'react';
import { Table } from "react-bootstrap";
import ENDPOINTS from '../../../lib/api-endpoints';

const VacationManagement = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [data, setData] = useState([{
    휴가ID: 1,
    직원ID: 1,
    직원명: "홍길동",
    휴가종류: "연가",
    휴가시작날짜: "1999-05-11",
    휴가종료날짜: "1999-05-15",
    업무대리인ID: 2
  },
  {
    휴가ID: 2,
    직원ID: 2,
    직원명: "홍호호",
    휴가종류: "연가",
    휴가시작날짜: "1999-05-11",
    휴가종료날짜: "1999-05-15",
    업무대리인ID: 4
  },
  {
    휴가ID: 3,
    직원ID: 3,
    직원명: "홍홍홍",
    휴가종류: "연가",
    휴가시작날짜: "1999-05-11",
    휴가종료날짜: "1999-05-15",
    업무대리인ID: 5
  }
  ]);

  function handleSubmit() {
    console.log(selectedDate);

    fetch(`${ENDPOINTS.GET_API_MAIN_VACATION_HISTORY_EMPLOYEE}?date=${selectedDate}`, {
      method: 'GET'
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        else {
          throw new Error("Failed to fetch data..");
        }
      })
      .then(json => {
        console.log(json);
        setData(json)
      })
      .catch(error => console.log(error));
  }

  return (
    <>
      <div className="m-2 d-flex justify-content-center align-content-center">
        <input type="date" className="m-2" placeholder="날짜 선택" aria-label="Username" aria-describedby="basic-addon1"
          onChange={(e) => setSelectedDate(e.target.value)} />
        <button type="button" className="btn btn-light" onClick={handleSubmit}>검색</button>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>휴가ID</th>
            <th>직원ID</th>
            <th>직원명</th>
            <th>휴가종류</th>
            <th>휴가시작날짜</th>
            <th>휴가종료날짜</th>
            <th>업무대리인ID</th>
          </tr>
        </thead>
        <tbody>
          {
            data.length > 0 && data.map((r, idx) => (
              <tr key={idx + 1}>
                <td>{idx + 1}</td>
                <td>{r.휴가ID}</td>
                <td>{r.직원ID}</td>
                <td>{r.직원명}</td>
                <td>{r.휴가종류}</td>
                <td>{r.휴가시작날짜}</td>
                <td>{r.휴가종료날짜}</td>
                <td>{r.업무대리인ID}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </>
  );
};
export default VacationManagement;
