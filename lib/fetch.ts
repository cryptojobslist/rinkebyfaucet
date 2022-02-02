import ifetch from 'isomorphic-unfetch'
const apiDomain = process.env.NEXT_PUBLIC_API

export const fetch = async (path, options = {}) =>
  ifetch(apiDomain + path, {
    credentials: 'include',
    ...options,
  }).then(res => {
    if (res.ok) {
      return res.json()
    } else {
      return Promise.reject({ res })
    }
  })

export const post = async (path, data) =>
  ifetch(apiDomain + path, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  }).then(res => {
    if (res.ok) {
      return res.json()
    } else {
      return Promise.reject({ res })
    }
  })
