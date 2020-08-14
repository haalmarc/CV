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
      <p className="aboutme">Nysgjerrig informatikkstudent med bakgrunn innen psykologi.</p>
      <hr />
      <a className="anchor" id="erfaring" href="#erfaring">Hidden text</a>
      <h1>
        Erfaring
      </h1>
      <div className="cardContainer">
        <Infobox 
          job="IT-utvikler ved Spark"
          date="2019 - d.d."
          jobdesc="Utvikling av intern webapplikasjon, 'Basen', som gir veiledere en oversikt over startups. Sommerprosjekt 2020 innebar å utvide Basen til å også tilpasses andre universiteter enn NTNU. Driver også utvikling av Wordpress-nettsiden sparkntnu.no."
          tech="React, Firebase, Wordpress, JS, HTML, CSS"
          link="https://www.sparkntnu.no"
        />
        <Infobox 
          job="IT-utvikler ved Studentmediene"
          date="2019 - d.d."
          jobdesc="Arbeid på www.ibok.no, som er Norges største markedsplass for kjøp og salg av brukte skolebøker på nett. Utvikling av ny feature: Få oversikt over bøker ut i fra valgt studieretning."
          tech="React, JS, HTML, CSS"
          link="https://www.ibok.no"
        />
        <Infobox 
          job="Læringsassistent i emnet Eksperter i Team"
          date="2018 - 2020."
          jobdesc="Læringsassistent for tverrfaglige grupper som skal utvikle et konkret prosjekt. Lede samarbeidsøvelser for 20 masterstudenter og bidra til at studentene reflekterer over hvordan man får til gode gruppeprosesser."
          link="https://www.ntnu.no/eit/hva-er-eit"
        />
        <Infobox 
          job="Konsulent og IT-ansvarlig ved Støttehjulet"
          date="2018 - 2019"
          jobdesc="Støttehjulet bedriver organisasjonspsykologisk rådgivning for andre studentorganisasjoner. Planlegging og gjennomføring av kurs i temaer som ledelse og kommunikasjon. Vedlikeholde organisasjonens nettside."
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
      </div>
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
        date="2020 vår"
        jobdesc="Webapplikasjon for deling av nettressurser blant studenter."
        tech="React, Bootstrap, Firebase"
        link="https://mineemner.web.app"
      />
      <Infobox 
        job="Nettside for dansegruppe"
        date="2019 høst"
        jobdesc="Skoleprosjekt i gruppe hvor jeg bidro i designavgjørelser og hadde hovedansvar for responsivitet og å minimere overlappende kode. Jeg var også bindeledd mellom veileder og gruppa, og fulgte opp oppgaver."
        tech="HTML, CSS, Javascript"
        link="https://s.ntnu.no/webtek17"
      />
      <Footer />
    </div>
  );
}

export default App;
