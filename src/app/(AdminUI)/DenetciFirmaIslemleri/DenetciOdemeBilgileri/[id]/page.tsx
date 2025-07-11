"use client";
import { Grid } from "@mui/material";
import PageContainer from "@/app/components/Container/PageContainer";
import Breadcrumb from "@/app/components/Layout/Shared/Breadcrumb/Breadcrumb";
import ParentCard from "@/app/components/Shared/ParentCard";
import OdemeBilgileriTable from "@/app/components/tables/OdemeBilgileriTable";

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
      title="Denetçi Ödeme Bilgileri"
      description="this is Denetçi Ödeme Bilgileri"
    >
      <Breadcrumb title="Denetçi Ödeme Bilgileri" items={BCrumb} />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <OdemeBilgileriTable />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default Page;
