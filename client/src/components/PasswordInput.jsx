import { VisibilityOff, Visibility } from "@mui/icons-material";
import {
  OutlinedInput,
  FormControl,
  InputAdornment,
  InputLabel,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import PropTypes from 'prop-types';

const PasswordInput = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <FormControl margin="normal" fullWidth variant="outlined">
      
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
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
          label="Password"
        />
      </FormControl>
    </div>
  );
};

export default PasswordInput;

PasswordInput.propTypes ={
  register: PropTypes.node
}
