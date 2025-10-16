// Import Component ต่างๆ เข้ามาในไฟล์นี้
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <main className="px-4 py-8">
        <ProductList />
      </main>
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App