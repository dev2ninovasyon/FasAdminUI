import { Grid, Button } from "@mui/material";
import React, { useState } from "react";
import CustomFormLabel from "@/app/components/forms/theme-elements/CustomFormLabel";
import CustomTextField from "@/app/components/forms/theme-elements/CustomTextField";
import { useRouter } from "next/navigation";
import { createDosya } from "@/api/DenetimDosyaBelgeleri/DenetimDosyaIslemleri";

const DosyaEkleForm: React.FC = () => {
  const router = useRouter();

  // State variables
  const [dosyaNevi, setDosyaNevi] = useState("");
  const [belgeAdi, setBelgeAdi] = useState("");
  const [referansNo, setReferansNo] = useState("");
  const [formKodu, setFormKodu] = useState("");
  const [dosyaVarmi, setDosyaVarmi] = useState(false);
  const [arsivKlasorAdi, setArsivKlasorAdi] = useState("");
  const [dosyaListesi, setDosyaListesi] = useState("");
  const [yapildimi, setYapildimi] = useState(false);
  const [denetimTuru, setDenetimTuru] = useState("");
  const [aktifmi, setAktifmi] = useState(false);
  const [ekBelgeDurum, setEkBelgeDurum] = useState(false);
  const [standardaCevirmeDurum, setStandardaCevirmeDurum] = useState(false);

  const handleButtonClick = async () => {
    const createdDosya = {
      dosyaNevi,
      belgeAdi,
      referansNo,
      formKodu,
      dosyaVarmi,
      arsivKlasorAdi,
      dosyaListesi,
      yapildimi,
      denetimTuru,
      aktifmi,
      ekBelgeDurum,
      standardaCevirmeDurum,
    };

    try {
      const result = await createDosya(createdDosya);
      if (result) {
        router.push("/DenetciFirmaIslemleri");
      } else {
        console.error("Denetçi ekleme başarısız");
      }
    } catch (error) {
      console.error("Bir hata oluştu:", error);
    }
  };

  return (
    <div>
      <Grid container spacing={2}>
        {/* Dosya Nevi */}
        <Grid item xs={12} sm={3} display="flex" alignItems="center">
          <CustomFormLabel
            htmlFor="dosyaNevi"
            sx={{ mt: 0, mb: { xs: "-10px", sm: 0 } }}
          >
            Dosya Nevi
          </CustomFormLabel>
        </Grid>
        <Grid item xs={12} sm={9}>
          <CustomTextField
            id="dosyaNevi"
            value={dosyaNevi}
            fullWidth
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDosyaNevi(e.target.value)
            }
          />
        </Grid>

        {/* Belge Adı */}
        <Grid item xs={12} sm={3} display="flex" alignItems="center">
          <CustomFormLabel
            htmlFor="belgeAdi"
            sx={{ mt: 0, mb: { xs: "-10px", sm: 0 } }}
          >
            Belge Adı
          </CustomFormLabel>
        </Grid>
        <Grid item xs={12} sm={9}>
          <CustomTextField
            id="belgeAdi"
            value={belgeAdi}
            fullWidth
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setBelgeAdi(e.target.value)
            }
          />
        </Grid>

        {/* Referans No */}
        <Grid item xs={12} sm={3} display="flex" alignItems="center">
          <CustomFormLabel
            htmlFor="referansNo"
            sx={{ mt: 0, mb: { xs: "-10px", sm: 0 } }}
          >
            Referans No
          </CustomFormLabel>
        </Grid>
        <Grid item xs={12} sm={9}>
          <CustomTextField
            id="referansNo"
            value={referansNo}
            fullWidth
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setReferansNo(e.target.value)
            }
          />
        </Grid>

        {/* Form Kodu */}
        <Grid item xs={12} sm={3} display="flex" alignItems="center">
          <CustomFormLabel
            htmlFor="formKodu"
            sx={{ mt: 0, mb: { xs: "-10px", sm: 0 } }}
          >
            Form Kodu
          </CustomFormLabel>
        </Grid>
        <Grid item xs={12} sm={9}>
          <CustomTextField
            id="formKodu"
            value={formKodu}
            fullWidth
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormKodu(e.target.value)
            }
          />
        </Grid>

        {/* Dosya Varmi */}
        <Grid item xs={12} sm={3} display="flex" alignItems="center">
          <CustomFormLabel
            htmlFor="dosyaVarmi"
            sx={{ mt: 0, mb: { xs: "-10px", sm: 0 } }}
          >
            Dosya Varmi
          </CustomFormLabel>
        </Grid>
        <Grid item xs={12} sm={9}>
          <CustomTextField
            id="dosyaVarmi"
            type="checkbox"
            checked={dosyaVarmi}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDosyaVarmi(e.target.checked)
            }
          />
        </Grid>

        {/* Arşiv Klasör Adı */}
        <Grid item xs={12} sm={3} display="flex" alignItems="center">
          <CustomFormLabel
            htmlFor="arsivKlasorAdi"
            sx={{ mt: 0, mb: { xs: "-10px", sm: 0 } }}
          >
            Arşiv Klasör Adı
          </CustomFormLabel>
        </Grid>
        <Grid item xs={12} sm={9}>
          <CustomTextField
            id="arsivKlasorAdi"
            value={arsivKlasorAdi}
            fullWidth
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setArsivKlasorAdi(e.target.value)
            }
          />
        </Grid>

        {/* Dosya Listesi */}
        <Grid item xs={12} sm={3} display="flex" alignItems="center">
          <CustomFormLabel
            htmlFor="dosyaListesi"
            sx={{ mt: 0, mb: { xs: "-10px", sm: 0 } }}
          >
            Dosya Listesi
          </CustomFormLabel>
        </Grid>
        <Grid item xs={12} sm={9}>
          <CustomTextField
            id="dosyaListesi"
            value={dosyaListesi}
            fullWidth
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDosyaListesi(e.target.value)
            }
          />
        </Grid>

        {/* Yapıldı mı */}
        <Grid item xs={12} sm={3} display="flex" alignItems="center">
          <CustomFormLabel
            htmlFor="yapildimi"
            sx={{ mt: 0, mb: { xs: "-10px", sm: 0 } }}
          >
            Yapıldı mı
          </CustomFormLabel>
        </Grid>
        <Grid item xs={12} sm={9}>
          <CustomTextField
            id="yapildimi"
            type="checkbox"
            checked={yapildimi}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setYapildimi(e.target.checked)
            }
          />
        </Grid>

        {/* Denetim Türü */}
        <Grid item xs={12} sm={3} display="flex" alignItems="center">
          <CustomFormLabel
            htmlFor="denetimTuru"
            sx={{ mt: 0, mb: { xs: "-10px", sm: 0 } }}
          >
            Denetim Türü
          </CustomFormLabel>
        </Grid>
        <Grid item xs={12} sm={9}>
          <CustomTextField
            id="denetimTuru"
            value={denetimTuru}
            fullWidth
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDenetimTuru(e.target.value)
            }
          />
        </Grid>

        {/* Aktif mi */}
        <Grid item xs={12} sm={3} display="flex" alignItems="center">
          <CustomFormLabel
            htmlFor="aktifmi"
            sx={{ mt: 0, mb: { xs: "-10px", sm: 0 } }}
          >
            Aktif mi
          </CustomFormLabel>
        </Grid>
        <Grid item xs={12} sm={9}>
          <CustomTextField
            id="aktifmi"
            type="checkbox"
            checked={aktifmi}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setAktifmi(e.target.checked)
            }
          />
        </Grid>

        {/* Ek Belge Durumu */}
        <Grid item xs={12} sm={3} display="flex" alignItems="center">
          <CustomFormLabel
            htmlFor="ekBelgeDurum"
            sx={{ mt: 0, mb: { xs: "-10px", sm: 0 } }}
          >
            Ek Belge Durumu
          </CustomFormLabel>
        </Grid>
        <Grid item xs={12} sm={9}>
          <CustomTextField
            id="ekBelgeDurum"
            type="checkbox"
            checked={ekBelgeDurum}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEkBelgeDurum(e.target.checked)
            }
          />
        </Grid>

        {/* Standarda Çevirme Durumu */}
        <Grid item xs={12} sm={3} display="flex" alignItems="center">
          <CustomFormLabel
            htmlFor="standardaCevirmeDurum"
            sx={{ mt: 0, mb: { xs: "-10px", sm: 0 } }}
          >
            Standarda Çevirme Durumu
          </CustomFormLabel>
        </Grid>
        <Grid item xs={12} sm={9}>
          <CustomTextField
            id="standardaCevirmeDurum"
            type="checkbox"
            checked={standardaCevirmeDurum}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setStandardaCevirmeDurum(e.target.checked)
            }
          />
        </Grid>

        {/* Submit Button */}
        <Grid item xs={12}>
          <Button variant="contained" onClick={handleButtonClick}>
            Dosyayı Oluştur
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default DosyaEkleForm;
