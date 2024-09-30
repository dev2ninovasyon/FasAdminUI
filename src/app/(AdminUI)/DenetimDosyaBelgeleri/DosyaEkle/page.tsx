"use client";

import { Grid } from "@mui/material";
import ParentCard from "@/app/components/shared/ParentCard";
import PageContainer from "@/app/components/container/PageContainer";
import Breadcrumb from "@/app/components/layout/shared/breadcrumb/Breadcrumb";
import DenetciEkleForm from "@/app/components/DenetciIslemleri/DenetciEkleForm";
import DosyaEkleForm from "@/app/components/DenetimDosyaIslemleri/DosyaEkleForm";

const BCrumb = [
  {
    to: "/Anasayfa",
    title: "Admin Menü",
  },
  {
    to: "/DenetimDosyaBelgeleri",
    title: "Denetim Dosya Belgeleri",
  },
  {
    to: "/DenetimDosyaBelgeleri/DosyaEkle",
    title: "Dosya Ekle",
  },
];

const Page = () => {
  return (
    <PageContainer title="Dosya Ekle" description="this is Dosya Ekle">
      <Breadcrumb title="Dosya Ekle" items={BCrumb} />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ParentCard title="Yeni Dosya">
            <DosyaEkleForm />
          </ParentCard>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default Page;
