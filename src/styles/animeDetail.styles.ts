import { css } from "@emotion/react";
import { global } from "@/styles/global.styles";
import { relative } from "path";

const padding = "1rem",
  maxWidth = "1536px";

export const styles = {
  section: global.section,
  loading: css({
    height: "80dvh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }),
  article: css({
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    paddingInline: padding,
    width: "100%",
    "@media (min-width: 768px)": {
      maxWidth: maxWidth,
    },
  }),
  title: css({
    fontSize: "2rem",
    paddingBottom: ".5rem",
    borderBottom: ".25rem solid var(--accent-secondary)",
  }),
  content: css({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    gap: "1rem",
    backgroundColor: "var(--color-primary)",
    overflow: "hidden",
    borderRadius: ".5rem",
    boxShadow: "0 0 1rem var(--shadow)",
    "@media (min-width: 768px)": {
      justifyContent: "flex-start",
      flexDirection: "row",
      boxShadow: "0 0 1rem var(--shadow)",
    },
  }),
  banner: css({
    height: "100%",
    maxWidth: maxWidth,
    objectFit: "contain",
    display: "none",
    "@media (min-width: 768px)": {
      display: "block",
      boxShadow: "0 0 1rem var(--shadow)",
      borderRadius: ".5rem",
    },
  }),
  image: css({
    minWidth: 300,
    height: "100%",
    objectFit: "cover",
    "@media (min-width: 768px)": {
      objectFit: "contain",
    },
  }),
  info: css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    padding: ".5rem 1rem",
    gap: '.25rem',
    "& p": {
      fontWeight: "600",
    },
    "& p span": {
      fontWeight: "200",
    },
    "@media (min-width: 768px)": {
      padding: ".5rem .25rem",
    },
  }),
  action: css({
    display: "flex",
    justifyContent: "flex-end",
    gap: "1rem",
  }),
  site: css({
    "& span": {
      textDecoration: "underline",
      color: "var(--color-gray)",
      cursor: "pointer",
      transition: "all 300ms ease",
      "@media (min-width: 768px)": {
        color: "var(--color-primary)",
      },
    },
    "& span:hover, & span:active": {
      color: "black",
      "@media (min-width: 768px)": {
        color: "var(--color-primary)",
      },
    },
  }),
  information: css({
    margin: ".25rem 0",
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
    alignItems: "center",
    "& span": {
      padding: ".25rem",
      borderRadius: ".5rem",
      backgroundColor: "var(--color-gray)",
    },
  }),
  formCheckBox: css({
    display: "flex",
    gap: "1rem",
    flexDirection: "column",
    padding: ".5rem",
    minWidth: 300,
    "@media (min-width: 768px)": {
      minWidth: 500,
    },
  }),
  checkBoxWrapper: css({
    "& li": {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingInline: ".5rem",
      marginBottom: ".25rem",
      "& p": {
        fontSize: "1.2rem",
      },
      '& input[type="checkbox"]': {
        borderRadius: "50%",
        "-webkit-appearance": "none",
        appearance: "none",
        backgroundColor: "var(--accent-primary)",
        margin: 0,
        width: "1.5rem",
        height: "1.5rem",
        border: "0.15em solid var(--accent-secondary)",
        transform: "translateY(-0.075em)",
        display: "grid",
        placeContent: "center",
      },
      '& input[type="checkbox"]:checked': {
        color: "var(--color-primary)",
      },
      '& input[type="checkbox"]::before': {
        content: '""',
        width: "0.65em",
        height: "0.65em",
        clipPath:
          "polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%)",
        color: "var(--color-primary)",
        transform: "scale(0)",
        transformOrigin: "bottom left",
        transition: "120ms transform ease-in-out",
        boxShadow: "inset 1em 1em var(--form-control-color)",

        backgroundColor: "CanvasText",
      },
      '& input[type="checkbox"]:checked::before': {
        transform: "scale(1)",
      },
      '& input[type="checkbox"]:focus': {
        outline: "max(2px, 0.15em) solid var(--accent-secondary)",
        outlineOffset: "max(2px, 0.15em)",
      },
    },
  }),
  formButtonSubmit: css({
    display: "flex",
    justifyContent: "flex-end",
  }),
};
