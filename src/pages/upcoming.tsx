import React from 'react'
import AuthRoute from '../components/AuthRoute'
import { Layout } from '../components/Layout'
import Upcoming from '../components/Upcoming'

export default function UpcomingPage() {
  return (
    <AuthRoute>
    <Layout>
        <Upcoming />
    </Layout>
    </AuthRoute>
  )
}
