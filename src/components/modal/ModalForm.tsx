import React from "react";
import Modal from "./Modal";
import { styles } from "./modal.styles";
import Button from "../button/Button";
import InputCustom from "../input/InputCustom";

interface ModalForm extends ModalInterface {
  value: string | number | readonly string[] | undefined;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const ModalForm: React.FC<ModalForm> = ({
  isOpen,
  title,
  value,
  onClose,
  onSubmit,
  onChange,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <form css={styles.form} onSubmit={onSubmit}>
        <InputCustom
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Nama Collection"
        />
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: ".25rem",
          }}
        >
          <Button useStyle={true} size="lg" type="submit">
            Save
          </Button>
          <Button useStyle={true} size="lg" type="button" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default ModalForm;
