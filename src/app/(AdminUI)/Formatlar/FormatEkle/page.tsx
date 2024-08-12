"use client";

import { Grid } from "@mui/material";
import ParentCard from "@/app/components/shared/ParentCard";
import PageContainer from "@/app/components/container/PageContainer";
import Breadcrumb from "@/app/components/layout/shared/breadcrumb/Breadcrumb";
import FormatEkleForm from "@/app/components/FormaIslemleri/FormatEkleForm";

const BCrumb = [
  {
    to: "/Anasayfa",
    title: "Admin Menü",
  },
  {
    to: "/Formatlar",
    title: "Formatlar",
  },
  {
    to: "/Formatlar/FormatEkle",
    title: "Format Ekle",
  },
];

const Page = () => {
  return (
    <PageContainer title="Format Ekle" description="this is Format Ekle">
      <ParentCard title="Format Ekle">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Breadcrumb title="Format Ekle" items={BCrumb} />
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <ParentCard title="Yeni Format">
                  <FormatEkleForm />
                </ParentCard>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ParentCard>
    </PageContainer>
  );
};

export default Page;
