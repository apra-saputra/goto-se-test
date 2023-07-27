interface ModalInterface {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
};
