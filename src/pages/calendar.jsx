import React from "react";

const Calendar = () => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dates = Array.from({ length: 30 }, (_, i) => i + 1); // Simulando los días del mes

  return (
    <div
      style={{
        height: "calc(100vh - 56px)",
        padding: "20px",
        paddingBottom: "56px",
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "800px",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#f2f2f2",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "20px",
            backgroundColor: "#0078d7",
            color: "#ffffff",
            textAlign: "center",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          June 2024
        </div>

        {/* Days of the Week */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            backgroundColor: "#e6e6e6",
            padding: "10px 0",
          }}
        >
          {daysOfWeek.map((day) => (
            <div key={day} style={{ textAlign: "center", fontWeight: "bold" }}>
              {day}
            </div>
          ))}
        </div>

        {/* Dates */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            gap: "10px",
            padding: "10px",
          }}
        >
          {dates.map((date) => (
            <div
              key={date}
              style={{
                textAlign: "center",
                padding: "10px",
                backgroundColor: "#ffffff",
                borderRadius: "4px",
                boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
                cursor: "pointer",
              }}
            >
              {date}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
