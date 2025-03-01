import React, { useState } from "react";

function App() {
  const [code, setCode] = useState("");
  const [logs, setLogs] = useState([]);
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const executeCode = () => {
    setLogs([]);
    setOutput("");
    setError("");

    const newLogs = [];
    const originalLog = console.log;

    // Override console.log
    console.log = (...args) => {
      newLogs.push(args.join(" "));
    };

    try {
      const result = eval(code);
      setOutput(result);
      setLogs(newLogs);
    } catch (e) {
      setError(e.message);
    } finally {
      console.log = originalLog; // Restore original console.log
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>JavaScript Runner</h1>
      <textarea
        value={code}
        onChange={e => setCode(e.target.value)}
        style={{ width: "100%", height: "200px", marginBottom: "10px" }}
        placeholder="Enter JavaScript code here"
      />
      <button onClick={executeCode} style={{ marginBottom: "20px" }}>
        Run Code
      </button>

      {error && (
        <div style={{ color: "red", marginBottom: "20px" }}>
          <h3>Error:</h3>
          <pre>{error}</pre>
        </div>
      )}

      <div style={{ display: "flex", gap: "20px" }}>
        <div style={{ flex: 1 }}>
          <h3>Console Output:</h3>
          <pre style={{ background: "#f5f5f5", padding: "10px" }}>
            {logs.join("\n")}
          </pre>
        </div>

        <div style={{ flex: 1 }}>
          <h3>Program Output:</h3>
          <pre style={{ background: "#f5f5f5", padding: "10px" }}>
            {typeof output === "object" && output !== null
              ? JSON.stringify(output, null, 2)
              : output}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default App;
