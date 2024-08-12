import { Grid, Button } from "@mui/material";
import React, { useState } from "react";
import CustomFormLabel from "@/app/components/forms/theme-elements/CustomFormLabel";
import CustomTextField from "@/app/components/forms/theme-elements/CustomTextField";
import { useRouter } from "next/navigation";
import { createFormat } from "@/api/FormatIslemleri/FormatIslemleri";

const FormatEkleForm = () => {
  const [adi, setAdi] = useState("");
  const [satirSayisi, setSatirSayisi] = useState(0);

  const router = useRouter();

  const handleButtonClick = async () => {
    const createdFormat = {
      adi,
      satirSayisi,
    };
    try {
      const result = await createFormat(createdFormat);
      if (result) {
        router.push("/Formatlar");
      } else {
        console.error("Format ekleme başarısız");
      }
    } catch (error) {
      console.error("Bir hata oluştu:", error);
    }
  };
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3} display="flex" alignItems="center">
          <CustomFormLabel
            htmlFor="formatAdi"
            sx={{ mt: 0, mb: { xs: "-10px", sm: 0 } }}
          >
            Format Adı
          </CustomFormLabel>
        </Grid>
        <Grid item xs={12} sm={9}>
          <CustomTextField
            id="formatAdi"
            fullWidth
            onChange={(e: any) => setAdi(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={3} display="flex" alignItems="center">
          <CustomFormLabel
            htmlFor="satirSayisi"
            sx={{ mt: 0, mb: { xs: "-10px", sm: 0 } }}
          >
            Satır Sayısı
          </CustomFormLabel>
        </Grid>
        <Grid item xs={12} sm={9}>
          <CustomTextField
            id="satirSayisi"
            fullWidth
            onChange={(e: any) => setSatirSayisi(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} sm={3}></Grid>
        <Grid item xs={12} sm={9}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleButtonClick}
          >
            Format Ekle
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default FormatEkleForm;
