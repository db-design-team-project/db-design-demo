import { Container, Image } from "react-bootstrap";

export default function NotFound() {

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center"
      style={{
        height: "55vh"
      }}>

      <div>
        <Image width="450" src="https://www.mju.ac.kr/sites//mjukr/images/main/logo_wh.png" />
      </div>
      <p className="mt-5 text-break lh-base text-start" style={{
        fontFamily: "Noto Sans KR Variable, sans-serif"
      }}>
        <span className="fs-5">
          믿음의 <span className="fw-bolder">대학</span>, 믿을 수 있는 <span className="fw-bolder">인재!</span><br />
        </span>
        <span className="fst-italic fs-5">
          Your future Begins Here! MyongJi University
        </span>
      </p>

    </Container>
  );
}
