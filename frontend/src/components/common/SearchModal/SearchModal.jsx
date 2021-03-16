import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import './Mui.css';
import styles from './SearchModal.module.css';
import Logo from '../Logo/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import SearchBar from '../SearchBar/SearchBar';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});
const SearchModal = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button color="primary" onClick={handleClickOpen}>
        <FontAwesomeIcon icon="search" size="lg" color="#666666"/>
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <div className={styles.container}>
          <div className={styles.header}>
            <Logo type={1}/>
            <IconButton
              aria-label="close"
              size="large"
              onClick={handleClose}
            >
              <CloseIcon fontSize="large"/>
            </IconButton>
          </div>
          <div className={styles.search}>
            <SearchBar/>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default SearchModal;