import { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import HCaptcha from '@hcaptcha/react-hcaptcha'

export default function RequestForm() {
  const { register, handleSubmit } = useForm()
  const [loading, setLoading] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)
  const [error, setError] = useState<any | null>(null)
  const captchaRef = useRef<any>(null)

  const onSubmit = async data => {
    setLoading(true)
    try {
      // captchaRef.current.execute()
      const res = await fetch('/api/request-eth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const result = await res.json()
      setSuccess(true)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className='space-x-2' onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('address')}
        type='text'
        placeholder='0x123…'
        className='p-2 mt-4 border border-blue-300 border-solid rounded w-72'
      />
      <button
        className='p-2 px-4 text-white bg-blue-500 rounded opacity-90 hover:opacity-100 active:opacity-80'
        type='submit'>
        {loading ? `Requesting…` : `Request`}
      </button>
      {/* <HCaptcha size='invisible' ref={captchaRef} sitekey={process.env.NODE_PUBLIC_HCAPTCHA} /> */}
    </form>
  )
}
