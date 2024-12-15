
// type UserShape = {
//     name1:string, age:number , isStudent: boolean
// }


// interface UserShape {
//     name1:string, age:number , isStudent: boolean
// }





const User = ({name1 , age , isStudent}:{name1:string, age:number , isStudent: boolean}) => {
  return (
    <div>
      <h2>name1: {name1}</h2>
      <br />
     <h2>age: {age}</h2>
      <br />
     <h2> isStudent: {isStudent}</h2>
    </div>
  )
}

export default User
