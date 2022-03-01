import type { NextApiRequest, NextApiResponse } from 'next'
import RequestEth from 'lib/requestEth'
import VerifyCaptcha from 'lib/captcha'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const params = { ...req.body, ...req.query }
  const address: string = params.address
  const amount: number = params.amount
  const hCaptchaToken: string = params.hCaptchaToken

  try {
    await VerifyCaptcha(hCaptchaToken)
    await RequestEth(address, amount)
    return res.status(200).json({ message: `Eth requested` })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ message: err.message })
  }
}
