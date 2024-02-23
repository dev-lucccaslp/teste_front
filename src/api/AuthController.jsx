import { useApi } from "../hooks/useApi"

export const AuthController = () => {
  const { api } = useApi();

  const singIn = async (data) => {
    const response = await api.post('/login', {
      data
    })
    return response.data;
  }
  return { singIn }
}