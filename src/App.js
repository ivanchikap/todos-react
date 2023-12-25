import './assets/scss/style.scss';
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import TodosPage from "./pages/TodosPage";
import AboutPage from "./pages/AboutPage";
import TodosLayout from "./layouts/TodosLayout";
import EditForm from "./components/EditForm";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout/>}>
            <Route index element={<Home/>}/>
            <Route path='todo-list' element={<TodosLayout/>}>
                <Route index  element={<TodosPage/>}/>
                <Route path=':id' element={<EditForm />}/>
            </Route>
            <Route path='about' element={<AboutPage/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Route>
    )
);

function App() {
    return (
        <div className="App">
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;