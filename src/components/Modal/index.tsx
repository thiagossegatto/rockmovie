import React, { Dispatch, ReactChild, SetStateAction, useCallback, useEffect, useRef } from "react";
import ReactDom from 'react-dom'
import { ModalS, Body, Close } from "./styled";

interface IProps {
  isOpen: boolean
  closeModal: Dispatch<SetStateAction<boolean>>,
  children: ReactChild
}

function Modal({ isOpen, closeModal, children }: IProps): any {
  const refApp = useRef<any>();

  const handleCloseModal = useCallback(
    (event: any) => {
      if (refApp && refApp.current && !refApp.current.contains(event.target)) {
        closeModal(false);
      }
    },
    [closeModal],
  )

  // add eventListner to not close when click inside of modal
  useEffect(() => {
    document.addEventListener('click', handleCloseModal, true);
    return () => {
      document.removeEventListener('click', handleCloseModal, true);
    };
  }, [handleCloseModal]);

  if (!isOpen) return null;

  return ReactDom.createPortal(
    <ModalS>
      <Body ref={refApp}>
        {children}
        <Close onClick={() => { closeModal(false) }} />
      </Body>
    </ModalS>,
    document.getElementById('portal') as HTMLElement
  )
}

export default Modal;
