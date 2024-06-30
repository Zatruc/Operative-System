import React from "react";

const SpotifySimulator = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "calc(100vh - 56px)",
        backgroundColor: "#121212",
        color: "#ffffff",
        fontFamily: "Arial, sans-serif",
        paddingBottom: "56px",
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: "240px",
          backgroundColor: "#000000",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{ marginBottom: "20px", fontSize: "24px", fontWeight: "bold" }}
        >
          Spotify
        </div>
        <div style={{ marginBottom: "20px" }}>
          <div
            style={{
              marginBottom: "10px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span style={{ marginRight: "10px" }}>🏠</span> Home
          </div>
          <div
            style={{
              marginBottom: "10px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span style={{ marginRight: "10px" }}>🔍</span> Search
          </div>
          <div
            style={{
              marginBottom: "10px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span style={{ marginRight: "10px" }}>📚</span> Your Library
          </div>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <div
            style={{
              marginBottom: "10px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span style={{ marginRight: "10px" }}>➕</span> Create Playlist
          </div>
          <div
            style={{
              marginBottom: "10px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span style={{ marginRight: "10px" }}>❤️</span> Liked Songs
          </div>
        </div>
        <div style={{ flex: 1, overflowY: "auto" }}>
          <div style={{ marginBottom: "10px", cursor: "pointer" }}>
            Playlist 1
          </div>
          <div style={{ marginBottom: "10px", cursor: "pointer" }}>
            Playlist 2
          </div>
          <div style={{ marginBottom: "10px", cursor: "pointer" }}>
            Playlist 3
          </div>
          {/* Agrega más listas de reproducción aquí */}
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Header */}
        <div
          style={{
            padding: "20px",
            backgroundColor: "#1db954",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ marginRight: "10px", cursor: "pointer" }}>⬅️</div>
            <div style={{ marginRight: "10px", cursor: "pointer" }}>➡️</div>
            <div style={{ fontSize: "24px", fontWeight: "bold" }}>
              Your Playlist
            </div>
          </div>
          <button
            style={{
              backgroundColor: "#1db954",
              border: "none",
              color: "#ffffff",
              padding: "10px 20px",
              borderRadius: "20px",
              cursor: "pointer",
            }}
          >
            Upgrade
          </button>
        </div>

        {/* Playlist Content */}
        <div style={{ flex: 1, padding: "20px", overflowY: "auto" }}>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <div
              style={{
                width: "calc(33.333% - 20px)",
                backgroundColor: "#282828",
                padding: "20px",
                borderRadius: "8px",
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              <div style={{ marginBottom: "10px" }}>
                <img
                  src="https://via.placeholder.com/150"
                  alt="Album Art"
                  style={{ width: "100%", borderRadius: "8px" }}
                />
              </div>
              <div>Song 1</div>
              <div style={{ color: "#b3b3b3" }}>Artist 1</div>
            </div>
            <div
              style={{
                width: "calc(33.333% - 20px)",
                backgroundColor: "#282828",
                padding: "20px",
                borderRadius: "8px",
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              <div style={{ marginBottom: "10px" }}>
                <img
                  src="https://via.placeholder.com/150"
                  alt="Album Art"
                  style={{ width: "100%", borderRadius: "8px" }}
                />
              </div>
              <div>Song 2</div>
              <div style={{ color: "#b3b3b3" }}>Artist 2</div>
            </div>
            <div
              style={{
                width: "calc(33.333% - 20px)",
                backgroundColor: "#282828",
                padding: "20px",
                borderRadius: "8px",
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              <div style={{ marginBottom: "10px" }}>
                <img
                  src="https://via.placeholder.com/150"
                  alt="Album Art"
                  style={{ width: "100%", borderRadius: "8px" }}
                />
              </div>
              <div>Song 3</div>
              <div style={{ color: "#b3b3b3" }}>Artist 3</div>
            </div>
            {/* Agrega más canciones aquí */}
          </div>
        </div>

        {/* Now Playing Bar */}
        <div
          style={{
            width: "100%",
            backgroundColor: "#181818",
            padding: "10px 20px",
            position: "fixed",
            bottom: "56px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="https://via.placeholder.com/64"
              alt="Album Art"
              style={{ width: "64px", height: "64px", marginRight: "10px" }}
            />
            <div>
              <div>Song Title</div>
              <div style={{ color: "#b3b3b3" }}>Artist Name</div>
            </div>
          </div>
          <div>
            <button
              style={{
                backgroundColor: "transparent",
                border: "none",
                color: "#ffffff",
                cursor: "pointer",
                fontSize: "24px",
              }}
            >
              ⏮
            </button>
            <button
              style={{
                backgroundColor: "transparent",
                border: "none",
                color: "#ffffff",
                cursor: "pointer",
                fontSize: "24px",
              }}
            >
              ⏯
            </button>
            <button
              style={{
                backgroundColor: "transparent",
                border: "none",
                color: "#ffffff",
                cursor: "pointer",
                fontSize: "24px",
              }}
            >
              ⏭
            </button>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ marginRight: "10px" }}>00:00</div>
            <div
              style={{
                backgroundColor: "#282828",
                width: "200px",
                height: "5px",
                borderRadius: "5px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  backgroundColor: "#1db954",
                  width: "50%",
                  height: "100%",
                }}
              ></div>
            </div>
            <div style={{ marginLeft: "10px" }}>03:45</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotifySimulator;
