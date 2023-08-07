import { axiosInstance } from './axios'

export const send_credentials = async (wallet_id: string, message: unknown) => {
  try {
    return axiosInstance().post('core/v1/messaging/send', {
      to: wallet_id,
      message
    })
  } catch (err) {
    console.log('Failed to send credentials', err)
    throw err
  }
}
