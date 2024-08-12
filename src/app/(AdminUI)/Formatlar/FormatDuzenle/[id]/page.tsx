"use client";

import { Grid } from "@mui/material";
import ParentCard from "@/app/components/shared/ParentCard";
import PageContainer from "@/app/components/container/PageContainer";
import Breadcrumb from "@/app/components/layout/shared/breadcrumb/Breadcrumb";
import FormatDuzenleForm from "@/app/components/FormaIslemleri/FormatDuzenleForm";

const BCrumb = [
  {
    to: "/Anasayfa",
    title: "Admin Menü",
  },
  {
    to: "/Formatlar",
    title: "Formatlar",
  },
];

const Page = () => {
  return (
    <PageContainer title="Format Düzenle" description="this is Format Düzenle">
      <Breadcrumb title="Format Düzenle" items={BCrumb} />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ParentCard title="Format">
            <FormatDuzenleForm />
          </ParentCard>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default Page;
