import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [result, setResult] = useState(null);

  const callBackend = (port) => {
    const frontendOrigin = window.location.origin;
    const backendOrigin = `http://localhost:${port}`;

    setResult({ loading: true });

    fetch(`${backendOrigin}/`)
      .then((res) => res.json())
      .then((data) => {
        setResult({
          success: true,
          frontend: frontendOrigin,
          backend: backendOrigin,
          data,
        });
      })
      .catch(() => {
        setResult({
          success: false,
          frontend: frontendOrigin,
          backend: backendOrigin,
        });
      });
  };

  return (
    <div className="app">
      <h1>CORS Tester</h1>
      <p>Test frontend to backend requests</p>

      <div className="buttons">
        <button onClick={() => callBackend(3000)}>Test Allowed CORS</button>

        <button onClick={() => callBackend(4000)}>Test Blocked CORS</button>
      </div>

      {result?.loading && (
        <div className="result loading">Sending request...</div>
      )}

      {result && !result.loading && (
        <div className={`result ${result.success ? "success" : "error"}`}>
          <h2>{result.success ? "✓ No CORS Problem" : "✕ CORS Error"}</h2>

          <p>
            {result.success
              ? "Frontend origin is allowed by backend server."
              : "Frontend origin is not allowed by backend server."}
          </p>

          <div className="origins">
            <div>
              <span>Frontend</span>
              <code>{result.frontend}</code>
            </div>

            <strong>→</strong>

            <div>
              <span>Backend</span>
              <code>{result.backend}</code>
            </div>
          </div>

          {result.success && <pre>{JSON.stringify(result.data, null, 2)}</pre>}
        </div>
      )}
    </div>
  );
};

export default App;
