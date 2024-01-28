import Spline from "@splinetool/react-spline";
import "./App.css";

function App() {
  return (
    <>
      <div className="myWrapper">
        <Spline
          className="spline"
          scene="https://prod.spline.design/Ky2RiGP2en1qJ5jv/scene.splinecode"
        />
        <div className="content">
          <ul className="menu">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Projects</a>
            </li>
            <li>
              <a href="/">Social</a>
            </li>
            <li>
              <button>CONTACT ME</button>
            </li>
          </ul>
          <h1>Full-Stack Engineer</h1>
          <p>
            Hello there, I'm a full-stack engineer student based in Aarhus,
            Denmark. I specialize in frontend development, design and
            deployment, but i also have experience with backend and other
            software developement aspects.
          </p>
          <button>Hire Me</button>
          <div className="social">
            <div>Linkedin</div>
            <div>Twitter</div>
            <div>Email</div>
          </div>
        </div>
      </div>

      {/* <div className="myWrapper2">
        <p>2nd Full-Stack Engineer</p>
        <div className="content">
          <h1>2nd Full-Stack Engineer</h1>
          <p>
            Hello there, I'm a full-stack engineer student based in Aarhus,
            Denmark. I specialize in frontend development, design and
            deployment, but i also have experience with backend and other
            software developement aspects.
          </p>
          <button>Hire Me</button>
        </div>
      </div> */}
    </>
  );
}

export default App;