import './App.css';
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import skills from './assets/data/skills'

function App() {
  return (
    <div className="App">
      <header className="App-header Container">
        <Header skills={skills} />
      </header>
      <section className="App-main Container">
        <Main />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
