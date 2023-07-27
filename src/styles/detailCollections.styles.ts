import { css } from "@emotion/react";
import { global } from "@/styles/global.styles";

export const styles = {
  section: global.section,
  subSection: global.subSection,
  container: css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: ".5rem",
    width: "100%",
    "@media (min-width: 768px)": {
      flexWrap: "wrap",
      justifyContent: "flex-start",
      flexDirection: "row",
      maxWidth: "1024px",
    },
  }),
  conatainerLoading: css({
    height: 800,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: ".5rem",
  }),
};
