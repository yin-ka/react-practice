import Header from './Header';
import Speech from './Speech';
const App = ({props}) => {
  const title = 'practice';
  const title1 = 'Hello';
  const soe = 'mine';
    return (
    <div className="App">
      <Header title={title} />
      <Header title={title1} />
      <Speech soe={soe}/>
      <Header />
    </div>
  );
};

export default App;
