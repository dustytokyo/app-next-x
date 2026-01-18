'use client';

import React, { useState } from 'react';
import { Button, Modal } from 'flowbite-react';

export interface HelloButtonProps {
  label?: string;
}

export const HelloButton: React.FC<HelloButtonProps> = ({
  label = 'Open Modal',
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)} data-testid="hello-button">
        {label}
      </Button>
      <Modal show={open} onClose={() => setOpen(false)} data-testid="hello-modal">
        <Modal.Body>
          <div className="text-center text-xl font-semibold">
            hello!
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
