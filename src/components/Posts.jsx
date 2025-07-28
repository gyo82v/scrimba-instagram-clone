import {
  FaHeart,
  FaRegHeart,
  FaRegComment,
  FaPaperPlane,
} from 'react-icons/fa';

export default function Posts({data, addLike}){
    const mainStl = `bg-white`

    const headerStl = `flex items-center gap-1 p-3 `
    const avatarStl = `rounded-full h-10 w-10 `
    const infoHeaderStl = `flex flex-col justify-center `
    const nameStl = `font-bold text-sm mb-0`
    const locationStl = `text-xs mt-0`

    const postImgStl = `shadow-lg shadow-neutral-800/30`

    const infoStl = `p-3 flex flex-col gap-3`
    const iconsSecStl = `flex gap-4 mt-2`
    const likesStl = `text-sm font-bold`
    const msgStl = `text-sm`
    const msgSpanStl = `font-bold`
    const iconStl = `h-6 w-6 hover:transform hover:scale-115 active:scale-95 `
    const liked = `text-rose-500`

    return(
        <section className={mainStl}>
            <section className={headerStl}>
                <img src={data.avatar} alt="user avatar" className={avatarStl} />
                <div className={infoHeaderStl}>
                    <h2 className={nameStl}>{data.name}</h2>
                    <p className={locationStl}>{data.location}</p>
                </div>
            </section>
            <img src={data.post} alt="portrait of the user" className={postImgStl}/>
            <section className={infoStl}>
                <div className={iconsSecStl}>
                    <button onClick={addLike}>
                        {data.liked ? <FaHeart className={`${iconStl} ${liked}`}/> : <FaRegHeart className={iconStl}/>}
                    </button>
                    <button ><FaRegComment className={iconStl}/></button>
                    <button ><FaPaperPlane className={iconStl}/></button>
                </div>
                <p className={likesStl}>{data.likes} likes</p>
                <p className={msgStl}><span className={msgSpanStl}>{data.username}</span> {data.comment}</p>
            </section>
        </section>
    )
}