import { VisibilityOff, Visibility } from "@mui/icons-material";
import {
  OutlinedInput,
  FormControl,
  InputAdornment,
  InputLabel,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import PropTypes, { string } from 'prop-types';

const PasswordInput = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <FormControl margin="normal" fullWidth variant="outlined">
      
        <InputLabel htmlFor="outlined-adornment-password">{props.label}</InputLabel>
        <OutlinedInput
          {...props.register}
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label={props.label}
        />
      </FormControl>
    </div>
  );
};

export default PasswordInput;

PasswordInput.propTypes ={
  register: PropTypes.object,
  label: string
}
