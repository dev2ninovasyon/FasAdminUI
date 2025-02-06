import React, { useEffect, useState } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Chip,
  Menu,
  MenuItem,
  IconButton,
  ListItemIcon,
  TablePagination,
} from "@mui/material";
import BlankCard from "../shared/BlankCard";
import {
  IconDotsVertical,
  IconEdit,
  IconPlus,
  IconTrash,
} from "@tabler/icons-react";
import { getDosya } from "@/api/DenetimDosyaBelgeleri/DenetimDosyaIslemleri";
import { useRouter } from "next/navigation";

interface RowData {
  id: number;
  belgeAdi: string;
  referansNo: string;
  formKodu: string;
  bds: string;
  arsivKlasorAdi: string;
  aktifmi: boolean;
}

const DenetimDosyaTable = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [rows, setRows] = useState<RowData[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10); // Default to 10 rows per page
  const open = Boolean(anchorEl);
  const router = useRouter();

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    setAnchorEl(event.currentTarget);
    setSelectedId(id);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDuzenle = () => {
    handleClose();
    router.push(`/DenetimDosyaBelgeleri/DosyaDuzenle/${selectedId}`);
  };
  /*
  const handleDelete = async () => {
    handleClose();
    if (selectedId === null) return;

    try {
      const result = await deleteDenetciById(selectedId);
      if (result) {
        fetchData();
      } else {
        console.error("Denetci silinemedi");
      }
    } catch (error) {
      console.error("Bir hata oluştu:", error);
    }
  };
*/
  const fetchData = async () => {
    try {
      const denetciVerileri = await getDosya();
      const newRows: RowData[] = denetciVerileri.map((dosya: any) => ({
        id: dosya.id, // Assuming there's an 'id' field in the actual entity
        dosyaNevi: dosya.dosyaNevi,
        belgeAdi: dosya.belgeAdi,
        referansNo: dosya.referansNo,
        formKodu: dosya.formKodu,
        bds: dosya.bds,
        parentId: dosya.parentId,
        formUrl: dosya.formUrl,
        dosyaVarmi: dosya.dosyaVarmi,
        arsivKlasorAdi: dosya.arsivKlasorAdi,
        dosyaListesi: dosya.dosyaListesi,
        yapildimi: dosya.yapildimi,
        denetimTuru: dosya.denetimTuru,
        aktifmi: dosya.aktifmi,
        ekBelgeDurum: dosya.ekBelgeDurum,
        standardaCevirmeDurum: dosya.standardaCevirmeDurum,
      }));
      setRows(newRows);
    } catch (error) {
      console.error("Bir hata oluştu:", error);
    }
  };

  useEffect(() => {
    let isMounted = true; // Track if the component is mounted

    const fetchDataAsync = async () => {
      await fetchData();
    };

    fetchDataAsync();

    return () => {
      isMounted = false; // Cleanup on unmount
    };
  }, []);

  // Handle pagination change
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <BlankCard>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography textAlign="left" variant="h6">
                  Belge Adı
                </Typography>
              </TableCell>
              <TableCell>
                <Typography textAlign="center" variant="h6">
                  Referans No
                </Typography>
              </TableCell>
              <TableCell>
                <Typography textAlign="center" variant="h6">
                  Form Kodu
                </Typography>
              </TableCell>
              <TableCell>
                <Typography textAlign="center" variant="h6">
                  BDS
                </Typography>
              </TableCell>
              <TableCell>
                <Typography textAlign="center" variant="h6">
                  Arşiv Klasör Adı
                </Typography>
              </TableCell>
              <TableCell>
                <Typography textAlign="center" variant="h6">
                  Aktif mi?
                </Typography>
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row: RowData) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <Typography
                      textAlign="left"
                      variant="subtitle1"
                      color="textSecondary"
                    >
                      {row.belgeAdi}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      textAlign="center"
                      variant="subtitle1"
                      color="textSecondary"
                    >
                      {row.referansNo}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      textAlign="center"
                      variant="subtitle1"
                      color="textSecondary"
                    >
                      {row.formKodu}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      textAlign="center"
                      variant="subtitle1"
                      color="textSecondary"
                    >
                      {row.bds}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      textAlign="center"
                      variant="subtitle1"
                      color="textSecondary"
                    >
                      {row.arsivKlasorAdi}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <Chip
                      label={row.aktifmi ? "Aktif" : "Pasif"}
                      sx={{
                        backgroundColor: row.aktifmi
                          ? (theme) => theme.palette.success.light
                          : (theme) => theme.palette.error.light,
                        color: row.aktifmi
                          ? (theme) => theme.palette.success.main
                          : (theme) => theme.palette.error.main,
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <IconButton
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={(event) => handleClick(event, row.id)}
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
                      <MenuItem onClick={handleDuzenle}>
                        <ListItemIcon>
                          <IconEdit width={18} />
                        </ListItemIcon>
                        Düzenle
                      </MenuItem>
                      <MenuItem>
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
        <TablePagination
          rowsPerPageOptions={[10, 25, 50]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </BlankCard>
  );
};

export default DenetimDosyaTable;
