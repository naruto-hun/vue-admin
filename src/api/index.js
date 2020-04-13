import ajax from './ajax'

//验证登录
export const login=({name,pwd})=>ajax('/api/admin/login',{name,pwd},'POST')

//验证管理员token是否过期
export const checkAdminToken=({token})=>ajax('/api/admin/check_token',{token},'POST')
