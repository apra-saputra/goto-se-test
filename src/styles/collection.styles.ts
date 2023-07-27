import { css } from "@emotion/react";
import { global } from "@/styles/global.styles";

export const styles = {
  section: global.section,
  subSection: global.subSection,
  container: css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2rem",
    width: "100%",
    "@media (min-width: 768px)": {
      flexWrap: "wrap",
      justifyContent: "center",
      flexDirection: "row",
    },
  }),
  header: css({
    display: "flex",
    justifyContent: "center",
    borderBottom: "0.25rem solid var(--accent-secondary)",
    "& h1": {
      fontSize: "2.5rem",
    },
  }),
  cardAdd: css({
    height: 330,
    width: 240,
    boxSizing: "border-box",
    padding: ".5rem 5rem",
    borderRadius: ".5rem",
    backgroundColor: "var(--color-primary)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  }),
};
