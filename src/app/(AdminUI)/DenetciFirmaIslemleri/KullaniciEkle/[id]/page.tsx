"use client";

import { Grid } from "@mui/material";
import ParentCard from "@/app/components/shared/ParentCard";
import PageContainer from "@/app/components/container/PageContainer";
import Breadcrumb from "@/app/components/layout/shared/breadcrumb/Breadcrumb";
import KullaniciEkleForm from "@/app/components/DenetciIslemleri/KullaniciEkleForm";

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
    <PageContainer title="Kullanıcı Ekle" description="this is Kullanıcı Ekle">
      <ParentCard title="Kullanıcı Ekle">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Breadcrumb title="Kullanıcı Ekle" items={BCrumb} />
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <ParentCard title="Yeni Kullanıcı">
                  <KullaniciEkleForm />
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
