import imgHeader from '../../assets/img/img-header.svg';
import './styles.css';

function Header() {
    return (
        <>
            <header>
                <div className="dsmeta-logo-container">
                    <img src={imgHeader} alt="DSMeta" />
                    <h1>DSMeta</h1>
                </div>
            </header>
        </>
    )
}

export default Header;
