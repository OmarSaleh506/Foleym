import AuthRoute from '../components/AuthRoute'
import { Layout } from '../components/Layout'
import Movie from '../components/Movie'

export default function MoviesPage() {
  return (
      <AuthRoute>
    <Layout>
      <Movie />       
    </Layout>
      </AuthRoute>
  )
}
