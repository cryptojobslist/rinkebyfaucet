import { useForm } from 'react-hook-form'
import HCaptcha from '@hcaptcha/react-hcaptcha'

export default function RequestForm() {
  return (
    <form className='space-x-2'>
      <input type='text' placeholder='0x123…' className='p-2 mt-4 border border-blue-300 border-solid rounded' />
      <button className='rounded'>Request</button>
      {/* <HCaptcha size='invisible' sitekey={process.env.NODE_PUBLIC_HCAPTCHA} /> */}
    </form>
  )
}
