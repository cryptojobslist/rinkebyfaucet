import cn from 'classnames'
import { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import HCaptcha from '@hcaptcha/react-hcaptcha'

export default function RequestForm() {
  const { register, handleSubmit, formState } = useForm()
  const [loading, setLoading] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)
  const [error, setError] = useState<any | null>(null)
  const captchaRef = useRef<any>(null)

  const onSubmit = async data => {
    setLoading(true)
    try {
      // captchaRef.current.execute()
      const address = data.address.trim()
      const res = await fetch('/api/request-eth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ address }),
      })
      const result = await res.json()
      if (res.status >= 300) setError(result)
      setSuccess(result)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className='space-y-3 md:space-x-2' onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('address', {
          required: true,
          validate: address => /0x[a-fA-F0-9]{40}/g.test(address),
        })}
        type='text'
        placeholder='0x123…'
        className={cn('p-2 px-3 mt-4 border border-purple border-solid rounded md:w-96 w-full', {
          'border-red-400': formState.errors.address,
        })}
      />
      <button
        className='p-2 px-4 text-white rounded bg-purple opacity-95 hover:opacity-100 active:opacity-90'
        type='submit'>
        {loading ? `Requesting…` : `Request`}
      </button>
      {error && <div className='text-red-500'>{error.message}</div>}
      {/* <HCaptcha size='invisible' ref={captchaRef} sitekey={process.env.NEXT_PUBLIC_HCAPTCHA} /> */}
    </form>
  )
}
