import {
  Autocomplete,
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import Img from '../../assets/register.svg'
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const schema = yup.object({
    firstName: yup.string().min(3).required("First Name is Required"),
    lastName: yup.string().min(3).required("Last Name is Required"),
    email: yup.string().required("Your Email is Required"),
    password: yup
      .string()
      .required("Password is Required")
      .min(8, "Password must be 8 characters long")
      .matches(/[0-9]/, "Password requires a number")
      .matches(/[a-z]/, "Password requires a lowercase letter")
      .matches(/[A-Z]/, "Password requires an uppercase letter")
      .matches(/[^\w]/, "Password requires a symbol"),
  });

  const signUpValue = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: signUpValue,
    resolver: yupResolver(schema),
  });

  const signUpHandler = (data) => {
    const userJson = JSON.stringify(data);

    localStorage.setItem ("user", userJson);

    // reset();

    console.log(data, "data");
  };

  return (
    <div className="container mt-5">
      <Grid container>
        <Grid item xs={12} sm={12} md={6} className="text-center">
          <img  src={Img} alt="Sign Up" />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Box>
            <Typography variant="h4" className="text-red-400 fw-bold mt-2">
           Register
            </Typography>
            <Typography variant="body2" className="my-3">
              Welcome to Tourism! Enter your email to get started.
            </Typography>

            <form onSubmit={handleSubmit(signUpHandler)}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Controller
                    name="firstName"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        placeholder="First Name"
                        size="small"
                        {...field}
                      />
                    )}
                  />
                  <p className="text-red-400 fw-bold mt-2">
                    {errors.firstName?.message}
                  </p>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Controller
                    name="lastName"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        placeholder="Last Name"
                        size="small"
                        {...field}
                      />
                    )}
                  />
                  <p className="text-red-400 fw-bold mt-2">
                    {errors.lastName?.message}
                  </p>
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        type="email"
                        fullWidth
                        placeholder="Enter Email"
                        size="small"
                        {...field}
                      />
                    )}
                  />
                  <p className="text-red-400 fw-bold mt-2">
                    {errors.email?.message}
                  </p>
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                      <OutlinedInput
                        fullWidth
                        size="small"
                        {...field}
                        type={showPassword ? "text" : "password"}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label={
                                showPassword ? "hide password" : "show password"
                              }
                              onClick={() => setShowPassword(!showPassword)}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    )}
                  />
                  <p className="text-red-400 fw-bold mt-2">
                    {errors.password?.message}
                  </p>
                </Grid>
          
                <Grid item xs={12}>
                  <button
                    type="submit"
                    
                    className=" bg-green-500 w-full border border-green-500 py-2 px-14 text-black text-lg font-semibold rounded-md mx-3 hover:bg-green-500 hover:text-white shadow-[4px_4px_0px_rgba(34,197,94,1)] transition duration-300"
                    variant="contained"
                    fullWidth
                  >
                    Register
                  </button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Register;