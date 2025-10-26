import './App.css'
import Home from './home';
import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
const FiveGIndex = lazy(() => import('./5g-index'));
const CareersHome = lazy(() => import('./careers_home'));
import { useDispatch } from 'react-redux';
import { setWidth } from './slices/viewportSlice';
const Login = lazy(() => import('./login_home'));
const LoginCandidate = lazy(() => import('./login_candidate'));
const JobSearch = lazy(() => import('./job_search'));
const JobDetails = lazy(() => import('./job_details'));
const SignupPage = lazy(() => import('./signup'));
const CandidatePage = lazy(() => import('./candidate_page'));
import { QueryClient, QueryClientProvider } from 'react-query';
import { setUser } from './slices/userSlice';
import axios from 'axios';
import FresherPage from './fresher_page';
import ExperiencePage from './experienced_page';
const ApplyPage = lazy(() => import('./applyPage'));
const CareersFullstack = lazy(() => import('./careers_fullstack'));
const CareersDataAnalytics = lazy(() => import('./careers_data_analytics'));
const CareersDevops = lazy(() => import('./careers_devops'));
const CareersUiux = lazy(() => import('./careers_uiux'));
const CareersQa = lazy(() => import('./careers_qa'));
const CareersProduct = lazy(() => import('./careers_product'));

const tokenExpired = async function () {
  const token = localStorage.getItem('token');
  const res = await axios({
    url: import.meta.env.VITE_ENVIRONMENT === 'development' ? `${ import.meta.env.VITE_DEV_BASE_URL }/users/jwtExpired` : `${ import.meta.env.VITE_PROD_BASE_URL }/users/jwtExpired`,
    method: 'POST',
    data: {
      token
    },
  });
  return res.data.expired;
}

function App() {

  const dispatch = useDispatch();
  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('token');
    if (!user) dispatch(setUser({ user: null, token: null }));
    else {
      tokenExpired().then(jwtExpired => {
        if (jwtExpired) dispatch(setUser({ user: null, token: null }));
        else dispatch(setUser({ user, token }));
      });
    }
    
    const handleResize = () => {
      dispatch(setWidth(window.innerWidth))
    }
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const queryClient = new QueryClient();
  
  return (
    <QueryClientProvider client={ queryClient }>
      <>
      <Suspense>
        <Routes>
          <Route index path='/' element={ <Home /> } />
          <Route path='/insights/5g-index' element={ <FiveGIndex /> } />
          <Route path='/careers' element={ <CareersHome /> } />
          <Route path='/careers/job_search' element={ <JobSearch /> } />
          <Route path='/careers/freshers_page' element={ <FresherPage /> } />
          <Route path='/careers/experienced_page' element={ <ExperiencePage /> } />
          <Route path='/careers/job/:jobId' element={ <JobDetails /> } />
          <Route path='/login' element={ <Login /> } />
          <Route path='/login/candidate' element={ <LoginCandidate /> } />
          <Route path='/signup' element={ <SignupPage /> } />
          <Route path='/candidate' element={ <CandidatePage /> } />
          <Route path='/job/:jobId/apply' element={ <ApplyPage /> } />
          {/* Career Tech Domain Subpages */}
          <Route path='/careers/fullstack' element={ <CareersFullstack /> } />
          <Route path='/careers/data-analytics' element={ <CareersDataAnalytics /> } />
          <Route path='/careers/devops' element={ <CareersDevops /> } />
          <Route path='/careers/uiux' element={ <CareersUiux /> } />
          <Route path='/careers/qa' element={ <CareersQa /> } />
          <Route path='/careers/product' element={ <CareersProduct /> } />
        </Routes>
      </Suspense>
      </>
    </QueryClientProvider>
  );
}

export default App;