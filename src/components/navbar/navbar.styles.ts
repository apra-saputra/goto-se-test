import { css } from "@emotion/react";

export const styles = {
  header: css({
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 1000,
  }),
  nav: css({
    transition: "all 200ms ease",
    boxShadow: "0 0 0.25rem rgba(0, 0, 0, 0.5)",
    backgroundColor: "var(--bg-light)"
  }),
  container: css({
    justifyContent: "center",
    margin: "0 auto",
    maxWidth: "1536px",
    padding: "1rem 1rem",
    "@media (min-width: 768px)": {
      padding: "1rem 0.5rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
  }),
  heading: css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "var(--color-primary)",
    "@media (min-width: 768px)": {
      display: "block",
    },
  }),
  title: css({
    fontWeight: 800,
    fontSize: "1.5rem",
  }),
  toggleButton: css({
    padding: "0.5rem",
    borderRadius: "0.375rem",
    outlibne: "1rem",
    "&:focus": {
      borderColor: "var(--accent-primary)",
      boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.5)",
    },
    "&:hover": {
      borderColor: "var(--accent-primary)",
      boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.5)",
    },
    "@media (min-width: 768px)": {
      display: "none",
    },
  }),
  menu: css`
      flex-1;
      justify-self: center;
      padding-bottom: 0.75rem;
      margin-top: 2rem;
      @media (min-width: 768px) {
        padding-bottom: 0;
        margin-top: 0;
      }
    `,
  displayBlock: css`
    display: block;
  `,
  displayHidden: css`
    display: block;
    @media (max-width: 768px) {
      display: none;
    }
  `,
  menulist: css`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.25rem;
    @media (min-width: 768px) {
      flex-direction: row;
    }
  `,
  menuListItem: css({
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    cursor: "pointer",
  }),
  menuListItemAfter: css({
    paddingBottom: "0.15rem",
    borderBottom: "2px solid",
    borderColor: "var(--accent-secondary)",
  }),
  hoverClick: css({
    cursor: "pointer",
    transition: "all 0.2s ease-in",
    "&:hover": {
      color: "var(--color-primary)",
    },
    "&:active": {
      color: "var(--accent-secondary)",
    },
  }),
};
