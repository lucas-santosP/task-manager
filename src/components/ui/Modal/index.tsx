import React, { useState, useImperativeHandle, forwardRef, useEffect } from "react";
import { ModalOverlay, ModalContainer, ModalHeader, ModalMain } from "./styles";
import { HiX } from "react-icons/hi";

interface IProps {
  title?: string;
  maxWidth?: number | string;
  children: React.ReactNode;
  onClose?: () => void;
}

export interface ModalRef {
  setVisibility: (value: boolean) => void;
}

const Modal: React.ForwardRefRenderFunction<ModalRef, IProps> = (props, ref) => {
  const { title = "Empty title", maxWidth = 500, onClose, children } = props;

  const [visibility, setVisibility] = useState(false);

  function handleSetVisibility(newValue: boolean) {
    if (!newValue && onClose) onClose();
    setVisibility(newValue);
  }

  function handleClickOnOverlay(e: React.MouseEvent) {
    e.stopPropagation();
    handleSetVisibility(false);
  }

  useImperativeHandle(ref, () => {
    return {
      setVisibility: handleSetVisibility,
    };
  });

  const handleCloseOnEsc = (event: KeyboardEvent) => {
    if (event.key === "Escape") setVisibility(false);
  };

  useEffect(() => {
    if (visibility) window.addEventListener("keydown", handleCloseOnEsc);
    else window.removeEventListener("keydown", handleCloseOnEsc);

    return () => {
      window.removeEventListener("keydown", handleCloseOnEsc);
    };
  }, [visibility]);

  if (!visibility) return null;
  return (
    <>
      <ModalOverlay className="modal-overlay" onClick={handleClickOnOverlay} />

      <ModalContainer
        style={{ maxWidth: `${maxWidth}px` }}
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >
        <ModalHeader>
          <h2 className="title">{title}</h2>

          <button className="btn-close" onClick={() => setVisibility(false)}>
            <HiX />
          </button>
        </ModalHeader>

        <ModalMain>{children}</ModalMain>
      </ModalContainer>
    </>
  );
};

export default forwardRef(Modal);
