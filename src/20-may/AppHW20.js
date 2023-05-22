import {Routes,Route} from 'react-router-dom'
import Greeting from '../Greeting'
import ShoppingEx from '../19-may/ShoppingEx'
import Fruits from '../17-may/Fruits'
import UseParamsEx from './UseParamsEx'
export default function AppHW20() 
{
  return <Routes>
  <Route path="/" element={<Greeting></Greeting>}>  
  <Route path="/shopping" element={<ShoppingEx></ShoppingEx>}></Route>
  <Route path="/fruits" element={<Fruits></Fruits>}></Route>
  <Route path="/alpha/:n1/:n2" element={<UseParamsEx></UseParamsEx>}></Route>
  </Route>
</Routes>
}