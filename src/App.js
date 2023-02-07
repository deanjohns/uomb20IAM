import './App.css';
import Auth from './auth';
import { useAuthContext } from '@asgardeo/auth-react';

function App() {
  const { signOut } = useAuthContext();

  const logout = () => {
    Auth.logout(() => {
      signOut();
      window.location.reload();
    });
  };

  return (
    <div className='signin-main'>
      <div className='signin-button-main'>
        <span className='span'>This is my Dashboard</span>
        <button className='signin-button' onClick={() => logout()}>
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default App;
