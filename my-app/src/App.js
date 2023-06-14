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

function App() {
    return (
        <div className={css.App}>
            <NavBarForm />
        </div>
    )
}

export default App;