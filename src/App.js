import './App.css';

function App() {
  return (
    <div className="App">
      <div className='hero'>
        Samrath <br/>Sudesh Acharya
      <div id ="description">Cyber Security Enthusiast | Full Stack Developer | Flutter Developer</div>
      <img className = "plus-1" src={require("./asset/plus-50px.png")} width="30px" height="30px" alt='plus'/>
      <img className = "plus-2" src={require("./asset/plus-50px.png")} width="30px" height="30px" alt='plus'/>
      <img className= "photo" src={require('./asset/samrath.jpg')} width="400vh" alt='profile'/>
      <div className='rec-1'/>
      <div className='rec-2'/>
      <div className='dots'/>
      </div>
    </div>
  );
}

export default App;
