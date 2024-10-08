import React from 'react'

const LoginPage = () => {
  return (
    <div>
      <form>
        <input type="text" name="UserName" placeholder='"Enter User Name' />
        <input type="password" name="password" placeholder='"Enter Password' />
        <input type="Submit"/>
      </form>
    </div>
  )
}

export default LoginPage
