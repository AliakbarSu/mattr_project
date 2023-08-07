import axios from 'axios'

export const create_auth_token = async (): Promise<string> => {
  const result = await axios.post(process.env.AUTH_URL || '', {
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    audience: process.env.AUDIENCE,
    grant_type: 'client_credentials'
  })
  return result.data.access_token
}
