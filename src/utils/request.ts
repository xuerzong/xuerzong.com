import { HttpMethod, HttpStatus } from 'np-nt'
import { buildUrl } from './url'

interface CustomResponse<T> {
  message: string
  data?: T
}

export function apiRequest<Data = any>(
  method: string,
  url: string,
  body,
  headers?: object
): Promise<{ ok: boolean; status: number; data?: CustomResponse<Data>; error?: any }> {
  return fetch(url, {
    method,
    cache: 'no-cache',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...headers,
    },
    body,
  }).then((res) => {
    if (res.ok || res.status === HttpStatus.CONFLICT) {
      return res
        .json()
        .then((data: CustomResponse<Data>) => ({ ok: res.ok, status: res.status, data }))
    }

    return res.text().then((text) => ({ ok: res.ok, status: res.status, data: { message: text } }))
  })
}

export function get<Return = any>(url: string, params?: object, headers?: object) {
  return apiRequest<Return>(HttpMethod.Get, buildUrl(url, params), undefined, headers)
}

export function del<Return = any>(url: string, params?: object, headers?: object) {
  return apiRequest<Return>(HttpMethod.Delete, buildUrl(url, params), undefined, headers)
}

export function post<Return = any>(url: string, params?: object, headers?: object) {
  return apiRequest<Return>(HttpMethod.Post, url, JSON.stringify(params), headers)
}

export function put<Return = any>(url: string, params?: object, headers?: object) {
  return apiRequest<Return>(HttpMethod.Put, url, JSON.stringify(params), headers)
}
