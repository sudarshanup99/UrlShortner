import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
function App() {
  const [url, setUrl] = useState("")
  const [shortUrl, setshortUrl] = useState("")
return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        fetch("http://localhost:3000/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Corrected typo here
          },
          body: JSON.stringify({ url })
        })
          .then((res) => res.json()).then((data) => {
            console.log("data", data);
            setshortUrl(data.url);
          })
           
        
          .catch((err) => {
            console.log("the error is:", err)
          })
      }}
    >
      <input
        onChange={(e) => {
          setUrl(e.target.value)
        }}
        type="url"
        placeholder='Enter your URL'
        value={url}
      />
      <button className='btn btn-primary' type='submit'>Make It Short</button>
      {shortUrl && <p>Short Url:{shortUrl }</p>}
    </form>
   )
}

export default App
