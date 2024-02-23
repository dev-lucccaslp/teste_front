import axios from "axios";

import { useMemo } from "react";

export const useApi = () => {
  const api = useMemo(() => {
    return axios.create({
      baseURL: "http://localhost:8080/api",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  }, []);

  return { api };
};