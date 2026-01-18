'use client';

import React, { useState } from 'react';
import { Button, Modal, Box, Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export interface HelloButtonProps {
  label?: string;
}

export const HelloButton: React.FC<HelloButtonProps> = ({
  label = 'Open Modal',
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpen}
        data-testid="hello-button"
      >
        {label}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        data-testid="hello-modal"
      >
        <Box sx={style}>
          <Typography id="modal-title" variant="h6" component="h2">
            hello!
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
