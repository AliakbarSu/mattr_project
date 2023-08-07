import { Credentials } from '../../types/index'
import { axiosInstance } from './axios'

export const create_credentails = async (
  credentials: Credentials,
  issuerKey: string
) => {
  const result = await axiosInstance().post(
    'v2/credentials/web-semantic/sign',
    {
      payload: {
        '@context': ['https://schema.org'],
        type: ['EducationalOccupationalCredential', 'AlumniCredential'],
        credentialSubject: {
          id: credentials.id,
          givenName: credentials.name,
          countryOfResidence: credentials.country,
          email: credentials.email,
          dob: credentials.dob,
          photo: credentials.photo
        },
        credentialBranding: {
          backgroundColor: '#B00AA0',
          watermarkImageUrl: 'https://example.edu/img/watermark.png'
        },
        issuer: {
          id: issuerKey,
          name: 'https://example.edu/issuers/565049',
          iconUrl: 'https://example.edu/icon.svg',
          logoUrl: 'https://example.edu/logo.png'
        }
      },
      persist: false,
      revocable: false
    }
  )
  return result.data
}
