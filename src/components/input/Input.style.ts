import { css } from "@emotion/react";

export const inputStyles = {
  input: css({
    padding: ".5rem ",
    fontSize: "1.3rem",
    borderRadius: ".5rem",
    border: ".2rem solid var(--accent-secondary)",
    "&:focus-visible, &:active": {
      outline: "var(--accent-primary) solid .2rem",
    },
    "@media (min-width: 768px)": {
      fontSize: "1.1rem",
    },
  }),
};
