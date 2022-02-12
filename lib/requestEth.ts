import { ethers } from 'ethers'
// const provider = ethers.getDefaultProvider('rinkeby')
const provider = new ethers.providers.InfuraProvider('rinkeby', {
  projectId: process.env.INFURA_PROJECT_ID,
  projectSecret: process.env.INFURA_SECRET,
})

export default async function requestEth(address: string, amount: number = 0.1): Promise<any> {
  // If address already has a lot of rEth, then reject
  // If address requested within 24 hours, then reject
  if (!ethers.utils.isAddress(address)) throw new Error(`Invalid address: ${address}`)
  const balance = await provider.getBalance(address)
  let etherInt = parseFloat(ethers.utils.formatEther(balance))
  if (etherInt > 2) throw new Error(`You are already Rinkeby ETH rich: ${((etherInt * 100) | 0) / 100}Ξ`)

  console.log(`Balance:`, etherInt)
}
