import Header from '../src/components/header'
import Main from '../src/components/main'
import Products from '../src/components/products'
import Discount from '../src/components/discount'
import Topsale from '../src/components/topsale'
import Covid from '../src/components/covid'
import Footer from '../src/components/footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Products/>
      <Discount/>
      <Topsale/>
      <Covid/>
      <Footer/>
    </div>
  );
}

export default App;
