import { useState } from "react";
import Header from './Components/Header';
import ProductList from "./Components/ProductList";
import Cart from './Components/Cart';
import './App.css'

export default function App() {
  const [cart,setCart]=useState([]);
  const [totalAmt,setAmt]=useState(0);
  const [search,setSearch]=useState("");
  const products= [
    {
      id: 1,
      name: "Laptop",
      price: 56000,
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQQf_ZNbNaWibJTSlKARZQg4JIPOV7iHygOBwS-MW9YYavchT0Q4qA5erNvTc8xBYB6d9T-hroicWILDZHe_yewBsrXwpJ1uC-NyXE0FgLIaJx95dlgd9-t6KKxB0P_xJX7A_tNVdyGuJs&usqp=CAc"
    },
    {
      id: 2,
      name: "Mobile",
      price: 30000,
      image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS0Lq2HexX5NTQSySYJWL8idHzZePHcJiEzDRl3QUeqMQBTU7FiKODypC9nMiniLitI-Yv0Ovl38TxEmR7vtfjEv4Fo6xAm7ruxZk2Hi7VHpCBufCXknhwhy-FNCwN8sr-dfSNm_0ld&usqp=CAc"
    },
    {
      id: 3,
      name: "Charger",
      price: 2000,
      image: "https://honikon.cz/contents/event/kansyasai/?106868987040600"
    }
  ];
  const filteredProducts = products.filter((product)=>product.name.toLowerCase().includes(search.toLowerCase()));
  function addToCart(product) {
    setCart([...cart,product]);
    setAmt(totalAmt+product.price);
  }
  
  function removeFromCart(index) {
    const updatedCart = cart.filter((_,i)=>i !== index);
    setCart(updatedCart);
  }

  return(
    <div>
      <Header cartCount={cart.length} 
      search={search}
      setSearch={setSearch} />
      <ProductList products={products}
      addToCart={addToCart} />
      <Cart totalAmt={totalAmt} 
      cart={cart}
      removeFromCart={removeFromCart} />
    </div>
  )
}

