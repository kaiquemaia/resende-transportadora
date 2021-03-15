
class Header extends React.Component {
  render() {
    return (
      <header className="header_area">
        <div className="header_logo_area">
          <div className="container">
            <div className="row">
              <div className="header_logo clearfix">
                <div className="col-md-5 col-sm-3">
                  <div className="site_logo">
                    <a href="index.html"><img src="images/rt-transportes.svg" width="160px" alt="logo Resende Transportes"/></a>
                  </div>
                </div>
                <div className="col-md-7 col-sm-9">
                  <div className="row">
                    <div className="header_top_service clearfix">
                      <div className="col-md-4 col-sm-4">
                        <div className="header_we_are clearfix">
                          <dl>
                            <dt>We Are Here</dt>
                            <dd>Sydney  -  Australia</dd>
                          </dl>
                          <i><img src="images/we-are-here.png" alt=""/></i>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-4">
                        <div className="header_we_are clearfix">
                          <dl>
                            <dt>Contato</dt>
                            <dd><a href="tel:1139837583">(11) 3983-7583</a></dd>
                            <dd><a href="tel:11947893570">(11) 94789-3570</a></dd>
                          </dl>
                          <i><img src="images/call-us-on.png" alt=""/></i>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-4">
                        <div className="header_we_are clearfix">
                          <dl>
                            <dt>Horário de atendimento</dt>
                            <dd>09:00 às 18:00</dd>
                          </dl>
                          <i><img src="images/we-are-open.png" alt=""/></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header_bottom_area">
          <div className="container">
            <div className="row">
              <div className="main_menu">
                <nav className="navbar navbar-default">
                  <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                  </div>

                  <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                      <li><a href="/">Home</a></li>
                      <li><a href="sobre.html">Sobre</a></li>
                      <li><a href="services.html">Serviços</a></li>
                      <li><a href="on-parking.html">Logistica</a></li>
                      <li role="presentation" className="dropdown">
                          <a id="drop2" href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" role="button" aria-expanded="false">
                            Contato
                          </a>
                          <ul id="menu2" className="dropdown-menu" role="menu">
                            <li role="presentation"><a role="menuitem" tabIndex="-1" href="contato.html">Contato</a></li>
                            <li role="presentation"><a role="menuitem" tabIndex="-1" href="index-two.html">Trabalhe conosco</a></li>
                          </ul>
                      </li>
                      <li><a href="contact.html">Entre em Contato</a></li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

let domHeader = document.querySelector('#header')
ReactDOM.render(<Header />, domHeader)