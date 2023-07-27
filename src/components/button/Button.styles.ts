import { css } from "@emotion/react";

export const styles = {
  btn: css({
    borderRadius: "0.6rem",
    border: "2px solid",
    borderColor: "var(--accent-primary)",
    backgroundColor: "var(--bg-light)",
    cursor: "pointer",
    transition: "all 300ms ease",
    "&:hover, &:active": {
      border: "2px solid",
      borderColor: "var(--accent-secondary)",
    },
  }),
  btnSm: css({
    padding: "0.3rem 0.75rem",
    fontSize: "0.8rem",
  }),
  btnLg: css({
    padding: "0.5rem 1rem",
    fontSize: "1.1rem",
  }),
  invalidStyle: css({
    cursor: "pointer",
    transition: "all 300ms ease",
    "&:hover, &:active": {
      border: "2px solid",
      borderColor: "var(--accent-secondary)",
    },
  }),
};
