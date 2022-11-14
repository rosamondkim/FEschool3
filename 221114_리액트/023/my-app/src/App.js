import Homepage from './pages/homepage/Homepage'
import Login from './pages/login/Login'

function App() {

  const user = {
    login: true,
    id: 'licat',
    email: 'paul-lab@naver.com',
    img: 'https://paullab.co.kr/images/ceo.png'
  }

  return (
    <main>
      {
        user.login ? 
        <Homepage
          id = {user.id}
          email = {user.email}
          img = {user.img}
        /> : 
        <Login/>
      }
    </main>
  );
}

export default App;