import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { IconTrash, IconSend, IconPlus, IconX } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import CustomTextField from "../forms/theme-elements/CustomTextField";

const DenetciSatisEkleButton = () => {
  //const [showDrawer2, setShowDrawer2] = useState(false);
  const router = useRouter();

  /*const handleDrawerClose2 = () => {
    setShowDrawer2(false);
  };*/

  const handleRouteClick = () => {
    router.push("/DenetciFirmaIslemleri/DenetciOdemeBilgileri/SatisEkle");
  };

  return (
    <>
      <Stack
        spacing={1}
        direction="row"
        justifyContent="start"
        marginBottom={4}
      >
        <Button
          color="primary"
          onClick={
            () => handleRouteClick()
            /*() => setShowDrawer2(true)*/
          }
          startIcon={<IconPlus width={18} />}
        >
          Satış Ekle
        </Button>
      </Stack>
    </>
  );
};

export default DenetciSatisEkleButton;
