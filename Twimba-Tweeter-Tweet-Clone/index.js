import {tweetsData} from './data.js'
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

/*const tweetBtn=document.getElementById('tweet-btn')

tweetBtn.addEventListener('click',function(){
    console.log(tweetinput.value)
})*/

document.addEventListener('click',function(e){
               
                if(e.target.dataset.like){
                    handleLikeClick(e.target.dataset.like)
                }
                if(e.target.dataset.retweet){
                      handleRetweetClick(e.target.dataset.retweet)
                }
                if(e.target.dataset.reply){
                    handleReplyClick(e.target.dataset.reply)
                }
             else if(e.target.id === 'tweet-btn'){
                handleTweetBtnClick()
    }
   
                 
})
function handleTweetBtnClick(){
    const tweetinput=document.getElementById('tweet-input')
    if(!tweetinput.value==``){ 
        tweetsData.unshift({
        handle: `@Sarcasvik`,
        profilePic: `https://pbs.twimg.com/profile_images/1592444876569735170/EnoM_kjS_400x400.jpg`,
        likes: 0,
        retweets: 0,
        tweetText: tweetinput.value,
        replies: [],
        isLiked: false,
        isRetweeted: false,
      
        uuid: uuidv4(),
    },    )

    }
    tweetinput.value=``
   
    render()
}

function handleLikeClick(tweetId){
  
    const targetTweetObject= tweetsData.filter(function(tweet){
        return tweet.uuid===tweetId
    })[0]
    
    if(targetTweetObject.isLiked){
        targetTweetObject.likes--
       
    }
    else{
        targetTweetObject.likes++
       
    }
    targetTweetObject.isLiked=!targetTweetObject.isLiked
   
       render()

}
   
function handleRetweetClick(tweetId){
       const targetTweetObject=tweetsData.filter(function(tweet){
             return tweet.uuid===tweetId
       })[0]
       if(targetTweetObject.isRetweeted){
        targetTweetObject.retweets--
        }
    else{
        targetTweetObject.retweets++
        }
       targetTweetObject.isRetweeted=!targetTweetObject.isRetweeted
   
       render()
       
}

function handleReplyClick(replyId){
    document.getElementById(`replies-${replyId}`).classList.toggle('hidden')


}

function getFeedHtml(){
    let feedHtml=``
  tweetsData.forEach(function(tweets){
        
           let likeIconClass=' '
           

           if(tweets.isLiked){
              likeIconClass='liked'
           }
           
           let retweetIconClass=''
           if(tweets.isRetweeted){
            retweetIconClass='retweeted'
           }

           let repliesHtml= ' '
           if(tweets.replies.length>0){
              for(let replies of tweets.replies){
                repliesHtml+=` <div class="tweet-reply">
                <div class="tweet-inner">
                <img src=${replies.profilePic} class="profile-pic">
                      <div>
               <p class="handle">${replies.handle}</p>
               <p class="tweet-text">${replies.tweetText}</p>
               
          </div>
       </div>
   </div>`
              }


              /*  USING FOR EACH
              
              tweets.replies.forEach(function(replies){
               repliesHtml+=` <div class="tweet-reply">
                    <div class="tweet-inner">
                    <img src=${replies.profilePic} class="profile-pic">
                          <div>
                   <p class="handle">${replies.handle}</p>
                   <p class="tweet-text">${replies.tweetText}</p>
              </div>
           </div>
       </div>`
             
              })*/
              
           }
  
    
    
    
    
    
    
    
    
    
    
    
    
    
    feedHtml+=` 
    <div class="tweet">
   
        <div class="tweet-inner">
            <img src=${tweets.profilePic} class="profile-pic">
            <div>
                <p class="handle">${tweets.handle}</p>
                <p class="tweet-text">${tweets.tweetText}</p>
                <div class="tweet-details">
                    <span class="tweet-detail">
                    <i class="fa-regular fa-comment-dots"
                    data-reply="${tweets.uuid}"
                    ></i>
                       ${tweets.replies.length}
                    </span>
                    <span class="tweet-detail">
                    <i class="fa-solid fa-heart ${likeIconClass}"
                    data-like="${tweets.uuid}"
                    ></i>
                    ${tweets.likes}
                    </span>
                    <span class="tweet-detail">
                    <i class="fa-solid fa-retweet ${retweetIconClass}"
                    data-retweet="${tweets.uuid}"
                    ></i>
                    ${tweets.retweets}
                    </span>
                    
                </div>   
            </div>  
              
        </div>
        <div class="hidden"id="replies-${tweets.uuid}">
                 ${repliesHtml}
              
              </div>
    </div>`
    })
   
    return feedHtml
}


function render(){
    document.getElementById('feed').innerHTML=getFeedHtml()
}

render()