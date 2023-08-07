import { v4 } from 'uuid'
import { axiosInstance } from './axios'

export const encrypt_message = async (message: {
  senderDidUrl: string
  receiverDidUrl: string
  from: string
}) => {
  const result = await axiosInstance().post('core/v1/messaging/encrypt', {
    senderDidUrl: message.senderDidUrl,
    recipientDidUrls: [message.receiverDidUrl],
    payload: {
      id: v4(),
      type: 'https://mattr.global/schemas/verifiable-credential/offer/OidcCredentialProvider',
      from: message.from,
      created_time: '1616466734',
      body: {
        uri: `openid://discovery?issuer=${process.env.BASE_URL}/ext/oidc/v1/issuers/0dceeddd-f717-4bf2-b520-b3ddcd104a60`
      }
    }
  })
  return result.data.jwe
}
