"use client";
import { Grid, MenuItem } from "@mui/material";
import { useState } from "react";
import PageContainer from "@/app/components/container/PageContainer";
import Breadcrumb from "@/app/components/layout/shared/breadcrumb/Breadcrumb";
import CustomSelect from "@/app/components/forms/theme-elements/CustomSelect";
import RaporGorus from "@/app/components/Gorusler/RaporGorus";

const BCrumb = [
  {
    to: "/Anasayfa",
    title: "Admin Menü",
  },
  {
    to: "/Gorusler",
    title: "Görüşler",
  },
];

const Page = () => {
  const [denetimTuru, setDenetimTuru] = useState("Bobi");

  const handleChangeDenetimTuru = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDenetimTuru(event.target.value);
  };

  return (
    <PageContainer title="Görüşler" description="this is Görüşler">
      <Breadcrumb title="Görüşler" items={BCrumb} />
      <Grid container spacing={3}>
        <Grid item xs={12} lg={12}>
          <CustomSelect
            labelId="denetimTuru"
            id="denetimTuru"
            size="small"
            height={"36px"}
            sx={{ marginRight: 2 }}
            value={denetimTuru}
            onChange={handleChangeDenetimTuru}
          >
            <MenuItem value={"Bobi"}>Denetim Türü: Bobi</MenuItem>
            <MenuItem value={"Tfrs"}>Denetim Türü: Tfrs</MenuItem>
            <MenuItem value={"Kumi"}>Denetim Türü: Kümi</MenuItem>
            <MenuItem value={"BobiKonsolide"}>
              Denetim Türü: Konsolide Bobi
            </MenuItem>
            <MenuItem value={"TfrsKonsolide"}>
              Denetim Türü: Konsolide Tfrs
            </MenuItem>
          </CustomSelect>
        </Grid>
        <Grid item xs={12} lg={12}>
          <RaporGorus denetimTuru={denetimTuru} />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default Page;
