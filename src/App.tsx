import { useEffect } from "react"
import Guitar from "./components/Guitar"
import Header from "./components/Header"
import { useCart } from "./hooks/useCart"

function App() {
  const { state } = useCart()

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart))
  }, [state.cart])
  
  return (
    <>
      <Header/>

      <h2 className="py-5 md:pt-10 text-yellow-500 font-bold text-5xl text-center">
        Nuestra Colección
      </h2>

      <main className="grid md:grid-cols-2 gap-y-20 max-w-4xl mx-auto px-5 py-10">
        
        {state.data?.map((guitar) => (
          <Guitar 
            key={guitar.id} 
            guitar={guitar}
          />
          ))}

      </main>
    </>
  )
}

export default App
