"use client";

import * as React from "react";
import {
  Typography,
  Box,
  Avatar,
  Chip,
  Paper,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Stack,
} from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function createData(
  denetciAdi?: string,
  basTarihi?: string,
  bitTarihi?: string,
  satisTarihi?: string,
  tutar?: number,
  maxSirket?: number,
  ekKota?: number,
  diskKotasi?: number
) {
  return {
    denetciAdi,
    basTarihi,
    bitTarihi,
    satisTarihi,
    tutar,
    maxSirket,
    ekKota,
    diskKotasi,
    history: [
      { date: "2021-02-05", customerId: "5", price: 5, amount: 3 },
      { date: "2021-02-02", customerId: "5", price: 5, amount: 1 },
    ],
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography color="textSecondary" variant="h6">
              {row.basTarihi}
            </Typography>
          </Stack>
        </TableCell>
        <TableCell>
          <Typography color="textSecondary" variant="h6">
            {row.bitTarihi}
          </Typography>
        </TableCell>
        {/*
        <TableCell>
        <Chip
            size="small"
            label={row.inventory ? "In Stock" : "Out of Stock"}
            color={row.inventory ? "success" : "error"}
            sx={{ borderRadius: "6px" }}
        />
        </TableCell>
        */}
        <TableCell>
          <Typography color="textSecondary" variant="h6" fontWeight="400">
            {row.satisTarihi}
          </Typography>
        </TableCell>
        <TableCell>
          <Typography color="textSecondary" fontWeight="400">
            {row.tutar}
          </Typography>
        </TableCell>
        <TableCell>
          <Typography color="textSecondary" fontWeight="400">
            {row.maxSirket}
          </Typography>
        </TableCell>
        <TableCell>
          <Typography color="textSecondary" fontWeight="400">
            {row.ekKota}
          </Typography>
        </TableCell>
        <TableCell>
          <Typography color="textSecondary" fontWeight="400">
            {row.diskKotasi}
          </Typography>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell sx={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography
                gutterBottom
                variant="h5"
                sx={{
                  mt: 2,
                  backgroundColor: (theme) => theme.palette.grey.A200,
                  p: "5px 15px",
                  color: (theme) =>
                    `${
                      theme.palette.mode === "dark"
                        ? theme.palette.grey.A200
                        : "rgba(0, 0, 0, 0.87)"
                    }`,
                }}
              >
                Geçmiş Kota Bilgileri
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Typography variant="h6">Tarih</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6">Önceki Kota</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6">Önceki Disk Kotası</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6">Açıklama</Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow: any) => (
                    <TableRow key={historyRow.date}>
                      <TableCell>
                        <Typography color="textSecondary" fontWeight="400">
                          {historyRow.date}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography color="textSecondary" fontWeight="400">
                          {historyRow.customerId}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography color="textSecondary" fontWeight="400">
                          {historyRow.amount}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography fontWeight="600">
                          {Math.round(
                            historyRow.amount * historyRow.price * 100
                          ) / 100}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

const rows = [
  createData(
    "Adalya Uluslararası Bağımsız Denetim(Test)",
    "29-04-2024",
    "29-04-2024",
    "29-04-2024",
    2000,
    20,
    10,
    20
  ),
];
const OdemeBilgisiTable = () => {
  return (
    <div>
      <Box mb={3}>
        <Typography variant="h5">
          {rows.map((row) => row.denetciAdi)}
        </Typography>
      </Box>

      <TableContainer component={Paper}>
        <Table
          aria-label="collapsible table"
          sx={{
            whiteSpace: {
              xs: "nowrap",
              sm: "unset",
            },
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell />

              <TableCell>
                <Typography variant="h6">Baş.Tarihi</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Bit. Tarihi</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Satış Tarihi</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Tutar</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Max. Şirket Sayısı</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Ek Kota</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Disk Kotası</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.denetciAdi} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box mt={3} mb={3}>
        <Typography variant="h6">Modüller: {}</Typography>
      </Box>
      <Box mb={3}>
        <Typography variant="h6">Mevcut Firma Sayısı: {}</Typography>
      </Box>
      <Box mb={3}>
        <Typography variant="h6">Solo Firma Sayısı: {}</Typography>
      </Box>
      <Box mb={3}>
        <Typography variant="h6">Konsolide Ana Şirket Sayısı: {}</Typography>
      </Box>
      <Box mb={3}>
        <Typography variant="h6">
          Konsolide Yavru Şirket Firma Sayısı: {}
        </Typography>
      </Box>
    </div>
  );
};
export default OdemeBilgisiTable;
