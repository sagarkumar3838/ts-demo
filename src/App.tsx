import Button from "./component/Button"
import AdminInfo from "./component/reusable/AdminInfo"
import UserInfo from "./component/reusable/UserInfo"
import User from "./component/User"

import {Info , AdminInfoList} from "./component/types"
import Counter from "./component/Counter_App/Counter"


const App = () => {

  const user : Info = {id: 1, name: "john Doe", email:"john@gmail.com"}
  const admin : AdminInfoList = {id: 2, name: "jane", email:"admin@gmail.com",role: "admin", lastLogin: new Date(),}
  return (
    <div>

      <Counter/>
      {/*
      <AdminInfo admin={admin}/>
      <UserInfo user={user}/>
      
        <User name1="allu" age={34} isStudent={true}/>
        <Button label="Click" onClick={()=> console.log('Clicked')} disabled={false}/>
       */}
    </div>
  )
}

export default App
