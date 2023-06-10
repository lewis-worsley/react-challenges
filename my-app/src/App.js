import css from './App.module.css';
import SideBar from './components/Sidebar';
import StatefulGreeting from './components/StatefulGreeting';

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
      <StatefulGreeting greeting="no idea what I'm doing lol" name="Lewis"/>
    </div>
  );
}

export default App;