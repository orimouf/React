import './App.css';
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import Footer from '../../components/Footer/Footer'
import { contact as contactData } from '../../assets/data/contact'

const {name, job, linkedin, skype, codepen, github, phone, email} = contactData;

function App() {
  return (
    <div className="App">
      <header className="App-header Container">
        <Header name={name} job={job} />
      </header>
      <section className="App-main Container">
        <Main />
      </section>
      <footer>
        <Footer linkedin={linkedin} skype={skype} codepen={codepen} github={github} phone={phone} email={email}/>
      </footer>
    </div>
  );
}

export default App;
