import { css } from "@emotion/react";

export const styles = {
  modal: css({
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 200,
  }),
  content: css({
    backgroundColor: "white",
    borderRadius: "0.4rem",
    minWidth: "350px",
    "@media (min-width: 768px)": {
      maxWidth: "600px",
    },
  }),
  header: css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "2px solid",
    borderColor: "var(--accent-secondary)",
    padding: "0.75rem",
    height: "70px",
  }),
  headerText: css({ fontSize: "1.4rem", fontWeight: "500" }),
  form: css({
    width: "100%",
    height: "400px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    gap: "1rem",
    paddingInline: "1rem",
    "@media (min-width: 768px)": {
      width: 600,
    },
  }),
};

export const optionStyles = {
  option: css({
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 50,
    cursor: "pointer",
    "& svg": {
      color: "white",
      boxSizing: "border-box",
      transition: "all 200ms ease",
      border: ".2rem solid white",
      borderRadius: "50%",
      padding: ".2rem",
      aspectRatio: 1 / 1,
    },
    "& svg:hover": {
      color: "var(--color-gray)",
      borderColor: "var(--color-gray)",
    },
  }),
  optionActive: css({
    "& svg": {
      color: "var(--color-gray)",
      borderColor: "var(--color-gray)",
    },
  }),
  menu: css({
    position: "absolute",
    zIndex: 15,
    right: -5,
    padding: "0.5rem .75rem",
    backgroundColor: "gray",
    borderRadius: ".25rem",
    color: "white",
    display: "flex",
    flexDirection: "column",
    gap: ".5rem",
    "& li": {
      fontSize: "1.2rem",
      textAlign: "center",
      borderRadius: ".25rem",
      "&:hover": {
        color: "var(--color-primary)",
      },
      "@media (min-width: 768px)": {
        fontSize: "1.1em",
      },
    },
  }),
};
