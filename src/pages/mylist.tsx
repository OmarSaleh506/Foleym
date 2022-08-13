import React from 'react'
import AuthRoute from '../components/AuthRoute'
import { Layout } from '../components/Layout'
import MyList from '../components/MyList'

export default function MyListPage() {
  return (
    <AuthRoute>
    <Layout>
        <MyList />
    </Layout>
    </AuthRoute>
  )
}
