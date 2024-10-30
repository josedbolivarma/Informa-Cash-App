import React from "react";
import { Navbar, Dropdown, Button, Form, Col, Row, Modal } from "react-bootstrap";
import { Scrollbars } from 'react-custom-scrollbars-2';
import { Link, useParams, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from 'react-redux';

export default function Header() {
  // const { user } = useSelector((store: any) => store.user);

  const [fullscreens, setFullscreen] = React.useState(true);

  // FullScreen
  var elem: any = document.documentElement;
  const Fullscreen: any = (vale: any) => {
    switch (vale) {
      case true:
        elem.requestFullscreen();
        setFullscreen(false)
        break;
      case false:
        document.exitFullscreen()
        setFullscreen(true)
        break;
    }
  }

  //leftsidemenu
  const openCloseSidebar = () => {
    document.querySelector("body")?.classList.toggle("sidenav-toggled");
  };

  const [price, setPrice] = React.useState(0);

  // let getdata: any = useSelector((state: any) => state.cartreducer.carts);

  // const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open: any = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const [Data, setData] = React.useState([]);

  const { id } = useParams();


  const compare = () => {
    // let comparedata = getdata.map((e: any) => {
    //   return e.id === id
    // });
    // setData(comparedata);

  }

  React.useEffect(() => {
    compare();
    // eslint-disable-next-line 
  }, [id])


  // function total() {
  //   let price = 0;
  //   getdata.map((ele: any) => {
  //     price = ele.price * ele.qnty + price
  //     return price;
  //   });
  //   setPrice(price);
  // };

  // React.useEffect(() => {
  //   total();
  // })
  let navigate = useNavigate();


  return (
    <Navbar className="main-header side-header sticky nav nav-item">
      <div className="main-container container-fluid">
        <div className="main-header-left ">
          <div className="responsive-logo">
            <Link to={`${process.env.PUBLIC_URL}/dashboard/dashboard-1`} className="header-logo">
              <img
                src="https://www.coopeande1.com/sites/default/files/styles/large_retina/public/2024-01/Logo%20Ahorros%20Coope%20Ande%20fondo%20transparente.png?itok=OraL1PlR"
                className="mobile-logo logo-1"
                style={{ height: "30px" }}
                alt="logo"
              />
              <img
                src="https://www.coopeande1.com/sites/default/files/styles/large_retina/public/2024-01/Logo%20Ahorros%20Coope%20Ande%20fondo%20transparente.png?itok=OraL1PlR"
                className="mobile-logo dark-logo-1"
                style={{ height: "30px" }}
                alt="logo"
              />
            </Link>
          </div>
          <div
            className="app-sidebar__toggle"
            data-bs-toggle="sidebar"
            onClick={() => openCloseSidebar()}
          >
            <Link className="open-toggle" to="#">
              <i className="header-icon fe fe-align-left"></i>
            </Link>
            <Link className="close-toggle" to="#">
              <i className="header-icon fe fe-x"></i>
            </Link>
          </div>
          <div className="logo-horizontal">
            <Link to={`${process.env.PUBLIC_URL}/dashboard/dashboard-1`} className="header-logo">
              <img
                src="https://www.coopeande1.com/sites/default/files/styles/large_retina/public/2024-01/Logo%20Ahorros%20Coope%20Ande%20fondo%20transparente.png?itok=OraL1PlR"
                className="mobile-logo logo-1"
                alt="logo"
              />
              <img
                src="https://www.coopeande1.com/sites/default/files/styles/large_retina/public/2024-01/Logo%20Ahorros%20Coope%20Ande%20fondo%20transparente.png?itok=OraL1PlR"
                className="mobile-logo dark-logo-1"
                alt="logo"
              />
            </Link>
          </div>
          
        </div>
        
      </div>
    </Navbar>
  );
}

Header.propTypes = {};

Header.defaultProps = {};
