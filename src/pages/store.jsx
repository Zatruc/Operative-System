import React from "react";

const MicrosoftStoreSimulator = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh - 56px)",
        backgroundColor: "#f2f2f2",
        paddingBottom: "56px",
      }}
    >
      {/* Header */}
      <div
        style={{
          backgroundColor: "#0078d7",
          padding: "20px",
          color: "#ffffff",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: "24px", fontWeight: "bold" }}>
          Microsoft Store
        </div>
        <div>
          <input
            type="text"
            placeholder="Search"
            style={{
              padding: "5px",
              borderRadius: "5px",
              border: "none",
              outline: "none",
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflowY: "auto", padding: "20px" }}>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <div
            style={{
              width: "calc(33.333% - 20px)",
              backgroundColor: "#ffffff",
              padding: "20px",
              borderRadius: "8px",
              textAlign: "center",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
              cursor: "pointer",
            }}
          >
            <img
              src="https://via.placeholder.com/150"
              alt="App Icon"
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <div style={{ marginTop: "10px", fontWeight: "bold" }}>App 1</div>
            <div style={{ color: "#666666" }}>Category</div>
          </div>
          <div
            style={{
              width: "calc(33.333% - 20px)",
              backgroundColor: "#ffffff",
              padding: "20px",
              borderRadius: "8px",
              textAlign: "center",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
              cursor: "pointer",
            }}
          >
            <img
              src="https://via.placeholder.com/150"
              alt="App Icon"
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <div style={{ marginTop: "10px", fontWeight: "bold" }}>App 2</div>
            <div style={{ color: "#666666" }}>Category</div>
          </div>
          <div
            style={{
              width: "calc(33.333% - 20px)",
              backgroundColor: "#ffffff",
              padding: "20px",
              borderRadius: "8px",
              textAlign: "center",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
              cursor: "pointer",
            }}
          >
            <img
              src="https://via.placeholder.com/150"
              alt="App Icon"
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <div style={{ marginTop: "10px", fontWeight: "bold" }}>App 3</div>
            <div style={{ color: "#666666" }}>Category</div>
          </div>
          {/* Add more apps here */}
        </div>
      </div>
    </div>
  );
};

export default MicrosoftStoreSimulator;
