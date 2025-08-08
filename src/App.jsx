import { useState } from "react"
import Posts from "./components/Posts"
import { FaCommentDots} from "react-icons/fa";

//images
import logo from "./images/logo.png"
import avatarUser from "./images/user-avatar.png"
import avatarCourbet from "./images/avatar-courbet.jpg"
import avatarDucreux from "./images/avatar-ducreux.jpg"
import avatarVangogh from "./images/avatar-vangogh.jpg"
import postCourbet from "./images/post-courbet.jpg"
import postDucreux from "./images/post-ducreux.jpg"
import postVangogh from "./images/post-vangogh.jpg"


function App() {
  const [posts, setPosts]  = useState([
    {
      name: "Vincent van Gogh",
      username: "vincey1853",
      location: "Zundert, Netherlands",
      avatar: avatarVangogh,
      post: postVangogh,
      comment: "just took a few mushrooms lol",
      likes: 21,
      liked : false,
      id : 1
    },
    {
      name: "Gustave Courbet",
      username: "gus1819",
      location: "Ornans, France",
      avatar: avatarCourbet,
      post: postCourbet,
      comment: "i'm feelin a bit stressed tbh",
      likes: 4,
      liked: false,
      id : 2
    },
    {
      name: "Joseph Ducreux",
      username: "jd1735",
      location: "Paris, France",
      avatar: avatarDucreux,
      post: postDucreux,
      comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
      likes: 152,
      liked : false,
      id : 3
    }
  ])
  
  // tailwins styles
  const container = `mx-auto max-w-[415px] `
  const headerStl = `flex border-b border-neutral-500 p-3 bg-white`
  const mainStl = `bg-neutral-200 flex flex-col gap-6`
  const userAvatarStl = `h-12 w-12 rounded-full`
  const logoStl = `h-12 mr-auto `
  const btnChat = `fixed bottom-2 right-2 p-3 rounded-full bg-orange-300 flex items-center justify-center
                   hover:transform hover:scale-105 active:scale-95 hover:cursor-pointer`
  //

  function addLike(id, liked){
    if(!liked){
      setPosts(p => p.map(p => p.id === id ? {...p , likes : p.likes + 1, liked : !p.liked} : p))
    }else {
      setPosts(p => p.map(p => p.id === id ? {...p , likes : p.likes - 1, liked : !p.liked} : p))
    }
  }

  const postArrayEl = posts.map(p => {
    return <Posts data={p} key={p.id} addLike={() => addLike(p.id, p.liked)} />
  })
 
  return (
    <div className={container}>
      <header className={headerStl}>
        <img src={logo} alt="logo" className={logoStl} />
        <img src={avatarUser} alt="user avatar " className={userAvatarStl} />
      </header>
      <main className={mainStl}>
         {postArrayEl}
      </main>
      <div className={btnChat}>
        <button aria-label="start chat"><FaCommentDots className="h-6 w-6 text-white" /></button>
      </div>
    </div>
  )
}

export default App
