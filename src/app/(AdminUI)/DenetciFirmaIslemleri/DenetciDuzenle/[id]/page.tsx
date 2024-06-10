"use client";

import { Grid } from "@mui/material";
import ParentCard from "@/app/components/shared/ParentCard";
import PageContainer from "@/app/components/container/PageContainer";
import Breadcrumb from "@/app/components/layout/shared/breadcrumb/Breadcrumb";
import DenetciDuzenleForm from "@/app/components/DenetciIslemleri/DenetciDuzenleForm";

const BCrumb = [
  {
    to: "/",
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
      title="Denetçi Düzenle"
      description="this is Denetçi Düzenle"
    >
      <Breadcrumb title="Denetçi Düzenle" items={BCrumb} />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ParentCard title="Denetçi">
            <DenetciDuzenleForm />
          </ParentCard>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default Page;
