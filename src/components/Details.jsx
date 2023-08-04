import { Box, Typography } from '@mui/material';

export default function Details({ data }) {
  return (
    <Box
      sx={{
        p: 2,
      }}
    >
      <Typography variant="h4" sx={{ textAlign: 'center', mb: 2 }}>
        Деталі
      </Typography>
      <Typography sx={{ mb: 2 }}>
        <span style={{ fontWeight: '700' }}>Статус доставки: </span>
        {data.Status}
      </Typography>
      <Typography sx={{ mb: 2 }}>
        <span style={{ fontWeight: '700' }}>Відправлено: </span>
        {data.WarehouseSender}
      </Typography>
      <Typography>
        <span style={{ fontWeight: '700' }}>Доставлено: </span>
        {data.WarehouseRecipient}
      </Typography>
    </Box>
  );
}
