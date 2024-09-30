import { Grid, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomFormLabel from "@/app/components/forms/theme-elements/CustomFormLabel";
import CustomTextField from "@/app/components/forms/theme-elements/CustomTextField";
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
  const [formKodu, setFormKodu] = useState(""); // Nullable
  const [referansNo, setReferansNo] = useState("");
  const [formUrl, setFormUrl] = useState(""); // Nullable
  const [arsivKlasorAdi, setArsivKlasorAdi] = useState(""); // Nullable

  const router = useRouter();

  const handleButtonClick = async () => {
    const updatedDosya = {
      dosyaNevi,
      belgeAdi,
      formKodu: formKodu || null, // Set to null if empty
      referansNo,
      formUrl: formUrl || null, // Set to null if empty
      arsivKlasorAdi: arsivKlasorAdi || null, // Set to null if empty
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
      setFormKodu(dosyaVerileri.formKodu || ""); // Set to empty string if null
      setReferansNo(dosyaVerileri.referansNo);
      setFormUrl(dosyaVerileri.formUrl || ""); // Set to empty string if null
      setArsivKlasorAdi(dosyaVerileri.arsivKlasorAdi || ""); // Set to empty string if null
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
        <Grid item xs={12}>
          <Button variant="contained" onClick={handleButtonClick}>
            Güncelle
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default DosyaDuzenleForm;
