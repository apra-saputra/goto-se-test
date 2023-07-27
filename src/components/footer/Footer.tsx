import React from "react";
import { footerStyles } from "./footer.styles";

const Footer = () => {
  return (
    <footer css={footerStyles.footer}>
      <div css={footerStyles.footerWrapper}>
        <div css={footerStyles.container}>
          <div css={footerStyles.elements}>
            <h4>© 2023</h4>
            <h4
              id="github"
              onClick={() =>
                window.open("https://github.com/apra-saputra", "_blank")
              }
            >
              by apra-saputra
            </h4>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
