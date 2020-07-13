
export type Method = 'get' 
    | 'GET'
    | 'post'
    | 'POST'
    | 'delete'
    | 'DELETE'
    | 'head'
    | 'HEAD'
    | 'options'
    | 'OPTIONS'
    | 'put'
    | 'PUT'
    | 'patch'
    | 'PATCH'
export interface AxiosRequestConfig {
    url: string,
    method?: Method,
    params?: any,
    data?: any
}