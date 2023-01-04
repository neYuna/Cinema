const emailRegExp = /(^|\s+)[\w\-.]+@([\w-]+\.)+[\w-]{2,4}($|\s+)/;
const passwordRegExp = /(^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$)/;
export const validateRequired =  (value:string) => {
  return value === '' ? 'It is necessary field' : ''
}

export const validateEmail = (value:string) =>{
  if(!emailRegExp.test(value)){
    return 'Invalid pattern of email'
  }
  return ''

}

export const validatePassword = (value:string) => {
if(!passwordRegExp.test(value)){
  return 'Invalid pattern of password'
}
return ''
}

export const confirmPassword = (password:string, password2: string) => {
 return password === password2 ? '' : 'Invalid password'

}