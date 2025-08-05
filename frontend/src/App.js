import "./App.css";
import Layout from "./components/Layout/Layout";
import ScrollToTop from './components/ScrollToTop.js';


function App() {
  return(
    <>
  <ScrollToTop /> {/* This makes sure we scroll to top when route changes*/}
  <Layout/>
  </>
  )
  
  
}

export default App;
