import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import PhoneInput from "react-phone-number-input";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import IconInput from "./iconInput/IconInput";
import LOGO from "./LOGO.png";
import { Translate } from "@mui/icons-material";
// import SliderButton from "./SliderButton"

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    ></Typography>
  );
}

const theme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />

        <Grid item xs={12} sm={5} md={6} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 2,
              mx: 6,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h">
              ????ng k?? t??i kho???n
            </Typography>

            <Typography sx={{ mt: 2, mb: 1, fontSize: 15 }}>
              Ch??o m???ng gia nh???p c???ng ?????ng ng?????i d??ng c???a Landmaps
            </Typography>

            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 2 }}
            >
              <IconInput
                id="name"
                name="name"
                placeholder="H??? v?? t??n"
                type="text"
                DisplayIcon={PermIdentityIcon}
              />

              <IconInput
                required
                fullWidth
                placeholder="S??? ??i???n tho???i"
                name="phone_num"
                id="phone_num"
                type="phone"
                DisplayIcon={PhoneInTalkIcon}
              />

              <IconInput
                fullWidth
                id="email"
                placeholder="?????a ch??? mail"
                name="email"
                autoComplete="email"
                type="mail"
                autoFocus
                DisplayIcon={MailOutlineIcon}
              />
              <IconInput
                required
                fullWidth
                name="password"
                placeholder="M???t kh???u "
                type="password"
                id="password"
                autoComplete="current-password"
                DisplayIcon={LockOutlinedIcon}
              />

              <IconInput
                required
                fullWidth
                name="password_confirm"
                placeholder="X??c nh???n m???t kh???u"
                type="password"
                id="password_confirm"
                autoComplete="current-password"
                DisplayIcon={LockOutlinedIcon}
              />

              <FormControlLabel
                control={
                  <Checkbox
                    value="remember"
                    color="primary"
                    sx={{
                      color: " #E14E00",
                      "&.Mui-checked": {
                        color: " #E14E00 ",
                      },
                    }}
                  />
                }
                label="B???ng vi???c ????ng k?? t??i kho???n, T??i ?????ng ?? v???i c??c Ch??nh s??ch v?? ??i???u kho???n c???a Landmaps"
              />

              <Button
                variant="contained"
                fullWidth
                sx={{
                  mt: 5,
                  mb: 5,
                  background:
                    "linear-gradient(261.83deg, #D82129 0%, #F36D27 100%)",
                  borderRadius: "8px",
                }}
              >
                ????ng k??
              </Button>

              <Typography align="center">B???n ???? c?? t??i kho???n? </Typography>

              <Button
                type="submit"
                fullWidth
                variant="outlined"
                sx={{ mt: 3, mb: 2, color: "#E14E00", borderColor: "#E14E00" }}
              >
                Sign In
              </Button>
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          xs={false}
          sm={3}
          md={6}
          sx={{
            backgroundRepeat: "no-repeat",
            backgroundColor: " #E14E00 ",
            position: "relative",
          }}
        >
          <Box sx={{ mt: 5 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                alt="LOGO"
                src="LOGO.png"
                sx={{
                  position: "absolute",
                  width: "299px",
                  height: "65px",
                  left: "50%",
                  transform: "translate(-50%)",
                  top: "107px",
                }}
              />

              <Typography
                variant="h2"
                color={"white"}
                align="center"
                margin={2.5}
                sx={{ mt: 20 }}
              >
                Trung t??m th??ng tin quy ho???ch v?? x??c minh th???a ?????t Landmaps
              </Typography>

              <Box
                sx={{
                  position: "absolute",
                  width: "275.06px",
                  height: "275.06px",
                  left: "401.6px",
                  top: "3px",

                  background:
                    "linear-gradient(224.89deg, rgba(255, 255, 255, 0.134) 42.03%, rgba(217, 217, 217, 0) 95.25%)",
                  borderRadius: "237px",
                  transform: "rotate(30.98deg,)",
                }}
              ></Box>
              <Typography
                fontSize={15}
                color={"white"}
                align="center"
                margin={5}
              >
                C??ng c??? h??? tr??? cho c??c nh?? ?????u t??, chuy??n vi??n m??i gi???i, s??n
                giao d???ch, c??ng ty t??i ch??nh... tra c???u th??ng tin quy hoahcj v??
                x??c minh t??nh ph??p l?? th???a ?????t b???i c?? quan nh?? n?????c, v???i m???c
                ti??u l?? h???n ch??? t???i ro v?? n??ng cao t??nh an to??n trong chuy???n
                nh?????ng b???t ?????ng s???n
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
