"use client";

import { Grid } from "@mui/material";
import ParentCard from "@/app/components/shared/ParentCard";
import PageContainer from "@/app/components/container/PageContainer";
import Breadcrumb from "@/app/components/layout/shared/breadcrumb/Breadcrumb";
import DenetciDuzenleForm from "@/app/components/DenetciIslemleri/DenetciDuzenleForm";
import DosyaDuzenleForm from "@/app/components/DenetimDosyaIslemleri/DosyaDuzenleForm";

const BCrumb = [
  {
    to: "/Anasayfa",
    title: "Admin Menü",
  },
  {
    to: "/DenetimDosyaBelgeleri",
    title: "Dosya Firma İşlemleri",
  },
];

const Page = () => {
  return (
    <PageContainer title="Dosya Düzenle" description="this is Dosya Düzenle">
      <Breadcrumb title="Dosya Düzenle" items={BCrumb} />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ParentCard title="Dosya">
            <DosyaDuzenleForm />
          </ParentCard>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default Page;
