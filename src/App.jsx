import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      <ToastContainer position="top-right" autoClose={3000} />
      <h1 className="text-3xl font-bold text-center mt-10 text-primary">
        🚀 DigiTools Platform
      </h1>
      <p className="text-center text-gray-500 mt-2">Project setup complete!</p>
    </div>
  )
}

export default App
