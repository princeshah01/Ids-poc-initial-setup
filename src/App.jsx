import React ,{Suspense} from 'react'
// import {MainLayout} from "@/components/layout/MainLayout"
import router from './routes/routes'
import { RouterProvider } from 'react-router-dom'
function App() {
  return (
    <>
    <Suspense>
      <RouterProvider router={router}/>
    </Suspense>
    </>
  )
}

export default App