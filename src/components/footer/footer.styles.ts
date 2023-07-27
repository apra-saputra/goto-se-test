import { css } from "@emotion/react";

export const footerStyles = {
  footer: css({
    position: "static",
    bottom: 0,
    width: "100%",
    zIndex: 1000,
  }),
  footerWrapper: css({
    transition: "all 200ms ease",
    boxShadow: "0 0 0.25rem rgba(0, 0, 0, 0.5)",
    backgroundColor: "var(--bg-light)",
    color: "var(--color-primary)",
    height: 70,
  }),
  container: css({
    height: "100%",
    justifyContent: "center",
    margin: "0 auto",
    maxWidth: "1536px",
    padding: "1rem 1rem",
  }),
  elements: css({
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& #github": {
      cursor: "pointer",
      "&: hover, &:active": {
        color: "var(--color-gray)",
      },
    },
  }),
};
