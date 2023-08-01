import { Box, Typography } from '@mui/material';

export default function Details() {
  return (
    <Box
      sx={{
        p: 2,
        border: 1,
        borderRadius: 4,
        backgroundColor: 'background.main',
      }}
    >
      <Typography>Статус доставки: Одержано</Typography>
      <Typography>Відправлено: Відділеня 1</Typography>
      <Typography>Доставлено: Відділення 3</Typography>
    </Box>
  );
}
