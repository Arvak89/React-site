import {createBrowserRouter} from 'react-router-dom'
import EventsPage from "../pages/events/EventsPage.jsx";
import App from "../App.jsx";
import Members from "../pages/members/Members.jsx";
import Profile from "../pages/profile/Profile.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <EventsPage/>
            },
            {
                path: "members",
                element: <Members/>
            },
            {
                path: "members/:id",
                element: <Profile/>
            }
        ]
    }
])

export default router;