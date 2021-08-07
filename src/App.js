import "./App.css";
import React, {useEffect} from "react";
import TodoFeature from "./features/todo/pages";
import AlbumFeature from "./features/Album/pages";
import Header from "./components/Header";
import { Route } from "react-router-dom";
import productApi from "./api/productApi";
import CounterFeature from "./features/Counter";
function App() {
  useEffect(() => {
  const fetchProduct = async () => {
    const param = {
      _limit: 10
    }
    const productList = await productApi.getAll(param )
    console.log(productList)
  }
  fetchProduct()
  }, [])
  return (
    <div className="App">
      <Header />
      <Route path="/counter" component={CounterFeature} />
      <Route path="/todos" component={TodoFeature} />
      <Route path="/albums" component={AlbumFeature} />
    </div>
  );
}

export default App;
