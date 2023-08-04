import { Box, Typography } from '@mui/material';

export default function Error({ error }) {
  return (
    <Box
      sx={{
        p: 2,
      }}
    >
      <Typography variant="h4" sx={{ textAlign: 'center', mb: 2 }}>
        Помилка
      </Typography>
      <Typography sx={{ mb: 2 }}>
        <span style={{ fontWeight: '700' }}>Деталі: </span>
        {error}
      </Typography>
    </Box>
  );
}
