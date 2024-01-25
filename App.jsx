import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// const Card = (props) => {
//   return(
//     <div class="box">FREE <h3>$0/month</h3><hr /> <br /> 
//         <p>Single User</p> 
//         <p> 50GB Storage</p> 
//         <p> Unlimited Public Project</p>
//          <p> Community Access</p> 
//          <p> Unlimited Private Projects </p>
//           <p>Dedicated Phone Support</p> 
//           <p> Free Subdomain</p> 
//           <p> Monthly Status Reports</p>
//         </div>

//   );
// }
// Card.proptypes = {Card:Proptypes.string};




function App() {
  return(
<div className="container">
  {/* <Card/>
  <Card/>
  <Card/>
   */}
  
        <div class="box">FREE <h3>$0/month</h3><hr /> <br /> 
        <p>Single User</p> 
        <p> 50GB Storage</p> 
        <p> Unlimited Public Project</p>
         <p> Community Access</p> 
         <p> Unlimited Private Projects </p>
          <p>Dedicated Phone Support</p> 
          <p> Free Subdomain</p> 
          <p> Monthly Status Reports</p>
          <p><button className="btn one" > onClick</button></p>
        </div>
        <div class="box">PLUS <h3>$9/month</h3><hr/> <br/>
         <p>5 Users</p>
         <p>50 GB Storage</p>
         <p>Unlimited Public Projects</p>
         <p>Community Access</p>
         <p>Unlimited Private Projects</p>
         <p>Dedicated Phone Support</p>
         <p>Free Subdomain</p>
         <p>Monthly Status Reports</p>
         <p><button className="btn one" > onClick</button></p>
        </div>
        <div class="box">PRO <h3>$49/month</h3><hr/> <br/>
        <p>Unlimited Users</p>
         <p>50 GB Storage</p>
         <p>Unlimited Public Projects</p>
         <p>Community Access</p>
         <p>Unlimited Private Projects</p>
         <p>Dedicated Phone Support</p>
         <p>Free Subdomain</p>
         <p>Monthly Status Reports</p>
         <p><button className="btn one" > onClick</button></p>
         
        
{/*           
           <div class="button">
         <button className="btn 1" > onClick</button>
         <button className="btn 2"> onClick</button>
         <button className="btn 3"> onClick</button>
        
         </div> */}
        </div>
        

            </div>
  );
}
{/* // function App() { */}
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React </h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export default App
