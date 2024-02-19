import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>TS Tasks</h1>
      <div className="card">
      <button>
          домашку не видно, но она есть (не хочу писать стили для компонентов)
        </button>
        <p>
          здесь могла бы быть ваша реклама
        </p>
      </div>
      <p className="read-the-docs">
        нажми на лого vite или react, чтобы узнать о них больше
      </p>
    </>
  )
}

export default App
