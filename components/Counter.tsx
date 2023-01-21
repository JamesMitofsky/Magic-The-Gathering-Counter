import * as React from 'react';
import { Button, Typography, Box, TextField } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

interface Props {
  label: string;
  resetRequired: boolean;
  counterDirection: 'increment' | 'decrement';
  initialValue: number;
}

export default function Counter({ label, resetRequired, initialValue }: Props) {
  const [counter, setCounter] = React.useState(initialValue);

  React.useEffect(() => {
    if (!resetRequired) return;
    setCounter(initialValue);
  }, [resetRequired]);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ display: 'grid', gap: 2, gridAutoFlow: 'column' }}>
        <Button
          sx={{ pt: 2, pb: 2 }}
          onClick={() => setCounter((prev) => prev + 1)}
          variant="outlined"
        >
          <AddIcon />
        </Button>
        <Button
          sx={{ pt: 2, pb: 2 }}
          onClick={() => setCounter((prev) => prev - 1)}
          variant="outlined"
        >
          <RemoveIcon />
        </Button>
      </Box>
      <TextField
        sx={{
          m: 2,
          minWidth: 40,
        }}
        value={counter}
        onChange={(event) => setCounter(event.target.value)}
        type="number"
      />
      <Typography sx={{ width: '100%' }} variant="body1">
        {label}
      </Typography>
    </Box>
  );
}
