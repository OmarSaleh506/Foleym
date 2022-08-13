import AuthRoute from "../components/AuthRoute";
import { Layout } from "../components/Layout";
import Trending from "../components/Trending";

export default function TrendingPage() {
  return (
    <AuthRoute>
    <Layout>
        <Trending />
    </Layout>
    </AuthRoute>
  )
}
