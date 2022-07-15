import logo from "../assets/images/logo.png";

const Banner =(props) => {
    return (
        <section id={"banner"}>
            <img id={"logo"} src={logo} alt={'unicorn logo'}/>
            <div className="banner-text">
                <h1>
                    Unicorn shop
                </h1>
                <p>
                    Live your dreams!
                </p>
                <div className="banner-btn">
                    <a href="#"><span></span> find out</a>
                    <a href="#"><span></span>read me</a>
                </div>
            </div>
        </section>
    );
};

export default Banner;
