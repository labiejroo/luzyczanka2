import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import GoogleApiWrapper from './myMap.js';
import Example from './myGallery.js';
import chefIconImage from './assets/images/exterior.jpg';
// import ReactImageParallax from './react-image-parallax.js';
// import CssToMatrix from 'css-to-matrix';
import ParallaxImage from  'react-image-parallax2';
//import ImageParallax from './react-image-parallax';
//<div>Icons made by <a href="https://www.flaticon.com/authors/itim2101" title="itim2101">itim2101</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

var sectionStyle = {
    width: "100%",
    height: "550%",
    backgroundImage: `url(${chefIconImage})`
  };

  var liPath = "https://image.flaticon.com/icons/svg/76/76991.svg";

const App = () => (

<div> 
    
<section id="title">

        <div >

            <nav class="navbar navbar-expand-lg navbar-dark headSection">

                    <a class="navbar-brand" href="">Restauracja Łużyczanka</a>

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">

                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                               <a class="nav-link" href="#aboutUs">O&nbsp;nas</a>
                            </li>
                            <li class="nav-item">
                                 <a class="nav-link" href="#offer">Oferta</a>
                            </li>
                            <li class="nav-item">
                                 <a class="nav-link" href="#catering">Catering</a>
                            </li>
                            <li class="nav-item">
                                 <a class="nav-link" href="#gallery">Galeria</a>
                            </li>
                            <li class="nav-item">
                                 <a class="nav-link" href="#contact">Kontakt</a>
                            </li>
                        </ul>

                    </div>
             </nav>
        </div>
 </section>
 <section  id="heading">

    <div id="titleText">
        Zadowolony gość to w przyszłości Klient naszej restauracji.
    </div>
                       
</section>

<section id="secondImageParallax">
        <div>
              <ParallaxImage reduceHeight={0.3} src={chefIconImage}  /> 
       </div>
</section>

<section id="aboutUs">  
        Restauracji Łużyczanka to doskonałe miejsce na celebrowanie wyjątkowych chwil i wydarzeń. 19-sto letnia przygoda z gastronomią wiąże się z wyjątkowym podejściem do klienta oraz elastycznością przy doborze menu w celu sprostania wszelakim gustom kulinarnym naszych gości. A precyzja i dbałość to domeny Restauracji Łużyczanka.
        Do dyspozycji gości są dwie klimatyzowane sale na odpowiednio 60 i 160 osób. 
        Dodatkowo dysponujemy ogródkiem zewnętrznym, miejscami parkingowymi oraz placem zabaw dla dzieci oraz boiskiem.
        Z przyjemnością zorganizujemy dla Państwa wyjątkowe przyjęcia okolicznościowe, takie jak: wesela, chrzciny, komunie, 18-ste. urodziny, rocznice, imprezy rodzinne. Do współpracy zapraszamy również firmy dla których zorganizujemy imprezy firmowe, spotkania klasowe i stypy. Z wielką przyjemnością podejmiemy się organizacji każdej Państwa uroczystości zgodnie z życzeniem i sugestiami.

        <div class="container-fluid">
              
            <h1>O&nbsp;nas</h1>
                Restauracji Łużyczanka to doskonałe miejsce na celebrowanie wyjątkowych chwil i wydarzeń. 19-sto letnia przygoda z gastronomią wiąże się z wyjątkowym podejściem do klienta oraz elastycznością przy doborze menu w celu sprostania wszelakim gustom kulinarnym naszych gości. A precyzja i dbałość to domeny Restauracji Łużyczanka.
            Do dyspozycji gości są dwie klimatyzowane sale na odpowiednio 60 i 160 osób. 
            Dodatkowo dysponujemy ogródkiem zewnętrznym, miejscami parkingowymi oraz placem zabaw dla dzieci oraz boiskiem.
            Z przyjemnością zorganizujemy dla Państwa wyjątkowe przyjęcia okolicznościowe, takie jak: wesela, chrzciny, komunie, 18-ste. urodziny, rocznice, imprezy rodzinne. Do współpracy zapraszamy również firmy dla których zorganizujemy imprezy firmowe, spotkania klasowe i stypy. Z wielką przyjemnością podejmiemy się organizacji każdej Państwa uroczystości zgodnie z życzeniem i sugestiami.
            <br /><br /><br />

            <div class="row">

                <div class="aboutUs-box col-lg-4">        
                    <i class="icon fas fa-utensils fa-4x"></i>
                    <h3 class="aboutUs-title">Smaczna kuchnia.</h3>
                    <p>Nasi kucharze zadbają o Państwa podniebienie.</p>
                </div>

                <div class="aboutUs-box col-lg-4">
                    <i class="icon fas fa-bullseye fa-4x"></i>
                    <h3 class="aboutUs-title">Idealny wybór</h3>
                    <p>Wybór naszych usług to strzał w 10!</p>
                </div>

                <div class="aboutUs-box col-lg-4">       
                    <i class="icon far fa-star fa-4x"></i>
                    <h3 class="aboutUs-title">Gwarancja najwyższej jakości.</h3>
                    <p>Dbamy o kazdy szczegół by kazda impreza była wspaniałym przezyciem.</p>
                </div>
            </div> 


        </div>
        
</section>

<section  id="offer">

        <h1>Oferta</h1>
        Każda nasza oferta jest indywidualna i kompleksowa, doskonale dopasowana do życzeń naszych gości.
        W cenie przyjęcia oferujemy:
        <ul>
        <li><img width="20" height="20" src={liPath} /> Klimatyzowaną salę weselą</li>
        <li><img width="20" height="20" src={liPath} /> Dekorację wejścia: czerwony dywan</li>
        <li><img width="20" height="20" src={liPath} /> Dekorację stołów: wazony, świeczniki, świece, bieżniki, bankietówki , falbany</li>
        <li><img width="20" height="20" src={liPath} /> Pokrowce na krzesła</li>
        <li><img width="20" height="20" src={liPath} /> Profesjonalną obsługę kelnerską</li>
        <li><img width="20" height="20" src={liPath} /> Alkohole i napoje w atrakcyjnych cenach</li>
        <li><img width="20" height="20" src={liPath} /> Parking</li>
        <li><img width="20" height="20" src={liPath} /> Możliwość skorzystania z sejfu</li>
        <li><img width="20" height="20" src={liPath} /> Fotelik dla malucha (do karmienia)</li>
        <li><img width="20" height="20" src={liPath} /> Kącik dla dzieci z zabawkami</li>
        <li><img width="20" height="20" src={liPath} /> Klimatyzowaną salę weselą</li>
        <li><img width="20" height="20" src={liPath} /> Kącik dla dzieci z zabawkami</li>
        <li><img width="20" height="20" src={liPath} /> Opakowania na produkty (na dania które zostaną po przyjęciu</li>
        <li><img width="20" height="20" src={liPath} /> Efektowne tło za Parą Młodą</li>
        <li><img width="20" height="20" src={liPath} /> Tradycyjne powitanie Pary Młodej chlebem i solą</li>
        <li><img width="20" height="20" src={liPath} /> Powitanie gości kieliszkiem szampana</li>
        <li><img width="20" height="20" src={liPath} /> Opcje dodatkowe</li>
        <li><img width="20" height="20" src={liPath} /> Candy bar</li>
        <li><img width="20" height="20" src={liPath} /> Wiejski stół</li>
        <li><img width="20" height="20" src={liPath} /> Barman serwujący drinki</li>
        <li><img width="20" height="20" src={liPath} /> Tort weselny i ciasto z zaprzyjaźnionej cukierni</li>
        <li><img width="20" height="20" src={liPath} /> Oprawa muzyczna</li>
        <li><img width="20" height="20" src={liPath} /> Możliwość współpracy z florystką</li>
        <li><img width="20" height="20" src={liPath} /> Taniec „w chmurach”</li>
        <li><img width="20" height="20" src={liPath} /> Napis LOVE – wynajem</li>
        <li><img width="20" height="20" src={liPath} /> Fontanna czekoladowa</li>
        <li><img width="20" height="20" src={liPath} /> Czekoladziarka</li>
        <li><img width="20" height="20" src={liPath} /> Balony z helem</li>
        <li><img width="20" height="20" src={liPath} /> Animator dla dzieci</li>
        <li><img width="20" height="20" src={liPath} /> Dekoracja z żywych kwiatów</li>
        </ul>
        
        Organizowanie przyjęć to nasza prawdziwa pasja, której z przyjemnością się poświęcamy. Do każdej uroczystości weselnej podchodzimy indywidualnie i przede wszystkim chcemy spełniać  Państwa życzenia, aby ten dzień był dokładnie taki, jaki Państwo sobie wymarzyli. Najważniejszym celem, jaki stawiamy sobie podczas organizowania przyjęć jest satysfakcja Pary Młodej oraz Gości. Zadowolenie naszych Klientów stanowi dla nas najlepszą nagrodę.

        <br /><br /><br /><br />
        <div id="offer-carousel" class="carousel slide" data-ride="false">
            <div class="carousel-inner">
                <div class="carousel-item active container-fluid">
                    <h2 class="offer-text">Profesjonalnie wykonana praca, polecam.</h2>
                    <em>Monika, Kalisz</em>
                </div>
                <div class="carousel-item container-fluid">
                    <h2 class="offer-text">Świetny kontakt z obsługą, odpowiadała na wszelkie potrzeby gości, nawet te najdziwniejsze :)</h2>
                    <em>Marzena, Opatówek</em>
                </div>
                <div class="carousel-item container-fluid">
                    <h2 class="offer-text">Najsmaczniejsza kuchnia w okolicy, świetne miejsce na zorganizowanie wesela, polecam</h2>
                    <em>Krystian, Wrocław</em>
                </div>
            </div>
            <a class="carousel-control-prev" href="#offer-carousel" role="button" data-slide="prev">
             <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#offer-carousel" role="button" data-slide="next">
             <span class="carousel-control-next-icon"></span>
            </a>
        </div> 

</section>

<section  id="catering" >

        <h1>Catering</h1>
        Organizujemy dowolne przyjęcia w wybranym przez Państwa miejscu zapewniając kompleksową i kompleksową obsługę. W szerokiej gamie naszych usług zajmujemy się także dostarczaniem posiłków regeneracyjnych i dietetycznych. Dokładamy wszelkich starań w celu sprostania wszelkim oczekiwaniom naszych Gości.
        Zajmujemy się całościową organizacją imprez zewnętrznych odbywających się w plenerze, w siedzibie klienta czy też u Niego w domu.
        Obsługujemy wyjazdowe imprezy okolicznościowe tj:
        <ul>
        <li><img width="20" height="20" src={liPath} /> Bankiety, gale</li>
        <li><img width="20" height="20" src={liPath} /> Spotkania firmowe, konferencje i szkolenia</li>
        <li><img width="20" height="20" src={liPath} /> Wesela, obiady po ślubie</li>
        <li><img width="20" height="20" src={liPath} /> Imprezy plenerowe</li>
        <li><img width="20" height="20" src={liPath} /> Imprezy koktajlowe</li>
        <li><img width="20" height="20" src={liPath} /> Imprezy okolicznościowe w Twoim domu – komunia, urodziny, itp.</li>
        </ul>
        Nasi pracownicy z przyjemnością zajmą się organizacją imprezy, abyście Państwo mogli spokojnie zająć się tym, co w życiu najważniejsze. Zaproponujemy menu dopasowane do potrzeb i preferencji klienta oraz najwyższej klasy obsługę.
        Przygotowujemy również specjalne oferty ze świątecznymi daniami (Wielkanoc, Boże Narodzenie) dla firm oraz  klientów indywidulnych ceniących sobie tradycję i dobry smak.
        Słyniemy z doskonałych deserów, które cieszą się dużym zainteresowaniem.
        Wszędzie tam, gdzie zamarzycie Państwo zorganizować imprezę, my jesteśmy w stanie przygotować catering.
        Przygotowujemy również posiłki regeneracyjne, które są ważnym elementem codziennej diety pracownika. Systematycznie dostarczane, zbilansowane posiłki wpływają na zdrowie, samopoczucie i poprawiają motywację do pracy, gdyż są odbierane jako forma gratyfikacji za wykonywaną pracę i mogą umocnić przywiązanie pracownika do firmy.
        Posiłki regeneracyjne oferowane przez Restaurację Łużyczankę są:
        <ul>
        
        
        <li>zgodne z ustawowymi wytycznymi;</li>
        <li>indywidualne menu, układane według wymagań i z właściwym wyprzedzeniem</li>
        <li>odpowiednio spakowane i zabezpieczone dania, dostarczane w  jednorazowych pojemnikach termicznych pod podany adres na określoną godzinę</li>
        </ul>
        Posiłki komponujemy jedynie ze świeżych produktów, a dania przygotowywane są na bieżąco.
            Przykładowe menu: 
        Poniedziałek:  Zupa pomidorowa z makaronem, Kotlet schabowy z cebulką, ziemniaki, surówka z białej kapusty
        Wtorek:  Zupa ogórkowa, Gulasz wieprzowy, ziemniaki/kasza, buraczki
        Środa: Flaki wołowo-wieprzowe z pieczywem, Pieczeń z karkówki, ziemniaki, surówka z marchwi
        Czwartek: Barszcz zabielany z makaronem, Schab w sosie śmietanowym, ziemniaki, surówka z kapusty pekińskiej
        Piątek: Zupa szczawiowa z jajkiem, Filet rybny , frytki, surówka z kapusty kiszonej
        …
        <b>Zaznaczamy, iż wymienione przez nas warianty są tylko propozycją.</b>
        Szczegóły zamówienia i ostateczną cenę ustalamy zawsze po wykonaniu indywidualnej konsultacji.
        
       
 </section>

<section  id="gallery">

        <h1>Galeria</h1>
        
        <div>
            <Example />
        </div> 
        

</section>

<section  id="contact">

        <br /><br /><br />
        <h1>Kontakt</h1>
        <h6><img width="20" height="20" src="https://image.flaticon.com/icons/svg/685/685816.svg "/>  605338858 / 627312034</h6>
        <h6><img width="20" height="20" src="https://image.flaticon.com/icons/svg/12/12194.svg"/>  marko.idzikowski@wp.pl</h6>
        <br />
        <h6>Restauracja Łużyczanka</h6>
        <h6>Ul. Wieluńska 41, Kraszewice 63-522</h6>

        <br /><br /><br />
        <div class="mapWrapper">
            <div  id="map" >
                <GoogleApiWrapper />      
            </div> 
        </div>

       
</section>


<section id="footer">
    <div class="container-fluid">
        <p>© Copyright 2019 Restauracja Łużyczanka</p>
    </div>
</section>

</div>  );


export default App;
