import { Grid, Button, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomFormLabel from "@/app/components/forms/theme-elements/CustomFormLabel";
import CustomTextAreaAutoSize from "@/app/components/forms/theme-elements/CustomTextAreaAutoSize";
import { IconDeviceFloppy } from "@tabler/icons-react";
import { useSelector } from "@/store/hooks";
import { AppState } from "@/store/store";
import {
  getHesapKodlari,
  updateHesapKodlari,
} from "@/api/HesapKodlari/HesapKodlari";
import { enqueueSnackbar } from "notistack";

interface HesapKodlari {
  gruplar: string;
  hesaplar: string;
}

const HesapKodlari = () => {
  const [
    borcBakiyesiVermesiGereken12Grubu,
    setBorcBakiyesiVermesiGereken12Grubu,
  ] = useState("");

  const [
    alacakBakiyesiVermesiGereken12Grubu,
    setAlacakBakiyesiVermesiGereken12Grubu,
  ] = useState("");

  const [
    borcBakiyesiVermesiGereken345Grubu,
    setBorcBakiyesiVermesiGereken345Grubu,
  ] = useState("");

  const [
    alacakBakiyesiVermesiGereken345Grubu,
    setAlacakBakiyesiVermesiGereken345Grubu,
  ] = useState("");

  const [pozitifGelmesiGereken6Grubu, setPozitifGelmesiGereken6Grubu] =
    useState("");

  const [yildizliHesaplar, setYildizliHesaplar] = useState("");

  const user = useSelector((state: AppState) => state.userReducer);
  const customizer = useSelector((state: AppState) => state.customizer);
  const theme = useTheme();

  const handleButtonClick = async (gruplar: string, hesaplar: string) => {
    const updatedGrup = {
      gruplar,
      hesaplar,
    };
    try {
      const result = await updateHesapKodlari(user.token || "", updatedGrup);
      if (result) {
        enqueueSnackbar("Hesap Kodları Güncellendi", {
          variant: "success",
          autoHideDuration: 5000,
          style: {
            backgroundColor:
              customizer.activeMode === "dark"
                ? theme.palette.success.light
                : theme.palette.success.main,
            maxWidth: "720px",
          },
        });
      } else {
        enqueueSnackbar("Hesap Kodları Güncellenemedi", {
          variant: "error",
          autoHideDuration: 5000,
          style: {
            backgroundColor:
              customizer.activeMode === "dark"
                ? theme.palette.error.light
                : theme.palette.error.main,
            maxWidth: "720px",
          },
        });
      }
    } catch (error) {
      console.error("Bir hata oluştu:", error);
    }
  };

  const fetchData = async () => {
    try {
      const hesapKodlari = await getHesapKodlari(user.token || "");

      hesapKodlari.forEach((veri: HesapKodlari) => {
        if (veri.gruplar == "BorcBakiyesiVermesiGereken12Grubu") {
          setBorcBakiyesiVermesiGereken12Grubu(veri.hesaplar);
        } else if (veri.gruplar == "AlacakBakiyesiVermesiGereken12Grubu") {
          setAlacakBakiyesiVermesiGereken12Grubu(veri.hesaplar);
        } else if (veri.gruplar == "BorcBakiyesiVermesiGereken345Grubu") {
          setBorcBakiyesiVermesiGereken345Grubu(veri.hesaplar);
        } else if (veri.gruplar == "AlacakBakiyesiVermesiGereken345Grubu") {
          setAlacakBakiyesiVermesiGereken345Grubu(veri.hesaplar);
        } else if (veri.gruplar == "PozitifGelmesiGereken6Grubu") {
          setPozitifGelmesiGereken6Grubu(veri.hesaplar);
        } else if (veri.gruplar == "YildizliHesaplar") {
          setYildizliHesaplar(veri.hesaplar);
        }
      });
    } catch (error) {
      console.error("Bir hata oluştu:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Grid container spacing={2} mb={3}>
        <Grid
          item
          xs={12}
          sm={2}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <CustomFormLabel
            htmlFor="BorcBakiyesiVermesiGereken12Grubu"
            sx={{ mt: 0, mb: { xs: "-10px", sm: 0, lg: "3px" } }}
          >
            <Typography variant="body1" textAlign={"center"}>
              Borç Bakiyesi Vermesi Gereken 1-2 Grubu
            </Typography>
          </CustomFormLabel>
        </Grid>
        <Grid item xs={11} sm={8.5}>
          <CustomTextAreaAutoSize
            id="BorcBakiyesiVermesiGereken12Grubu"
            fullWidth
            value={borcBakiyesiVermesiGereken12Grubu}
            onChange={(e: any) =>
              setBorcBakiyesiVermesiGereken12Grubu(e.target.value)
            }
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={1.5}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"end"}
        >
          <Button
            size="medium"
            variant="outlined"
            color="primary"
            startIcon={<IconDeviceFloppy width={18} />}
            onClick={() =>
              handleButtonClick(
                "BorcBakiyesiVermesiGereken12Grubu",
                borcBakiyesiVermesiGereken12Grubu
              )
            }
            sx={{
              width: { xs: "100%", lg: "70%" },
              height: "44px",
              whiteSpace: "nowrap",
              mb: "3px",
            }}
          >
            Kaydet
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={2} mb={3}>
        <Grid
          item
          xs={12}
          sm={2}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <CustomFormLabel
            htmlFor="AlacakBakiyesiVermesiGereken12Grubu"
            sx={{ mt: 0, mb: { xs: "-10px", sm: 0, lg: "3px" } }}
          >
            <Typography variant="body1" textAlign={"center"}>
              Alacak Bakiyesi Vermesi Gereken 1-2 Grubu
            </Typography>
          </CustomFormLabel>
        </Grid>
        <Grid item xs={11} sm={8.5}>
          <CustomTextAreaAutoSize
            id="AlacakBakiyesiVermesiGereken12Grubu"
            fullWidth
            value={alacakBakiyesiVermesiGereken12Grubu}
            onChange={(e: any) =>
              setAlacakBakiyesiVermesiGereken12Grubu(e.target.value)
            }
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={1.5}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"end"}
        >
          <Button
            size="medium"
            variant="outlined"
            color="primary"
            startIcon={<IconDeviceFloppy width={18} />}
            onClick={() =>
              handleButtonClick(
                "AlacakBakiyesiVermesiGereken12Grubu",
                alacakBakiyesiVermesiGereken12Grubu
              )
            }
            sx={{
              width: { xs: "100%", lg: "70%" },
              height: "44px",
              whiteSpace: "nowrap",
              mb: "3px",
            }}
          >
            Kaydet
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={2} mb={3}>
        <Grid
          item
          xs={12}
          sm={2}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <CustomFormLabel
            htmlFor="BorcBakiyesiVermesiGereken345Grubu"
            sx={{ mt: 0, mb: { xs: "-10px", sm: 0, lg: "3px" } }}
          >
            <Typography variant="body1" textAlign={"center"}>
              Borç Bakiyesi Vermesi Gereken 3-4-5 Grubu
            </Typography>
          </CustomFormLabel>
        </Grid>
        <Grid item xs={11} sm={8.5}>
          <CustomTextAreaAutoSize
            id="BorcBakiyesiVermesiGereken345Grubu"
            fullWidth
            value={borcBakiyesiVermesiGereken345Grubu}
            onChange={(e: any) =>
              setBorcBakiyesiVermesiGereken345Grubu(e.target.value)
            }
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={1.5}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"end"}
        >
          <Button
            size="medium"
            variant="outlined"
            color="primary"
            startIcon={<IconDeviceFloppy width={18} />}
            onClick={() =>
              handleButtonClick(
                "BorcBakiyesiVermesiGereken345Grubu",
                borcBakiyesiVermesiGereken345Grubu
              )
            }
            sx={{
              width: { xs: "100%", lg: "70%" },
              height: "44px",
              whiteSpace: "nowrap",
              mb: "3px",
            }}
          >
            Kaydet
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={2} mb={3}>
        <Grid
          item
          xs={12}
          sm={2}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <CustomFormLabel
            htmlFor="AlacakBakiyesiVermesiGereken345Grubu"
            sx={{ mt: 0, mb: { xs: "-10px", sm: 0, lg: "3px" } }}
          >
            <Typography variant="body1" textAlign={"center"}>
              Alacak Bakiyesi Vermesi Gereken 3-4-5 Grubu
            </Typography>
          </CustomFormLabel>
        </Grid>
        <Grid item xs={11} sm={8.5}>
          <CustomTextAreaAutoSize
            id="AlacakBakiyesiVermesiGereken345Grubu"
            fullWidth
            value={alacakBakiyesiVermesiGereken345Grubu}
            onChange={(e: any) =>
              setAlacakBakiyesiVermesiGereken345Grubu(e.target.value)
            }
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={1.5}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"end"}
        >
          <Button
            size="medium"
            variant="outlined"
            color="primary"
            startIcon={<IconDeviceFloppy width={18} />}
            onClick={() =>
              handleButtonClick(
                "AlacakBakiyesiVermesiGereken345Grubu",
                alacakBakiyesiVermesiGereken345Grubu
              )
            }
            sx={{
              width: { xs: "100%", lg: "70%" },
              height: "44px",
              whiteSpace: "nowrap",
              mb: "3px",
            }}
          >
            Kaydet
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={2} mb={3}>
        <Grid
          item
          xs={12}
          sm={2}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <CustomFormLabel
            htmlFor="PozitifGelmesiGereken6Grubu"
            sx={{ mt: 0, mb: { xs: "-10px", sm: 0, lg: "3px" } }}
          >
            <Typography variant="body1" textAlign={"center"}>
              Pozitif Gelmesi Gereken 6 Grubu
            </Typography>
          </CustomFormLabel>
        </Grid>
        <Grid item xs={11} sm={8.5}>
          <CustomTextAreaAutoSize
            id="PozitifGelmesiGereken6Grubu"
            fullWidth
            value={pozitifGelmesiGereken6Grubu}
            onChange={(e: any) =>
              setPozitifGelmesiGereken6Grubu(e.target.value)
            }
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={1.5}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"end"}
        >
          <Button
            size="medium"
            variant="outlined"
            color="primary"
            startIcon={<IconDeviceFloppy width={18} />}
            onClick={() =>
              handleButtonClick(
                "PozitifGelmesiGereken6Grubu",
                pozitifGelmesiGereken6Grubu
              )
            }
            sx={{
              width: { xs: "100%", lg: "70%" },
              height: "44px",
              whiteSpace: "nowrap",
              mb: "3px",
            }}
          >
            Kaydet
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={2} mb={3}>
        <Grid
          item
          xs={12}
          sm={2}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <CustomFormLabel
            htmlFor="YildizliHesaplar"
            sx={{ mt: 0, mb: { xs: "-10px", sm: 0, lg: "3px" } }}
          >
            <Typography variant="body1" textAlign={"center"}>
              Yıldızlı Hesaplar
            </Typography>
          </CustomFormLabel>
        </Grid>
        <Grid item xs={11} sm={8.5}>
          <CustomTextAreaAutoSize
            id="YildizliHesaplar"
            fullWidth
            value={yildizliHesaplar}
            onChange={(e: any) => setYildizliHesaplar(e.target.value)}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={1.5}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"end"}
        >
          <Button
            size="medium"
            variant="outlined"
            color="primary"
            startIcon={<IconDeviceFloppy width={18} />}
            onClick={() =>
              handleButtonClick("YildizliHesaplar", yildizliHesaplar)
            }
            sx={{
              width: { xs: "100%", lg: "70%" },
              height: "44px",
              whiteSpace: "nowrap",
              mb: "3px",
            }}
          >
            Kaydet
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default HesapKodlari;
