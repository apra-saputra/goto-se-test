import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { animeStyles } from "./card.styles";
import ModalOption from "../modal/ModalOption";

type CardProps = {
  item: MediaType;
  confirmDelete?: (O: MediaType) => void;
};

const AnimeCard: React.FC<CardProps> = ({ item, confirmDelete }) => {
  let hoverTimeout: ReturnType<typeof setTimeout>;
  const router = useRouter();

  const descriptions = item.description ? item.description.split("<br><br>") : [""];

  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const variant = {
    hidden: { opacity: 0, y: -200 },
    visible: { opacity: 1, y: 0 },
  };

  const handleHover = () => {
    hoverTimeout = setTimeout(() => {
      setIsHovered(true);
    }, 500);
  };

  const handleHoverLeave = () => {
    clearTimeout(hoverTimeout);
    setIsHovered(false);
  };

  useEffect(() => {
    return () => {
      clearTimeout(hoverTimeout);
    };
  }, [clearTimeout]);

  return (
    <div css={animeStyles.card} onMouseLeave={() => setIsOpen(false)}>
      <div
        css={animeStyles.imageWrapper}
        onClick={() =>
          router.push({
            pathname: "/anime/[id]",
            query: { id: item.id },
            hash: item.title.english,
          })
        }
      >
        <div css={animeStyles.hoverImageText}>
          <p>Click to see detail</p>
        </div>
        <motion.img
          css={animeStyles.image}
          src={item.coverImage.large}
          alt="anime cover"
          loading="lazy"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { delay: 0.3, type: "tween" },
          }}
        />
      </div>
      <motion.div
        css={animeStyles.content}
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h3>{item.title.english ? item.title.english : item.title.native}</h3>
        <div
          css={animeStyles.info}
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverLeave}
        >
          <div>
            <p css={animeStyles.detail}>{item.description}</p>
            <p css={animeStyles.score}>Score : {item.averageScore}</p>
          </div>
          <ul css={animeStyles.tags}>
            {item.genres.map((item, index) => (
              <li key={index} css={animeStyles.tag}>
                <p>{item}</p>
              </li>
            ))}
          </ul>
          {descriptions.length && (
            <AnimatePresence mode="wait" initial={false}>
              {isHovered && (
                <motion.div
                  css={animeStyles.label}
                  variants={variant}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  {descriptions.map((description, index) => (
                    <div key={index}>
                      <p>{description}</p>
                      {descriptions.length !== index + 1 && (
                        <>
                          <br />
                          <br />
                        </>
                      )}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
      </motion.div>
      {router.pathname === "/collection/[cid]" && (
        <ModalOption setIsOpen={setIsOpen} isOpen={isOpen}>
          <li onClick={() => confirmDelete && confirmDelete(item)}>Remove</li>
        </ModalOption>
      )}
    </div>
  );
};

export default AnimeCard;
