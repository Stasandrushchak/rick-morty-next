import { Card, CardContent, CardMedia, Typography } from '@mui/material';

export default function CharacterCard({ name, image, location }) {
  return (
    <Card sx={{ width: 230, height: 360 }}>
      <CardMedia
        component="img"
        image={image}
        alt={name}
        sx={{ maxWidth: '100%', height: 'auto' }}
      />
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography variant="h6" noWrap>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Last Location: {location}
        </Typography>
      </CardContent>
    </Card>
  );
}