import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import RoomDetails from '../pages/roomDetails/RoomDetails'
import PrivateRoutes from './PrivateRoutes'
import { getRoom } from '../api/rooms'
import DashboardLayout from '../layouts/DashboardLayout'
import AddRoom from '../pages/Home/dashboard/host/AddRoom'
import MyListings from '../pages/Home/dashboard/host/MyListings'
import HostRoutes from './HostRoutes'
import ManageUser from '../pages/Home/dashboard/admin/ManageUser'
import AdminRoutes from './AdminRoutes'
import Profile from '../pages/Home/dashboard/common/Profile'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: 'room/:id',
        element: <PrivateRoutes><RoomDetails /></PrivateRoutes>,
        loader: ({params}) => getRoom(params?.id)
      },
    ],
  },
  
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <SignUp />
  },
  {
    path: '/dashboard',
    element: <PrivateRoutes><DashboardLayout /></PrivateRoutes>,
    // errorElement: <ErrorPage />,
    children: [
    // host menu route here
      {
        path: 'addRoom',
        element: <PrivateRoutes>
          <HostRoutes><AddRoom /></HostRoutes>
        </PrivateRoutes>
      },
      {
        path: 'myListings',
        element: <PrivateRoutes>
          <HostRoutes>
            <MyListings />
          </HostRoutes>
        </PrivateRoutes>
      },
      // admin route here
      {
        path: 'manageUser',
        element: <PrivateRoutes>
          <AdminRoutes>
            <ManageUser />
          </AdminRoutes>
        </PrivateRoutes>
      },
      // profile route here
      {
        path: 'profile',
        element:<PrivateRoutes><Profile/></PrivateRoutes>
      },
    ]
  },

])
