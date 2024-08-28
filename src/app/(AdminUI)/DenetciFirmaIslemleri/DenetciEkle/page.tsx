"use client";

import { Grid } from "@mui/material";
import ParentCard from "@/app/components/shared/ParentCard";
import PageContainer from "@/app/components/container/PageContainer";
import Breadcrumb from "@/app/components/layout/shared/breadcrumb/Breadcrumb";
import DenetciEkleForm from "@/app/components/DenetciIslemleri/DenetciEkleForm";

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
    to: "/DenetciFirmaIslemleri/DenetciEkle",
    title: "Denetçi Ekle",
  },
];

const Page = () => {
  return (
    <PageContainer title="Denetçi Ekle" description="this is Denetçi Ekle">
      <Breadcrumb title="Denetçi Ekle" items={BCrumb} />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ParentCard title="Yeni Denetçi">
            <DenetciEkleForm />
          </ParentCard>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default Page;
