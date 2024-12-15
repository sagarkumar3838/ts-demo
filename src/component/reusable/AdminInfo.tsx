import { AdminInfoList } from "../types"

type AdminInfoProps = {
  admin : AdminInfoList;
}

const AdminInfo: React.FC<AdminInfoProps> = ({admin}) => {
  return (
    <div>
      <h2>Admin Information</h2>
      <p>Admin ID: {admin.id}</p>
      <p>Admin Name: {admin.name}</p>
      <p>Admin Email: {admin.email}</p>
      <p>Admin Role: {admin.role}</p>
      <p>Admin LastLogin: {admin.lastLogin.toLocaleString()}</p>
    </div>
  )
}

export default AdminInfo
