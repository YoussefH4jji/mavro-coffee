export default function Header(){
    return(
        <section className="header-section">
            <header>

                <nav className="navbar navbar-expand-lg">
                <img src="../images/logo4.png" alt="Mavro's logo" className="navbar-logo"/>

                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbar">
                        <input id="checkbox" type="checkbox"/>
                            <label class="toggle" for="checkbox">
                                <div id="bar1" class="bars"></div>
                                <div id="bar2" class="bars"></div>
                                <div id="bar3" class="bars"></div>
                            </label>
                    </button>

                    <div className="collapse navbar-collapse" id="navbar">
                        <ul className="navbar-nav ml-auto">
                            <li className="navbar-item">
                                <a href="#" className="nav-link header-link">Home</a>
                            </li>
                            <li className="navbar-item">
                                <a href="#qbout" className="nav-link header-link">About Us</a>
                            </li>
                            <li className="navbar-item">
                                <a href="#services" className="nav-link header-link">Services</a>
                            </li>
                            <li className="navbar-item">
                                <a href="#products" className="nav-link header-link">Products</a>
                            </li>
                            <li className="navbar-item">
                                <a href="#reserve" className="nav-link header-link">Order Now</a>
                            </li>
                    </ul>
                    </div>
                    
                </nav>
            </header>
        </section>
    )
}