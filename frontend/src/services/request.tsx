export async function request<T>(method: 'GET' | 'POST' | 'PUT' | 'DELETE', url: string, data?: any): Promise<T> {
    const requestOptions: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    }
    if (data) {
      switch (method) {
        case 'GET':
          url = `${url}?${queryString(data)}`
          break
        case 'POST':
        case 'PUT':
        case 'DELETE':
          requestOptions.body = JSON.stringify(data)
          break
        default:
          throw new Error('Unsupported HTTP method.')
      }
    }

    const response = await fetch('http://localhost:8000/'+url, requestOptions)
    return await response.json()
  }

function queryString(object: any) {
    const objectAttributes = Object.entries(object)
    return objectAttributes.map(([key, value]) => `${key}=${encodeURIComponent((value as any).toString())}`).join('&')
}