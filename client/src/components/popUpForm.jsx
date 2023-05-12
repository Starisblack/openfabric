import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import PropTypes from "prop-types";

export default function FormDialog({ open, handleClose, children }) {
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          {children}
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </div>
  );
}


FormDialog.propTypes ={
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  children: PropTypes.node
}
