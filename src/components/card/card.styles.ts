import { css } from "@emotion/react";
import { relative } from "path";

const width = 330,
  radius = ".5rem";

export const animeStyles = {
  card: css({
    position: "relative",
    border: "1px solid var(--shadow)",
    borderRadius: radius,
    boxShadow: "0 0 2rem var(--shadow)",
    width: width,
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    overflow: "hidden",
    "@media (min-width: 768px)": {
      overflow: "visible",
      width: 500,
      minHeight: 360,
      flexDirection: "row",
    },
  }),
  imageWrapper: css({
    width: 330,
    position: "relative",
    aspecRation: "1/1",
    overflow: "hidden",
    borderRadius: `${radius} 0 0 ${radius}`,
    cursor: "pointer",
    zIndex: 20,
  }),
  image: css({
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 300ms ease",
  }),
  hoverImageText: css({
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "var(--bg-light)",
    opacity: 0,
    zIndex: 10,
    transition: "all 300ms ease",
    position: "absolute",
    "&:hover, &:active": {
      opacity: 0.8,
    },
  }),
  contentSkeleton: css({
    height: 400,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }),
  content: css({
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "var(--color-primary)",
    borderRadius: ".75rem 0.75rem 0 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: "1rem",
    gap: "0.25rem",
    cursor: "default",
    zIndex: 50,
    "@media (min-width: 768px)": {
      borderRadius: `0 ${radius} ${radius} 0`,
      position: "relative",
      maxWidth: `calc(100%-${width}px)`,
      flexDirection: "column",
      justifyContent: "flex-start",
    },
  }),
  info: css({
    display: "none",
    position: "relative",
    "@media (min-width: 768px)": {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
  }),
  label: css({
    position: "absolute",
    zIndex: 200,
    backgroundColor: "var(--bg-light)",
    padding: "1rem",
    borderRadius: radius,
    boxShadow: "0 0 2rem var(--shadow)",
    maxHeight: 285,
    overflowY: "auto",
  }),
  detail: css({
    display: "-webkit-box",
    "-webkit-line-clamp": 5,
    "-webkit-box-orient": "vertical",
    textOverflow: "ellipsis",
    overflow: "hidden",
    lineHeight: "1.5rem",
    maxHeight: "7.5rem",
  }),
  score: css({
    fontWeight: "600",
  }),
  tags: css({
    display: "flex",
    gap: "0.25rem",
    flexWrap: "wrap",
  }),
  tag: css({
    padding: ".25rem",
    borderRadius: radius,
    backgroundColor: "var(--bg-light)",

    "& p": {
      fontSize: ".9rem",
    },
  }),
  checkMark: css({
    position: "absolute",
    top: 10,
    right: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "30px",
    height: "30px",
    border: "2px solid #ccc",
    borderRadius: "50%",
    cursor: "pointer",

    "& input[type='checkbox']": {
      opacity: 0,
      position: "absolute",
      width: 0,
      height: 0,
    },

    "& input[type='checkbox']:checked + svg": {
      display: "block",
    },

    "& svg": {
      display: "none",
      color: "green",
    },
  }),
};

export const collectionStyles = {
  card: css({
    height: 330,
    width: 240,
    boxSizing: "border-box",
    padding: "1rem .5rem",
    borderRadius: ".5rem",
    backgroundColor: "var(--color-primary)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    zIndex: 1,
  }),
  wrapper: css({
    height: "100%",
    width: "100%",
    position: "absolute",
    borderRadius: ".5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    zIndex: 4,
    cursor: "pointer",
  }),
  title: css({
    bottom: 40,
    position: "absolute",
    zIndex: 10,
    color: "var(--accent-primary)",
    textShadow: "0 0 2rem var(--shadow)",
  }),
  image: css({
    boxShadow: "0 0 1rem black",
    width: 220,
    height: 320,
    objectFit: "cover",
    borderRadius: ".25rem",
  }),
};
