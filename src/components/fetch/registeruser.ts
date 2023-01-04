import { tmsFetch } from "./tmsFetch";

export const RegisterUser = (
  username: string,
  email: string,
  password: string,
) => {
  const body = {
    username: username,
    email:email,
    password:password,
  }
  return fetch("https://studapi.teachmeskills.by/auth/users/", {
    method: 'POST', 
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
})
}


export const login = (email: string, password: string) => {
  return fetch('https://studapi.teachmeskills.by/auth/jwt/create/', {
  method: 'POST',
  body: JSON.stringify({email, password}),
  headers: {
    'Content-Type': 'application/json',
  }})};

  export const getUser = () =>{

    return tmsFetch('https://studapi.teachmeskills.by/auth/users/me/' , {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
  }


  export const activateUser = (uid:string, token: string) => {
    return fetch('https://studapi.teachmeskills.by/auth/users/activation/', {
      method: 'POST',
      body: JSON.stringify({uid, token}),
      headers: {
        'Content-Type': 'application/json',
      },}).then((response) => {
      return response.json();
    })
    }