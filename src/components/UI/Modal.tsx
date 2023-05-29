import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';
import { useDispatch } from 'react-redux';
import { modalActions } from '../../store/UI/modalSlice';
const Backdrop: React.FC = () => {
  const dispatch = useDispatch();
  const closeModalHandler = () => {
    dispatch(modalActions.toggleModal());
  };
  return <div onClick={closeModalHandler} className={styles.backdrop} />;
};
const ModalOverlay: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
const portalElement: HTMLElement | null = document.getElementById('overlays');

const Modal: React.FC<{ children: ReactNode }> = (props) => {
  if (!portalElement) {
    return null;
  }
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
