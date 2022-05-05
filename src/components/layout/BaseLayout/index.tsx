import React from "react";
import { StyledBaseLayout, LeftBackgroundImage, RightBackgroundImage } from "./styles";
import { AppendButtonToggleTheme } from "../../ui";
import bgLeft from "../../../assets/images/bg-left.png";
import bgRight from "../../../assets/images/bg-right.png";
import imgLogo from "../../../assets/images/logo.png";

const BaseLayout: React.FC = ({ children }) => {
  return (
    <StyledBaseLayout>
      <AppendButtonToggleTheme />

      <LeftBackgroundImage src={bgLeft} alt="background texture" draggable={false} />
      <RightBackgroundImage src={bgRight} alt="background texture" draggable={false} />

      <div style={{ width: "100%", display: "flex", position: "relative", zIndex: 2 }}>
        <img
          src={imgLogo}
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
