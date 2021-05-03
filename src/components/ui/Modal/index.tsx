import React, { useState, useCallback, useImperativeHandle, forwardRef, useEffect } from "react";
import { ModalOverlay, ModalContainer, ModalHeader, ModalMain } from "./styles";
import { HiX } from "react-icons/hi";

interface IProps {
  title?: string;
  maxWidth?: number | string;
  children: React.ReactNode;
}

export interface ModalRef {
  setVisibility: (value: boolean) => void;
  toggleVisibility: () => void;
}

const Modal: React.ForwardRefRenderFunction<ModalRef, IProps> = (props, ref) => {
  const { title = "Empty title", maxWidth = 500, children } = props;

  const [visibility, setVisibility] = useState(false);

  const toggleVisibility = useCallback(() => {
    setVisibility((prevState) => !prevState);
  }, []);

  const handleClickOnOverlay = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setVisibility(false);
  }, []);

  useImperativeHandle(ref, () => {
    return { setVisibility, toggleVisibility };
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
