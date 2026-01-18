'use client';

import React, { useState } from 'react';
import { Button, Dialog, DialogBody } from '@material-tailwind/react';

export interface HelloButtonProps {
  label?: string;
}

export const HelloButton: React.FC<HelloButtonProps> = ({
  label = 'Open Modal',
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button
        onClick={handleOpen}
        color="blue"
        data-testid="hello-button"
      >
        {label}
      </Button>
      <Dialog open={open} handler={handleOpen} data-testid="hello-modal">
        <DialogBody className="text-center text-xl font-semibold">
          hello!
        </DialogBody>
      </Dialog>
    </>
  );
};
