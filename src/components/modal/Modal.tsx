import React, { useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { styles } from "./modal.styles";
import Button from "../button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface ModalProps extends ModalInterface {
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  const modalVariants = {
    hidden: { opacity: 0, y: -200 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -200 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          css={styles.modal}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={modalVariants}
        >
          <motion.div css={styles.content}>
            <div css={styles.header}>
              <header css={styles.headerText}>{title ? title : "Title"}</header>
              <Button size="sm" onClick={onClose} type="button">
                <FontAwesomeIcon icon={faXmark} />
              </Button>
            </div>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
