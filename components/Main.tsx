import * as React from 'react';
import { Box, Button, Divider } from '@mui/material';
import Counter from './Counter';

export default function Main() {
  const [resetRequired, setResetRequired] = React.useState(false);

  // const titlesForDecrementing = ['Life Counter'];

  const titlesForIncrementing = [
    'Plainswalker Life Counter',
    'Commander ReEntry Fee',
  ];

  function resetCounters() {
    setResetRequired(true);
  }

  React.useEffect(() => {
    if (!resetRequired) return;
    setResetRequired(false);
  }, [resetRequired]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Counter
        counterDirection="decrement"
        initialValue={40}
        resetRequired={resetRequired}
        label="Life Counter"
      />
      <Counter
        counterDirection="decrement"
        initialValue={21}
        resetRequired={resetRequired}
        label="Commander Life Counter"
      />
      <Divider sx={{ mt: 2, mb: 2 }} />
      {titlesForIncrementing.map((currentLabel) => (
        <Counter
          counterDirection="increment"
          initialValue={0}
          resetRequired={resetRequired}
          label={currentLabel}
        />
      ))}
      <Button sx={{ m: 2, mt: 4 }} onClick={resetCounters}>
        Reset Counters
      </Button>
    </Box>
  );
}
