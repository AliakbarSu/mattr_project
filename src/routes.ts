import express from 'express'
const router = express.Router()
import { create_issuer } from './credentials/create_issuer'

router.post('/issue-credential', async function (req, res) {
  const user_credentails = req.body
  const token = await create_auth_token()
  // set auth token for all calls to mattr api
  setToken(token)
  const result = await create_issuer()
  const did = result.data.did
})

export default router
