import React from "react";
import { StyledBaseLayout } from "./styles";
import { AppendButtonToggleTheme } from "../../ui";

const BaseLayout: React.FC = ({ children }) => {
  return (
    <StyledBaseLayout>
      <AppendButtonToggleTheme />

      <img
        src="/images/bg-left.png"
        alt="background texture"
        draggable={false}
        style={{
          objectFit: "cover",
          position: "absolute",
          padding: "2rem 0",
          height: "100vh",
          top: 0,
          left: 0,
        }}
      />
      <img
        src="/images/bg-right.png"
        alt="background texture"
        draggable={false}
        style={{
          objectFit: "cover",
          position: "absolute",
          paddingBottom: "2rem",
          height: "100vh",
          top: 0,
          right: 0,
        }}
      />

      <div style={{ width: "100%", display: "flex" }}>
        <img
          src="/images/logo.png"
          alt="logo"
          draggable={false}
          style={{ objectFit: "cover", maxWidth: "200px", margin: "1rem auto" }}
        />
      </div>

      <main style={{ position: "relative", zIndex: 2 }}>{children}</main>
    </StyledBaseLayout>
  );
};

export default BaseLayout;
