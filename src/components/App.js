import React, { useState, useEffect } from "react"

const url = "https://dog.ceo/api/breeds/image/random"

function App() {
  const [getDogPic, setGetDogPic] = useState(null)

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((dogData) => setGetDogPic(dogData.message))
  }, []);

  if (!getDogPic) return <p>Loading...</p>

  return (
    <div>
      <img src={getDogPic} alt="A Random Dog" />
    </div>
  )
}

export default App

