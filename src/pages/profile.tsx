import AuthRoute from "../components/AuthRoute";
import Profile from "../components/Profile";

export default function ProfilePage() {
  return (
    <AuthRoute>
      <Profile />
    </AuthRoute>
  )
}
