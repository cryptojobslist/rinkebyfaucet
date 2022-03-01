import { verify } from 'hcaptcha'

export default async function verifyHCaptcha(token: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    verify(process.env.HCAPTCHA_SECRET, token)
      .then(data => {
        if (data.success === true) {
          console.log('hcaptcha success!', data)
          resolve(true)
        } else {
          console.error('hcaptcha verification failed', data)
          // resolve(false)
          throw new Error(`Captcha verification failed`)
        }
      })
      .catch(err => {
        console.error('hCaptcha err:', err)
        // resolve(false)
        throw new Error(`Captcha verification failed`)
      })
  })
}
