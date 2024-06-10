"use client";
import { Box, Grid } from "@mui/material";
import PageContainer from "@/app/components/container/PageContainer";
import Breadcrumb from "@/app/components/layout/shared/breadcrumb/Breadcrumb";
import ParentCard from "@/app/components/shared/ParentCard";
import DenetciTable from "@/app/components/tables/DenetciTable";
import DenetciEkleButton from "@/app/components/DenetciIslemleri/DenetciEkleButton";

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
      title="Denetçi Firma İşlemleri"
      description="this is Denetçi Firma İşlemleri"
    >
      <Breadcrumb title="Denetçi Firma İşlemleri" items={BCrumb} />
      <ParentCard title="Denetçiler">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <DenetciEkleButton />
            <Box>
              <DenetciTable />
            </Box>
          </Grid>
        </Grid>
      </ParentCard>
    </PageContainer>
  );
};

export default Page;
