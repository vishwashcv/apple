import "./App.css";
import "./index.css";
import ipad from "./images/ipad.jpg";
function App() {
  return (
    <>
      <img
        className="cover-1"
        src={
          ipad
        }
      />
      <div className="cover-1-text">
      <h1>
        Lovable.
        <br />
        Drawable.
        <br />
        Magical.
      </h1>
      <div className="buy">
      <button className="ipad-buy">Buy</button>
      <a className="learn-more" href="">Learn more &gt;</a>
      </div>
      </div>
    </>
  );
}

export default App;
