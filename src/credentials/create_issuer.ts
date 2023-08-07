import { axiosInstance } from './axios'

export const create_issuer = async () => {
  return axiosInstance().post('core/v1/dids', {
    method: 'key',
    options: {
      keyType: 'ed25519'
    }
  })
}
