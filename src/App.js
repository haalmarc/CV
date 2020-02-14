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
      <hr />
      <a className="anchor" id="erfaring" href="#erfaring">Hidden text</a>
      <h1>
        Erfaring
      </h1>
      <Infobox 
        job="IT-utvikler ved Spark"
        date="2019 - d.d."
        jobdesc="Spark er en gratis veiledningstjeneste for studenter som ønsker å lage eller delta i en startup. Utvikling av webapplikasjon som håndterer informasjon rundt startups."
        tech="React, Firebase, Wordpress, JS, HTML, CSS."
        link="https://www.sparkntnu.no"
      />
      <Infobox 
        job="IT-utvikler ved Studentmediene"
        date="2019 - d.d."
        jobdesc="Arbeid på www.ibok.no, som er Norges største markedsplass for kjøp og salg av brukte skolebøker på nett. Vedlikehold av nettsiden og implementere nye features."
        tech="React, JS, HTML, CSS"
        link="https://www.ibok.no"
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
        link="http://stottehjulet.no/"
      />
      <Infobox 
        job="Presse- og informasjonsassistent i Forsvaret"
        date="2015 - 2016"
        jobdesc="Dokumenterte avdelingens virksomheter, lagde medietekster til bruk for sosiale medier og for avdelingens leiravis og årbok."
        tech="InDesign, Photoshop"
        link="https://www.facebook.com/Grensevakten/"
      />
      <hr />
      <a className="anchor" id="utdanning" href="#utdanning">Hidden text</a>
      <h1>
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
      <hr />
      <a className="anchor" id="prosjekter" href="#prosjekter">Hidden text</a>
      <h1>
        Prosjekter
      </h1>
      <Infobox 
        job="Ressurskilde for emner"
        date=""
        jobdesc="En webapplikasjon for deling av nyttige ressurser av emner. Benyttet React og bootstrap i frontend. Benyttet Firebase for database og autentisering. Alle kan legge til ressurser og emner, men bare innloggede kan slette dem."
        tech="React, Bootstrap, Firebase"
        link="https://s.ntnu.no/mineemner"
      />
      <Infobox 
        job="Nettside for dansegruppe"
        date=""
        jobdesc="Skoleprosjekt i gruppe hvor jeg bidro i designavgjørelser og hadde hovedansvar for responsivitet og å minimere overlappende kode. Jeg var også bindeledd mellom veileder og gruppa, og fulgte opp oppgaver."
        tech="HTML, CSS, Javascript"
        link="https://s.ntnu.no/webtek17"
      />
      <Footer />
    </div>
  );
}

export default App;
