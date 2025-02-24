import Header from "./header/Header"

function App({ children }) {

  return (
    <>
        <Header />
        { children }
    </>
  )
}

export default App
