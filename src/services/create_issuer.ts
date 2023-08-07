import { axiosInstance } from './axios'

export const create_issuer = async () => {
  try {
    return axiosInstance().post('core/v1/dids', {
      method: 'key',
      options: {
        keyType: 'ed25519'
      }
    })
  } catch (err) {
    console.log('Failed to create issuer', err)
    throw err
  }
}
