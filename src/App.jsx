import posts from "./data"
import Posts from "./components/Posts"

//images
import logo from "./images/logo.png"
import avatarUser from "./images/user-avatar.png"


function App() {
  // tailwins styles
  const container = `md:w-[400px]`
  const headerStl = `flex border-b border-neutral-500 p-3`
  const mainStl = ``
  const userAvatarStl = `h-12 w-12 rounded-full`
  const logoStl = `h-12 mr-auto `
  //

  const postArrayEl = posts.map(p => {
    return <Posts data={p} key={p.username} />
    
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
    </div>
  )
}

export default App
