import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import Image from "next/image";

const StyledAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  return (
    <AppBar
      position="relative"
      sx={{
        margin: "1px",
      }}
    >
      <Container sx={{ backgroundColor: "lightgreen" }}>
        <Stack spacing={2} direction={"row"} justifyContent={"space-between"}>
          <Image
            alt="RebellBrotherz"
            title="RebellBrotherz"
            src="/pageLogo.png"
            width={50}
            height={50}
          />
          <Avatar
            sx={{ alignSelf: "center" }}
            alt="Secre Swallowtail"
            title="Waifu"
            src="/Secre.jpg"
          />
        </Stack>
      </Container>
    </AppBar>
  );
};
export default StyledAppBar;
