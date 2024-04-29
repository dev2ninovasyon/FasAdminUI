import { Button, Stack } from "@mui/material";
import { IconPlus } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

const DenetciEkleButton = () => {
  const router = useRouter();

  const handleRouteClick = () => {
    router.push("/DenetciFirmaIslemleri/DenetciEkle");
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
          Denetçi Firma Ekle
        </Button>
      </Stack>
    </>
  );
};

export default DenetciEkleButton;
