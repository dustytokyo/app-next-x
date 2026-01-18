'use client';

import { HelloButton } from '../components/HelloButton';
import { Container, Box } from '@mui/material';

export default function MyTestPage() {
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <HelloButton label="Click Me!" />
      </Box>
    </Container>
  );
}
