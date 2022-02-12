import Nav from 'components/nav'
import RequestForm from 'components/requestForm'

export default function IndexPage({ error, ...props }) {
  return (
    <div className='min-h-screen'>
      <Nav />
      <div className='m-4 md:m-8'>
        <h1 className='text-left title'>{process.env.appName}</h1>
        <p>Get your Rinkeby ETH for Ethereum development and testing.</p>
        <RequestForm />
      </div>
    </div>
  )
}
