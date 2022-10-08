import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import { AnimatePresence, motion } from 'framer-motion';
import Routes from './Routes';

function App() {
  return (
    <motion.div
      className="App"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <Header />
        <div className="page-divider"></div>
      </div>

      <div className="Site-content">
        <AnimatePresence initial={false} exitBeforeEnter>
          <Routes />
        </AnimatePresence>
      </div>

      <Footer />
    </motion.div>
  );
}

export default App;
