import {React, useEffect, Fragment}  from "react"
import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom"


import '../styles/App.css';
import '../styles/404.css';
import '../styles/ProductPage.css';
import '../styles/Footer.css';
import '../styles/About.css';


import Tag from './Tag/Tag';
import Thumb from './Thumb/Thumb';
import Carousel from './Carousel/Carousel';
import Dropdown from './Dropdown/Dropdown';


import bannerImage from '../assets/Images/banner.png';
import bannerAboutImage from '../assets/Images/bannerAbout.png';

import logo from '../assets/Logo/logoText.svg';
import logoWhite from '../assets/Logo/logo-white.svg';
import fullStar from '../assets/Rating/fullStar.svg';
import emptyStar from '../assets/Rating/emptyStar.svg';


import logements from '../data/logements.json'


export default function App() {
  useEffect(() => { window.scrollTo({top: 0, left: 0, behavior: 'smooth'}) }, []);
  return (
    <Router>
      <div className="App">
        <div className="inner">
          <Routes>
            <Route exact path="/" element={ <HomePage/> }/>

            <Route path="appartement/:id" element={<ProductPage />} />
            <Route path="about" element={<AboutPage />} />

            <Route path='*' element={ <ErrorPage /> }/>
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
};

const ProductPage = () => {
  let params = useParams();
  let productInfos = logements.filter(el => el.id === params.id)
  let exist = productInfos.length > 0
  let ratingStars = []
  let equipementList = [
    {display: true, text: 'Appareils'}
  ]

  if (exist) { 
    for(let i = 1; i<= 5; i++) {
      i <= productInfos[0].rating ? ratingStars.push(fullStar) : ratingStars.push(emptyStar)  
    }
    
    productInfos[0].equipments.forEach(e => {
      equipementList.push({text: e})
    })
  }
  
  return exist ? (
    <Fragment>
      <nav>
        <img src={logo} alt="Logo du site" />
        <div className="links">
          <Link to="/">Accueil</Link>
          <Link to="/about">A Propos</Link>
        </div>
      </nav>
      <div className="ProductPage">
        { productInfos.map(l => <Carousel images={l.pictures} key={l.id}/>) }
        <div className="grid">
          <div className="infos">
            <h1>{productInfos[0].title}</h1>
            <p className="location">{productInfos[0].location}</p>
          </div>
          <div className="profile">
            <p>{productInfos[0].host.name}</p>
            <div className="img-wrapper">
              <img src={productInfos[0].host.picture} alt="Profil de l'utiliisateur" />
            </div>
          </div>
          <div className="tags">
            {productInfos[0].tags.map(p => <Tag tagName={p} key={p} />)}
          </div>
          <div className="rating">
            {ratingStars.map(s => <img src={s} alt="star" key={Math.random()}/>)}
          </div>
        </div>
        <div className="row dropdownWrapper">
          <Dropdown list={[
            { display: true, text: "Description" },
            { text: productInfos[0].description },
          ]}/>
          <Dropdown list={equipementList}/>
        </div>
      </div>
    </Fragment>
    
  ) : (<ErrorPage />)
}
const HomePage = () => {
  return (
    <Fragment>
      <nav>
        <img src={logo} alt="Logo du site" />
        <div className="links">
          <Link className="active" to="/">Accueil</Link>
          <Link to="/about">A Propos</Link>
        </div>
      </nav>
      <section className='banner'>
        <h1>Chez vous, partout et ailleurs</h1>
        <img src={bannerImage} alt="Banni??re" />
      </section>
      <section className='gallery'>
        {logements.map(l => <Thumb locationDisplay={l.title} id={l.id} image={l.cover} key={l.id}/>)}
      </section>
    </Fragment>
  )
}
const ErrorPage = () => {
  return (
    <Fragment>
      <nav>
        <img src={logo} alt="Logo du site" />
        <div className="links">
          <Link to="/">Accueil</Link>
          <Link to="/about">A Propos</Link>
        </div>
      </nav>
      <section className="pageNotFoundWrapper">
        <h1>404</h1>
        <p>Oups ! La page que vous demandez n'existe pas.</p>
        <div className="link-wrapper">
          <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
      </section>
    </Fragment>
  )
}
const AboutPage = () => {
  return (
  <Fragment>
      <nav>
        <img src={logo} alt="Logo du site" />
        <div className="links">
          <Link to="/">Accueil</Link>
          <Link className="active" to="/about">A Propos</Link>
        </div>
      </nav>
    <section className="About">
      <div className="bannerAbout">
        <img src={bannerAboutImage} alt="Banniere" />
      </div>
      <div className="dropdown-wrapper">
        <Dropdown list={[
          { display: true, text: "Fiabilit??" },
          { text: "Les annonces post??es sur Kasa garantissent une fiabilit?? totale. Les photos sont conformes aux logements, et toutes les informations sont r??guli??rement v??rifi??es  par nos ??quipes." },
        ]}/>

        <Dropdown list={[
          { display: true, text: "Respect" },
          { text: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entra??nera une exclusion de notre plateforme." },
        ]}/>

        <Dropdown list={[
          { display: true, text: "Service" },
          { text: "Nos ??quipes se tiennent ?? votre disposition pour vous fournir une exp??rience parfaite. N'h??sitez pas ?? nous contacter si vous avez la moindre question." },
        ]}/>

        <Dropdown list={[
          { display: true, text: "S??curit??" },
          { text: "La s??curit?? est la priorit?? de Kasa. Aussi bien pour nos h??tes que pour les voyageurs, chaque logement correspond aux crit??res de s??curit?? ??tablis par nos services. En laissant une note aussi bien ?? l'h??te qu'au locataire, cela permet ?? nos ??quipes de v??rifier que les standards sont bien respect??s. Nous organisons ??galement des ateliers sur la s??curit?? domestique pour nos h??tes." },
        ]}/>
      </div>
    </section>
  </Fragment>
  )
}
const Footer = () => {
  return (
    <section className="footer">
      <img src={logoWhite} alt="logo" />
      <p>?? 2020 Kasa. All rights reserved</p>
    </section>
  )
}