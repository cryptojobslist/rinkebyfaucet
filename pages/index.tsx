import Nav from 'components/nav'
import RequestForm from 'components/requestForm'

export default function IndexPage({ error, ...props }) {
  return (
    <div className='min-h-screen'>
      <Nav />
      <div className='m-8'>
        <h1 className='text-left title'>{process.env.appName}</h1>
        <p>Get your Rinkeby ETH for development and testing here.</p>
        <RequestForm />
      </div>
    </div>
  )
}
