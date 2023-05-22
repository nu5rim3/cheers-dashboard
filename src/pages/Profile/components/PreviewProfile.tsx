import React, { memo } from 'react'
import Box from '@mui/material/Box/Box'
import Grid from '@mui/material/Grid/Grid'
import Paper from '@mui/material/Paper/Paper'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FlatwareIcon from '@mui/icons-material/Flatware';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import LiquorIcon from '@mui/icons-material/Liquor';
import StoreIcon from '@mui/icons-material/Store';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import SmokingRoomsIcon from '@mui/icons-material/SmokingRooms';
import BlockIcon from '@mui/icons-material/Block';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WebIcon from '@mui/icons-material/Web';
import MapIcon from '@mui/icons-material/Map';
import LaunchIcon from '@mui/icons-material/Launch';
import { useState } from 'react';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const PreviewProfile = memo(() => {

  const [expanded, setExpanded] = useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Typography>
        Store Preview
      </Typography>
      <Box display={'flex'} justifyContent={'center'}>
        <Grid container justifyContent={'center'}>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <Card sx={{ width: '100%' }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    G7
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Grand 7 Restaurant"
                subheader="Thalawathugoda"
              />
              <CardMedia
                component="img"
                height="450"
                image="https://placehold.co/600x400"
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2">
                Grand 7 Restaurant is a modern kitchen created with freshness in mind. Every meal is completely customizable and handcrafted in our open kitchen with only the finest and freshest ingredients. We believe in fast, flavorful meals. And we believe great food shouldn't break the bank.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Details:</Typography>

                  <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={12} sm={4} md={4}>
                      <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'} flexDirection={'row'}>
                        <PhoneIcon />
                        <Typography paragraph ml={1} pt={2}>+941112345678</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                      <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'} flexDirection={'row'}>
                        <EmailIcon />
                        <Typography paragraph ml={1} pt={2}>sample@email.com</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                      <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'} flexDirection={'row'}>
                        <WebIcon />
                        <Typography paragraph ml={1} pt={2}>http://sample.com</Typography>
                        <IconButton>
                          <LaunchIcon />
                        </IconButton>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                      <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'} flexDirection={'row'}>
                        <MapIcon />
                        <Typography paragraph ml={1} pt={2}>http://sample.com</Typography>
                        <IconButton>
                          <LaunchIcon />
                        </IconButton>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                      <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'} flexDirection={'row'}>
                        <LocalParkingIcon />
                        <Typography paragraph ml={1} pt={2}>Parking Available</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                      <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'} flexDirection={'row'}>
                        <LocalBarIcon />
                        <Typography paragraph ml={1} pt={2}>Liquor Available</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                      <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'} flexDirection={'row'}>
                        <LiquorIcon />
                        <Typography paragraph ml={1} pt={2}>BYOB Available</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                      <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'} flexDirection={'row'}>
                        <SmokingRoomsIcon />
                        <Typography paragraph ml={1} pt={2}>Smoke Area Available</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                      <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'} flexDirection={'row'}>
                        <StoreIcon />
                        <Typography paragraph ml={1} pt={2}>Smoke Area Available</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                      <Box>
                        <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'} flexDirection={'row'}>
                          <PaymentIcon />
                          <Typography paragraph ml={1} pt={2}>Card Payment Available</Typography>
                        </Box>
                        <Box>
                          - AMEX
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                      <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'} flexDirection={'row'}>
                        <CheckroomIcon />
                        <Typography paragraph ml={1} pt={2}>Dress Code</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                      <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'} flexDirection={'row'}>
                        <FlatwareIcon />
                        <Typography paragraph ml={1} pt={2}>Currenly Open</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                      <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'} flexDirection={'row'}>
                        <AccessTimeIcon />
                        <Typography paragraph ml={1} pt={2}>Currenly Open</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                      <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'} flexDirection={'row'}>
                        <AccessTimeIcon />
                        <Typography paragraph ml={1} pt={2}>Close Time</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                      <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'} flexDirection={'row'}>
                        <BlockIcon />
                        <Typography paragraph ml={1} pt={2}>Close in Holiday</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  )
})

export default PreviewProfile