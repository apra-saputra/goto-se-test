import { css } from "@emotion/react";

export const padding = "1rem";

export const global = {
  section: css({
    paddingInline: padding,
    paddingBottom: "3rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  }),
  subSection: css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "1rem",
    paddingInline: padding,
    "@media (min-width: 768px)": {
      maxWidth: "1536px",
    },
  }),
  headerPage: css({
    display: "flex",
    justifyContent: "center",
    width: "100%",
    borderBottom: "0.25rem solid var(--accent-secondary)",
    "& h1": {
      fontSize: "2.5rem",
    },
  }),
  container: css({
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: ".5rem",
    width: "100%",
    "@media (min-width: 768px)": {
      flexWrap: "wrap",
      justifyContent: "center",
      flexDirection: "row",
      
    },
  }),
};
