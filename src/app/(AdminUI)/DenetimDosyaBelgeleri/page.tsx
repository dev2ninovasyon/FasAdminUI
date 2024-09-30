"use client";
import { Box, Grid } from "@mui/material";
import PageContainer from "@/app/components/container/PageContainer";
import Breadcrumb from "@/app/components/layout/shared/breadcrumb/Breadcrumb";
import ParentCard from "@/app/components/shared/ParentCard";
import DenetciTable from "@/app/components/tables/DenetciTable";
import DenetciEkleButton from "@/app/components/DenetciIslemleri/DenetciEkleButton";
import DenetimDosyaTable from "@/app/components/tables/DenetimDosyaTable";
import DosyaEkleButton from "@/app/components/DenetimDosyaIslemleri/DosyaEkleButton";

const BCrumb = [
  {
    to: "/Anasayfa",
    title: "Admin Menü",
  },
  {
    to: "/DenetciFirmaIslemleri",
    title: "Denetçi Firma İşlemleri",
  },
];

const Page = () => {
  return (
    <PageContainer
      title="Denetim Dosya Belgeleri"
      description="this is Denetim Dosya Belgeleri"
    >
      <Breadcrumb title="Denetim Dosya Belgeleri" items={BCrumb} />
      <ParentCard title="Dosyalar">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <DosyaEkleButton />
            <Box>
              <DenetimDosyaTable />
            </Box>
          </Grid>
        </Grid>
      </ParentCard>
    </PageContainer>
  );
};

export default Page;
