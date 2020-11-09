import './App.css';
// import AComponent from './components/a.component';
// import aStyle from './aStyle.module.css';
// import BComponent from './components/b.component';
import CComponent from './components/c.component';

function App() {
  return (
    <div className="App">
{/* 
      <AComponent main={`${aStyle.container}`}
        item1={`${aStyle.flexItem} ${aStyle.item1}`} item2={`${aStyle.flexItem} ${aStyle.item2}`}
      />

      <br></br>

      <AComponent main={`${aStyle.container}`}
        item1={`${aStyle.flexItem} ${aStyle.item3}`} item2={`${aStyle.flexItem} ${aStyle.item4}`}
      /> */}

      <br></br>
{/* 
      <BComponent main={`${aStyle.container}`}
        item1={`${aStyle.flexItem}`} item2={`${aStyle.flexItem}`}
      /> */}

      <CComponent />

    </div>
  );
}

export default App;