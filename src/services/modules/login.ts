export function apiLogin(data: any): Promise<any> {
  return httpPost({
    url: '/core/login/',
    data: data
  })
}
