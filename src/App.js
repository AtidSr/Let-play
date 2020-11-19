import React, {useState, useEffect} from 'react'
import CreateTweet from './components/CreateTweet'
import TweetList from './components/TweetList'

function App() {
  const [name, setName] = useState('Dev Esd')
  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);
  const message = 'this is message'

  useEffect(() => {
     console.log("LLLLLLLLLLLLLLLLLLLLLLLLLL");
  }, [textInput])
  // const sayHelloHandler = (e) => {
  //   setName('Florin pop')
  // }

  return (
    <div className="App">
      {/* <h1>Hello {name}</h1> */}
      <CreateTweet textInput={textInput} setTextInput={setTextInput} tweets={tweets} setTweets={setTweets}/>
      <TweetList name={name} tweets={tweets} setTweets={setTweets}/>
      {/* <button onClick={sayHelloHandler}>Click</button> */}
      
    </div>
  );
}

export default App;
