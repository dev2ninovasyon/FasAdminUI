import { url } from "../apiBase";

export const getDosya = async () => {
  try {
    const response = await fetch(`${url}/DenetimDosyaBelgeleri/Hepsi`, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    });
    if (response.ok) {
      return response.json();
    } else {
      console.error("Denetciler getirilemedi");
    }
  } catch (error) {
    console.error("Bir hata oluştu:", error);
  }
};
export const getDosyaByActive = async (isActive: boolean) => {
  try {
    const response = await fetch(
      `${url}/DenetimDosyaBelgeleri/Hepsi?isActive=${isActive}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      }
    );
    if (response.ok) {
      return response.json();
    } else {
      console.error("Dosyalar Getirilemedi ");
    }
  } catch (error) {
    console.error("Bir hata oluştu:", error);
  }
};
export const getDosyaById = async (id: any) => {
  try {
    const response = await fetch(`${url}/DenetimDosyaBelgeleri/${id}`, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    });
    if (response.ok) {
      return response.json();
    } else {
      console.error("Denetci getirilemedi");
    }
  } catch (error) {
    console.error("Bir hata oluştu:", error);
  }
};

export const createDosya = async (createdDenetci: any) => {
  try {
    const response = await fetch(`${url}/Denetci`, {
      method: "POST",
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createdDenetci),
    });

    if (response.ok) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Bir hata oluştu:", error);
  }
};

export const updateDosya = async (id: any, updatedDosya: any) => {
  try {
    const response = await fetch(`${url}/DenetimDosyaBelgeleri/${id}`, {
      method: "PUT",
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedDosya),
    });

    if (response.ok) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Bir hata oluştu:", error);
  }
};
