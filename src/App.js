import Product from './Product';
const App = ({props}) => {
    return (
    <div className="App">
      <Product
      name = "Google Home"
      description = "Your AI assistant"
      price={59.99}
      />
      <Product
      name = "Iphone 12 Pro max"
      description = "The best iphone "
      price={1200}
      />
      <Product
      name = "Macbook"
      description = "Your favourite computer"
      price={2500}
      />
    </div>
  );
};

export default App;
