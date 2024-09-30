import { Button, Stack } from "@mui/material";
import { IconPlus } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

const DosyaEkleButton = () => {
  const router = useRouter();

  const handleRouteClick = () => {
    router.push("/DenetimDosyaBelgeleri/DosyaEkle");
  };

  return (
    <>
      <Stack
        spacing={1}
        direction="row"
        justifyContent="start"
        marginBottom={4}
      >
        <Button
          color="primary"
          onClick={() => handleRouteClick()}
          startIcon={<IconPlus width={18} />}
        >
          Dosya Ekle
        </Button>
      </Stack>
    </>
  );
};

export default DosyaEkleButton;
