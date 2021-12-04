
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import MyProject from './components/project/MyProject';

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home></Home>}></Route>
                    <Route path='project' element={<MyProject></MyProject>}></Route>
                    <Route path='contact' element={<Contact></Contact>}></Route>
                    <Route path='home' element={<Home></Home>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
