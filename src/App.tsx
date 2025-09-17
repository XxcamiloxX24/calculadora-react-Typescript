import './App.css'
import Form from 'react-bootstrap/Form';
import MyButtonGroup from './Button'
import { Container } from 'react-bootstrap';
import { useState } from 'react';

function App() {
  const [inputUp, setInputUp] = useState("");
  const [inputDown, setInputDown] = useState("");

  // --- Evaluador seguro con Function ---
  function safeEvaluate(expr: string): number {
    // Solo permitir números, + - * / y puntos
    if (!/^[0-9+\-*/. ]+$/.test(expr)) throw new Error("Expresión inválida");
    // eslint-disable-next-line no-new-func
    return new Function(`return ${expr}`)();
  }

  function insertarValor(valor: string) {
    if (valor === "C") {
      setInputUp("");
      setInputDown("");
      return;
    }

    if (valor === "CE") {
      setInputDown("");
      return;
    }

    if (valor === "=") {
      try {
        const resultado = safeEvaluate(inputDown);
        setInputUp(inputDown + " =");
        setInputDown(resultado.toString());
      } catch {
        setInputDown("Error");
      }
      return;
    }

    if (valor === "+/-") {
      if (inputDown) {
        // Cambiar signo del número actual
        let num = parseFloat(inputDown);
        if (!isNaN(num)) {
          setInputDown((-num).toString());
        }
      }
      return;
    }

    // Evitar operadores duplicados
    const operadores = "+-*/";
    if (
      operadores.includes(valor) &&
      inputDown &&
      operadores.includes(inputDown[inputDown.length - 1])
    ) {
      return; // ignora si último es operador
    }

    setInputDown(prev => prev + valor);
  }

  return (
    <div className='portada'>
      <Container className='hijos'>
        <Form.Control id='InputUp' value={inputUp} disabled />
        <Form.Control id='InputDown' value={inputDown} disabled />
      </Container>
      <MyButtonGroup onInsertarValor={insertarValor}/>
    </div>
  )
}

export default App;
