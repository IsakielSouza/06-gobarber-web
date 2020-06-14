import React from 'react';

import GlobalStyle from './styles/global';
// import SingIn from './pages/SignIn';
import SignUp from './pages/signUp';

const App: React.FC = () => (
  <>
    <SignUp />
    <GlobalStyle />
  </>
);

export default App;
