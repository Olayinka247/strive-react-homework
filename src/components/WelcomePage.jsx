import { Jumbotron, Button } from "react-bootstrap";

const WelcomePage = () => {
  return (
    <Jumbotron>
      <h1>STRIVE HISTORY BOOK</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <p>
        <Button variant="primary">HISTORY</Button>
      </p>
    </Jumbotron>
  );
};

export default WelcomePage;
