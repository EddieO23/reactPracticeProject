import React, { useRef, useImperativeHandle, forwardRef } from 'react';
import { createPortal } from 'react-dom';
import Button from './Button'

// Wrap the component with forwardRef
const Modal = forwardRef(({ children, buttonCaption }, ref) => {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal(); // Method to show the modal
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className='backdrop:bg-stone-900/90 p-4 rounded-md shadow-md '>
      {children}
      <form method='dialog' className='m4-4 text-right'>
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById('modal-root') // Render the modal in a specific DOM node
  );
});

export default Modal;
