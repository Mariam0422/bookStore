import logo from "../../image/bookLogo.svg";
import cart from "../../image/cart.svg";
import { IoSearch } from "react-icons/io5";
import './index.css';


const Header = ({setValue, getData}) => { 
  return (
    <div className="mainHeader">
      <div>
        <img src={logo} alt="logo"/>
      </div>
      <div style={{display: "flex", alignItems: "center"}}>
        <input placeholder="Enter book name" onChange={(e) => {setValue(e.target.value)}}/>
        <button onClick={() => getData()}><IoSearch/></button>
      </div>
      <div>
        <img src={cart} alt="cart"/>
      </div>
    </div>
  );
};

export default Header;
