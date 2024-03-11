import { Link } from "react-router-dom";

function App() {

  return (
    <>
      <div className="hero min-h-screen dark:bg-slate-700 dark:text-slate-50">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold">Typing Speed Meter</h1>
            <p className="py-6">This is a simple application that measures you typing speed.</p>
            <button className="btn btn-primary"><Link to="/keyboard-test">Get Started</Link></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
