import React from "react"
import Helmet from "react-helmet"

const handleFormSubmit = event => {
  event.preventDefault()
  console.log("boop")
}

document.title = "Accessability testing";

export default () => (
  <main style={{ color: "#222" }}>
    <Helmet>
      <html lang="en" />
    </Helmet>
    <h1>Hello accessible world!</h1>

    <img
      style={{ width: 200 }}
      src="https://upload.wikimedia.org/wikipedia/commons/5/51/Small_Red_Rose.JPG"
      alt="Hana's testing"
    />

    {/* DON’T DO ANY OF THIS. THIS IS ALL BAD. */}
    <form onClick={handleFormSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" />
      <button>Submit</button>
    </form>

    <p>
      <span role="img" title="tears of joy">
        😂
      </span>
    </p>

    <button data-testid="hello-btn" onClick={() => alert("hello world")}>
      click me
    </button>
  </main>
)