import { css } from "@emotion/react";
import { global, padding } from "@/styles/global.styles";

export const styles = {
  section: global.section,
  subSection: global.subSection,
  container: global.container,
  header: global.headerPage,
  pagination: css`
    display: none;
    @media (min-width: 768px) {
      margin-bottom: 2rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 0.1rem;
      padding: 0 5rem;

      li a {
        border-radius: 7px;
        padding: 0.1rem 1rem;
        border: gray 1px solid;
        cursor: pointer;
      }
      li.previous a,
      li.next a,
      li.break a {
        border-color: transparent;
        background-color: var(--accent-primary);
      }
      li.selected a {
        background-color: var(--accent-secondary);
        border-color: transparent;
        min-width: 32px;
      }
      li.disabled a {
        color: grey;
      }
      li.disable,
      li.disabled a {
        cursor: default;
      }
    }
  `,
  filter: css({
    width: "100%",
    minHeight: 100,
    backgroundColor: "var(--color-primary)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: ".5rem",
    borderRadius: ".5rem",
    padding: ".5rem",
    minWidth: 330,
    "@media (min-width: 768px)": {
      flexWrap: "wrap",
      justifyContent: "center",
      minWidth: "768px",
    },
  }),
  searchTitle: css({
    display: "flex",
    flexDirection: "column",
    gap: ".5rem",
    "@media (min-width: 768px)": {
      flexDirection: "row",
      justifyContent: "center",
    },
  }),
  inputs: css({
    width: "100%",
    marginBottom: ".5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "1rem",
    "@media (min-width: 768px)": {
      flexDirection: "row",
    },
  }),
};
