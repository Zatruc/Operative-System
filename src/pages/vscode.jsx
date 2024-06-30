import React from "react";

const VScodeSimulator = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "calc(100vh - 56px)",
        backgroundColor: "#1e1e1e",
        paddingBottom: "",
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: "50px",
          backgroundColor: "#333",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "10px 0",
        }}
      >
        <div style={{ marginBottom: "20px", cursor: "pointer" }}>📁</div>
        <div style={{ marginBottom: "20px", cursor: "pointer" }}>🔍</div>
        <div style={{ marginBottom: "20px", cursor: "pointer" }}>🔧</div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Topbar */}
        <div
          style={{
            height: "30px",
            backgroundColor: "#2d2d2d",
            display: "flex",
            alignItems: "center",
            paddingLeft: "10px",
            color: "#ffffff",
          }}
        >
          <div style={{ marginRight: "20px", cursor: "pointer" }}>File</div>
          <div style={{ marginRight: "20px", cursor: "pointer" }}>Edit</div>
          <div style={{ marginRight: "20px", cursor: "pointer" }}>View</div>
        </div>

        {/* Editor Area */}
        <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
          {/* File Explorer */}
          <div
            style={{
              width: "200px",
              backgroundColor: "#252526",
              color: "#cccccc",
              padding: "10px",
              overflowY: "auto",
            }}
          >
            <div style={{ marginBottom: "10px", cursor: "pointer" }}>
              Explorer
            </div>
            <div style={{ marginBottom: "10px", cursor: "pointer" }}>
              Open Editors
            </div>
            <div style={{ marginBottom: "10px", cursor: "pointer" }}>
              Folder 1
            </div>
            <div style={{ marginBottom: "10px", cursor: "pointer" }}>
              Folder 2
            </div>
          </div>

          {/* Code Editor */}
          <div
            style={{
              flex: 1,
              backgroundColor: "#1e1e1e",
              color: "#ffffff",
              padding: "10px",
            }}
          >
            <div
              style={{
                backgroundColor: "#2d2d2d",
                padding: "5px 10px",
                borderRadius: "3px",
                marginBottom: "10px",
              }}
            >
              index.js
            </div>
            <pre style={{ fontFamily: "monospace" }}>
              {`function helloWorld() {
    console.log('Hello, world!');
}

helloWorld();`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VScodeSimulator;
