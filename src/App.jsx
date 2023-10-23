import { useId, useState } from "react";
import "./App.css";
import { ListIcon } from "./assets/icons";

import { SignupImage } from "./components/signup-image";

function App() {
  const formId = useId();
  const [mouseHover, setMouseHover] = useState(false);

  const handleMouseEnter = () => setMouseHover(true);
  const handleMouseLeave = () => setMouseHover(false);

  return (
    <main className="main">
      <section className="section">
        <div className="container">
          <div className="description-container">
            <div className="description">
              <h1 className="heading-1">Stay updated!</h1>

              <p className="paragraph">Join 60,000+ products managers reciving monthly updates on:</p>

              <ul className="list">
                <li>
                  <ListIcon />
                  <span>Product discovery and building what matters</span>
                </li>
                <li>
                  <ListIcon />
                  <span>Measuring to ensure updates are a success</span>
                </li>
                <li>
                  <ListIcon />
                  <span>And much more!</span>
                </li>
              </ul>
            </div>

            <form className="form">
              <div className="label-input">
                <div>
                  <label htmlFor={formId}>Email address</label>
                  <span>Valid email requeried</span>
                </div>
                <input
                  id={formId}
                  type="email"
                  placeholder="email@company.com"
                />
              </div>
              <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Subscribe to monthly newsletter</button>
            </form>
          </div>

          <SignupImage mask={ mouseHover ? "url(#a)" : "url(#c)" }/>
        </div>
      </section>
    </main>
  );
}

export default App;
