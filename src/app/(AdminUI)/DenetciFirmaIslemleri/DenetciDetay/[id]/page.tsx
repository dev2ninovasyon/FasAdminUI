"use client";
import { Box, Grid } from "@mui/material";
import PageContainer from "@/app/components/container/PageContainer";
import Breadcrumb from "@/app/components/layout/shared/breadcrumb/Breadcrumb";
import ParentCard from "@/app/components/shared/ParentCard";
import DenetciDetay from "@/app/components/DenetciIslemleri/DenetciDetay";

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
      title="Denetçi Detay Page"
      description="this is Denetçi Detay page"
    >
      <Breadcrumb title="Denetçi Detay" items={BCrumb} />
      <ParentCard title="Denetçi Detay">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box>
              <DenetciDetay />
            </Box>
          </Grid>
        </Grid>
      </ParentCard>
    </PageContainer>
  );
};

export default Page;
