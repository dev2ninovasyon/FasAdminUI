import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Avatar,
  Typography,
  Chip,
  Menu,
  MenuItem,
  IconButton,
  ListItemIcon,
  AvatarGroup,
} from "@mui/material";
import BlankCard from "../shared/BlankCard";
import { Box, Stack } from "@mui/system";
import {
  IconDotsVertical,
  IconEdit,
  IconPlus,
  IconTrash,
} from "@tabler/icons-react";

const rows = [
  {
    firmaAdi: "Adalya Uluslararası Bağımsız Denetim",
    telefon: "(0242) 243 0 243",
    arsivId: "DNTC_8I5VAN4X",
    kayitTarihi: "3.04.2018",
    baslangicTarihi: "4.04.2019",
    bitisTarihi: "4.04.2019",
    durum: "Aktif",
  },
  {
    firmaAdi: "Galata Global Bağımsız Denetim ve Danışmanlık A.Ş.",
    telefon: "(0242) 243 0 243",
    arsivId: "DNTC_8I5VAN4X",
    kayitTarihi: "3.04.2018",
    baslangicTarihi: "4.04.2019",
    bitisTarihi: "4.04.2019",
    durum: "Pasif",
  },
  {
    firmaAdi: "Küresel Bağımsız Denetim A.Ş.",
    telefon: "(0242) 243 0 243",
    arsivId: "DNTC_8I5VAN4X",
    kayitTarihi: "3.04.2018",
    baslangicTarihi: "4.04.2019",
    bitisTarihi: "4.04.2019",
    durum: "Aktif",
  },
  {
    firmaAdi: "İktisat Bağımsız Denetim A.Ş",
    telefon: "(0242) 243 0 243",
    arsivId: "DNTC_8I5VAN4X",
    kayitTarihi: "3.04.2018",
    baslangicTarihi: "4.04.2019",
    bitisTarihi: "4.04.2019",
    durum: "Aktif",
  },
];

const Table2 = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <BlankCard>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h6">Firma Adı</Typography>
              </TableCell>
              <TableCell>
                <Typography textAlign="center" variant="h6">
                  Telefon
                </Typography>
              </TableCell>
              <TableCell>
                <Typography textAlign="center" variant="h6">
                  ArşivID
                </Typography>
              </TableCell>
              <TableCell>
                <Typography textAlign="center" variant="h6">
                  Kayıt Tarihi
                </Typography>
              </TableCell>
              <TableCell>
                <Typography textAlign="center" variant="h6">
                  Başlangıç Tarihi
                </Typography>
              </TableCell>
              <TableCell>
                <Typography textAlign="center" variant="h6">
                  Bitiş Tarihi
                </Typography>
              </TableCell>
              <TableCell>
                <Typography textAlign="center" variant="h6">
                  Durum
                </Typography>
              </TableCell>

              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.firmaAdi}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  <Typography variant="h6">{row.firmaAdi}</Typography>
                </TableCell>
                <TableCell scope="row">
                  <Typography
                    textAlign="center"
                    variant="subtitle1"
                    color="textSecondary"
                  >
                    {row.telefon}
                  </Typography>
                </TableCell>
                <TableCell>
                  {" "}
                  <Typography
                    textAlign="center"
                    variant="subtitle1"
                    color="textSecondary"
                  >
                    {row.arsivId}
                  </Typography>
                </TableCell>
                <TableCell>
                  {" "}
                  <Typography
                    textAlign="center"
                    variant="subtitle1"
                    color="textSecondary"
                  >
                    {row.kayitTarihi}
                  </Typography>
                </TableCell>
                <TableCell>
                  {" "}
                  <Typography
                    textAlign="center"
                    variant="subtitle1"
                    color="textSecondary"
                  >
                    {row.baslangicTarihi}
                  </Typography>
                </TableCell>
                <TableCell>
                  {" "}
                  <Typography
                    textAlign="center"
                    variant="subtitle1"
                    color="textSecondary"
                  >
                    {row.bitisTarihi}
                  </Typography>
                </TableCell>

                <TableCell sx={{ textAlign: "center" }}>
                  <Chip
                    label={row.durum}
                    sx={{
                      backgroundColor:
                        row.durum == "Aktif"
                          ? (theme) => theme.palette.primary.light
                          : row.durum == "Pasif"
                          ? (theme) => theme.palette.error.light
                          : (theme) => theme.palette.success.light,
                      color:
                        row.durum == "Aktif"
                          ? (theme) => theme.palette.primary.main
                          : row.durum == "Pasif"
                          ? (theme) => theme.palette.error.main
                          : (theme) => theme.palette.success.main,
                    }}
                  />
                </TableCell>

                <TableCell>
                  <IconButton
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  >
                    <IconDotsVertical width={18} />
                  </IconButton>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <IconEdit width={18} />
                      </ListItemIcon>
                      Ödeme Bilgileri
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <IconPlus width={18} />
                      </ListItemIcon>
                      Kullanıcı Ekle
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <IconEdit width={18} />
                      </ListItemIcon>
                      Düzenle
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <IconEdit width={18} />
                      </ListItemIcon>
                      Detay
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <IconTrash width={18} />
                      </ListItemIcon>
                      Sil
                    </MenuItem>
                  </Menu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </BlankCard>
  );
};

export default Table2;
