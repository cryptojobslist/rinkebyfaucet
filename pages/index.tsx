import Nav from 'components/nav'
import RequestForm from 'components/requestForm'

export default function IndexPage({ error, ...props }) {
  return (
    <div className='min-h-screen'>
      <Nav />
      <div className='m-4 md:m-8'>
        <div className='mb-10 opacity-50 '>🚧 &nbsp; Under construction</div>
        <h1 className='text-left title dark:text-white'>{process.env.appName}</h1>
        <p className='my-2'>Get your Rinkeby ETH for Ethereum development and testing.</p>
        <RequestForm />
      </div>
    </div>
  )
}
