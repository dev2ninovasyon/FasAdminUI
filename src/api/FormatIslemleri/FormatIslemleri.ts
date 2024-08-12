import { url } from "../apiBase";

export const getFormatlar = async () => {
  try {
    const response = await fetch(`${url}/Format/Hepsi`, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    });
    if (response.ok) {
      return response.json();
    } else {
      console.error("Formatlar getirilemedi");
    }
  } catch (error) {
    console.error("Bir hata oluştu:", error);
  }
};

export const getFormatById = async (id: any) => {
  try {
    const response = await fetch(`${url}/Format/${id}`, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    });
    if (response.ok) {
      return response.json();
    } else {
      console.error("Format getirilemedi");
    }
  } catch (error) {
    console.error("Bir hata oluştu:", error);
  }
};

export const createFormat = async (createdFormat: any) => {
  try {
    const response = await fetch(`${url}/Format`, {
      method: "POST",
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createdFormat),
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

export const updateFormat = async (id: any, updatedFormat: any) => {
  try {
    const response = await fetch(`${url}/Format/${id}`, {
      method: "PUT",
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedFormat),
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

export const deleteFormatById = async (id: number) => {
  try {
    const response = await fetch(`${url}/Format/${id}`, {
      method: "DELETE",
      headers: {
        accept: "application/json",
      },
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
