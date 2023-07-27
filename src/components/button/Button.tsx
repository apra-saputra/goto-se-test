import React from "react";
import { styles } from "./Button.styles";
import { motion } from "framer-motion";

type ButtonProps = {
  children?: React.ReactNode;
  type?: "submit" | "button" | "reset";
  size?: "sm" | "lg";
  onClick?: (params?: any) => void;
  useStyle?: boolean;
};

const Button = ({ children, type, size, onClick, useStyle }: ButtonProps) => {
  return (
    <motion.button
      css={[styles.btn, size === "lg" ? styles.btnLg : styles.btnSm]}
      type={type}
      onClick={() => onClick && onClick()}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
