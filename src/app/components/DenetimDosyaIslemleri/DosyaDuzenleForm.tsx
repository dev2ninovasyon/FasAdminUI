import { Grid, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomFormLabel from "@/app/components/Forms/ThemeElements/CustomFormLabel";
import CustomTextField from "@/app/components/Forms/ThemeElements/CustomTextField";
import { usePathname, useRouter } from "next/navigation";
import {
  getDosyaById,
  updateDosya,
} from "@/api/DenetimDosyaBelgeleri/DenetimDosyaIslemleri";

const DosyaDuzenleForm = () => {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const idIndex = segments.indexOf("DosyaDuzenle") + 1;
  const pathId = segments[idIndex];

  const [dosyaNevi, setDosyaNevi] = useState("");
  const [belgeAdi, setBelgeAdi] = useState("");
  const [bds, setBds] = useState("");
  const [formKodu, setFormKodu] = useState("");
  const [formUrl, setFormUrl] = useState("");
  const [referansNo, setReferansNo] = useState("");
  const [arsivKlasorAdi, setArsivKlasorAdi] = useState("");

  const router = useRouter();

  const handleButtonClick = async () => {
    const updatedDosya = {
      dosyaNevi,
      belgeAdi,
      bds: bds || null, // Set to null if empty
      formKodu: formKodu || null, // Set to null if empty
      formUrl: formUrl || null, // Set to null if empty
      referansNo,
      arsivKlasorAdi,
    };
    try {
      const result = await updateDosya(pathId, updatedDosya);
      if (result) {
        router.push("/DenetimDosyaBelgeleri");
      } else {
        console.error("Dosya düzenleme başarısız");
      }
    } catch (error) {
      console.error("Bir hata oluştu:", error);
    }
  };

  const fetchData = async () => {
    try {
      const dosyaVerileri = await getDosyaById(pathId);
      setDosyaNevi(dosyaVerileri.dosyaNevi);
      setBelgeAdi(dosyaVerileri.belgeAdi);
      setBds(dosyaVerileri.bds || ""); // Set to empty string if null
      setFormKodu(dosyaVerileri.formKodu || ""); // Set to empty string if null
      setFormUrl(dosyaVerileri.formUrl || ""); // Set to empty string if null
      setReferansNo(dosyaVerileri.referansNo);
      setArsivKlasorAdi(dosyaVerileri.arsivKlasorAdi);
    } catch (error) {
      console.error("Bir hata oluştu:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <CustomFormLabel
            htmlFor="dosyaNevi"
            sx={{ mt: 0, mb: { xs: "-10px", sm: 0 } }}
          >
            Dosya Nevi
          </CustomFormLabel>
          <CustomTextField
            id="dosyaNevi"
            value={dosyaNevi}
            onChange={(e: any) => setDosyaNevi(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <CustomFormLabel
            htmlFor="belgeAdi"
            sx={{ mt: 0, mb: { xs: "-10px", sm: 0 } }}
          >
            Belge Adı
          </CustomFormLabel>
          <CustomTextField
            id="belgeAdi"
            value={belgeAdi}
            onChange={(e: any) => setBelgeAdi(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <CustomFormLabel
            htmlFor="belgeAdi"
            sx={{ mt: 0, mb: { xs: "-10px", sm: 0 } }}
          >
            İlgili BDS
          </CustomFormLabel>
          <CustomTextField
            id="bds"
            value={bds}
            onChange={(e: any) => setBds(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <CustomFormLabel
            htmlFor="formKodu"
            sx={{ mt: 0, mb: { xs: "-10px", sm: 0 } }}
          >
            Form Kodu
          </CustomFormLabel>
          <CustomTextField
            id="formKodu"
            value={formKodu}
            onChange={(e: any) => setFormKodu(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <CustomFormLabel
            htmlFor="formUrl"
            sx={{ mt: 0, mb: { xs: "-10px", sm: 0 } }}
          >
            Form URL
          </CustomFormLabel>
          <CustomTextField
            id="formUrl"
            value={formUrl}
            onChange={(e: any) => setFormUrl(e.target.value)}
            fullWidth
          />
          <Grid item xs={12}>
            <CustomFormLabel
              htmlFor="referansNo"
              sx={{ mt: 0, mb: { xs: "-10px", sm: 0 } }}
            >
              Referans No
            </CustomFormLabel>
            <CustomTextField
              id="referansNo"
              value={referansNo}
              onChange={(e: any) => setReferansNo(e.target.value)}
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <CustomFormLabel
            htmlFor="arsivKlasorAdi"
            sx={{ mt: 0, mb: { xs: "-10px", sm: 0 } }}
          >
            Arşiv Klasör Adı
          </CustomFormLabel>
          <CustomTextField
            id="arsivKlasorAdi"
            value={arsivKlasorAdi}
            onChange={(e: any) => setArsivKlasorAdi(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={3}></Grid>
        <Grid item xs={12} sm={9}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleButtonClick}
          >
            Güncelle
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default DosyaDuzenleForm;
