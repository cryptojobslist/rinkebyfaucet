import { ethers } from 'ethers'
const isAddress = ethers.utils.isAddress

const provider = ethers.getDefaultProvider('rinkeby')

export default async function requestEth(address: string, amount: number = 0.1): Promise<any> {
  // If address already has a lot of rEth, then reject
  // If address requested within 24 hours, then reject
  if (!isAddress(address)) throw new Error(`Invalid address: ${address}`)
  const balance = await provider.getBalance(address)
  let etherString = ethers.utils.formatEther(balance)
  let etherInt = parseInt(etherString)

  console.log(`Balance: ${etherString}`, etherInt)
}
