import logo from '../assets/logo.png'
export default function Header({cartCount,search,setSearch}) {
  return(
    <div>
      <img src={logo} />
      <h2>React Demo App</h2>
      <input type="text"
      placeholder='Search-products'
      value={search}
      onChange={(e)=>setSearch(e.target.value)}/>
      <button type='search'>Search</button>
      <p>Cart Item Count:{cartCount}</p>
    </div>
  );
}