import axios from 'axios'

let token: string = ''

export const setToken = (newToken: string) => {
  token = newToken
}

export const axiosInstance = () =>
  axios.create({
    baseURL: 'https://aliakbar-sultani-xpnqsj.vii.mattr.global',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
