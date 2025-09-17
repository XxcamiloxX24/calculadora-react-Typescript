// Button.tsx
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";

interface MyButtonGroupProps {
  onInsertarValor: (valor: string) => void;
}

function MyButtonGroup({ onInsertarValor }: MyButtonGroupProps) {

  return (
    <Container className='hijo'>
      <Row>
        <Col><Button variant="dark" onClick={() => onInsertarValor("C")}>C</Button></Col>
        <Col><Button variant="dark" onClick={() => onInsertarValor("CE")}>CE</Button></Col>
        <Col><Button variant="dark" onClick={() => onInsertarValor("+/-")}>+/-</Button></Col>
        <Col><Button variant="warning" onClick={() => onInsertarValor("/")}>/</Button></Col>
      </Row>
      <Row>
        <Col><Button variant="secondary" onClick={() => onInsertarValor("7")}>7</Button></Col>
        <Col><Button variant="secondary" onClick={() => onInsertarValor("8")}>8</Button></Col>
        <Col><Button variant="secondary" onClick={() => onInsertarValor("9")}>9</Button></Col>
        <Col><Button variant="warning" onClick={() => onInsertarValor("*")}>*</Button></Col>
      </Row>
      <Row>
        <Col><Button variant="secondary" onClick={() => onInsertarValor("4")}>4</Button></Col>
        <Col><Button variant="secondary" onClick={() => onInsertarValor("5")}>5</Button></Col>
        <Col><Button variant="secondary" onClick={() => onInsertarValor("6")}>6</Button></Col>
        <Col><Button variant="warning" onClick={() => onInsertarValor("-")}>-</Button></Col>
      </Row>
      <Row>
        <Col><Button variant="secondary" onClick={() => onInsertarValor("1")}>1</Button></Col>
        <Col><Button variant="secondary" onClick={() => onInsertarValor("2")}>2</Button></Col>
        <Col><Button variant="secondary" onClick={() => onInsertarValor("3")}>3</Button></Col>
        <Col><Button variant="warning" onClick={() => onInsertarValor("+")}>+</Button></Col>
      </Row>
      <Row>
        <Col sm={6}><Button variant="secondary" onClick={() => onInsertarValor("0")}>0</Button></Col>
        <Col sm={3}><Button variant="secondary" onClick={() => onInsertarValor(".")}>.</Button></Col>
        <Col sm={3}><Button variant="warning" onClick={() => onInsertarValor("=")}>=</Button></Col>
      </Row>
    </Container>
  );
}

export default MyButtonGroup;
