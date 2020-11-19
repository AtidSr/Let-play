import React from "react";
import Tweet from "./Tweet"


const TweetList = ({name, tweets, setTweets}) => {
    return (
        <div className="tweet-list">
        {tweets.map(tweet => <Tweet setTweets={setTweets} name={name} tweet={tweet} tweets={tweets} key={tweet.id}/>)}
            {/* <button onClick={()=> setName("Joht")}>set name</button> */}
        </div>
    )
}

export default TweetList;