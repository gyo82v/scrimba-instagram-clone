import {
  FaHeart,
  FaRegHeart,
  FaRegComment,
  FaPaperPlane,
} from 'react-icons/fa';

export default function Posts({data}){
    const mainStl = ``
    const headerStl = ``
    const avatarStl = ``
    const infoHeaderStl = ``
    const postImgStl = ``
    const infoStl = ``
    const nameStl = ``
    const locationStl = ``
    const iconsSecStl = ``
    const likesStl = ``
    const msgStl = ``
    const msgSpanStl = ``
    const iconStl = ``
    const btnStl = ``

    //console.log("datapost:", data)

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
                    <button className={btnStl}><FaRegHeart className={iconStl}/></button>
                    <button className={btnStl}><FaRegComment className={iconStl}/></button>
                    <button className={btnStl}><FaPaperPlane className={iconStl}/></button>
                </div>
                <p className={likesStl}>{data.likes}</p>
                <p className={msgStl}><span className={msgSpanStl}>{data.username}</span> {data.comment}</p>
            </section>
        </section>
    )
}