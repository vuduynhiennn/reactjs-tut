import './header.css'

const Header = (props) => {
    const { setEdit } = props
    const handleEdit = () => {
        setEdit(true)
    }
    return ( 
        <header style={{backgroundColor: '#ff9051',
                        backgroundImage: 'linear-gradient(180deg, #ff9051 2%, #ff9051, 65%, #181818 100%)'

                    }}>

            <div className="info-container">
                <div className="info-edit"
                     onClick={ handleEdit }
                >
                    Edit
                </div>
                <img src="https://source.unsplash.com/random" alt="info avatar" className="info-ava" />
                <div className="info-username">Vu Duy Nhien</div>
                <div className="info-age">19</div>
                <div className="info-about">I'm a software engineer</div>
            </div>
        </header>
    );
}
 
export default Header;