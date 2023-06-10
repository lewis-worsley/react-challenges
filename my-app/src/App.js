import css from './App.module.css';
import SideBar from './components/Sidebar';
import StatefulGreeting from './components/StatefulGreetingWithCallback';
import StatefulGreetingWithCallback from './components/StatefulGreeting';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';

// function App() {
//   return (
//     <div className={css.App}>
//       <SideBar />
//     </div>
//   );
// }

function App() {
  return (
    <div>
      {/* <StatefulGreeting greeting="no idea what I'm doing lol" name="Lewis"/> */}
      {/* <StatefulGreetingWithCallback greeting="no idea what I'm doing lol" name="Lewis"/> */}
      <StatefulGreetingWithPrevState greeting="no idea what I'm doing lol" name="Lewis"/>
    </div>
  );
}

export default App;