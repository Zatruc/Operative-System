import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleEqual = () => {
    try {
      setResult(eval(input));
    } catch {
      setResult("Error");
    }
  };

  return (
    <div
      style={{
        height: "calc(100vh - 56px)",
        padding: "20px",
        paddingBottom: "56px",
        backgroundColor: "#f2f2f2",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "320px",
          padding: "20px",
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          style={{
            marginBottom: "20px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <input
            type="text"
            value={input}
            readOnly
            style={{
              padding: "10px",
              fontSize: "20px",
              textAlign: "right",
              border: "1px solid #cccccc",
              borderRadius: "4px",
            }}
          />
          <input
            type="text"
            value={result}
            readOnly
            style={{
              padding: "10px",
              fontSize: "20px",
              textAlign: "right",
              border: "1px solid #cccccc",
              borderRadius: "4px",
              marginTop: "10px",
            }}
          />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "10px",
          }}
        >
          <button onClick={() => handleClick("7")} style={buttonStyle}>
            7
          </button>
          <button onClick={() => handleClick("8")} style={buttonStyle}>
            8
          </button>
          <button onClick={() => handleClick("9")} style={buttonStyle}>
            9
          </button>
          <button onClick={() => handleClick("/")} style={buttonStyle}>
            /
          </button>

          <button onClick={() => handleClick("4")} style={buttonStyle}>
            4
          </button>
          <button onClick={() => handleClick("5")} style={buttonStyle}>
            5
          </button>
          <button onClick={() => handleClick("6")} style={buttonStyle}>
            6
          </button>
          <button onClick={() => handleClick("*")} style={buttonStyle}>
            *
          </button>

          <button onClick={() => handleClick("1")} style={buttonStyle}>
            1
          </button>
          <button onClick={() => handleClick("2")} style={buttonStyle}>
            2
          </button>
          <button onClick={() => handleClick("3")} style={buttonStyle}>
            3
          </button>
          <button onClick={() => handleClick("-")} style={buttonStyle}>
            -
          </button>

          <button onClick={handleClear} style={buttonStyle}>
            C
          </button>
          <button onClick={() => handleClick("0")} style={buttonStyle}>
            0
          </button>
          <button onClick={handleEqual} style={buttonStyle}>
            =
          </button>
          <button onClick={() => handleClick("+")} style={buttonStyle}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

const buttonStyle = {
  padding: "20px",
  fontSize: "18px",
  border: "1px solid #cccccc",
  borderRadius: "4px",
  backgroundColor: "#ffffff",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default Calculator;
