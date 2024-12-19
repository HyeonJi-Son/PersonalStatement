import './MainHeader.css';

function MainHeader() {


    return (
        <div className="main_header">
            <div className="mh_bar">
                <div className="mhb_stie_name">
                    사이트명
                </div>
                <div className="mhb_site_btns">
                    <a className="mhb_btn" href="/">About</a>
                    <a className="mhb_btn" href="/">Resume</a>
                    <a className="mhb_btn" href="/">Project</a>
                    <a className="mhb_btn contact_btn" href="/">Contact</a>
                </div>
            </div>
        </div>
    );
}


export default MainHeader;