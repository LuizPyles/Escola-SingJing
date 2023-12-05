import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js';
import Eventos from './pages/Eventos.js';
import Contato from './pages/Contato.js';
import Sobre from './pages/Sobre.js';
import Menu from './components/Menu.js';
import Footer from './components/Footer.js';
import Percussao from './components/Percussao';
import Sopro from './components/Sopro';
import Corda from './components/Corda';
import Canto from './components/Canto'

function App() {
  return (
    <div>
      <Container fluid className='p-0 overflow-hidden'>
      <BrowserRouter>
        <Row>
          <Col>
            <Menu />
          </Col>
        </Row>

        <Row>
          <Col className='mx-3 mb-4'>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/sopro' element={<Sopro />} />
              <Route path='/percussao' element={<Percussao />} />
              <Route path='/corda' element={<Corda />} />
              <Route path='/contato' element={<Contato />} />
              <Route path='/eventos' element={<Eventos />} />
              <Route path='/sobre' element={<Sobre />} />
              <Route path='/canto' element={<Canto />} />
            </Routes>
          </Col>
        </Row>
      </BrowserRouter>
      <Row>
        <Footer />
      </Row>
    </Container >
    </div>
  );
}

export default App;
