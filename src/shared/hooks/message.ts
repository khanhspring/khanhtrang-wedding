import useSWR from "swr"
import { fetcher } from ".."

export const useMessages = (tableId: string) => {
  return useSWR(`v1/rows/${tableId}`, (url) => fetcher(url, { baseURL: 'https://api.tablebackend.com' }))
}