import AuthRoute from '../components/AuthRoute'
import { Layout } from '../components/Layout'
import Popular from '../components/Popular'

export default function PopularPage() {
  return (
    <AuthRoute>
    <Layout>
        <Popular />
    </Layout>
    </AuthRoute>
  )
}
