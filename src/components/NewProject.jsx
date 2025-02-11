import { React, useRef } from 'react';
import Input from './Input';
import Modal from './Modal';

function NewProject({ onAdd }) {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function saveHandler() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    // validation
    if (
      enteredTitle.trim() === '' ||
      enteredDescription.trim() === '' ||
      enteredDueDate.trim() === ''
    ) {
      // Show error modal
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal buttonCaption='Okay' ref={modal} >
      <h2>Invalid input</h2>
      <p>Oops. Looks like you forgot to enter a value</p>
      <p>Please make sure to add a valid value for every input field</p>
      </Modal>
      <div className='w-[35rem] mt-16'>
        <menu className='flex items-center justify-end gap-4 my-4'>
          <li>
            <button className='text-stone-800 hover:text-stone-950'>
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={saveHandler}
              className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 '
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type='text' ref={title} label='Title' />
          <Input ref={description} label='Description' textArea />
          <Input type='date' ref={dueDate} label='Due Date' />
        </div>
      </div>
    </>
  );
}

export default NewProject;
