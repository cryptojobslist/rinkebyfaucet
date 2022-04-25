import Footer from 'components/footer'
import Nav from 'components/nav'
import RequestForm from 'components/requestForm'
import { myProvider } from 'lib/contextApi'

export default function IndexPage({ error, ...props }) {
  const { theme }: any = myProvider()
  return (
    <>
      <div className='min-h-screen'>
        <Nav />
        <div className='m-4 md:m-8'>
          <div className='mb-10 opacity-50 '>🚧 &nbsp; Under construction</div>
          <div className='container'>
            <div className='text-left mb-2 md:w-1/2 mx-auto'>
              <h1 className='text-left text-4xl title dark:text-white'>{process.env.appName}</h1>
              <p className='my-2'>Get your Rinkeby ETH for Ethereum development and testing.</p>
            </div>
            <div className={`md:w-1/2 mx-auto p-2.5 ${theme === 'light' ? 'shadow-2xl' : 'shadow-xl	 shadow-gray-500'}`}>
              <RequestForm />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
