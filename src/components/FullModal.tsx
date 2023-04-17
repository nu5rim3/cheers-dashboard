import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface FullmodalProps {
  open: boolean,
  isEdit: boolean,
  toggleModal: () => void,
  children: React.ReactNode
}

const FullModal: React.FC<FullmodalProps> = ({ open, isEdit, toggleModal, children }) => {


  return (
    <>
      <Dialog
        fullScreen
        open={open}
        onClose={toggleModal}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              onClick={toggleModal}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {isEdit ? 'Update Food' : 'Add New Food'}
            </Typography>
            <Button variant='contained' autoFocus onClick={toggleModal}>
              {isEdit ? 'Update' : 'Save'}
            </Button>
          </Toolbar>
        </AppBar>
        {children}
      </Dialog>
    </>
  );
}

export default FullModal;