interface RequestParams {
  url: string
  resolve: any
  reject: (reason?: any) => void
  timeout?: number | null | undefined
  optionHeaders?: HeadersInit
  params?: Record<string, any>
  jsonBody?: Record<string, any>
  data?: Record<string, any>
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
}

class DomainCommon {
  static fetchGet({url, params, resolve, reject, timeout = undefined, optionHeaders}: RequestParams) {
    return _fetch({url, resolve, reject, method: 'GET', params, timeout, optionHeaders})
  }

  static fetchPost({url, params, jsonBody, resolve, reject, timeout = undefined, optionHeaders}: RequestParams) {
    return _fetch({url, resolve, reject, method: 'POST', params, data: jsonBody, timeout, optionHeaders})
  }

  static fetchPut({url, params, jsonBody, resolve, reject, timeout = undefined, optionHeaders}: RequestParams) {
    return _fetch({url, resolve, reject, method: 'PUT', params, data: jsonBody, timeout, optionHeaders})
  }

  static fetchPatch({url, params, jsonBody, resolve, reject, timeout = undefined, optionHeaders}: RequestParams) {
    return _fetch({url, resolve, reject, method: 'PATCH', params, data: jsonBody, timeout, optionHeaders})
  }

  static fetchDelete({url, params, jsonBody, resolve, reject, timeout = undefined, optionHeaders}: RequestParams) {
    return _fetch({url, resolve, reject, method: 'DELETE', params, data: jsonBody, timeout, optionHeaders})
  }

  static getApiUrl() {
    return 'https://fe-interview-api.unnotech.com'
  }
}

async function _fetch({url, method, params, data, optionHeaders = {}, resolve, reject}: RequestParams) {
  let options: RequestInit = method ? {method} : {}
  options = data
    ? Object.assign(options, {body: JSON.stringify(data)})
    : options

  // set apiTokenHeader if available
  options.headers = {
    accept: 'application/json',
    'Content-Type': 'application/json',
    ...optionHeaders
  }

  try {
    const response = await fetch(url, options)

    if (check2XXStatus(response.status)) {
      if (response.status === 204) {
        resolve({})
      } else {
        try {
          const responseJson = await response.json()
          resolve(responseJson)
        } catch (e) {
          console.error(e)
          reject(e)
        }
      }
    } else {
      try {
        const responseJson = await response.json()
        reject({...responseJson, status: response.status})
      } catch (e) {
        // avoid response data can't serialization to json
        console.error(e)
        reject({status: response.status})
      }
    }
  } catch (e) {
    console.error(e)
    reject(e)
  }
}

function check2XXStatus(status: number) {
  return status >= 200 && status < 300
}

export default DomainCommon
