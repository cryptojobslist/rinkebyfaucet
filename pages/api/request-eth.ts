import type { NextApiRequest, NextApiResponse } from 'next'
import RequestEth from 'lib/requestEth'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const params = { ...req.body, ...req.query }
  const address = params.address
  const amount = params.amount

  console.log(params)
  //  TODO validate captcha

  try {
    if (await RequestEth(address)) {
      return res.status(200).json({ message: `Eth requested` })
    }
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }

  return res.status(200).json({ message: `requested` })
}
