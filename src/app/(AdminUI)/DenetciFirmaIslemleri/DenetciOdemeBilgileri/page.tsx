"use client";
import { Box, Grid } from "@mui/material";
import PageContainer from "@/app/components/Container/PageContainer";
import Breadcrumb from "@/app/components/Layout/Shared/Breadcrumb/Breadcrumb";
import ParentCard from "@/app/components/Shared/ParentCard";
import DenetciciEkleButton from "@/app/components/DenetciIslemleri/DenetciEkleButton";
import DenetciTable from "@/app/components/Tables/DenetciTable";
import DenetciSatisEkleButton from "@/app/components/DenetciIslemleri/DenetciSatisEkleButton";
import OdemeBilgisiTable from "@/app/components/Tables/OdemeBilgisiTable";

const BCrumb = [
  {
    to: "/Anasayfa",
    title: "Admin Menü",
  },
  {
    to: "/DenetciFirmaIslemleri",
    title: "Denetçi Firma İşlemleri",
  },
  {
    to: "/DenetciFirmaIslemleri/DenetciOdemeIslemleri",
    title: "Denetçi Ödeme İşlemleri",
  },
];

const Page = () => {
  return (
    <PageContainer
      title="Denetçi Ödeme İşlemleri"
      description="this is Denetçi Ödeme İşlemleri"
    >
      <Breadcrumb title="Denetçi Ödeme İşlemleri" items={BCrumb} />
      <ParentCard title="Denetçi Ödeme Bilgileri">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <DenetciSatisEkleButton />
            <Box>
              <OdemeBilgisiTable />
            </Box>
          </Grid>
        </Grid>
      </ParentCard>
    </PageContainer>
  );
};

export default Page;
