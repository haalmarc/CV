import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Infobox from './components/Infobox';

function App() {
  return (
    <div className="container">
      <Header />
      <h1 className="username">
        Marcus Haaland
      </h1>
      <h1 id="utdanning">
        Utdanning
      </h1>
      <Infobox 
        job="Informatikk ved NTNU"
        date="2019 - 2022"
        jobdesc="Lærer å få en helhetsforståelse for å lage gode IT-systemer. Førsteåret inkluderer gruppearbeid i å lage nettside fra bunn med kunde, programmering i Python og Java, menneske-maskin-interaksjon og om grunnleggende kommunikasjonssikkerhet."
        link="https://www.ntnu.no/studier/bit/om"
      />
      <Infobox 
        job="Psykologi ved NTNU"
        date="2016 - 2019"
        jobdesc="Lært om menneskes fungering som individ og i grupper og deres kommunikasjon mellom mennesker. Har utviklet formidlingsevne, i tillegg til analytiske evner. Avslutningsvis gjennomførte jeg et forskningsprosjekt om ledere sine kommunikasjonsstrategier."
        link="https://www.ntnu.no/studier/bpsy"
      />
      <div className="line">
      </div>
      <h1 id="erfaring">
        Erfaring
      </h1>
      <Infobox 
        job="IT-utvikler ved Studentmediene"
        date="2019 - d.d."
        jobdesc="Arbeid på www.ibok.no, som er Norges største markedsplass for kjøp og salg av brukte skolebøker på nett. Vedlikehold av nettsiden og implementere nye features."
        tech="React, JS, HTML, CSS"
        link="www.ibok.no"
      />
      <Infobox 
        job="Læringsassistent i emnet Eksperter i Team"
        date="2018 - d.d."
        jobdesc="Hver student blir del av en tverrfaglig gruppe som skal løse et konkret prosjekt. Som læringsassistent i dette faget ledet jeg samarbeidsøvelser for 20 masterstudenter og bidro til at studentene reflekterte over hva som skal til for å samarbeide godt."
        link="https://www.ntnu.no/eit/hva-er-eit"
      />
      <Infobox 
        job="Konsulent og IT-ansvarlig ved Støttehjulet"
        date="2018 - 2019"
        jobdesc="Støttehjulet bedriver organisasjonspsykologisk rådgivning for hovedsakelig andre studentorganisasjoner. Planlegging og gjennomføring av kurs i temaer som ledelse og kommunikasjon. Vedlikeholde organisasjonens nettside."
        tech="Wordpress"
        link="www.stottehjulet.no"
      />
      <Infobox 
        job="Presse- og informasjonsassistent i Forsvaret"
        date="2015 - 2016"
        jobdesc="Dokumenterte avdelingens virksomheter, lagde medietekster til bruk for sosiale medier og for avdelingens leiravis og årbok."
        tech="InDesign, Photoshop"
        link="https://www.facebook.com/Grensevakten/"
      />
      <Footer />
    </div>
  );
}

export default App;
