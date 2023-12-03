import React, { useState } from 'react';
import { Container, Row, Col, Form, Table, Button } from "react-bootstrap";

const projectData = [
  { projectId: 1, projectName: '프로젝트 A', startDate: '2023-01-01', endDate: '2023-02-01', clientName: '발주처1', clientId: 101 },
  { projectId: 2, projectName: '프로젝트 B', startDate: '2023-02-01', endDate: '2023-03-01', clientName: '발주처2', clientId: 102 },
  { projectId: 3, projectName: '프로젝트 C', startDate: '2023-01-01', endDate: '2023-02-01', clientName: '발주처1', clientId: 101 },
  { projectId: 4, projectName: '프로젝트 D', startDate: '2023-02-01', endDate: '2023-03-01', clientName: '발주처2', clientId: 102 },
  { projectId: 5, projectName: '프로젝트 E', startDate: '2023-01-01', endDate: '2023-02-01', clientName: '발주처1', clientId: 101 },
  { projectId: 6, projectName: '프로젝트 F', startDate: '2023-02-01', endDate: '2023-03-01', clientName: '발주처2', clientId: 102 },
  { projectId: 7, projectName: '프로젝트 G', startDate: '2023-01-01', endDate: '2023-02-01', clientName: '발주처3', clientId: 103 },
  { projectId: 8, projectName: '프로젝트 H', startDate: '2023-02-01', endDate: '2023-03-01', clientName: '발주처3', clientId: 103 },
  { projectId: 9, projectName: '프로젝트 I', startDate: '2023-01-01', endDate: '2023-02-01', clientName: '발주처3', clientId: 103 },
  { projectId: 10, projectName: '프로젝트 J', startDate: '2023-02-01', endDate: '2023-03-01', clientName: '발주처3', clientId: 103 },
  // 다른 프로젝트 데이터들...
];

const SearchProjects = () => {
  // 검색어와 검색 결과를 관리하는 state
  const [searchQuery, setSearchQuery] = useState('');

  // 검색어를 받아와 검색을 수행하는 함수
  function handleSearch() {

  }

  return (
    <>
      <div className="m-2">
        <input type="text" className="m-2" placeholder="date" aria-label="Username" aria-describedby="basic-addon1"
          onChange={(e) => setSearchQuery(e.target.value)} />
        <button type="button" className="btn btn-light">검색</button>
      </div>

      <div>
        {/* 프로젝트 목록 테이블 */}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>프로젝트ID</th>
              <th>프로젝트명</th>
              <th>시작일자</th>
              <th>종료일자</th>
            </tr>
          </thead>
          <tbody>
            {projectData.map((project) => (
              <tr key={project.projectId}>
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
