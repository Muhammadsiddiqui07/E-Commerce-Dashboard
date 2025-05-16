import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Revenue_Analysis_Page from '../pages/Revenue_Analysis_Page.jsx'
import Inventry_Management from '../pages/Inventry_Management.jsx'
import Product_Registeration from '../pages/Product_Register.jsx'


function MyRoutes() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Revenue_Analysis_Page />} />
                <Route path='/revenu_analysis' element={<Revenue_Analysis_Page />} />
                <Route path='/inventry_management' element={<Inventry_Management />} />
                <Route path='/product_register' element={<Product_Registeration />} />
            </Routes>
        </Router>
    );
}


export default MyRoutes