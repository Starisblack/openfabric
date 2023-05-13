import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import "./ConfirmationDialog.css";
import PropTypes from "prop-types";
import BeatLoader from "react-spinners/BeatLoader";

function ConfirmationDialog(props) {
  return (
    <div className="confirmation-container">
      <Dialog
        open={props.openAlert}
        onClose={props.closeAlert}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.desc}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.closeAlert}>Cancel</Button>
          {props.loading ? (
            <BeatLoader />
          ) : (
            <Button onClick={props.yesHandler} autoFocus>
              Yes
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ConfirmationDialog;

ConfirmationDialog.propTypes = {
  yesHandler: PropTypes.func,
  openAlert: PropTypes.bool,
  loading: PropTypes.bool,
  title: PropTypes.string,
  closeAlert: PropTypes.func,
  desc: PropTypes.string,
};
