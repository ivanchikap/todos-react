import './assets/scss/style.scss';
import {lazy, Suspense, useState} from "react";
import Spinner from "./components/Spinner";
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import RegisterPage from "./pages/RegisterPage";
import PageNotFound from "./pages/PageNotFound";
import {AuthContext} from "./context/AuthContext";
import {useDispatch, useSelector} from "react-redux";
import {setIsAuthenticated} from "./redux/login/loginSlice";

const RootLayout = lazy(() => import("./layouts/RootLayout"))
const Home = lazy(() => import("./pages/Home"))
const TodosLayout = lazy(() => import("./layouts/TodosLayout"))
const TodosPage = lazy(() => import("./pages/TodosPage"))
const EditTodoPage = lazy(() => import("./pages/EditTodoPage"))
const AboutPage = lazy(() => import("./pages/AboutPage"))
const Login = lazy(() => import("./pages/Login"))


function App() {
    // const [isAuthenticated, setIsAuthenticated] = useState(JSON.parse(sessionStorage.getItem('logined')));
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isAuthenticated = useSelector((state) => state.login.isAuthenticated)

    const loginHandler = (isLoginValid) => {
        if (isLoginValid) {
            sessionStorage.setItem('logined', true)
            navigate('/', {replace: true})
        }
        // setIsAuthenticated(isLoginValid)
        dispatch(setIsAuthenticated(isLoginValid))
    }

    return (
        <div className="App">
            <Suspense fallback={<Spinner/>}>
                <Routes>
                    <Route path='/' element={<RootLayout/>}>
                        <Route index element={<Home/>}/>
                        <Route path='todos' element={<PrivateRoute><TodosLayout/></PrivateRoute>}>
                            <Route index element={<TodosPage/>}/>
                            <Route path=':id' element={<EditTodoPage/>}/>
                        </Route>
                        <Route path='login' element={<Login onLogin={loginHandler}/>}/>
                        <Route path='register' element={<RegisterPage/>}/>}/>
                        <Route path='about'
                               element={<PrivateRoute><AboutPage/> </PrivateRoute>}/>
                        <Route path='/404' element={<PageNotFound/>}/>
                        <Route path='*' element={<Navigate to='/404' replace/>}/>
                    </Route>
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;
