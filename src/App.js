import Footer from "./component/Footer";
import Header from "./component/Header";
import Hero from "./component/Hero";
import List from "./component/List";
import ContextProvider from "./context/ContextProvider";

function App() {
  return (
    <ContextProvider>
      <div className="mx-auto font-serif overflow-x-hidden">
        <Header />
        <Hero />
        <List />
        <Footer />
      </div>
    </ContextProvider>
  );
}

export default App;