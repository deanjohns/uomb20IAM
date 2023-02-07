import '../App.css';
import Auth from '../auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '@asgardeo/auth-react';

const SignIn = () => {
  const { state, signIn } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (state.isAuthenticated) {
      window.location.reload();
      localStorage.setItem('state', JSON.stringify(state));
      Auth.login(() => {
        navigate('/app');
      });
    }
  }, [state]);

  return (
    <div className='signin-main'>
      <div className='signin-button-main'>
        <button className='signin-button' onClick={() => signIn()}>
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignIn;
