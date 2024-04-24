"use client";
import { Typography } from "@mui/material";
import PageContainer from "@/app/components/container/PageContainer";
import DashboardCard from "@/app/components/shared/DashboardCard";
import Breadcrumb from "@/app/components/layout/shared/breadcrumb/Breadcrumb";
import Table2 from "@/app/components/tables/Table2";

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
const SamplePage = () => {
  return (
    <PageContainer title="Sample Page" description="this is Sample page">
      <Breadcrumb title="Denetçi Firma İşlemleri" items={BCrumb} />
      <Table2 />
    </PageContainer>
  );
};

export default SamplePage;
