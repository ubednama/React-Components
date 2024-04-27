import './App.css';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import React, {useState} from 'react';
import AddItem from './components/AddItem';

function App() {
  const products = [
    {
    price: 99999,
    name: "i-Phone 10s Max",
    quantity: 0,
    },
    {
      price: 9999,
      name: "Redmi 10s Max",
      quantity: 0,
    },
  ]

  let [productList, setProductList] = useState(products)
  let [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++
    newTotalAmount += newProductList[index].price
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  }

  const decrementQuantity = (index) => {
    let newProductList = [...productList]
    let newTotalAmount = totalAmount;
    if(newProductList[index].quantity > 0) {
      newProductList[index].quantity--
      newTotalAmount -= newProductList[index].price
    }
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  }

  const resetQuantity = () => {
    let newProductList = [...productList]
    newProductList.map((products)=>{
      products.quantity = 0
    })
    setProductList(newProductList);
    setTotalAmount(0)
  }

  const removeItem = (index) =>{
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -= newProductList[index].quantity*newProductList[index].price;
    newProductList.splice(index,1);
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  }

  const addItem = (name, price) =>{
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList.push({
      name:name,
      price:Number(price),
      quantity: "1"
    });
    console.log(newTotalAmount)
    newTotalAmount += price;
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  }

  const nameCount = {};

  productList.forEach(product => {
    if(nameCount[product.name]){
      nameCount[product.name]++;
    } else {
      nameCount[product.name] = 0;
    }
  });

  const totalItems = Object.keys(nameCount).length;

  return (
    <>
      <NavBar totalItems={totalItems}/>
      <main className='container'>
        <AddItem addItem = {addItem} />
        <ProductList ProductList={productList} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} removeItem={removeItem}/>
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity}/>
    </>
  );
}

export default App;
