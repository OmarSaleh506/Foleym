import AuthRoute from '../components/AuthRoute'
import { Layout } from '../components/Layout'
import TopRated from '../components/TopRated'

export default function TopRatedPage() {
  return (
    <AuthRoute>
    <Layout>
        <TopRated />
    </Layout>
    </AuthRoute>
)
}
