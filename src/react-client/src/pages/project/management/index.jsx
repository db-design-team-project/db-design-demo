import React, { useState } from 'react';
import { Table } from "react-bootstrap";
import ENDPOINTS from '../../../lib/api-endpoints';

const SearchProjects = () => {
  const [clientName, setClientName] = useState('');
  const [data, setData] = useState([
    { projectId: 1, projectName: '프로젝트 A', startDate: '2023-01-01', endDate: '2023-02-01' },
    { projectId: 2, projectName: '프로젝트 B', startDate: '2023-02-01', endDate: '2023-03-01' },
    { projectId: 3, projectName: '프로젝트 C', startDate: '2023-01-01', endDate: '2023-02-01' }
  ]);

  // 검색어를 받아와 검색을 수행하는 함수
  function handleSearch() {
    console.log(clientName);

    fetch(`${ENDPOINTS.GET_API_MAIN_CLIENT_HISTORY}?clientName=${clientName}`, {
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
        <input type="text" className="m-2" placeholder="발주처명 입력" aria-label="Username" aria-describedby="basic-addon1"
          onChange={(e) => setClientName(e.target.value)} />
        <button type="button" className="btn btn-light" onClick={handleSearch}>검색</button>
      </div>

      <div>
        {/* 프로젝트 목록 테이블 */}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>프로젝트ID</th>
              <th>프로젝트명</th>
              <th>시작일자</th>
              <th>종료일자</th>
            </tr>
          </thead>
          <tbody>
            {data.map((project, idx) => (
              <tr key={idx + 1}>
                <td>{idx + 1}</td>
                <td>{project.projectId}</td>
                <td>{project.projectName}</td>
                <td>{project.startDate}</td>
                <td>{project.endDate}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default SearchProjects;
