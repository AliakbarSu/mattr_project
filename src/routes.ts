import express from 'express'
const router = express.Router()
import { create_auth_token } from './auth/get_auth_token'
import { create_issuer } from './services/create_issuer'
import { create_credentails } from './services/create_credentails'
import { encrypt_message } from './services/encrypt_message'
import { send_credentials } from './services/send_credentails'
import { setToken } from './services/axios'

router.post('/issue-credential', async function (req, res) {
  const user_credentails = req.body
  const token = await create_auth_token()
  // set auth token for all calls to mattr api
  setToken(token)
  const result = await create_issuer()
  const did = result.data.did
  await create_credentails(user_credentails, did)
  const encrypted_message = await encrypt_message({
    senderDidUrl:
      result.data.localMetadata.initialDidDocument.keyAgreement[0].id,
    receiverDidUrl: user_credentails.id,
    from: did
  })
  const send_credentails_result = await send_credentials(
    user_credentails.id,
    encrypted_message
  )
  res.send(send_credentails_result.data)
})

export default router
