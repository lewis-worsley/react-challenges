import css from './App.module.css';
import SideBar from './components/Sidebar';
import StatefulGreeting from './components/StatefulGreetingWithCallback';
import StatefulGreetingWithCallback from './components/StatefulGreeting';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';
import NavBarSimple from './components/NavBarSimple';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
import NestingComponents from './components/NestingComponents';
import MethodAsPropsParent from './components/MethodAsPropsParent';
import NavBarForm from './components/NavBarForm';
import RenderingLists from './components/RenderingLists';
import Content from './components/Content';
import LifeCyclesCDM from './components/LifeCyclesCDM';
import LifeCyclesCDU from './components/LifeCyclesCDU';
import LifeCyclesCWU from "./components/LifeCyclesCWU";
import Loader from './components/Loader';
import ControlledForm from './components/ControlledForm';
import UncontrolledForm from './components/UncontrolledForm';
import SearchBar from './components/SearchBar';
import HooksCounter from './components/HooksCounter';
import ControlledFormHooks from './components/ControlledFormHooks';
import UseStateWithArrays from './components/UseStateWithArrays';
import UseStateWithObjects from './components/UseStateWithObjects';
import UseEffectCounter from './components/UseEffectCounter';
import UseEffectCounterContainier from './components/UseEffectCounterContainier';

// function App() {
//   return (
//     <div className={css.App}>
//       <SideBar />
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       {/* <StatefulGreeting greeting="no idea what I'm doing lol" name="Lewis"/> */}
//       {/* <StatefulGreetingWithCallback greeting="no idea what I'm doing lol" name="Lewis"/> */}
//       <StatefulGreetingWithPrevState greeting="no idea what I'm doing lol" name="Lewis"/>
//     </div>
//   );
// }

// function App() {
//     return (
//         <div>
//             <NavBarSimple />
//         </div>
//     )
// }

// function App() {
//     return (
//         <div>
//             <ConditionalRenderingClass />
//             <ConditionalRenderingFunctional connected={true}/>
//         </div>
//     )
// }

// function App() {
//     return (
//         <div>
//             {/* <NestingComponents /> */}
//             <MethodAsPropsParent />
//         </div>
//     )
// }

// function App() {
//     return (
//         <div className={css.App}>
//             <NavBarForm />
//         </div>
//     )
// }

// function App() {
//     return (
//         <div>
//             <RenderingLists />
//         </div>
//     )
// }

// function App() {
//     return (
//         <div className={css.App}>
//             < NavBarForm />
//             <SideBar />
//             <Content />
//         </div>
//     );
// }

// function App() {
//     return (
//         <div className={css.App}>
//             <LifeCyclesCDM />
//         </div>
//     );
// }

// export default App;


// function App() {
//     return (
//         <div className={css.App}>
//             <LifeCyclesCDU />
//         </div>
//     );
// }

// export default App;


// function App() {
//   return <div>
//       <LifeCyclesCWU />
//     </div>;
// }

// export default App;


// function App() {
//   return <div>
//       <Content />
//     </div>;
// }

// export default App;


// function App() {
//   return <div className='App'>
//       <ControlledForm />
//     </div>;
// }

// export default App;


// function App() {
//   return <div className='App'>
//       <UncontrolledForm />
//     </div>;
// }

// export default App;


// function App() {
//   return <div className='App'>
//       <SearchBar />
//     </div>;
// }

// export default App;


// function App() {
//   return <div className='App'>
//       <HooksCounter />
//     </div>;
// }

// export default App;


// function App() {
//   return <div className='App'>
//       <ControlledFormHooks />
//     </div>;
// }

// export default App;


// function App() {
//   return <div className='App'>
//       <UseStateWithArrays />
//     </div>;
// }

// export default App;


// function App() {
//   return <div className='App'>
//       <UseStateWithObjects />
//     </div>;
// }

// export default App;


// function App() {
//   return <div className='App'>
//       <UseEffectCounter />
//     </div>;
// }

// export default App;


function App() {
  return <div className='App'>
      <UseEffectCounterContainier />
    </div>;
}

export default App;

