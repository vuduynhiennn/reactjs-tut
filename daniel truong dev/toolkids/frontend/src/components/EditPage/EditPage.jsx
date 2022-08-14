import { useState } from 'react'
import './editPage.css'

const EditPage = () => {
    const avaUrl = [
        'https://source.unsplash.com/random',
        'https://source.unsplash.com/random',
        'https://source.unsplash.com/random',
        'https://source.unsplash.com/random',
        'https://source.unsplash.com/random',
        'https://source.unsplash.com/random',
        'https://source.unsplash.com/random',
    ]

    const [name, setName] = useState('Vu Duy Nhien')
    const [age, setAge] = useState(19)
    const [about, setAbout] = useState('I\'m a fullstack developer')
    const [theme, setTheme] = useState('#ff9051')
    const [url, setUrl] = useState('https://source.unsplash.com/random')


    return ( 
        <>
            <form action="">
                <section className="edit-container">
                    <button className="close">Save</button>
                    <div className="edit-profile">Edit profile</div>
                    <div className="input-container">
                        <label>display name</label>
                        <input type="text" placeholder="Vu Duy Nhien" onChange={ (e) => setName(e.target.value) }/>

                        <label>age</label>
                        <input type="text" placeholder="20" onChange={(e) => setAge(e.target.value)} />

                        <label>about</label>
                        <textarea className="input-about" onChange={(e) => setAbout(e.target.value)} />
                        <label>Profile picture</label>
                        <div className="input-image-container">
                            { avaUrl.map((url) => {
                                return (
                                    <>
                                        <img src={url} alt="um" className='input-image' onClick={ (e) => setUrl(e.target.src) } />
                                    </>
                                )
                            }) }
                        </div>
                        <div className="theme-container">
                            <label htmlFor="">Theme</label>
                            <input type="color" className='theme-color' onChange={(e) => setTheme(e.target.value)}/>
                        </div>
                </div>
                </section>

            </form>
        </>
     );
}
 
export default EditPage;