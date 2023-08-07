import { create_auth_token } from '../../auth/get_auth_token'

jest.mock('axios', () => ({
  post: jest.fn().mockResolvedValue({
    data: {
      access_token: 'token'
    }
  })
}))

describe('get_auth_token', () => {
  test('should return a valid auth token', async () => {
    const result = await create_auth_token()
    expect(result).toBe('token')
  })
})
