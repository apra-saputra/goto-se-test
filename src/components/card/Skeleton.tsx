import React from "react";
import { animeStyles } from "./card.styles";
import { BeatLoader } from "react-spinners";

export const dummyData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Skeleton = () => {
  return (
    <div css={animeStyles.card}>
      <div css={animeStyles.contentSkeleton}>
        <BeatLoader css={{ color: "var(--accent-primary)" }} />
      </div>
    </div>
  );
};

export default Skeleton;
