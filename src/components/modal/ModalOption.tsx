import React from "react";
import { optionStyles } from "./modal.styles";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";

type ModalOptionProps = {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalOption = ({ children, isOpen, setIsOpen }: ModalOptionProps) => {
  const variant = {
    show: {
      y: 0,
      opacity: 1,
    },
    hidden: { y: -50, opacity: 0 },
  };
  return (
    <div
      css={[optionStyles.option, isOpen && optionStyles.optionActive]}
      onClick={() => setIsOpen((state) => !state)}
    >
      <FontAwesomeIcon icon={faEllipsisVertical} size="2x" />
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            css={optionStyles.menu}
            variants={variant}
            initial={"hidden"}
            animate={"show"}
            exit={"hidden"}
          >
            {children}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ModalOption;
