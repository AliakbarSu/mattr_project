import { axiosInstance } from './axios'

export const send_credentials = async (wallet_id: string, message: unknown) => {
  return axiosInstance().post('core/v1/messaging/send', {
    to: wallet_id,
    message
  })
}
