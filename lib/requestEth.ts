import { ethers } from 'ethers'

const etherscan = new ethers.providers.EtherscanProvider('rinkeby', process.env.ETHERSCAN_API_KEY)
const provider = new ethers.providers.InfuraProvider('rinkeby', {
  projectId: process.env.INFURA_PROJECT_ID,
  projectSecret: process.env.INFURA_SECRET,
})

const FAUCET_ADDRESS = process.env.NEXT_PUBLIC_ADDRESS.toLocaleUpperCase()
const TWENTY_FOUR_HOURS = 86400

export default async function requestEth(address: string, amount: number = 0.1): Promise<any> {
  if (!ethers.utils.isAddress(address)) throw new Error(`Invalid address: ${address}`)

  // If too much ETH already, then reject
  const balance = await provider.getBalance(address)
  let etherInt = parseFloat(ethers.utils.formatEther(balance))
  if (etherInt > 3) throw new Error(`You are already Rinkeby ETH rich: ${((etherInt * 100) | 0) / 100}Ξ`)

  // If address requested within 24 hours, then reject
  const history = await etherscan.getHistory(address)
  const lastRequest = history.reverse().filter(({ from }) => from.toLocaleUpperCase() === FAUCET_ADDRESS)
  if (lastRequest.length > 0 && Date.now() / 1000 - lastRequest[0].timestamp < TWENTY_FOUR_HOURS) {
    throw new Error(`You have already requested Rinkeby ETH within the last 24 hours`)
  }

  throw new Error(`Currently in dev. Come back later. Contribute to our Github repo`)

  // If all good, send ETH
  const wallet = new ethers.Wallet(process.env.FAUCET_SK)
  const walletSigner = wallet.connect(provider)
  const gasPrice = await provider.getGasPrice()
  const tx = walletSigner.sendTransaction({
    to: address,
    value: ethers.utils.parseEther(amount.toString()),
    gasPrice,
    gasLimit: 21000,
  })
  tx.then(_tx => {
    console.dir(_tx)
  })
  return tx
}
