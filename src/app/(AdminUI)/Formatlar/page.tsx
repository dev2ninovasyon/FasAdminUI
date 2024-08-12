"use client";
import { Box, Grid } from "@mui/material";
import PageContainer from "@/app/components/container/PageContainer";
import Breadcrumb from "@/app/components/layout/shared/breadcrumb/Breadcrumb";
import ParentCard from "@/app/components/shared/ParentCard";
import FormatEkleButton from "@/app/components/FormaIslemleri/FormatEkleButton";
import FormatTable from "@/app/components/tables/FormatTable";

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
    <PageContainer title="Formatlar" description="this is Formatlar">
      <Breadcrumb title="Formatlar" items={BCrumb} />
      <ParentCard title="Formatlar">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormatEkleButton />
            <Box>
              <FormatTable />
            </Box>
          </Grid>
        </Grid>
      </ParentCard>
    </PageContainer>
  );
};

export default Page;
