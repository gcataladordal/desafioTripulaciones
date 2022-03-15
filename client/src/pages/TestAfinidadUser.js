import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from 'react-bootstrap/Modal'
import Button from "react-bootstrap/Button"
import InfoAuth from "../hooks/InfoAuth";
import Accordion from 'react-bootstrap/Accordion'

function TestAfinidadUser() {

    const [usuario, auth] = InfoAuth("obtieneinfo")
    
    useEffect(() => {
        if (auth === true) {
            // window.location.href = "/home"
            console.log("logueado")
        } else if (auth === false ) {
            window.location.href = "/"
        }
    }, [auth])



    const [edad, setEdad] = useState("");
    const [genero, setGenero] = useState("");
    const [oficio, setOficio] = useState("");
    const [idiomas, setIdiomas] = useState("");
    const [orientacionSexual, setOrientacionSexual] = useState("");
    const [religion, setReligion] = useState("");
    const [politica, setPolitica] = useState("");
    const [mascotas, setMascotas] = useState("");
    const [fumador, setFumador] = useState("");
    const [caracter, setCaracter] = useState("");
    const [musica, setMusica] = useState("")
    const [deportes, setDeportes] = useState("");
    const [peliculas, setPeliculas] = useState("");
    const [aficiones, setAficiones] = useState("");
    const [carnet, setCarnet] = useState("");
    const [ubicacion, setUbicacion] = useState("");
    const [region, setRegion] = useState("");
    const [instalaciones, setInstalaciones] = useState("");
    const [rangoEdad, setRangoEdad] = useState("");
    const [dinero, setDinero] = useState("");
    const [metros, setMetros] = useState("");
    const [lavabo, setLavabo] = useState("");
    const [exteriores, setExteriores] = useState("");
    const [gente, setGente] = useState("")
    const [tipoVivienda, setTipoVivienda] = useState("");
    const [actividades, setActividades] = useState("");


    const [viewCaracter, setViewCaracter] = useState(false);
    const [viewMusica, setViewMusica] = useState(false);
    const [viewPeliculas, setViewPeliculas] = useState(false);
    const [viewDeportes, setViewDeportes] = useState(false);
    const [viewActividades, setViewActividades] = useState(false);

    const [viewOficio, setViewOficio] = useState(false);
    const [viewEdad, setViewEdad] = useState(true);
    const [viewGenero, setViewGenero] = useState(false);
    const [viewIdiomas, setViewIdiomas] = useState(false);
    const [viewOrientacion, setViewOrientacion] = useState(false);
    const [viewReligion, setViewReligion] = useState(false);
    const [viewPolitica, setViewPolitica] = useState(false);
    const [viewMascotas, setViewMascotas] = useState(false);
    const [viewFumador, setViewFumador] = useState(false);
    const [viewCarnet, setViewCarnet] = useState(false);
    const [viewZona, setViewZona] = useState(false);
    const [viewTipoVivienda, setViewTipoVivienda] = useState(false);
    const [viewRegion, setViewRegion] = useState(false);
    const [viewInstalaciones, setViewInstalaciones] = useState(false);
    const [viewLavabo, setViewLavabo] = useState(false);
    const [viewExteriores, setViewExteriores] = useState(false);
    const [viewRangoEdad, setViewRangoEdad] = useState(false);
    const [viewDinero, setViewDinero] = useState(false);
    const [viewMetros, setViewMetros] = useState(false);
    const [viewGente, setViewGente] = useState(false);
    const [viewSubmit, setViewSubmit] = useState(false)


    const [viewAlertGenero, setViewAlertGenero] = useState(false)
    const [viewAlertOficio, setViewAlertOficio] = useState(false)
    const [viewAlertEdad, setViewAlertEdad] = useState(false)
    const [viewAlertPolitica, setViewAlertPolitica] = useState(false)
    const [viewAlertIdiomas, setViewAlertIdiomas] = useState(false)
    const [viewAlertOrientacion, setViewAlertOrientacion] = useState(false)
    const [viewAlertReligion, setViewAlertReligion] = useState(false)
    const [viewAlertMascotas, setViewAlertMascotas] = useState(false)
    const [viewAlertFumador, setViewAlertFumador] = useState(false)
    const [viewAlertCarnet, setViewAlertCarnet] = useState(false)
    const [viewAlertZona, setViewAlertZona] = useState(false)
    const [viewAlertVivienda, setViewAlertVivienda] = useState(false)
    const [viewAlertRegion, setViewAlertRegion] = useState(false)
    const [viewAlertInstalaciones, setViewAlertInstalaciones] = useState(false)
    const [viewAlertLavabo, setViewAlertLavabo] = useState(false)
    const [viewAlertExteriores, setViewAlertExteriores] = useState(false)
    const [viewAlertRangoEdad, setViewAlertRangoEdad] = useState(false)
    const [viewAlertMetros, setViewAlertMetros] = useState(false)
    const [viewAlertDinero, setViewAlertDinero] = useState(false)
    const [viewAlertGente, setViewAlertGente] = useState(false)
    const [viewAlertDeportes, setViewAlertDeportes] = useState(false)
    const [viewAlertCaracter, setViewAlertCaracter] = useState(false)
    const [viewAlertMusica, setViewAlertMusica] = useState(false)
    const [viewAlertPeliculas, setViewAlertPeliculas] = useState(false)
    const [viewAlertActividades, setViewAlertActividades] = useState(false)


    //---------MUSICA-------

    const [showAlternativa, setShowAlternativa] = useState(false);
    const handleCloseAlternativa = (e) => {
        setShowAlternativa(false);
        if (e !== undefined) {
            setMusica((musica) => [...musica, e.target.value])
        }
    }
    const handleShowAlternativa = () => setShowAlternativa(true);


    const [showBlues, setShowBlues] = useState(false);
    const handleCloseBlues = (e) => {
        setShowBlues(false);
        if (e !== undefined) {
            setMusica((musica) => [...musica, e.target.value])
        }
    }
    const handleShowBlues = () => setShowBlues(true);


    const [showClasica, setShowClasica] = useState(false);
    const handleCloseClasica = (e) => {
        setShowClasica(false);
        if (e !== undefined) {
            setMusica((musica) => [...musica, e.target.value])
        }
    }

    const handleShowClasica = () => setShowClasica(true);

    const [showElectronica, setShowElectronica] = useState(false);
    const handleCloseElectronica = (e) => {
        setShowElectronica(false);
        if (e !== undefined) {
            setMusica((musica) => [...musica, e.target.value])
        }
    }
    const handleShowElectronica = () => setShowElectronica(true);


    const [showFolk, setShowFolk] = useState(false);
    const handleCloseFolk = (e) => {
        setShowFolk(false);
        if (e !== undefined) {
            setMusica((musica) => [...musica, e.target.value])
        }
    }
    const handleShowFolk = () => setShowFolk(true);


    const [showGospel, setShowGospel] = useState(false);
    const handleCloseGospel = (e) => {
        setShowGospel(false);
        if (e !== undefined) {
            setMusica((musica) => [...musica, e.target.value])
        }
    }
    const handleShowGospel = () => setShowGospel(true);


    const [showInstrumental, setShowInstrumental] = useState(false);
    const handleCloseInstrumental = (e) => {
        setShowInstrumental(false);
        if (e !== undefined) {
            setMusica((musica) => [...musica, e.target.value])
        }
    }
    const handleShowInstrumental = () => setShowInstrumental(true);


    const [showJazz, setShowJazz] = useState(false);
    const handleCloseJazz = (e) => {
        setShowJazz(false);
        if (e !== undefined) {
            setMusica((musica) => [...musica, e.target.value])
        }
    }
    const handleShowJazz = () => setShowJazz(true);

    const [showLatina, setShowLatina] = useState(false);
    const handleCloseLatina = (e) => {
        setShowLatina(false);
        if (e !== undefined) {
            setMusica((musica) => [...musica, e.target.value])
        }
    }
    const handleShowLatina = () => setShowLatina(true);

    const [showLounge, setShowLounge] = useState(false);
    const handleCloseLounge = (e) => {
        setShowLounge(false);
        if (e !== undefined) {
            setMusica((musica) => [...musica, e.target.value])
        }
    }
    const handleShowLounge = () => setShowLounge(true);

    const [showMetal, setShowMetal] = useState(false);
    const handleCloseMetal = (e) => {
        setShowMetal(false);
        if (e !== undefined) {
            setMusica((musica) => [...musica, e.target.value])
        }
    }
    const handleShowMetal = () => setShowMetal(true);


    const [showOpera, setShowOpera] = useState(false);
    const handleCloseOpera = (e) => {
        setShowOpera(false);
        if (e !== undefined) {
            setMusica((musica) => [...musica, e.target.value])
        }
    }
    const handleShowOpera = () => setShowOpera(true);

    const [showPunk, setShowPunk] = useState(false);
    const handleClosePunk = (e) => {
        setShowPunk(false);
        if (e !== undefined) {
            setMusica((musica) => [...musica, e.target.value])
        }
    }
    const handleShowPunk = () => setShowPunk(true);


    const [showRb, setShowRb] = useState(false);
    const handleCloseRb = (e) => {
        setShowRb(false);
        if (e !== undefined) {
            setMusica((musica) => [...musica, e.target.value])
        }
    }
    const handleShowRb = () => setShowRb(true);


    const [showReggae, setShowReggae] = useState(false);
    const handleCloseReggae = (e) => {
        setShowReggae(false);
        if (e !== undefined) {
            setMusica((musica) => [...musica, e.target.value])
        }
    }
    const handleShowReggae = () => setShowReggae(true);


    const [showRock, setShowRock] = useState(false);
    const handleCloseRock = (e) => {
        setShowRock(false);
        if (e !== undefined) {
            setMusica((musica) => [...musica, e.target.value])
        }
    }
    const handleShowRock = () => setShowRock(true);


    const [showSoul, setShowSoul] = useState(false);
    const handleCloseSoul = (e) => {
        setShowSoul(false);
        if (e !== undefined) {
            setMusica((musica) => [...musica, e.target.value])
        }
    }
    const handleShowSoul = () => setShowSoul(true);

    const [showCopla, setShowCopla] = useState(false);
    const handleCloseCopla = (e) => {
        setShowCopla(false);
        if (e !== undefined) {
            setMusica((musica) => [...musica, e.target.value])
        }
    }
    const handleShowCopla = () => setShowCopla(true);

    const [showPachangueo, setShowPachangueo] = useState(false);
    const handleClosePachangueo = (e) => {
        setShowPachangueo(false);
        if (e !== undefined) {
            setMusica((musica) => [...musica, e.target.value])
        }
    }
    const handleShowPachangueo = () => setShowPachangueo(true);

    const [showYeye, setShowYeye] = useState(false);
    const handleCloseYeye = (e) => {
        setShowYeye(false);
        if (e !== undefined) {
            setMusica((musica) => [...musica, e.target.value])
        }
    }
    const handleShowYeye = () => setShowYeye(true);

    const [showBolero, setShowBolero] = useState(false);
    const handleCloseBolero = (e) => {
        setShowBolero(false);
        if (e !== undefined) {
            setMusica((musica) => [...musica, e.target.value])
        }
    }
    const handleShowBolero = () => setShowBolero(true);


    const [showZarzuela, setShowZarzuela] = useState(false);
    const handleCloseZarzuela = (e) => {
        setShowZarzuela(false);
        if (e !== undefined) {
            setMusica((musica) => [...musica, e.target.value])
        }
    }
    const handleShowZarzuela = () => setShowZarzuela(true);


    const [showFlamenco, setShowFlamenco] = useState(false);
    const handleCloseFlamenco = (e) => {
        setShowFlamenco(false);
        if (e !== undefined) {
            setMusica((musica) => [...musica, e.target.value])
        }
    }
    const handleShowFlamenco = () => setShowFlamenco(true);

    //---------DEPORTES-------

    const [showBadminton, setShowBadminton] = useState(false);
    const handleCloseBadminton = (e) => {
        setShowBadminton(false);
        if (e !== undefined) {
            setDeportes((deportes) => [...deportes, e.target.value])
        }
    }
    const handleShowBadminton = () => setShowBadminton(true);



    const [showBeisbol, setShowBeisbol] = useState(false);
    const handleCloseBeisbol = (e) => {
        setShowBeisbol(false);
        if (e !== undefined) {
            setDeportes((deportes) => [...deportes, e.target.value])
        }
    }
    const handleShowBeisbol = () => setShowBeisbol(true);


    const [showBoxeo, setShowBoxeo] = useState(false);
    const handleCloseBoxeo = (e) => {
        setShowBoxeo(false);
        if (e !== undefined) {
            setDeportes((deportes) => [...deportes, e.target.value])
        }
    }
    const handleShowBoxeo = () => setShowBoxeo(true);


    const [showBaloncesto, setShowBaloncesto] = useState(false);
    const handleCloseBaloncesto = (e) => {
        setShowBaloncesto(false);
        if (e !== undefined) {
            setDeportes((deportes) => [...deportes, e.target.value])
        }
    }
    const handleShowBaloncesto = () => setShowBaloncesto(true);


    const [showBolos, setShowBolos] = useState(false);
    const handleCloseBolos = (e) => {
        setShowBolos(false);
        if (e !== undefined) {
            setDeportes((deportes) => [...deportes, e.target.value])
        }
    }
    const handleShowBolos = () => setShowBolos(true);


    const [showPiraguismo, setShowPiraguismo] = useState(false);
    const handleClosePiraguismo = (e) => {
        setShowPiraguismo(false);
        if (e !== undefined) {
            setDeportes((deportes) => [...deportes, e.target.value])
        }
    }
    const handleShowPiraguismo = () => setShowPiraguismo(true);


    const [showBuceo, setShowBuceo] = useState(false);
    const handleCloseBuceo = (e) => {
        setShowBuceo(false);
        if (e !== undefined) {
            setDeportes((deportes) => [...deportes, e.target.value])
        }
    }
    const handleShowBuceo = () => setShowBuceo(true);


    const [showFutbol, setShowFutbol] = useState(false);
    const handleCloseFutbol = (e) => {
        setShowFutbol(false);
        if (e !== undefined) {
            setDeportes((deportes) => [...deportes, e.target.value])
        }
    }
    const handleShowFutbol = () => setShowFutbol(true);


    const [showCrossfit, setShowCrossfit] = useState(false);
    const handleCloseCrossfit = (e) => {
        setShowCrossfit(false);
        if (e !== undefined) {
            setDeportes((deportes) => [...deportes, e.target.value])
        }
    }
    const handleShowCrossfit = () => setShowCrossfit(true);


    const [showCiclismo, setShowCiclismo] = useState(false);
    const handleCloseCiclismo = (e) => {
        setShowCiclismo(false);
        if (e !== undefined) {
            setDeportes((deportes) => [...deportes, e.target.value])
        }
    }
    const handleShowCiclismo = () => setShowCiclismo(true);


    const [showGolf, setShowGolf] = useState(false);
    const handleCloseGolf = (e) => {
        setShowGolf(false);
        if (e !== undefined) {
            setDeportes((deportes) => [...deportes, e.target.value])
        }
    }
    const handleShowGolf = () => setShowGolf(true);


    const [showGimnasio, setShowGimnasio] = useState(false);
    const handleCloseGimnasio = (e) => {
        setShowGimnasio(false);
        if (e !== undefined) {
            setDeportes((deportes) => [...deportes, e.target.value])
        }
    }
    const handleShowGimnasio = () => setShowGimnasio(true);


    const [showExcursionismo, setShowExcursionismo] = useState(false);
    const handleCloseExcursionismo = (e) => {
        setShowExcursionismo(false);
        if (e !== undefined) {
            setDeportes((deportes) => [...deportes, e.target.value])
        }
    }
    const handleShowExcursionismo = () => setShowExcursionismo(true);


    const [showHipica, setShowHipica] = useState(false);
    const handleCloseHipica = (e) => {
        setShowHipica(false);
        if (e !== undefined) {
            setDeportes((deportes) => [...deportes, e.target.value])
        }
    }
    const handleShowHipica = () => setShowHipica(true);


    const [showPadel, setShowPadel] = useState(false);
    const handleClosePadel = (e) => {
        setShowPadel(false);
        if (e !== undefined) {
            setDeportes((deportes) => [...deportes, e.target.value])
        }
    }
    const handleShowPadel = () => setShowPadel(true);


    const [showRemo, setShowRemo] = useState(false);
    const handleCloseRemo = (e) => {
        setShowRemo(false);
        if (e !== undefined) {
            setDeportes((deportes) => [...deportes, e.target.value])
        }
    }
    const handleShowRemo = () => setShowRemo(true);


    const [showCorrer, setShowCorrer] = useState(false);
    const handleCloseCorrer = (e) => {
        setShowCorrer(false);
        if (e !== undefined) {
            setDeportes((deportes) => [...deportes, e.target.value])
        }
    }
    const handleShowCorrer = () => setShowCorrer(true);


    const [showEsqui, setShowEsqui] = useState(false);
    const handleCloseEsqui = (e) => {
        setShowEsqui(false);
        if (e !== undefined) {
            setDeportes((deportes) => [...deportes, e.target.value])
        }
    }
    const handleShowEsqui = () => setShowEsqui(true);


    const [showFronton, setShowFronton] = useState(false);
    const handleCloseFronton = (e) => {
        setShowFronton(false);
        if (e !== undefined) {
            setDeportes((deportes) => [...deportes, e.target.value])
        }
    }
    const handleShowFronton = () => setShowFronton(true);


    const [showNatacion, setShowNatacion] = useState(false);
    const handleCloseNatacion = (e) => {
        setShowNatacion(false);
        if (e !== undefined) {
            setDeportes((deportes) => [...deportes, e.target.value])
        }
    }
    const handleShowNatacion = () => setShowNatacion(true);


    const [showTenismesa, setShowTenismesa] = useState(false);
    const handleCloseTenismesa = (e) => {
        setShowTenismesa(false);
        if (e !== undefined) {
            setDeportes((deportes) => [...deportes, e.target.value])
        }
    }
    const handleShowTenismesa = () => setShowTenismesa(true);


    const [showTenis, setShowTenis] = useState(false);
    const handleCloseTenis = (e) => {
        setShowTenis(false);
        if (e !== undefined) {
            setDeportes((deportes) => [...deportes, e.target.value])
        }
    }
    const handleShowTenis = () => setShowTenis(true);


    const [showAjedrez, setShowAjedrez] = useState(false);
    const handleCloseAjedrez = (e) => {
        setShowAjedrez(false);
        if (e !== undefined) {
            setDeportes((deportes) => [...deportes, e.target.value])
        }
    }
    const handleShowAjedrez = () => setShowAjedrez(true);


    const [showMotociclismo, setShowMotociclismo] = useState(false);
    const handleCloseMotociclismo = (e) => {
        setShowMotociclismo(false);
        if (e !== undefined) {
            setDeportes((deportes) => [...deportes, e.target.value])
        }
    }
    const handleShowMotociclismo = () => setShowMotociclismo(true);


    const [showPetanca, setShowPetanca] = useState(false);
    const handleClosePetanca = (e) => {
        setShowPetanca(false);
        if (e !== undefined) {
            setDeportes((deportes) => [...deportes, e.target.value])
        }
    }
    const handleShowPetanca = () => setShowPetanca(true);


    const [showCaza, setShowCaza] = useState(false);
    const handleCloseCaza = (e) => {
        setShowCaza(false);
        if (e !== undefined) {
            setDeportes((deportes) => [...deportes, e.target.value])
        }
    }
    const handleShowCaza = () => setShowCaza(true);


    const [showYoga, setShowYoga] = useState(false);
    const handleCloseYoga = (e) => {
        setShowYoga(false);
        if (e !== undefined) {
            setDeportes((deportes) => [...deportes, e.target.value])
        }
    }
    const handleShowYoga = () => setShowYoga(true);

    const [showPesca, setShowPesca] = useState(false);
    const handleClosePesca = (e) => {
        setShowPesca(false);
        if (e !== undefined) {
            setDeportes((deportes) => [...deportes, e.target.value])
        }
    }
    const handleShowPesca = () => setShowPesca(true);


    //---------PELICULAS-------

    const [showAccion, setShowAccion] = useState(false);
    const handleCloseAccion = (e) => {
        setShowAccion(false);
        if (e !== undefined) {
            setPeliculas((peliculas) => [...peliculas, e.target.value])
        }
    }
    const handleShowAccion = () => setShowAccion(true);

    const [showAventura, setShowAventura] = useState(false);
    const handleCloseAventura = (e) => {
        setShowAventura(false);
        if (e !== undefined) {
            setPeliculas((peliculas) => [...peliculas, e.target.value])
        }
    }
    const handleShowAventura = () => setShowAventura(true);

    const [showComedia, setShowComedia] = useState(false);
    const handleCloseComedia = (e) => {
        setShowComedia(false);
        if (e !== undefined) {
            setPeliculas((peliculas) => [...peliculas, e.target.value])
        }
    }
    const handleShowComedia = () => setShowComedia(true);


    const [showDocumental, setShowDocumental] = useState(false);
    const handleCloseDocumental = (e) => {
        setShowDocumental(false);
        if (e !== undefined) {
            setPeliculas((peliculas) => [...peliculas, e.target.value])
        }
    }
    const handleShowDocumental = () => setShowDocumental(true);


    const [showDrama, setShowDrama] = useState(false);
    const handleCloseDrama = (e) => {
        setShowDrama(false);
        if (e !== undefined) {
            setPeliculas((peliculas) => [...peliculas, e.target.value])
        }
    }
    const handleShowDrama = () => setShowDrama(true);

    const [showCrimen, setShowCrimen] = useState(false);
    const handleCloseCrimen = (e) => {
        setShowCrimen(false);
        if (e !== undefined) {
            setPeliculas((peliculas) => [...peliculas, e.target.value])
        }
    }
    const handleShowCrimen = () => setShowCrimen(true);

    const [showNegro, setShowNegro] = useState(false);
    const handleCloseNegro = (e) => {
        setShowNegro(false);
        if (e !== undefined) {
            setPeliculas((peliculas) => [...peliculas, e.target.value])
        }
    }
    const handleShowNegro = () => setShowNegro(true);


    const [showFantasia, setShowFantasia] = useState(false);
    const handleCloseFantasia = (e) => {
        setShowFantasia(false);
        if (e !== undefined) {
            setPeliculas((peliculas) => [...peliculas, e.target.value])
        }
    }
    const handleShowFantasia = () => setShowFantasia(true);


    const [showHistoricas, setShowHistoricas] = useState(false);
    const handleCloseHistoricas = (e) => {
        setShowHistoricas(false);
        if (e !== undefined) {
            setPeliculas((peliculas) => [...peliculas, e.target.value])
        }
    }
    const handleShowHistoricas = () => setShowHistoricas(true);


    const [showTerror, setShowTerror] = useState(false);
    const handleCloseTerror = (e) => {
        setShowTerror(false);
        if (e !== undefined) {
            setPeliculas((peliculas) => [...peliculas, e.target.value])
        }
    }
    const handleShowTerror = () => setShowTerror(true);


    const [showMisterio, setShowMisterio] = useState(false);
    const handleCloseMisterio = (e) => {
        setShowMisterio(false);
        if (e !== undefined) {
            setPeliculas((peliculas) => [...peliculas, e.target.value])
        }
    }
    const handleShowMisterio = () => setShowMisterio(true);


    const [showPolitica, setShowPolitica] = useState(false);
    const handleClosePolitica = (e) => {
        setShowPolitica(false);
        if (e !== undefined) {
            setPeliculas((peliculas) => [...peliculas, e.target.value])
        }
    }
    const handleShowPolitica = () => setShowPolitica(true);


    const [showRomantica, setShowRomantica] = useState(false);
    const handleCloseRomantica = (e) => {
        setShowRomantica(false);
        if (e !== undefined) {
            setPeliculas((peliculas) => [...peliculas, e.target.value])
        }
    }
    const handleShowRomantica = () => setShowRomantica(true);


    const [showCienciaFiccion, setShowCienciaFiccion] = useState(false);
    const handleCloseCienciaFiccion = (e) => {
        setShowCienciaFiccion(false);
        if (e !== undefined) {
            setPeliculas((peliculas) => [...peliculas, e.target.value])
        }
    }
    const handleShowCienciaFiccion = () => setShowCienciaFiccion(true);

    const [showSuspense, setShowSuspense] = useState(false);
    const handleCloseSuspense = (e) => {
        setShowSuspense(false);
        if (e !== undefined) {
            setPeliculas((peliculas) => [...peliculas, e.target.value])
        }
    }
    const handleShowSuspense = () => setShowSuspense(true);

    const [showMusical, setShowMusical] = useState(false);
    const handleCloseMusical = (e) => {
        setShowMusical(false);
        if (e !== undefined) {
            setPeliculas((peliculas) => [...peliculas, e.target.value])
        }
    }
    const handleShowMusical = () => setShowMusical(true);

    const [showBelico, setShowBelico] = useState(false);
    const handleCloseBelico = (e) => {
        setShowBelico(false);
        if (e !== undefined) {
            setPeliculas((peliculas) => [...peliculas, e.target.value])
        }
    }
    const handleShowBelico = () => setShowBelico(true);


    const [showWestern, setShowWestern] = useState(false);
    const handleCloseWestern = (e) => {
        setShowWestern(false);
        if (e !== undefined) {
            setPeliculas((peliculas) => [...peliculas, e.target.value])
        }
    }
    const handleShowWestern = () => setShowWestern(true);

    //---------ACTIVIDADES -------

    const [showPlaya, setShowPlaya] = useState(false);
    const handleClosePlaya = (e) => {
        setShowPlaya(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowPlaya = () => setShowPlaya(true);

    const [showAves, setShowAves] = useState(false);
    const handleCloseAves = (e) => {
        setShowAves(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowAves = () => setShowAves(true);

    const [showJardineria, setShowJardineria] = useState(false);
    const handleCloseJardineria = (e) => {
        setShowJardineria(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowJardineria = () => setShowJardineria(true);

    const [showMontanismo, setShowMontanismo] = useState(false);
    const handleCloseMontanismo = (e) => {
        setShowMontanismo(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowMontanismo = () => setShowMontanismo(true);

    //---------MANUALIDADES -------

    const [showManualidades, setShowManualidades] = useState(false);
    const handleCloseManualidades = (e) => {
        setShowManualidades(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowManualidades = () => setShowManualidades(true);

    const [showArtesanias, setShowArtesanias] = useState(false);
    const handleCloseArtesanias = (e) => {
        setShowArtesanias(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowArtesanias = () => setShowArtesanias(true);

    const [showTejido, setShowTejido] = useState(false);
    const handleCloseTejido = (e) => {
        setShowTejido(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowTejido = () => setShowTejido(true);


    const [showCroche, setShowCroche] = useState(false);
    const handleCloseCroche = (e) => {
        setShowCroche(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowCroche = () => setShowCroche(true);


    const [showGanchillo, setShowGanchillo] = useState(false);
    const handleCloseGanchillo = (e) => {
        setShowGanchillo(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowGanchillo = () => setShowGanchillo(true);


    const [showMacrame, setShowMacrame] = useState(false);
    const handleCloseMacrame = (e) => {
        setShowMacrame(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowMacrame = () => setShowMacrame(true);


    const [showBordado, setShowBordado] = useState(false);
    const handleCloseBordado = (e) => {
        setShowBordado(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowBordado = () => setShowBordado(true);

    const [showPuntocruz, setShowPuntocruz] = useState(false);
    const handleClosePuntocruz = (e) => {
        setShowPuntocruz(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowPuntocruz = () => setShowPuntocruz(true);

    const [showBolillo, setShowBolillo] = useState(false);
    const handleCloseBolillo = (e) => {
        setShowBolillo(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowBolillo = () => setShowBolillo(true);

    const [showCeramica, setShowCeramica] = useState(false);
    const handleCloseCeramica = (e) => {
        setShowCeramica(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowCeramica = () => setShowCeramica(true);

    const [showModelismo, setShowModelismo] = useState(false);
    const handleCloseModelismo = (e) => {
        setShowModelismo(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowModelismo = () => setShowModelismo(true);

    const [showCarpinteria, setShowCarpinteria] = useState(false);
    const handleCloseCarpinteria = (e) => {
        setShowCarpinteria(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowCarpinteria = () => setShowCarpinteria(true);


    const [showCostura, setShowCostura] = useState(false);
    const handleCloseCostura = (e) => {
        setShowCostura(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowCostura = () => setShowCostura(true);

    const [showBricolaje, setShowBricolaje] = useState(false);
    const handleCloseBricolaje = (e) => {
        setShowBricolaje(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowBricolaje = () => setShowBricolaje(true);


    const [showRobotica, setShowRobotica] = useState(false);
    const handleCloseRobotica = (e) => {
        setShowRobotica(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowRobotica = () => setShowRobotica(true);

    // -------COCINA--------

    const [showCerveza, setShowCerveza] = useState(false);
    const handleCloseCerveza = (e) => {
        setShowCerveza(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowCerveza = () => setShowCerveza(true);

    const [showCocina, setShowCocina] = useState(false);
    const handleCloseCocina = (e) => {
        setShowCocina(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowCocina = () => setShowCocina(true);


    const [showReposteria, setShowReposteria] = useState(false);
    const handleCloseReposteria = (e) => {
        setShowReposteria(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowReposteria = () => setShowReposteria(true);


    const [showGastronomia, setShowGastronomia] = useState(false);
    const handleCloseGastronomia = (e) => {
        setShowGastronomia(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowGastronomia = () => setShowGastronomia(true);


    const [showIndia, setShowIndia] = useState(false);
    const handleCloseIndia = (e) => {
        setShowIndia(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowIndia = () => setShowIndia(true);

    const [showOriental, setShowOriental] = useState(false);
    const handleCloseOriental = (e) => {
        setShowOriental(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowOriental = () => setShowOriental(true);

    const [showMexicana, setShowMexicana] = useState(false);
    const handleCloseMexicana = (e) => {
        setShowMexicana(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowMexicana = () => setShowMexicana(true);

    const [showMediterranea, setShowMediterranea] = useState(false);
    const handleCloseMediterranea = (e) => {
        setShowMediterranea(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowMediterranea = () => setShowMediterranea(true);


    const [showMuseos, setShowMuseos] = useState(false);
    const handleCloseMuseos = (e) => {
        setShowMuseos(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowMuseos = () => setShowMuseos(true);


    const [showEscritura, setShowEscritura] = useState(false);
    const handleCloseEscritura = (e) => {
        setShowEscritura(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowEscritura = () => setShowEscritura(true);


    const [showBeatboxing, setShowBeatboxing] = useState(false);
    const handleCloseBeatboxing = (e) => {
        setShowBeatboxing(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowBeatboxing = () => setShowBeatboxing(true);

    const [showComponer, setShowComponer] = useState(false);
    const handleCloseComponer = (e) => {
        setShowComponer(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowComponer = () => setShowComponer(true);

    const [showBaile, setShowBaile] = useState(false);
    const handleCloseBaile = (e) => {
        setShowBaile(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowBaile = () => setShowBaile(true);

    const [showFotografia, setShowFotografia] = useState(false);
    const handleCloseFotografia = (e) => {
        setShowFotografia(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowFotografia = () => setShowFotografia(true);

    const [showDibujo, setShowDibujo] = useState(false);
    const handleCloseDibujo = (e) => {
        setShowDibujo(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowDibujo = () => setShowDibujo(true);


    const [showInstrumentos, setShowInstrumentos] = useState(false);
    const handleCloseInstrumentos = (e) => {
        setShowInstrumentos(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowInstrumentos = () => setShowInstrumentos(true);

    const [showCanto, setShowCanto] = useState(false);
    const handleCloseCanto = (e) => {
        setShowCanto(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowCanto = () => setShowCanto(true);

    const [showConciertos, setShowConciertos] = useState(false);
    const handleCloseConciertos = (e) => {
        setShowConciertos(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowConciertos = () => setShowConciertos(true);

    const [showTeatro, setShowTeatro] = useState(false);
    const handleCloseTeatro = (e) => {
        setShowTeatro(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowTeatro = () => setShowTeatro(true);

    const [showPintura, setShowPintura] = useState(false);
    const handleClosePintura = (e) => {
        setShowPintura(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowPintura = () => setShowPintura(true);

    const [showLiteratura, setShowLiteratura] = useState(false);
    const handleCloseLiteratura = (e) => {
        setShowLiteratura(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowLiteratura = () => setShowLiteratura(true);

    const [showPoesia, setShowPoesia] = useState(false);
    const handleClosePoesia = (e) => {
        setShowPoesia(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowPoesia = () => setShowPoesia(true);


    const [showComics, setShowComics] = useState(false);
    const handleCloseComics = (e) => {
        setShowComics(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowComics = () => setShowComics(true);


    const [showBlogging, setShowBlogging] = useState(false);
    const handleCloseBlogging = (e) => {
        setShowBlogging(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowBlogging = () => setShowBlogging(true);

    const [showCine, setShowCine] = useState(false);
    const handleCloseCine = (e) => {
        setShowCine(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowCine = () => setShowCine(true);



    //------ENTRETENIMIENTO--------

    const [showMesa, setShowMesa] = useState(false);
    const handleCloseMesa = (e) => {
        setShowMesa(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowMesa = () => setShowMesa(true);


    const [showCrucigramas, setShowCrucigramas] = useState(false);
    const handleCloseCrucigramas = (e) => {
        setShowCrucigramas(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowCrucigramas = () => setShowCrucigramas(true);


    const [showCartas, setShowCartas] = useState(false);
    const handleCloseCartas = (e) => {
        setShowCartas(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowCartas = () => setShowCartas(true);


    const [showRompecabezas, setShowRompecabezas] = useState(false);
    const handleCloseRompecabezas = (e) => {
        setShowRompecabezas(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowRompecabezas = () => setShowRompecabezas(true);


    const [showPoker, setShowPoker] = useState(false);
    const handleClosePoker = (e) => {
        setShowPoker(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowPoker = () => setShowPoker(true);


    const [showVideojuegos, setShowVideojuegos] = useState(false);
    const handleCloseVideojuegos = (e) => {
        setShowVideojuegos(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowVideojuegos = () => setShowVideojuegos(true);

    const [showBingo, setShowBingo] = useState(false);
    const handleCloseBingo = (e) => {
        setShowBingo(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowBingo = () => setShowBingo(true);


    const [showCasino, setShowCasino] = useState(false);
    const handleCloseCasino = (e) => {
        setShowCasino(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowCasino = () => setShowCasino(true);


    const [showMagia, setShowMagia] = useState(false);
    const handleCloseMagia = (e) => {
        setShowMagia(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowMagia = () => setShowMagia(true);

    const [showDardos, setShowDardos] = useState(false);
    const handleCloseDardos = (e) => {
        setShowDardos(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowDardos = () => setShowDardos(true);


    const [showTelenovelas, setShowTelenovelas] = useState(false);
    const handleCloseTelenovelas = (e) => {
        setShowTelenovelas(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowTelenovelas = () => setShowTelenovelas(true);

    //----------SOCIEDAD

    const [showReciclaje, setShowReciclaje] = useState(false);
    const handleCloseReciclaje = (e) => {
        setShowReciclaje(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowReciclaje = () => setShowReciclaje(true);


    const [showIglesia, setShowIglesia] = useState(false);
    const handleCloseIglesia = (e) => {
        setShowIglesia(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowIglesia = () => setShowIglesia(true);


    const [showSocializar, setShowSocializar] = useState(false);
    const handleCloseSocializar = (e) => {
        setShowSocializar(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowSocializar = () => setShowSocializar(true);


    const [showVoluntariado, setShowVoluntariado] = useState(false);
    const handleCloseVoluntariado = (e) => {
        setShowVoluntariado(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowVoluntariado = () => setShowVoluntariado(true);

    const [showAnimales, setShowAnimales] = useState(false);
    const handleCloseAnimales = (e) => {
        setShowAnimales(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowAnimales = () => setShowAnimales(true);

    const [showAstrologia, setShowAstrologia] = useState(false);
    const handleCloseAstrologia = (e) => {
        setShowAstrologia(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowAstrologia = () => setShowAstrologia(true);

    const [showTarot, setShowTarot] = useState(false);
    const handleCloseTarot = (e) => {
        setShowTarot(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowTarot = () => setShowTarot(true);

    const [showMeditacion, setShowMeditacion] = useState(false);
    const handleCloseMeditacion = (e) => {
        setShowMeditacion(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowMeditacion = () => setShowMeditacion(true);

    const [showCorazon, setShowCorazon] = useState(false);
    const handleCloseCorazon = (e) => {
        setShowCorazon(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowCorazon = () => setShowCorazon(true);

    //----------GRUPALES--------

    const [showViajar, setShowViajar] = useState(false);
    const handleCloseViajar = (e) => {
        setShowViajar(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowViajar = () => setShowViajar(true);

    const [showVino, setShowVino] = useState(false);
    const handleCloseVino = (e) => {
        setShowVino(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowVino = () => setShowVino(true);


    const [showCosplay, setShowCosplay] = useState(false);
    const handleCloseCosplay = (e) => {
        setShowCosplay(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowCosplay = () => setShowCosplay(true);

    const [showDisfraces, setShowDisfraces] = useState(false);
    const handleCloseDisfraces = (e) => {
        setShowDisfraces(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowDisfraces = () => setShowDisfraces(true);


    const [showTurismo, setShowTurismo] = useState(false);
    const handleCloseTurismo = (e) => {
        setShowTurismo(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowTurismo = () => setShowTurismo(true);

    const [showRol, setShowRol] = useState(false);
    const handleCloseRol = (e) => {
        setShowRol(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowRol = () => setShowRol(true);


    const [showVivo, setShowVivo] = useState(false);
    const handleCloseVivo = (e) => {
        setShowVivo(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowVivo = () => setShowVivo(true);

    const [showHistorica, setShowHistorica] = useState(false);
    const handleCloseHistorica = (e) => {
        setShowHistorica(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowHistorica = () => setShowHistorica(true);

    const [showFumadores, setShowFumadores] = useState(false);
    const handleCloseFumadores = (e) => {
        setShowFumadores(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowFumadores = () => setShowFumadores(true);


    const [showAntiguedades, setShowAntiguedades] = useState(false);
    const handleCloseAntiguedades = (e) => {
        setShowAntiguedades(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowAntiguedades = () => setShowAntiguedades(true);

    const [showFilatelia, setShowFilatelia] = useState(false);
    const handleCloseFilatelia = (e) => {
        setShowFilatelia(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowFilatelia = () => setShowFilatelia(true);

    const [showNumismatica, setShowNumismatica] = useState(false);
    const handleCloseNumismatica = (e) => {
        setShowNumismatica(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowNumismatica = () => setShowNumismatica(true);

    //------CIENCIAS

    const [showAstronomia, setShowAstronomia] = useState(false);
    const handleCloseAstronomia = (e) => {
        setShowAstronomia(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowAstronomia = () => setShowAstronomia(true);

    const [showHistoria, setShowHistoria] = useState(false);
    const handleCloseHistoria = (e) => {
        setShowHistoria(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowHistoria = () => setShowHistoria(true);

    const [showMatematicas, setShowMatematicas] = useState(false);
    const handleCloseMatematicas = (e) => {
        setShowMatematicas(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowMatematicas = () => setShowMatematicas(true);

    const [showFisica, setShowFisica] = useState(false);
    const handleCloseFisica = (e) => {
        setShowFisica(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowFisica = () => setShowFisica(true);

    const [showQuimica, setShowQuimica] = useState(false);
    const handleCloseQuimica = (e) => {
        setShowQuimica(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowQuimica = () => setShowQuimica(true);

    const [showFilologia, setShowFilologia] = useState(false);
    const handleCloseFilologia = (e) => {
        setShowFilologia(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowFilologia = () => setShowFilologia(true);

    const [showBiologia, setShowBiologia] = useState(false);
    const handleCloseBiologia = (e) => {
        setShowBiologia(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowBiologia = () => setShowBiologia(true);

    const [showZoologia, setShowZoologia] = useState(false);
    const handleCloseZoologia = (e) => {
        setShowZoologia(false);
        if (e !== undefined) {
            setActividades((actividades) => [...actividades, e.target.value])
        }
    }
    const handleShowZoologia = () => setShowZoologia(true);

    //--------

    const handleSubmit = async (e) => {
        e.preventDefault()
        setAficiones([musica, peliculas, deportes, actividades])

        let timeoutID = setTimeout(function () {
            enviarDatos();
        }, 5000);


    }



    function enviarDatos() {
        console.log(aficiones)
        let aficionesJuntas = aficiones.flat(1)

        let caracteristicasTest = {
            edad,
            genero,
            oficio,
            idiomas,
            orientacionSexual,
            religion,
            politica,
            mascotas,
            fumador,
            carnet,
            ubicacion,
            tipoVivienda,
            region,
            instalaciones,
            rangoEdad,
            dinero,
            metros,
            lavabo,
            exteriores,
            gente,
            caracter,
            aficionesJuntas,
            id_usuario: 1
        }

        axios.post("/testafinidaduser", caracteristicasTest).then((res) => {
            console.log(res.data)
        })

    }

    return (
        <div>
            <form onSubmit={(e) => enviarDatos(e)}>
                <div>
                    <br />
                    <p>Para saber un poco más de ti, contesta estas preguntas...</p>

                    {viewEdad ? (<div>
                        <label>¿Qué edad tienes?</label>
                        <br />
                        <input type="number" min="18" max="120" onChange={(e) => setEdad(e.target.value)}></input>
                        {viewAlertEdad ? (<p>Este campo es obligatorio</p>) : ""}
                        <div>
                            <button type="button" onClick={() => {
                                if (edad !== "") {
                                    setViewEdad(false)
                                    setViewGenero(true)
                                } else {
                                    setViewAlertEdad(true)
                                }
                            }}>Siguiente</button>

                        </div>

                    </div>) : ""}
                    {viewGenero ? (<div>
                        <label>¿Con qué género te identificas?</label>
                        <br />
                        <select name="genero" id="genero" onChange={(e) => setGenero(e.target.value)}>
                            <option></option>
                            <option value="hombre">Hombre</option>
                            <option value="mujer">Mujer</option>
                            <option value="otro">Otro</option>
                        </select>
                        {viewAlertGenero ? (<p>Este campo es obligatorio</p>) : ""}
                        <div>
                            <button type="button" onClick={() => { setViewGenero(false); setViewEdad(true) }}>Anterior</button>
                            <button type="button" onClick={() => {
                                if (genero !== "") {
                                    setViewGenero(false)
                                    setViewOficio(true)
                                } else {
                                    setViewAlertGenero(true)
                                }
                            }}>Siguiente</button>

                        </div>
                    </div>) : ""}
                    {viewOficio ? (<div>
                        <label>¿En qué sector/es has trabajado?</label>
                        <br />
                        <div>
                            <button type="button" value="sanidad" className="botonAfinidad" name="oficio" onClick={(e) => setOficio((oficio) => [...oficio, e.target.value])} >Sanidad</button>
                            <br />
                            <button type="button" value="ingenieria" className="botonAfinidad" name="oficio" onClick={(e) => setOficio((oficio) => [...oficio, e.target.value])} >Ingeniería</button>
                            <button type="button" value="forestal" className="botonAfinidad" name="oficio" onClick={(e) => setOficio((oficio) => [...oficio, e.target.value])} >Agrario-forestal</button>
                            <button type="button" value="administrativo" className="botonAfinidad" name="oficio" onClick={(e) => setOficio((oficio) => [...oficio, e.target.value])} >Administrativo</button>
                            <button type="button" value="artes" className="botonAfinidad" name="oficio" onClick={(e) => setOficio((oficio) => [...oficio, e.target.value])} >Artes</button>
                            <button type="button" value="comunicacion" className="botonAfinidad" name="oficio" onClick={(e) => setOficio((oficio) => [...oficio, e.target.value])} >Comunicación</button>
                            <button type="button" value="derecho" className="botonAfinidad" name="oficio" onClick={(e) => setOficio((oficio) => [...oficio, e.target.value])} >Derecho</button>
                            <button type="button" value="empresariales" className="botonAfinidad" name="oficio" onClick={(e) => setOficio((oficio) => [...oficio, e.target.value])} >Empresariales</button>
                            <button type="button" value="enseñanza" className="botonAfinidad" name="oficio" onClick={(e) => setOficio((oficio) => [...oficio, e.target.value])} >Enseñanza</button>
                            <button type="button" value="investigacioncientifica" className="botonAfinidad" name="oficio" onClick={(e) => setOficio((oficio) => [...oficio, e.target.value])} >Investigación científica</button>
                            <button type="button" value="investigaciontecnica" className="botonAfinidad" name="oficio" onClick={(e) => setOficio((oficio) => [...oficio, e.target.value])} >Investigación técnica</button>
                            <button type="button" value="musica" className="botonAfinidad" name="oficio" onClick={(e) => setOficio((oficio) => [...oficio, e.target.value])} >Música</button>
                            <button type="button" value="seguridad" className="botonAfinidad" name="oficio" onClick={(e) => setOficio((oficio) => [...oficio, e.target.value])} >Protección y Seguridad</button>
                            <button type="button" value="cine" className="botonAfinidad" name="oficio" onClick={(e) => setOficio((oficio) => [...oficio, e.target.value])} >Cine/teatro</button>
                            <button type="button" value="rh" className="botonAfinidad" name="oficio" onClick={(e) => setOficio((oficio) => [...oficio, e.target.value])} >Recursos Humanos</button>
                            <button type="button" value="amacasa" className="botonAfinidad" name="oficio" onClick={(e) => setOficio((oficio) => [...oficio, e.target.value])} >Ama de casa</button>
                            <button type="button" value="mantenimiento" className="botonAfinidad" name="oficio" onClick={(e) => setOficio((oficio) => [...oficio, e.target.value])} >Mantenimiento</button>
                            <button type="button" value="construccion" className="botonAfinidad" name="oficio" onClick={(e) => setOficio((oficio) => [...oficio, e.target.value])} >Construcción</button>
                            <button type="button" value="otro" className="botonAfinidad" name="oficio" onClick={(e) => setOficio((oficio) => [...oficio, e.target.value])} >Otra profesión</button>

                        </div>
                        {viewAlertOficio ? (<p>Este campo es obligatorio</p>) : ""}
                        <div>
                            <button type="button" onClick={() => { setViewOficio(false); setViewGenero(true) }}>Anterior</button>
                            <button type="button" onClick={() => {
                                if (oficio !== "") {
                                    setViewOficio(false)
                                    setViewIdiomas(true)
                                } else {
                                    setViewAlertOficio(true)
                                }
                            }}>Siguiente</button>

                        </div>


                    </div>) : ""}
                    {viewIdiomas ? (<div>
                        <label>¿Qué idiomas hablas?</label>
                        <br />
                        <div id="respuestasIdiomas">
                            <button type="button" value="castellano" className="botonAfinidad" name="idiomas" onClick={(e) => setIdiomas((idiomas) => [...idiomas, e.target.value])} >Castellano</button>
                            <button type="button" value="catalan" className="botonAfinidad" name="idiomas" onClick={(e) => setIdiomas((idiomas) => [...idiomas, e.target.value])} >Català</button>
                            <button type="button" value="euskera" className="botonAfinidad" name="idiomas" onClick={(e) => setIdiomas((idiomas) => [...idiomas, e.target.value])} >euskera</button>
                            <button type="button" value="gallego" className="botonAfinidad" name="idiomas" onClick={(e) => setIdiomas((idiomas) => [...idiomas, e.target.value])} >Galego</button>
                            <button type="button" value="valenciano" className="botonAfinidad" name="idiomas" onClick={(e) => setIdiomas((idiomas) => [...idiomas, e.target.value])} >Valencià</button>
                            <button type="button" value="coreano" className="botonAfinidad" name="idiomas" onClick={(e) => setIdiomas((idiomas) => [...idiomas, e.target.value])} >한국어</button>
                            <button type="button" value="chino" className="botonAfinidad" name="idiomas" onClick={(e) => setIdiomas((idiomas) => [...idiomas, e.target.value])} >中文</button>
                            <button type="button" value="japones" className="botonAfinidad" name="idiomas" onClick={(e) => setIdiomas((idiomas) => [...idiomas, e.target.value])} >日本語</button>
                            <button type="button" value="ingles" className="botonAfinidad" name="idiomas" onClick={(e) => setIdiomas((idiomas) => [...idiomas, e.target.value])} >English</button>
                            <button type="button" value="italiano" className="botonAfinidad" name="idiomas" onClick={(e) => setIdiomas((idiomas) => [...idiomas, e.target.value])} >Italiano</button>
                            <button type="button" value="aleman" className="botonAfinidad" name="idiomas" onClick={(e) => setIdiomas((idiomas) => [...idiomas, e.target.value])} >Deutsch</button>
                            <button type="button" value="frances" className="botonAfinidad" name="idiomas" onClick={(e) => setIdiomas((idiomas) => [...idiomas, e.target.value])} >Français</button>
                            <button type="button" value="ruso" className="botonAfinidad" name="idiomas" onClick={(e) => setIdiomas((idiomas) => [...idiomas, e.target.value])} >Pусский</button>
                            <button type="button" value="neerlandes" className="botonAfinidad" name="idiomas" onClick={(e) => setIdiomas((idiomas) => [...idiomas, e.target.value])} >Nederlands</button>
                        </div>
                        {viewAlertIdiomas ? (<p>Este campo es obligatorio</p>) : ""}
                        <div>
                            <button type="button" onClick={() => { setViewIdiomas(false); setViewOficio(true) }}>Anterior</button>
                            <button type="button" onClick={() => {
                                if (idiomas !== "") {
                                    setViewIdiomas(false)
                                    setViewOrientacion(true)
                                } else {
                                    setViewAlertIdiomas(true)
                                }
                            }}>Siguiente</button>

                        </div>

                    </div>) : ""}
                    {viewOrientacion ? (<div>
                        <label>¿Vivirías con alguien con una orientacion sexual diferente?</label>
                        <br />
                        <input type="radio" name="orientacion" value="si" id="si" onChange={(e) => setOrientacionSexual(true)}></input><label htmlFor="si">&nbsp;Sí</label>
                        <br />
                        <input type="radio" name="orientacion" value="no" id="no" onChange={(e) => setOrientacionSexual(false)}></input><label htmlFor="no">&nbsp;No</label>
                        {viewAlertOrientacion ? (<p>Este campo es obligatorio</p>) : ""}
                        <div>
                            <button type="button" onClick={() => { setViewOrientacion(false); setViewIdiomas(true) }}>Anterior</button>
                            <button type="button" onClick={() => {
                                if (orientacionSexual !== "") {
                                    setViewOrientacion(false)
                                    setViewReligion(true)
                                } else {
                                    setViewAlertOrientacion(true)
                                }
                            }}>Siguiente</button>

                        </div>
                    </div>) : ""}
                    {viewReligion ? (<div>
                        <label>¿Vivirías con alguien con una religión diferente?</label>
                        <br />
                        <input type="radio" name="religion" value="si" id="si" onChange={(e) => setReligion(true)}></input><label htmlFor="si">&nbsp;Sí</label>
                        <br />
                        <input type="radio" name="religion" value="no" id="no" onChange={(e) => setReligion(false)}></input><label htmlFor="no">&nbsp;No</label>
                        {viewAlertReligion ? (<p>Este campo es obligatorio</p>) : ""}
                        <div>
                            <button type="button" onClick={() => { setViewReligion(false); setViewOrientacion(true) }}>Anterior</button>
                            <button type="button" onClick={() => {
                                if (religion !== "") {
                                    setViewReligion(false)
                                    setViewPolitica(true)
                                } else {
                                    setViewAlertReligion(true)
                                }
                            }}>Siguiente</button>

                        </div>
                    </div>) : ""}
                    {viewPolitica ? (<div>
                        <label>¿Vivirías con alguien con una ideología política diferente?</label>
                        <br />
                        <input type="radio" name="politica" value="si" id="si" onChange={(e) => setPolitica(true)}></input><label htmlFor="si">&nbsp;Sí</label>
                        <br />
                        <input type="radio" name="politica" value="no" id="no" onChange={(e) => setPolitica(false)}></input><label htmlFor="no">&nbsp;No</label>
                        {viewAlertPolitica ? (<p>Este campo es obligatorio</p>) : ""}
                        <div>
                            <button type="button" onClick={() => { setViewPolitica(false); setViewReligion(true) }}>Anterior</button>
                            <button type="button" onClick={() => {
                                if (politica !== "") {
                                    setViewPolitica(false)
                                    setViewMascotas(true)
                                } else {
                                    setViewAlertPolitica(true)
                                }
                            }}>Siguiente</button>

                        </div>
                    </div>) : ""}
                    {viewMascotas ? (<div>

                        <label>¿Vivirías con alguien con mascotas?</label>
                        <br />
                        <input type="radio" name="mascotas" value="si" id="si" onChange={(e) => setMascotas(true)}></input><label htmlFor="si">&nbsp;Sí</label>
                        <br />
                        <input type="radio" name="mascotas" value="no" id="no" onChange={(e) => setMascotas(false)}></input><label htmlFor="no">&nbsp;No</label>
                        {viewAlertMascotas ? (<p>Este campo es obligatorio</p>) : ""}
                        <div>
                            <button type="button" onClick={() => { setViewMascotas(false); setViewPolitica(true) }}>Anterior</button>
                            <button type="button" onClick={() => {
                                if (mascotas !== "") {
                                    setViewMascotas(false)
                                    setViewFumador(true)
                                } else {
                                    setViewAlertMascotas(true)
                                }
                            }}>Siguiente</button>

                        </div>
                    </div>) : ""}
                    {viewFumador ? (<div>
                        <label>¿Vivirías con un fumador?</label>
                        <br />
                        <input type="radio" name="fumador" value="si" id="si" onChange={(e) => setFumador(true)}></input><label htmlFor="si">&nbsp;Sí</label>
                        <br />
                        <input type="radio" name="fumador" value="no" id="no" onChange={(e) => setFumador(false)}></input><label htmlFor="no">&nbsp;No</label>
                        {viewAlertFumador ? (<p>Este campo es obligatorio</p>) : ""}
                        <div>
                            <button type="button" onClick={() => { setViewFumador(false); setViewMascotas(true) }}>Anterior</button>
                            <button type="button" onClick={() => {
                                if (fumador !== "") {
                                    setViewFumador(false)
                                    setViewCaracter(true)
                                } else {
                                    setViewAlertFumador(true)
                                }
                            }}>Siguiente</button>

                        </div>
                    </div>) : ""}
                    {viewCaracter ? (<div>
                        <label>¿Cómo eres?</label>
                        <br />
                        <div>
                            <button type="button" value="activo" className="botonAfinidad" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Activo</button>
                            <button type="button" value="deportista" className="botonAfinidad" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Deportista</button>
                            <button type="button" value="calmado" className="botonAfinidad" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Calmado</button>
                            <button type="button" value="atento" className="botonAfinidad" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Atento</button>
                            <button type="button" value="alegre" className="botonAfinidad" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Alegre</button>
                            <button type="button" value="colaborador" className="botonAfinidad" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Colaborador</button>
                            <button type="button" value="creativo" className="botonAfinidad" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Creativo</button>
                            <button type="button" value="decidido" className="botonAfinidad" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Decidido</button>
                            <button type="button" value="tratofacil" className="botonAfinidad" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >De trato fácil</button>
                            <button type="button" value="empatico" className="botonAfinidad" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Empático</button>
                            <button type="button" value="entusiasta" className="botonAfinidad" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Entusiasta</button>
                            <button type="button" value="flexible" className="botonAfinidad" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Flexible</button>
                            <button type="button" value="amable" className="botonAfinidad" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Amable</button>
                            <button type="button" value="divertido" className="botonAfinidad" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Divertido</button>
                            <button type="button" value="honesto" className="botonAfinidad" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Honesto</button>
                            <button type="button" value="gracioso" className="botonAfinidad" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Gracioso</button>
                            <button type="button" value="optimista" className="botonAfinidad" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Optimista</button>
                            <button type="button" value="ordenado" className="botonAfinidad" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Ordenado</button>
                            <button type="button" value="apasionado" className="botonAfinidad" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Apasionado</button>
                            <button type="button" value="practico" className="botonAfinidad" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Práctico</button>
                            <button type="button" value="proactivo" className="botonAfinidad" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Proactivo</button>
                            <button type="button" value="sensato" className="botonAfinidad" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Sensato</button>
                            <button type="button" value="relajado" className="botonAfinidad" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Relajado</button>
                            <button type="button" value="generoso" className="botonAfinidad" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Generoso</button>
                        </div>
                        {viewAlertCaracter ? (<p>Elige al menos 5</p>) : ""}
                        <div>
                            <button type="button" onClick={() => { setViewCaracter(false); setViewFumador(true) }}>Anterior</button>
                            <button type="button" onClick={() => {
                                if (caracter.length >= 5) {
                                    setViewCaracter(false)
                                    setViewMusica(true)
                                } else {
                                    setViewAlertCaracter(true)
                                }
                            }}>Siguiente</button>
                        </div>
                    </div>) : ""}
                    <br />
                    {viewMusica ? (<div>

                        <label>¿Qué música escuchas?</label>
                        <br />
                        <div className="listaMusica">
                            <Button className="nextButton" onClick={handleShowAlternativa}>
                                Alternativa
                            </Button>
                            <Modal show={showAlternativa} onHide={handleCloseAlternativa} backdrop='static' keyboard="False" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Alternativa</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Button variant="secondary" value="alternativa: 2" onClick={(e) => handleCloseAlternativa(e)}>
                                        Me gusta
                                    </Button>
                                    <Button variant="primary" value="alternativa: 4" onClick={(e) => handleCloseAlternativa(e)}>
                                        ¡Me encanta!
                                    </Button>
                                </Modal.Body>
                            </Modal>

                            <Button className="nextButton" onClick={handleShowBlues}>
                                Blues
                            </Button>
                            <Modal show={showBlues} onHide={handleCloseBlues} backdrop='static' keyboard="False" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Blues</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Button variant="secondary" value="blues: 2" onClick={(e) => handleCloseBlues(e)}>
                                        Me gusta
                                    </Button>
                                    <Button variant="primary" value="blues: 4" onClick={(e) => handleCloseBlues(e)}>
                                        ¡Me encanta!
                                    </Button>
                                </Modal.Body>
                            </Modal>

                            <Button className="nextButton" onClick={handleShowClasica}>
                                Clásica
                            </Button>
                            <Modal show={showClasica} onHide={handleCloseClasica} backdrop='static' keyboard="False" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Clásica</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Button variant="secondary" value="clasica: 2" onClick={(e) => handleCloseClasica(e)}>
                                        Me gusta
                                    </Button>
                                    <Button variant="primary" value="clasica: 4" onClick={(e) => handleCloseClasica(e)}>
                                        ¡Me encanta!
                                    </Button>
                                </Modal.Body>
                            </Modal>

                            <Button className="nextButton" onClick={handleShowElectronica}>
                                Electrónica
                            </Button>
                            <Modal show={showElectronica} onHide={handleCloseElectronica} backdrop='static' keyboard="False" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Electrónica</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Button variant="secondary" value="electronica: 2" onClick={(e) => handleCloseElectronica(e)}>
                                        Me gusta
                                    </Button>
                                    <Button variant="primary" value="electronica: 4" onClick={(e) => handleCloseElectronica(e)}>
                                        ¡Me encanta!
                                    </Button>
                                </Modal.Body>
                            </Modal>


                            <Button className="nextButton" onClick={handleShowFolk}>
                                Folk
                            </Button>
                            <Modal show={showFolk} onHide={handleCloseFolk} backdrop='static' keyboard="False" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Folk</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Button variant="secondary" value="folk: 2" onClick={(e) => handleCloseFolk(e)}>
                                        Me gusta
                                    </Button>
                                    <Button variant="primary" value="folk: 4" onClick={(e) => handleCloseFolk(e)}>
                                        ¡Me encanta!
                                    </Button>
                                </Modal.Body>
                            </Modal>

                            <Button className="nextButton" onClick={handleShowGospel}>
                                Gospel
                            </Button>
                            <Modal show={showGospel} onHide={handleCloseGospel} backdrop='static' keyboard="False" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Gospel</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Button variant="secondary" value="gospel: 2" onClick={(e) => handleCloseGospel(e)}>
                                        Me gusta
                                    </Button>
                                    <Button variant="primary" value="gospel: 4" onClick={(e) => handleCloseGospel(e)}>
                                        ¡Me encanta!
                                    </Button>
                                </Modal.Body>
                            </Modal>


                            <Button className="nextButton" onClick={handleShowInstrumental}>
                                Instrumental
                            </Button>
                            <Modal show={showInstrumental} onHide={handleCloseInstrumental} backdrop='static' keyboard="False" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Instrumental</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Button variant="secondary" value="instrumental: 2" onClick={(e) => handleCloseInstrumental(e)}>
                                        Me gusta
                                    </Button>
                                    <Button variant="primary" value="instrumental: 4" onClick={(e) => handleCloseInstrumental(e)}>
                                        ¡Me encanta!
                                    </Button>
                                </Modal.Body>
                            </Modal>

                            <Button className="nextButton" onClick={handleShowJazz}>
                                Jazz
                            </Button>
                            <Modal show={showJazz} onHide={handleCloseJazz} backdrop='static' keyboard="False" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Jazz</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Button variant="secondary" value="jazz: 2" onClick={(e) => handleCloseJazz(e)}>
                                        Me gusta
                                    </Button>
                                    <Button variant="primary" value="jazz: 4" onClick={(e) => handleCloseJazz(e)}>
                                        ¡Me encanta!
                                    </Button>
                                </Modal.Body>
                            </Modal>

                            <Button className="nextButton" onClick={handleShowLatina}>
                                Latina
                            </Button>
                            <Modal show={showLatina} onHide={handleCloseLatina} backdrop='static' keyboard="False" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Latina</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Button variant="secondary" value="latina: 2" onClick={(e) => handleCloseLatina(e)}>
                                        Me gusta
                                    </Button>
                                    <Button variant="primary" value="latina: 4" onClick={(e) => handleCloseLatina(e)}>
                                        ¡Me encanta!
                                    </Button>
                                </Modal.Body>
                            </Modal>

                            <Button className="nextButton" onClick={handleShowLounge}>
                                Lounge
                            </Button>
                            <Modal show={showLounge} onHide={handleCloseLounge} backdrop='static' keyboard="False" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Lounge</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Button variant="secondary" value="lounge: 2" onClick={(e) => handleCloseLounge(e)}>
                                        Me gusta
                                    </Button>
                                    <Button variant="primary" value="lounge: 4" onClick={(e) => handleCloseLounge(e)}>
                                        ¡Me encanta!
                                    </Button>
                                </Modal.Body>
                            </Modal>


                            <Button className="nextButton" onClick={handleShowMetal}>
                                Metal
                            </Button>
                            <Modal show={showMetal} onHide={handleCloseMetal} backdrop='static' keyboard="False" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Metal</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Button variant="secondary" value="metal: 2" onClick={(e) => handleCloseMetal(e)}>
                                        Me gusta
                                    </Button>
                                    <Button variant="primary" value="metal: 4" onClick={(e) => handleCloseMetal(e)}>
                                        ¡Me encanta!
                                    </Button>
                                </Modal.Body>
                            </Modal>

                            <Button className="nextButton" onClick={handleShowOpera}>
                                Ópera
                            </Button>
                            <Modal show={showOpera} onHide={handleCloseOpera} backdrop='static' keyboard="False" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Ópera</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Button variant="secondary" value="opera: 2" onClick={(e) => handleCloseOpera(e)}>
                                        Me gusta
                                    </Button>
                                    <Button variant="primary" value="opera: 4" onClick={(e) => handleCloseOpera(e)}>
                                        ¡Me encanta!
                                    </Button>
                                </Modal.Body>
                            </Modal>

                            <Button className="nextButton" onClick={handleShowPunk}>
                                Punk
                            </Button>
                            <Modal show={showPunk} onHide={handleClosePunk} backdrop='static' keyboard="False" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Punk</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Button variant="secondary" value="punk: 2" onClick={(e) => handleClosePunk(e)}>
                                        Me gusta
                                    </Button>
                                    <Button variant="primary" value="punk: 4" onClick={(e) => handleClosePunk(e)}>
                                        ¡Me encanta!
                                    </Button>
                                </Modal.Body>
                            </Modal>
                            <Button className="nextButton" onClick={handleShowRb}>
                                R&B
                            </Button>
                            <Modal show={showRb} onHide={handleCloseRb} backdrop='static' keyboard="False" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>R&B</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Button variant="secondary" value="rb: 2" onClick={(e) => handleCloseRb(e)}>
                                        Me gusta
                                    </Button>
                                    <Button variant="primary" value="rb: 4" onClick={(e) => handleCloseRb(e)}>
                                        ¡Me encanta!
                                    </Button>
                                </Modal.Body>
                            </Modal>

                            <Button className="nextButton" onClick={handleShowReggae}>
                                Reggae
                            </Button>
                            <Modal show={showReggae} onHide={handleCloseReggae} backdrop='static' keyboard="False" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Reggae</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Button variant="secondary" value="reggae: 2" onClick={(e) => handleCloseReggae(e)}>
                                        Me gusta
                                    </Button>
                                    <Button variant="primary" value="reggae: 4" onClick={(e) => handleCloseReggae(e)}>
                                        ¡Me encanta!
                                    </Button>
                                </Modal.Body>
                            </Modal>

                            <Button className="nextButton" onClick={handleShowRock}>
                                Rock
                            </Button>
                            <Modal show={showRock} onHide={handleCloseRock} backdrop='static' keyboard="False" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Rock</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Button variant="secondary" value="rock: 2" onClick={(e) => handleCloseRock(e)}>
                                        Me gusta
                                    </Button>
                                    <Button variant="primary" value="rock: 4" onClick={(e) => handleCloseRock(e)}>
                                        ¡Me encanta!
                                    </Button>
                                </Modal.Body>
                            </Modal>
                            <Button className="nextButton" onClick={handleShowSoul}>
                                Soul
                            </Button>
                            <Modal show={showSoul} onHide={handleCloseSoul} backdrop='static' keyboard="False" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Soul</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Button variant="secondary" value="soul: 2" onClick={(e) => handleCloseSoul(e)}>
                                        Me gusta
                                    </Button>
                                    <Button variant="primary" value="soul: 4" onClick={(e) => handleCloseSoul(e)}>
                                        ¡Me encanta!
                                    </Button>
                                </Modal.Body>
                            </Modal>
                            <Button className="nextButton" onClick={handleShowCopla}>
                                Copla
                            </Button>
                            <Modal show={showCopla} onHide={handleCloseCopla} backdrop='static' keyboard="False" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Copla</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Button variant="secondary" value="copla: 2" onClick={(e) => handleCloseCopla(e)}>
                                        Me gusta
                                    </Button>
                                    <Button variant="primary" value="copla: 4" onClick={(e) => handleCloseCopla(e)}>
                                        ¡Me encanta!
                                    </Button>
                                </Modal.Body>
                            </Modal>
                            <Button className="nextButton" onClick={handleShowPachangueo}>
                                Pachangueo
                            </Button>
                            <Modal show={showPachangueo} onHide={handleClosePachangueo} backdrop='static' keyboard="False" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Pachangueo</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Button variant="secondary" value="pachangueo: 2" onClick={(e) => handleClosePachangueo(e)}>
                                        Me gusta
                                    </Button>
                                    <Button variant="primary" value="pachangueo: 4" onClick={(e) => handleClosePachangueo(e)}>
                                        ¡Me encanta!
                                    </Button>
                                </Modal.Body>
                            </Modal>
                            <Button className="nextButton" onClick={handleShowYeye}>
                                Yé-yé
                            </Button>
                            <Modal show={showYeye} onHide={handleCloseYeye} backdrop='static' keyboard="False" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Yé-yé</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Button variant="secondary" value="yeye: 2" onClick={(e) => handleCloseYeye(e)}>
                                        Me gusta
                                    </Button>
                                    <Button variant="primary" value="yeye: 4" onClick={(e) => handleCloseYeye(e)}>
                                        ¡Me encanta!
                                    </Button>
                                </Modal.Body>
                            </Modal>
                            <Button className="nextButton" onClick={handleShowBolero}>
                                Bolero
                            </Button>
                            <Modal show={showBolero} onHide={handleCloseBolero} backdrop='static' keyboard="False" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Bolero</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Button variant="secondary" value="bolero: 2" onClick={(e) => handleCloseBolero(e)}>
                                        Me gusta
                                    </Button>
                                    <Button variant="primary" value="bolero: 4" onClick={(e) => handleCloseBolero(e)}>
                                        ¡Me encanta!
                                    </Button>
                                </Modal.Body>
                            </Modal>
                            <Button className="nextButton" onClick={handleShowZarzuela}>
                                Zarzuela
                            </Button>
                            <Modal show={showZarzuela} onHide={handleCloseZarzuela} backdrop='static' keyboard="False" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Zarzuela</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Button variant="secondary" value="zarzuela: 2" onClick={(e) => handleCloseZarzuela(e)}>
                                        Me gusta
                                    </Button>
                                    <Button variant="primary" value="zarzuela: 4" onClick={(e) => handleCloseZarzuela(e)}>
                                        ¡Me encanta!
                                    </Button>
                                </Modal.Body>
                            </Modal>
                            <Button className="nextButton" onClick={handleShowFlamenco}>
                                Flamenco
                            </Button>
                            <Modal show={showFlamenco} onHide={handleCloseFlamenco} backdrop='static' keyboard="False" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Flamenco</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Button variant="secondary" value="flamenco: 2" onClick={(e) => handleCloseFlamenco(e)}>
                                        Me gusta
                                    </Button>
                                    <Button variant="primary" value="flamenco: 4" onClick={(e) => handleCloseFlamenco(e)}>
                                        ¡Me encanta!
                                    </Button>
                                </Modal.Body>
                            </Modal>
                        </div>
                        {viewAlertMusica ? (<p>Elige al menos 5</p>) : ""}
                        <div>
                            <button type="button" onClick={() => { setViewMusica(false); setViewCaracter(true) }}>Anterior</button>
                            <button type="button" onClick={() => {
                                if (musica.length >= 5) {
                                    setViewMusica(false)
                                    setViewDeportes(true)
                                } else {
                                    setViewAlertMusica(true)
                                }
                            }}>Siguiente</button>

                        </div>
                    </div>) : ""}
                    <br />
                    {viewDeportes ? (<div>

                        <label>¿Qué deportes practicas?</label>
                        <br />
                        <div>
                            <Button className="nextButton" onClick={handleShowBadminton}>
                                Bádminton
                            </Button>
                            <Modal show={showBadminton} onHide={handleCloseBadminton} backdrop='static' keyboard="False" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Bádminton</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Button variant="secondary" value="badminton: 2" onClick={(e) => handleCloseBadminton(e)}>
                                        Me gusta
                                    </Button>
                                    <Button variant="primary" value="badminton: 4" onClick={(e) => handleCloseBadminton(e)}>
                                        ¡Me encanta!
                                    </Button>
                                </Modal.Body>
                            </Modal>
                            <Button className="nextButton" onClick={handleShowBeisbol}>
                                Béisbol
                            </Button>
                            <Modal show={showBeisbol} onHide={handleCloseBeisbol} backdrop='static' keyboard="False" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Béisbol</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Button variant="secondary" value="beisbol: 2" onClick={(e) => handleCloseBeisbol(e)}>
                                        Me gusta
                                    </Button>
                                    <Button variant="primary" value="beisbol: 4" onClick={(e) => handleCloseBeisbol(e)}>
                                        ¡Me encanta!
                                    </Button>
                                </Modal.Body>
                            </Modal>
                            <Button className="nextButton" onClick={handleShowBoxeo}>
                                Boxeo
                            </Button>
                            <Modal show={showBoxeo} onHide={handleCloseBoxeo} backdrop='static' keyboard="False" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Boxeo</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Button variant="secondary" value="boxeo: 2" onClick={(e) => handleCloseBoxeo(e)}>
                                        Me gusta
                                    </Button>
                                    <Button variant="primary" value="boxeo: 4" onClick={(e) => handleCloseBoxeo(e)}>
                                        ¡Me encanta!
                                    </Button>
                                </Modal.Body>
                            </Modal>
                            <Button className="nextButton" onClick={handleShowBaloncesto}>
                                Baloncesto
                            </Button>
                            <Modal show={showBaloncesto} onHide={handleCloseBaloncesto} backdrop='static' keyboard="False" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Baloncesto</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Button variant="secondary" value="baloncesto: 2" onClick={(e) => handleCloseBaloncesto(e)}>
                                        Me gusta
                                    </Button>
                                    <Button variant="primary" value="baloncesto: 4" onClick={(e) => handleCloseBaloncesto(e)}>
                                        ¡Me encanta!
                                    </Button>
                                </Modal.Body>
                            </Modal>
                            <Button className="nextButton" onClick={handleShowBolos}>
                                Bolos
                            </Button>
                            <Modal show={showBolos} onHide={handleCloseBolos} backdrop='static' keyboard="False" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Bolos</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Button variant="secondary" value="bolos: 2" onClick={(e) => handleCloseBolos(e)}>
                                        Me gusta
                                    </Button>
                                    <Button variant="primary" value="bolos: 4" onClick={(e) => handleCloseBolos(e)}>
                                        ¡Me encanta!
                                    </Button>
                                </Modal.Body>
                            </Modal>
                            <Button className="nextButton" onClick={handleShowPiraguismo}>
                                Piragüismo
                            </Button>
                            <Modal show={showPiraguismo} onHide={handleClosePiraguismo} backdrop='static' keyboard="False" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Piragüismo</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Button variant="secondary" value="piraguismo: 2" onClick={(e) => handleClosePiraguismo(e)}>
                                        Me gusta
                                    </Button>
                                    <Button variant="primary" value="Piraguismo: 4" onClick={(e) => handleClosePiraguismo(e)}>
                                        ¡Me encanta!
                                    </Button>
                                </Modal.Body>
                            </Modal>

                            <Button className="nextButton" onClick={handleShowBuceo}>
                                Buceo
                            </Button>
                            <Modal show={showBuceo} onHide={handleCloseBuceo} backdrop='static' keyboard="False" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Buceo</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Button variant="secondary" value="buceo: 2" onClick={(e) => handleCloseBuceo(e)}>
                                        Me gusta
                                    </Button>
                                    <Button variant="primary" value="buceo: 4" onClick={(e) => handleCloseBuceo(e)}>
                                        ¡Me encanta!
                                    </Button>
                                </Modal.Body>
                            </Modal>
                            <Button className="nextButton" onClick={handleShowFutbol}>
                                Fútbol
                            </Button>
                            <Modal show={showFutbol} onHide={handleCloseFutbol} backdrop='static' keyboard="False" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Fútbol</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Button variant="secondary" value="futbol: 2" onClick={(e) => handleCloseFutbol(e)}>
                                        Me gusta
                                    </Button>
                                    <Button variant="primary" value="futbol: 4" onClick={(e) => handleCloseFutbol(e)}>
                                        ¡Me encanta!
                                    </Button>
                                </Modal.Body>
                            </Modal>
                            <Button className="nextButton" onClick={handleShowCrossfit}>
                                Crossfit
                            </Button>
                            <Modal show={showCrossfit} onHide={handleCloseCrossfit} backdrop='static' keyboard="False" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Crossfit</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Button variant="secondary" value="crossfit: 2" onClick={(e) => handleCloseCrossfit(e)}>
                                        Me gusta
                                    </Button>
                                    <Button variant="primary" value="crossfit: 4" onClick={(e) => handleCloseCrossfit(e)}>
                                        ¡Me encanta!
                                    </Button>
                                </Modal.Body>
                            </Modal>
                            <Button className="nextButton" onClick={handleShowCiclismo}>
                                Ciclismo
                            </Button>
                            <Modal show={showCiclismo} onHide={handleCloseCiclismo} backdrop='static' keyboard="False" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Ciclismo</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Button variant="secondary" value="ciclismo: 2" onClick={(e) => handleCloseCiclismo(e)}>
                                        Me gusta
                                    </Button>
                                    <Button variant="primary" value="ciclismo: 4" onClick={(e) => handleCloseCiclismo(e)}>
                                        ¡Me encanta!
                                    </Button>
                                </Modal.Body>
                            </Modal>
                            <Button className="nextButton" onClick={handleShowGolf}>
                                Golf
                            </Button>
                            <Modal show={showGolf} onHide={handleCloseGolf} backdrop='static' keyboard="False" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Golf</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Button variant="secondary" value="golf: 2" onClick={(e) => handleCloseGolf(e)}>
                                        Me gusta
                                    </Button>
                                    <Button variant="primary" value="golf: 4" onClick={(e) => handleCloseGolf(e)}>
                                        ¡Me encanta!
                                    </Button>
                                </Modal.Body>
                            </Modal>
                            <Button className="nextButton" onClick={handleShowGimnasio}>
                                Gimnasio
                            </Button>
                            <Modal show={showGimnasio} onHide={handleCloseGimnasio} backdrop='static' keyboard="False" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Gimnasio</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Button variant="secondary" value="gimnasio: 2" onClick={(e) => handleCloseGimnasio(e)}>
                                        Me gusta
                                    </Button>
                                    <Button variant="primary" value="gimnasio: 4" onClick={(e) => handleCloseGimnasio(e)}>
                                        ¡Me encanta!
                                    </Button>
                                </Modal.Body>
                            </Modal>
                            <Button className="nextButton" onClick={handleShowExcursionismo}>
                                Excursionismo
                            </Button>
                            <Modal show={showExcursionismo} onHide={handleCloseExcursionismo} backdrop='static' keyboard="False" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Excursionismo</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Button variant="secondary" value="excursionismo: 2" onClick={(e) => handleCloseExcursionismo(e)}>
                                        Me gusta
                                    </Button>
                                    <Button variant="primary" value="excursionismo: 4" onClick={(e) => handleCloseExcursionismo(e)}>
                                        ¡Me encanta!
                                    </Button>
                                </Modal.Body>
                            </Modal>
                            <Button className="nextButton" onClick={handleShowHipica}>
                                Hípica
                            </Button>
                            <Modal show={showHipica} onHide={handleCloseHipica} backdrop='static' keyboard="False" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Hípica</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Button variant="secondary" value="hipica: 2" onClick={(e) => handleCloseHipica(e)}>
                                        Me gusta
                                    </Button>
                                    <Button variant="primary" value="hipica: 4" onClick={(e) => handleCloseHipica(e)}>
                                        ¡Me encanta!
                                    </Button>
                                </Modal.Body>
                            </Modal>
                            <Button className="nextButton" onClick={handleShowPadel}>
                                Pádel
                            </Button>
                            <Modal show={showPadel} onHide={handleClosePadel} backdrop='static' keyboard="False" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Pádel</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Button variant="secondary" value="padel: 2" onClick={(e) => handleClosePadel(e)}>
                                        Me gusta
                                    </Button>
                                    <Button variant="primary" value="padel: 4" onClick={(e) => handleClosePadel(e)}>
                                        ¡Me encanta!
                                    </Button>
                                </Modal.Body>
                            </Modal>
                            <Button className="nextButton" onClick={handleShowRemo}>
                                Remo
                            </Button>
                            <Modal show={showRemo} onHide={handleCloseRemo} backdrop='static' keyboard="False" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Remo</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Button variant="secondary" value="remo: 2" onClick={(e) => handleCloseRemo(e)}>
                                        Me gusta
                                    </Button>
                                    <Button variant="primary" value="remo: 4" onClick={(e) => handleCloseRemo(e)}>
                                        ¡Me encanta!
                                    </Button>
                                </Modal.Body>
                            </Modal>
                            <Button className="nextButton" onClick={handleShowCorrer}>
                                Correr
                            </Button>
                            <Modal show={showCorrer} onHide={handleCloseCorrer} backdrop='static' keyboard="False" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Correr</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Button variant="secondary" value="correr: 2" onClick={(e) => handleCloseCorrer(e)}>
                                        Me gusta
                                    </Button>
                                    <Button variant="primary" value="correr: 4" onClick={(e) => handleCloseCorrer(e)}>
                                        ¡Me encanta!
                                    </Button>
                                </Modal.Body>
                            </Modal>
                            <Button className="nextButton" onClick={handleShowEsqui}>
                                Esquí
                            </Button>
                            <Modal show={showEsqui} onHide={handleCloseEsqui} backdrop='static' keyboard="False" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Esquí</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Button variant="secondary" value="esqui: 2" onClick={(e) => handleCloseEsqui(e)}>
                                        Me gusta
                                    </Button>
                                    <Button variant="primary" value="esqui: 4" onClick={(e) => handleCloseEsqui(e)}>
                                        ¡Me encanta!
                                    </Button>
                                </Modal.Body>
                            </Modal>
                            <Button className="nextButton" onClick={handleShowFronton}>
                                Frontón
                            </Button>
                            <Modal show={showFronton} onHide={handleCloseFronton} backdrop='static' keyboard="False" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Frontón</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Button variant="secondary" value="fronton: 2" onClick={(e) => handleCloseFronton(e)}>
                                        Me gusta
                                    </Button>
                                    <Button variant="primary" value="fronton: 4" onClick={(e) => handleCloseFronton(e)}>
                                        ¡Me encanta!
                                    </Button>
                                </Modal.Body>
                            </Modal>
                            <Button className="nextButton" onClick={handleShowNatacion}>
                                Natación
                            </Button>
                            <Modal show={showNatacion} onHide={handleCloseNatacion} backdrop='static' keyboard="False" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Natación</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Button variant="secondary" value="natacion: 2" onClick={(e) => handleCloseNatacion(e)}>
                                        Me gusta
                                    </Button>
                                    <Button variant="primary" value="natacion: 4" onClick={(e) => handleCloseNatacion(e)}>
                                        ¡Me encanta!
                                    </Button>
                                </Modal.Body>
                            </Modal>
                            <Button className="nextButton" onClick={handleShowTenismesa}>
                                Tenis de mesa
                            </Button>
                            <Modal show={showTenismesa} onHide={handleCloseTenismesa} backdrop='static' keyboard="False" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Tenis de mesa</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Button variant="secondary" value="tenismesa: 2" onClick={(e) => handleCloseTenismesa(e)}>
                                        Me gusta
                                    </Button>
                                    <Button variant="primary" value="tenismesa: 4" onClick={(e) => handleCloseTenismesa(e)}>
                                        ¡Me encanta!
                                    </Button>
                                </Modal.Body>
                            </Modal>
                            <Button className="nextButton" onClick={handleShowTenis}>
                                Tenis
                            </Button>
                            <Modal show={showTenis} onHide={handleCloseTenis} backdrop='static' keyboard="False" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Tenis</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Button variant="secondary" value="tenis: 2" onClick={(e) => handleCloseTenis(e)}>
                                        Me gusta
                                    </Button>
                                    <Button variant="primary" value="tenis: 4" onClick={(e) => handleCloseTenis(e)}>
                                        ¡Me encanta!
                                    </Button>
                                </Modal.Body>
                            </Modal>
                            <Button className="nextButton" onClick={handleShowAjedrez}>
                                Ajedrez
                            </Button>
                            <Modal show={showAjedrez} onHide={handleCloseAjedrez} backdrop='static' keyboard="False" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Ajedrez</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Button variant="secondary" value="ajedrez: 2" onClick={(e) => handleCloseAjedrez(e)}>
                                        Me gusta
                                    </Button>
                                    <Button variant="primary" value="ajedrez: 4" onClick={(e) => handleCloseAjedrez(e)}>
                                        ¡Me encanta!
                                    </Button>
                                </Modal.Body>
                            </Modal>
                            <Button className="nextButton" onClick={handleShowMotociclismo}>
                                Motociclismo
                            </Button>
                            <Modal show={showMotociclismo} onHide={handleCloseMotociclismo} backdrop='static' keyboard="False" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Motociclismo</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Button variant="secondary" value="motociclismo: 2" onClick={(e) => handleCloseMotociclismo(e)}>
                                        Me gusta
                                    </Button>
                                    <Button variant="primary" value="motociclismo: 4" onClick={(e) => handleCloseMotociclismo(e)}>
                                        ¡Me encanta!
                                    </Button>
                                </Modal.Body>
                            </Modal>
                            <Button className="nextButton" onClick={handleShowPetanca}>
                                Petanca
                            </Button>
                            <Modal show={showPetanca} onHide={handleClosePetanca} backdrop='static' keyboard="False" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Petanca</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Button variant="secondary" value="petanca: 2" onClick={(e) => handleClosePetanca(e)}>
                                        Me gusta
                                    </Button>
                                    <Button variant="primary" value="petanca: 4" onClick={(e) => handleClosePetanca(e)}>
                                        ¡Me encanta!
                                    </Button>
                                </Modal.Body>
                            </Modal>
                            <Button className="nextButton" onClick={handleShowCaza}>
                                Caza
                            </Button>
                            <Modal show={showCaza} onHide={handleCloseCaza} backdrop='static' keyboard="False" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Caza</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Button variant="secondary" value="caza: 2" onClick={(e) => handleCloseCaza(e)}>
                                        Me gusta
                                    </Button>
                                    <Button variant="primary" value="caza: 4" onClick={(e) => handleCloseCaza(e)}>
                                        ¡Me encanta!
                                    </Button>
                                </Modal.Body>
                            </Modal>
                            <Button className="nextButton" onClick={handleShowYoga}>
                                Yoga
                            </Button>
                            <Modal show={showYoga} onHide={handleCloseYoga} backdrop='static' keyboard="False" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Yoga</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Button variant="secondary" value="yoga: 2" onClick={(e) => handleCloseYoga(e)}>
                                        Me gusta
                                    </Button>
                                    <Button variant="primary" value="yoga: 4" onClick={(e) => handleCloseYoga(e)}>
                                        ¡Me encanta!
                                    </Button>
                                </Modal.Body>
                            </Modal>
                            <Button className="nextButton" onClick={handleShowPesca}>
                                Pesca
                            </Button>
                            <Modal show={showPesca} onHide={handleClosePesca} backdrop='static' keyboard="False" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Pesca</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Button variant="secondary" value="pesca: 2" onClick={(e) => handleClosePesca(e)}>
                                        Me gusta
                                    </Button>
                                    <Button variant="primary" value="pesca: 4" onClick={(e) => handleClosePesca(e)}>
                                        ¡Me encanta!
                                    </Button>
                                </Modal.Body>
                            </Modal>
                        </div>

                        {viewAlertDeportes ? (<p>Elige al menos 5</p>) : ""}
                        <div>
                            <button type="button" onClick={() => { setViewDeportes(false); setViewMusica(true) }}>Anterior</button>
                            <button type="button" onClick={() => {
                                if (deportes.length >= 5) {
                                    setViewDeportes(false)
                                    setViewPeliculas(true)
                                } else {
                                    setViewAlertDeportes(true)
                                }
                            }}>Siguiente</button>

                        </div>
                    </div>) : ""}


                    {viewPeliculas ? (
                        <div>

                            <label>¿Qué tipo de películas te gustan?</label>
                            <br />
                            <div>
                                <Button className="nextButton" onClick={handleShowAccion}>
                                    Acción
                                </Button>
                                <Modal show={showAccion} onHide={handleCloseAccion} backdrop='static' keyboard="False" centered>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Películas de Acción</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Button variant="secondary" value="accion: 2" onClick={(e) => handleCloseAccion(e)}>
                                            Me gusta
                                        </Button>
                                        <Button variant="primary" value="accion: 4" onClick={(e) => handleCloseAccion(e)}>
                                            ¡Me encanta!
                                        </Button>
                                    </Modal.Body>
                                </Modal>

                                <Button className="nextButton" onClick={handleShowAventura}>
                                    Aventura
                                </Button>
                                <Modal show={showAventura} onHide={handleCloseAventura} backdrop='static' keyboard="False" centered>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Películas de Aventura</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Button variant="secondary" value="aventura: 2" onClick={(e) => handleCloseAventura(e)}>
                                            Me gusta
                                        </Button>
                                        <Button variant="primary" value="aventura: 4" onClick={(e) => handleCloseAventura(e)}>
                                            ¡Me encanta!
                                        </Button>
                                    </Modal.Body>
                                </Modal>
                                <Button className="nextButton" onClick={handleShowComedia}>
                                    Comedia
                                </Button>
                                <Modal show={showComedia} onHide={handleCloseComedia} backdrop='static' keyboard="False" centered>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Películas de Comedia</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Button variant="secondary" value="comedia: 2" onClick={(e) => handleCloseComedia(e)}>
                                            Me gusta
                                        </Button>
                                        <Button variant="primary" value="comedia: 4" onClick={(e) => handleCloseComedia(e)}>
                                            ¡Me encanta!
                                        </Button>
                                    </Modal.Body>
                                </Modal>
                                <Button className="nextButton" onClick={handleShowDocumental}>
                                    Documentales
                                </Button>
                                <Modal show={showDocumental} onHide={handleCloseDocumental} backdrop='static' keyboard="False" centered>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Documentales</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Button variant="secondary" value="documental: 2" onClick={(e) => handleCloseDocumental(e)}>
                                            Me gusta
                                        </Button>
                                        <Button variant="primary" value="documental: 4" onClick={(e) => handleCloseDocumental(e)}>
                                            ¡Me encanta!
                                        </Button>
                                    </Modal.Body>
                                </Modal>
                                <Button className="nextButton" onClick={handleShowDrama}>
                                    Drama
                                </Button>
                                <Modal show={showDrama} onHide={handleCloseDrama} backdrop='static' keyboard="False" centered>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Películas de Drama</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Button variant="secondary" value="drama: 2" onClick={(e) => handleCloseDrama(e)}>
                                            Me gusta
                                        </Button>
                                        <Button variant="primary" value="drama: 4" onClick={(e) => handleCloseDrama(e)}>
                                            ¡Me encanta!
                                        </Button>
                                    </Modal.Body>
                                </Modal>
                                <Button className="nextButton" onClick={handleShowCrimen}>
                                    Crimen
                                </Button>
                                <Modal show={showCrimen} onHide={handleCloseCrimen} backdrop='static' keyboard="False" centered>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Películas de Crimen</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Button variant="secondary" value="crimen: 2" onClick={(e) => handleCloseCrimen(e)}>
                                            Me gusta
                                        </Button>
                                        <Button variant="primary" value="crimen: 4" onClick={(e) => handleCloseCrimen(e)}>
                                            ¡Me encanta!
                                        </Button>
                                    </Modal.Body>
                                </Modal>
                                <Button className="nextButton" onClick={handleShowNegro}>
                                    Cine Negro
                                </Button>
                                <Modal show={showNegro} onHide={handleCloseNegro} backdrop='static' keyboard="False" centered>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Cine negro</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Button variant="secondary" value="negro: 2" onClick={(e) => handleCloseNegro(e)}>
                                            Me gusta
                                        </Button>
                                        <Button variant="primary" value="negro: 4" onClick={(e) => handleCloseNegro(e)}>
                                            ¡Me encanta!
                                        </Button>
                                    </Modal.Body>
                                </Modal>
                                <Button className="nextButton" onClick={handleShowFantasia}>
                                    Fantasía
                                </Button>
                                <Modal show={showFantasia} onHide={handleCloseFantasia} backdrop='static' keyboard="False" centered>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Películas de Fantasía</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Button variant="secondary" value="fantasia: 2" onClick={(e) => handleCloseFantasia(e)}>
                                            Me gusta
                                        </Button>
                                        <Button variant="primary" value="fantasia: 4" onClick={(e) => handleCloseFantasia(e)}>
                                            ¡Me encanta!
                                        </Button>
                                    </Modal.Body>
                                </Modal>
                                <Button className="nextButton" onClick={handleShowHistoricas}>
                                    Películas Históricas
                                </Button>
                                <Modal show={showHistoricas} onHide={handleCloseHistoricas} backdrop='static' keyboard="False" centered>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Películas Históricas</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Button variant="secondary" value="historicas: 2" onClick={(e) => handleCloseHistoricas(e)}>
                                            Me gusta
                                        </Button>
                                        <Button variant="primary" value="historicas: 4" onClick={(e) => handleCloseHistoricas(e)}>
                                            ¡Me encanta!
                                        </Button>
                                    </Modal.Body>
                                </Modal>
                                <Button className="nextButton" onClick={handleShowTerror}>
                                    Terror
                                </Button>
                                <Modal show={showTerror} onHide={handleCloseTerror} backdrop='static' keyboard="False" centered>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Películas de Terror</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Button variant="secondary" value="terror: 2" onClick={(e) => handleCloseTerror(e)}>
                                            Me gusta
                                        </Button>
                                        <Button variant="primary" value="terror: 4" onClick={(e) => handleCloseTerror(e)}>
                                            ¡Me encanta!
                                        </Button>
                                    </Modal.Body>
                                </Modal>
                                <Button className="nextButton" onClick={handleShowMisterio}>
                                    Misterio
                                </Button>
                                <Modal show={showMisterio} onHide={handleCloseMisterio} backdrop='static' keyboard="False" centered>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Películas de Misterio</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Button variant="secondary" value="misterio: 2" onClick={(e) => handleCloseMisterio(e)}>
                                            Me gusta
                                        </Button>
                                        <Button variant="primary" value="misterio: 4" onClick={(e) => handleCloseMisterio(e)}>
                                            ¡Me encanta!
                                        </Button>
                                    </Modal.Body>
                                </Modal>
                                <Button className="nextButton" onClick={handleShowPolitica}>
                                    Política
                                </Button>
                                <Modal show={showPolitica} onHide={handleClosePolitica} backdrop='static' keyboard="False" centered>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Películas de Política</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Button variant="secondary" value="politica: 2" onClick={(e) => handleClosePolitica(e)}>
                                            Me gusta
                                        </Button>
                                        <Button variant="primary" value="politica: 4" onClick={(e) => handleClosePolitica(e)}>
                                            ¡Me encanta!
                                        </Button>
                                    </Modal.Body>
                                </Modal>
                                <Button className="nextButton" onClick={handleShowRomantica}>
                                    Romántica
                                </Button>
                                <Modal show={showRomantica} onHide={handleCloseRomantica} backdrop='static' keyboard="False" centered>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Películas románticas</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Button variant="secondary" value="romantica: 2" onClick={(e) => handleCloseRomantica(e)}>
                                            Me gusta
                                        </Button>
                                        <Button variant="primary" value="romantica: 4" onClick={(e) => handleCloseRomantica(e)}>
                                            ¡Me encanta!
                                        </Button>
                                    </Modal.Body>
                                </Modal>
                                <Button className="nextButton" onClick={handleShowCienciaFiccion}>
                                    Ciencia Ficción
                                </Button>
                                <Modal show={showCienciaFiccion} onHide={handleCloseCienciaFiccion} backdrop='static' keyboard="False" centered>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Películas de Ciencia Ficción</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Button variant="secondary" value="cienciaficcion: 2" onClick={(e) => handleCloseCienciaFiccion(e)}>
                                            Me gusta
                                        </Button>
                                        <Button variant="primary" value="cienciaficcion: 4" onClick={(e) => handleCloseCienciaFiccion(e)}>
                                            ¡Me encanta!
                                        </Button>
                                    </Modal.Body>
                                </Modal>
                                <Button className="nextButton" onClick={handleShowSuspense}>
                                    Suspense
                                </Button>
                                <Modal show={showSuspense} onHide={handleCloseSuspense} backdrop='static' keyboard="False" centered>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Películas de Suspense</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Button variant="secondary" value="suspense: 2" onClick={(e) => handleCloseSuspense(e)}>
                                            Me gusta
                                        </Button>
                                        <Button variant="primary" value="suspense: 4" onClick={(e) => handleCloseSuspense(e)}>
                                            ¡Me encanta!
                                        </Button>
                                    </Modal.Body>
                                </Modal>
                                <Button className="nextButton" onClick={handleShowMusical}>
                                    Musicales
                                </Button>
                                <Modal show={showMusical} onHide={handleCloseMusical} backdrop='static' keyboard="False" centered>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Musicales</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Button variant="secondary" value="musical: 2" onClick={(e) => handleCloseMusical(e)}>
                                            Me gusta
                                        </Button>
                                        <Button variant="primary" value="musical: 4" onClick={(e) => handleCloseMusical(e)}>
                                            ¡Me encanta!
                                        </Button>
                                    </Modal.Body>
                                </Modal>
                                <Button className="nextButton" onClick={handleShowBelico}>
                                    Bélico
                                </Button>
                                <Modal show={showBelico} onHide={handleCloseBelico} backdrop='static' keyboard="False" centered>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Películas Bélicas</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Button variant="secondary" value="belico: 2" onClick={(e) => handleCloseBelico(e)}>
                                            Me gusta
                                        </Button>
                                        <Button variant="primary" value="belico: 4" onClick={(e) => handleCloseBelico(e)}>
                                            ¡Me encanta!
                                        </Button>
                                    </Modal.Body>
                                </Modal>
                                <Button className="nextButton" onClick={handleShowWestern}>
                                    Westerns
                                </Button>
                                <Modal show={showWestern} onHide={handleCloseWestern} backdrop='static' keyboard="False" centered>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Westerns</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Button variant="secondary" value="western: 2" onClick={(e) => handleCloseWestern(e)}>
                                            Me gusta
                                        </Button>
                                        <Button variant="primary" value="western: 4" onClick={(e) => handleCloseWestern(e)}>
                                            ¡Me encanta!
                                        </Button>
                                    </Modal.Body>
                                </Modal>

                            </div>
                            {viewAlertPeliculas ? (<p>Elige al menos 5</p>) : ""}
                            <div>
                                <button type="button" onClick={() => { setViewPeliculas(false); setViewDeportes(true) }}>Anterior</button>
                                <button type="button" onClick={() => {
                                    if (peliculas.length >= 4) {
                                        setViewPeliculas(false)
                                        setViewActividades(true)
                                    } else {
                                        setViewAlertPeliculas(true)
                                    }
                                }}>Siguiente</button>
                            </div>
                        </div>) : ""}
                    <br />
                    {viewActividades ? (
                        <div>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                        Actividades al aire libre
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div>
                                            <Button className="nextButton" onClick={handleShowPlaya}>
                                                Actividades en la Playa
                                            </Button>
                                            <Modal show={showPlaya} onHide={handleClosePlaya} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Actividades en la Playa</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="playa: 2" onClick={(e) => handleClosePlaya(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="playa: 4" onClick={(e) => handleClosePlaya(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowAves}>
                                                Observación de Aves
                                            </Button>
                                            <Modal show={showAves} onHide={handleCloseAves} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Observación de Aves</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="aves: 2" onClick={(e) => handleCloseAves(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="aves: 4" onClick={(e) => handleCloseAves(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowJardineria}>
                                                Jardinería
                                            </Button>
                                            <Modal show={showJardineria} onHide={handleCloseJardineria} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Jardinería</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="jardineria: 2" onClick={(e) => handleCloseJardineria(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="jardineria: 4" onClick={(e) => handleCloseJardineria(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowMontanismo}>
                                                Montañismo
                                            </Button>
                                            <Modal show={showMontanismo} onHide={handleCloseMontanismo} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Montañismo</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="montanismo: 2" onClick={(e) => handleCloseMontanismo(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="montanismo: 4" onClick={(e) => handleCloseMontanismo(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>

                                        </div>
                                        {viewAlertActividades ? (<p>Elige mínimo 1</p>) : ""}

                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>
                                        Hazlo tú mismo
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div>
                                            <Button className="nextButton" onClick={handleShowManualidades}>
                                                Manualidades
                                            </Button>
                                            <Modal show={showManualidades} onHide={handleCloseManualidades} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Manualidades</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="manualidades: 2" onClick={(e) => handleCloseManualidades(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="manualidades: 4" onClick={(e) => handleCloseManualidades(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowArtesanias}>
                                                Artesanía
                                            </Button>
                                            <Modal show={showArtesanias} onHide={handleCloseArtesanias} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Artesanía</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="artesanias: 2" onClick={(e) => handleCloseArtesanias(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="artesanias: 4" onClick={(e) => handleCloseArtesanias(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowTejido}>
                                                Tejido
                                            </Button>
                                            <Modal show={showTejido} onHide={handleCloseTejido} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Tejido</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="tejido: 2" onClick={(e) => handleCloseTejido(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="tejido: 4" onClick={(e) => handleCloseTejido(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowCroche}>
                                                Croché
                                            </Button>
                                            <Modal show={showCroche} onHide={handleCloseCroche} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Croché</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="croche: 2" onClick={(e) => handleCloseCroche(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="croche: 4" onClick={(e) => handleCloseCroche(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowGanchillo}>
                                                Ganchillo
                                            </Button>
                                            <Modal show={showGanchillo} onHide={handleCloseGanchillo} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Ganchillo</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="ganchillo: 2" onClick={(e) => handleCloseGanchillo(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="ganchillo: 4" onClick={(e) => handleCloseGanchillo(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowMacrame}>
                                                Macramé
                                            </Button>
                                            <Modal show={showMacrame} onHide={handleCloseMacrame} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Macramé</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="macrame: 2" onClick={(e) => handleCloseMacrame(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="macrame: 4" onClick={(e) => handleCloseMacrame(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowBordado}>
                                                Bordado
                                            </Button>
                                            <Modal show={showBordado} onHide={handleCloseBordado} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Bordado</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="bordado: 2" onClick={(e) => handleCloseBordado(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="bordado: 4" onClick={(e) => handleCloseBordado(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowPuntocruz}>
                                                Punto de cruz
                                            </Button>
                                            <Modal show={showPuntocruz} onHide={handleClosePuntocruz} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Punto de cruz</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="puntocruz: 2" onClick={(e) => handleClosePuntocruz(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="puntocruz: 4" onClick={(e) => handleClosePuntocruz(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowBolillo}>
                                                Bolillo
                                            </Button>
                                            <Modal show={showBolillo} onHide={handleCloseBolillo} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Bolillo</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="bolillo: 2" onClick={(e) => handleCloseBolillo(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="bolillo: 4" onClick={(e) => handleCloseBolillo(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowCeramica}>
                                                Cerámica
                                            </Button>
                                            <Modal show={showCeramica} onHide={handleCloseCeramica} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Cerámica</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="ceramica: 2" onClick={(e) => handleCloseCeramica(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="ceramica: 4" onClick={(e) => handleCloseCeramica(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowModelismo}>
                                                Modelismo
                                            </Button>
                                            <Modal show={showModelismo} onHide={handleCloseModelismo} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Modelismo</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="modelismo: 2" onClick={(e) => handleCloseModelismo(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="modelismo: 4" onClick={(e) => handleCloseModelismo(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowCarpinteria}>
                                                Carpintería
                                            </Button>
                                            <Modal show={showCarpinteria} onHide={handleCloseCarpinteria} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Carpintería</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="carpinteria: 2" onClick={(e) => handleCloseCarpinteria(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="carpinteria: 4" onClick={(e) => handleCloseCarpinteria(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowCostura}>
                                                Costura
                                            </Button>
                                            <Modal show={showCostura} onHide={handleCloseCostura} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Costura</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="costura: 2" onClick={(e) => handleCloseCostura(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="costura: 4" onClick={(e) => handleCloseCostura(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowBricolaje}>
                                                Bricolaje
                                            </Button>
                                            <Modal show={showBricolaje} onHide={handleCloseBricolaje} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Bricolaje</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="bricolaje: 2" onClick={(e) => handleCloseBricolaje(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="bricolaje: 4" onClick={(e) => handleCloseBricolaje(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowRobotica}>
                                                Robótica
                                            </Button>
                                            <Modal show={showRobotica} onHide={handleCloseRobotica} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Robótica</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="robotica: 2" onClick={(e) => handleCloseRobotica(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="robotica: 4" onClick={(e) => handleCloseRobotica(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                        </div>
                                        {viewAlertActividades ? (<p>Elige mínimo 2</p>) : ""}
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>
                                        Actividades de Cocina
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div>
                                            <Button className="nextButton" onClick={handleShowCerveza}>
                                                Cerveza Artesanal
                                            </Button>
                                            <Modal show={showCerveza} onHide={handleCloseCerveza} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Cerveza Artesanal</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="cerveza: 2" onClick={(e) => handleCloseCerveza(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="cerveza: 4" onClick={(e) => handleCloseCerveza(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowCocina}>
                                                Cocina
                                            </Button>
                                            <Modal show={showCocina} onHide={handleCloseCocina} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Cocina</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="cocina: 2" onClick={(e) => handleCloseCocina(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="cocina: 4" onClick={(e) => handleCloseCocina(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowReposteria}>
                                                Repostería
                                            </Button>
                                            <Modal show={showReposteria} onHide={handleCloseReposteria} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Repostería</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="reposteria: 2" onClick={(e) => handleCloseReposteria(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="reposteria: 4" onClick={(e) => handleCloseReposteria(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowGastronomia}>
                                                Gastronomía Molecular
                                            </Button>
                                            <Modal show={showGastronomia} onHide={handleCloseGastronomia} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Gastronomía Molecular</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="gastronomia: 2" onClick={(e) => handleCloseGastronomia(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="gastronomia: 4" onClick={(e) => handleCloseGastronomia(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowIndia}>
                                                Cocina India
                                            </Button>
                                            <Modal show={showIndia} onHide={handleCloseIndia} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Cocina India</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="india: 2" onClick={(e) => handleCloseIndia(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="india: 4" onClick={(e) => handleCloseIndia(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowOriental}>
                                                Cocina Oriental
                                            </Button>
                                            <Modal show={showOriental} onHide={handleCloseOriental} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Cocina Oriental</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="oriental: 2" onClick={(e) => handleCloseOriental(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="oriental: 4" onClick={(e) => handleCloseOriental(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowMexicana}>
                                                Cocina Mexicana
                                            </Button>
                                            <Modal show={showMexicana} onHide={handleCloseMexicana} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Cocina Mexicana</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="mexicana: 2" onClick={(e) => handleCloseMexicana(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="mexicana: 4" onClick={(e) => handleCloseMexicana(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowMediterranea}>
                                                Cocina Mediterránea
                                            </Button>
                                            <Modal show={showMediterranea} onHide={handleCloseMediterranea} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Cocina Mediterránea</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="mediterranea: 2" onClick={(e) => handleCloseMediterranea(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="mediterranea: 4" onClick={(e) => handleCloseMediterranea(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                        </div>
                                        {viewAlertActividades ? (<p>Elige mínimo 1</p>) : ""}
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>
                                        Actividades de Arte
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div>
                                            <Button className="nextButton" onClick={handleShowMuseos}>
                                                Museos
                                            </Button>
                                            <Modal show={showMuseos} onHide={handleCloseMuseos} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Museos</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="museos: 2" onClick={(e) => handleCloseMuseos(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="museos: 4" onClick={(e) => handleCloseMuseos(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowEscritura}>
                                                Escritura
                                            </Button>
                                            <Modal show={showEscritura} onHide={handleCloseEscritura} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Escritura</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="escritura: 2" onClick={(e) => handleCloseEscritura(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="escritura: 4" onClick={(e) => handleCloseEscritura(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>

                                            <Button className="nextButton" onClick={handleShowBeatboxing}>
                                                Beatboxing
                                            </Button>
                                            <Modal show={showBeatboxing} onHide={handleCloseBeatboxing} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Beatboxing</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="beatboxing: 2" onClick={(e) => handleCloseBeatboxing(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="beatboxing: 4" onClick={(e) => handleCloseBeatboxing(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>  <Button className="nextButton" onClick={handleShowComponer}>
                                                Componer música
                                            </Button>
                                            <Modal show={showComponer} onHide={handleCloseComponer} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Componer música</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="componermusica: 2" onClick={(e) => handleCloseComponer(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="componermusica: 4" onClick={(e) => handleCloseComponer(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowBaile}>
                                                Baile
                                            </Button>
                                            <Modal show={showBaile} onHide={handleCloseBaile} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Baile</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="baile: 2" onClick={(e) => handleCloseBaile(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="baile: 4" onClick={(e) => handleCloseBaile(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowFotografia}>
                                                Fotografía
                                            </Button>
                                            <Modal show={showFotografia} onHide={handleCloseFotografia} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Fotografía</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="fotografia: 2" onClick={(e) => handleCloseFotografia(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="fotografia: 4" onClick={(e) => handleCloseFotografia(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowDibujo}>
                                                Dibujo
                                            </Button>
                                            <Modal show={showDibujo} onHide={handleCloseDibujo} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Dibujo</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="dibujo: 2" onClick={(e) => handleCloseDibujo(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="dibujo: 4" onClick={(e) => handleCloseDibujo(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowInstrumentos}>
                                                Instrumentos
                                            </Button>
                                            <Modal show={showInstrumentos} onHide={handleCloseInstrumentos} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Instrumentos</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="instrumentos: 2" onClick={(e) => handleCloseInstrumentos(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="instrumentos: 4" onClick={(e) => handleCloseInstrumentos(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowCanto}>
                                                Canto
                                            </Button>
                                            <Modal show={showCanto} onHide={handleCloseCanto} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Canto</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="canto: 2" onClick={(e) => handleCloseCanto(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="canto: 4" onClick={(e) => handleCloseCanto(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowConciertos}>
                                                Conciertos
                                            </Button>
                                            <Modal show={showConciertos} onHide={handleCloseConciertos} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Conciertos</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="conciertos: 2" onClick={(e) => handleCloseConciertos(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="conciertos: 4" onClick={(e) => handleCloseConciertos(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowTeatro}>
                                                Teatro
                                            </Button>
                                            <Modal show={showTeatro} onHide={handleCloseTeatro} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Teatro</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="teatro: 2" onClick={(e) => handleCloseTeatro(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="teatro: 4" onClick={(e) => handleCloseTeatro(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowPintura}>
                                                Pintura
                                            </Button>
                                            <Modal show={showPintura} onHide={handleClosePintura} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Pintura</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="pintura: 2" onClick={(e) => handleClosePintura(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="pintura: 4" onClick={(e) => handleClosePintura(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowLiteratura}>
                                                Literatura
                                            </Button>
                                            <Modal show={showLiteratura} onHide={handleCloseLiteratura} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Literatura</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="literatura: 2" onClick={(e) => handleCloseLiteratura(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="literatura: 4" onClick={(e) => handleCloseLiteratura(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowPoesia}>
                                                Poesía
                                            </Button>
                                            <Modal show={showPoesia} onHide={handleClosePoesia} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Poesía</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="poesia: 2" onClick={(e) => handleClosePoesia(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="poesia: 4" onClick={(e) => handleClosePoesia(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowComics}>
                                                Cómics
                                            </Button>
                                            <Modal show={showComics} onHide={handleCloseComics} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Cómics</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="comics: 2" onClick={(e) => handleCloseComics(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="comics: 4" onClick={(e) => handleCloseComics(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowBlogging}>
                                                Blogging
                                            </Button>
                                            <Modal show={showBlogging} onHide={handleCloseBlogging} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Blogging</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="blogging: 2" onClick={(e) => handleCloseBlogging(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="blogging: 4" onClick={(e) => handleCloseBlogging(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowCine}>
                                                Cine
                                            </Button>
                                            <Modal show={showCine} onHide={handleCloseCine} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Cine</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="cine: 2" onClick={(e) => handleCloseCine(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="cine: 4" onClick={(e) => handleCloseCine(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                        </div>
                                        {viewAlertActividades ? (<p>Elige mínimo 3</p>) : ""}
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>
                                        Actividades de entretenimiento
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div>
                                            <Button className="nextButton" onClick={handleShowMesa}>
                                                Juegos de mesa
                                            </Button>
                                            <Modal show={showMesa} onHide={handleCloseMesa} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Juegos de Mesa</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="mesa: 2" onClick={(e) => handleCloseMesa(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="mesa: 4" onClick={(e) => handleCloseMesa(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowDardos}>
                                                Dardos
                                            </Button>
                                            <Modal show={showDardos} onHide={handleCloseDardos} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Dardos</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="dardos: 2" onClick={(e) => handleCloseDardos(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="dardos: 4" onClick={(e) => handleCloseDardos(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowCrucigramas}>
                                                Crucigramas
                                            </Button>
                                            <Modal show={showCrucigramas} onHide={handleCloseCrucigramas} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Crucigramas</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="crucigramas: 2" onClick={(e) => handleCloseCrucigramas(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="crucigramas: 4" onClick={(e) => handleCloseCrucigramas(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowCartas}>
                                                Juegos de cartas
                                            </Button>
                                            <Modal show={showCartas} onHide={handleCloseCartas} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Juegos de cartas</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="cartas: 2" onClick={(e) => handleCloseCartas(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="cartas: 4" onClick={(e) => handleCloseCartas(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowRompecabezas}>
                                                Rompecabezas
                                            </Button>
                                            <Modal show={showRompecabezas} onHide={handleCloseRompecabezas} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Rompecabezas</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="rompecabezas: 2" onClick={(e) => handleCloseRompecabezas(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="rompecabezas: 4" onClick={(e) => handleCloseRompecabezas(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowPoker}>
                                                Póker
                                            </Button>
                                            <Modal show={showPoker} onHide={handleClosePoker} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Póker</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="poker: 2" onClick={(e) => handleClosePoker(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="poker: 4" onClick={(e) => handleClosePoker(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowVideojuegos}>
                                                Videojuegos
                                            </Button>
                                            <Modal show={showVideojuegos} onHide={handleCloseVideojuegos} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Videojuegos</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="videojuegos: 2" onClick={(e) => handleCloseVideojuegos(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="videojuegos: 4" onClick={(e) => handleCloseVideojuegos(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowBingo}>
                                                Bingo
                                            </Button>
                                            <Modal show={showBingo} onHide={handleCloseBingo} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Bingo</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="bingo: 2" onClick={(e) => handleCloseBingo(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="bingo: 4" onClick={(e) => handleCloseBingo(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowCasino}>
                                                Casino
                                            </Button>
                                            <Modal show={showCasino} onHide={handleCloseCasino} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Casino</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="casino: 2" onClick={(e) => handleCloseCasino(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="casino: 4" onClick={(e) => handleCloseCasino(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowMagia}>
                                                Magia
                                            </Button>
                                            <Modal show={showMagia} onHide={handleCloseMagia} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Magia</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="magia: 2" onClick={(e) => handleCloseMagia(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="magia: 4" onClick={(e) => handleCloseMagia(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowTelenovelas}>
                                                Telenovelas
                                            </Button>
                                            <Modal show={showTelenovelas} onHide={handleCloseTelenovelas} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Telenovelas</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="telenovelas: 2" onClick={(e) => handleCloseTelenovelas(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="telenovelas: 4" onClick={(e) => handleCloseTelenovelas(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            {viewAlertActividades ? (<p>Elige mínimo 2</p>) : ""}
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5">
                                    <Accordion.Header>
                                        Actividades de sociedad
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div>
                                            <Button className="nextButton" onClick={handleShowReciclaje}>
                                                Reciclaje
                                            </Button>
                                            <Modal show={showReciclaje} onHide={handleCloseReciclaje} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Reciclaje</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="reciclaje: 2" onClick={(e) => handleCloseReciclaje(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="reciclaje: 4" onClick={(e) => handleCloseReciclaje(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowIglesia}>
                                                Iglesia
                                            </Button>
                                            <Modal show={showIglesia} onHide={handleCloseIglesia} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Iglesia</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="iglesia: 2" onClick={(e) => handleCloseIglesia(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="iglesia: 4" onClick={(e) => handleCloseIglesia(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowSocializar}>
                                                Socializar
                                            </Button>
                                            <Modal show={showSocializar} onHide={handleCloseSocializar} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Socializar</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="socializar: 2" onClick={(e) => handleCloseSocializar(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="socializar: 4" onClick={(e) => handleCloseSocializar(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowVoluntariado}>
                                                Voluntariado
                                            </Button>
                                            <Modal show={showVoluntariado} onHide={handleCloseVoluntariado} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Voluntariado</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="voluntariado: 2" onClick={(e) => handleCloseVoluntariado(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="voluntariado: 4" onClick={(e) => handleCloseVoluntariado(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowAnimales}>
                                                Animales
                                            </Button>
                                            <Modal show={showAnimales} onHide={handleCloseAnimales} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Animales</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="animales: 2" onClick={(e) => handleCloseAnimales(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="animales: 4" onClick={(e) => handleCloseAnimales(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowAstrologia}>
                                                Astrología
                                            </Button>
                                            <Modal show={showAstrologia} onHide={handleCloseAstrologia} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Astrología</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="astrologia: 2" onClick={(e) => handleCloseAstrologia(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="astrologia: 4" onClick={(e) => handleCloseAstrologia(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowTarot}>
                                                Tarot
                                            </Button>
                                            <Modal show={showTarot} onHide={handleCloseTarot} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Tarot</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="tarot: 2" onClick={(e) => handleCloseTarot(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="tarot: 4" onClick={(e) => handleCloseTarot(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowMeditacion}>
                                                Meditación
                                            </Button>
                                            <Modal show={showMeditacion} onHide={handleCloseMeditacion} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Meditación</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="meditacion: 2" onClick={(e) => handleCloseMeditacion(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="meditacion: 4" onClick={(e) => handleCloseMeditacion(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowCorazon}>
                                                Revistas del corazón
                                            </Button>
                                            <Modal show={showCorazon} onHide={handleCloseCorazon} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Revistas del corazón</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="corazon: 2" onClick={(e) => handleCloseCorazon(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="corazon: 4" onClick={(e) => handleCloseCorazon(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                        </div>  {viewAlertActividades ? (<p>Elige mínimo 1</p>) : ""}
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="6">
                                    <Accordion.Header>
                                        Actividades grupales
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div>
                                            <Button className="nextButton" onClick={handleShowViajar}>
                                                Viajar
                                            </Button>
                                            <Modal show={showViajar} onHide={handleCloseViajar} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Viajar</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="viajar: 2" onClick={(e) => handleCloseViajar(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="viajar: 4" onClick={(e) => handleCloseViajar(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowVino}>
                                                Catas de Vino
                                            </Button>
                                            <Modal show={showVino} onHide={handleCloseVino} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Catas de Vino</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="vino: 2" onClick={(e) => handleCloseVino(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="vino: 4" onClick={(e) => handleCloseVino(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowCosplay}>
                                                Cosplay
                                            </Button>
                                            <Modal show={showCosplay} onHide={handleCloseCosplay} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Cosplay</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="cosplay: 2" onClick={(e) => handleCloseCosplay(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="cosplay: 4" onClick={(e) => handleCloseCosplay(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal> <Button className="nextButton" onClick={handleShowDisfraces}>
                                                Disfraces
                                            </Button>
                                            <Modal show={showDisfraces} onHide={handleCloseDisfraces} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Disfraces</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="disfraces: 2" onClick={(e) => handleCloseDisfraces(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="disfraces: 4" onClick={(e) => handleCloseDisfraces(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowTurismo}>
                                                Turismo local
                                            </Button>
                                            <Modal show={showTurismo} onHide={handleCloseTurismo} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Turismo local</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="turismo: 2" onClick={(e) => handleCloseTurismo(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="turismo: 4" onClick={(e) => handleCloseTurismo(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowRol}>
                                                Juegos de rol
                                            </Button>
                                            <Modal show={showRol} onHide={handleCloseRol} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Juegos de rol</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="rol: 2" onClick={(e) => handleCloseRol(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="rol: 4" onClick={(e) => handleCloseRol(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowVivo}>
                                                Rol en vivo
                                            </Button>
                                            <Modal show={showVivo} onHide={handleCloseVivo} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Rol en vivo</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="vivo: 2" onClick={(e) => handleCloseVivo(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="vivo: 4" onClick={(e) => handleCloseVivo(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowHistorica}>
                                                Recreación histórica
                                            </Button>
                                            <Modal show={showHistorica} onHide={handleCloseHistorica} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Recreación histórica</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="historica: 2" onClick={(e) => handleCloseHistorica(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="historica: 4" onClick={(e) => handleCloseHistorica(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowFumadores}>
                                                Club de fumadores
                                            </Button>
                                            <Modal show={showFumadores} onHide={handleCloseFumadores} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Club de fumadores</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="fumadores: 2" onClick={(e) => handleCloseFumadores(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="fumadores: 4" onClick={(e) => handleCloseFumadores(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                        </div>{viewAlertActividades ? (<p>Elige mínimo 1</p>) : ""}
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="7">
                                    <Accordion.Header>
                                        Coleccionismo
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div>
                                            <Button className="nextButton" onClick={handleShowAntiguedades}>
                                                Antigüedades
                                            </Button>
                                            <Modal show={showAntiguedades} onHide={handleCloseAntiguedades} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Antigüedades</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="antiguedades: 2" onClick={(e) => handleCloseAntiguedades(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="antiguedades: 4" onClick={(e) => handleCloseAntiguedades(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowFilatelia}>
                                                Filatelia
                                            </Button>
                                            <Modal show={showFilatelia} onHide={handleCloseFilatelia} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Filatelia</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="filatelia: 2" onClick={(e) => handleCloseFilatelia(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="filatelia: 4" onClick={(e) => handleCloseFilatelia(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowNumismatica}>
                                                Numismática
                                            </Button>
                                            <Modal show={showNumismatica} onHide={handleCloseNumismatica} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Numismática</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="numismatica: 2" onClick={(e) => handleCloseNumismatica(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="numismatica: 4" onClick={(e) => handleCloseNumismatica(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="8">
                                    <Accordion.Header>
                                        Ciencias
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div>
                                            <Button className="nextButton" onClick={handleShowAstronomia}>
                                                Astronomía
                                            </Button>
                                            <Modal show={showAstronomia} onHide={handleCloseAstronomia} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Astronomía</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="astronomia: 2" onClick={(e) => handleCloseAstronomia(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="astronomia: 4" onClick={(e) => handleCloseAstronomia(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowHistoria}>
                                                Historia
                                            </Button>
                                            <Modal show={showHistoria} onHide={handleCloseHistoria} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Historia</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="historia: 2" onClick={(e) => handleCloseHistoria(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="historia: 4" onClick={(e) => handleCloseHistoria(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowMatematicas}>
                                                Matemáticas
                                            </Button>
                                            <Modal show={showMatematicas} onHide={handleCloseMatematicas} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Matemáticas</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="matematicas: 2" onClick={(e) => handleCloseMatematicas(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="matematicas: 4" onClick={(e) => handleCloseMatematicas(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowFisica}>
                                                Física
                                            </Button>
                                            <Modal show={showFisica} onHide={handleCloseFisica} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Física</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="fisica: 2" onClick={(e) => handleCloseFisica(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="fisica: 4" onClick={(e) => handleCloseFisica(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowQuimica}>
                                                Química
                                            </Button>
                                            <Modal show={showQuimica} onHide={handleCloseQuimica} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Química</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="quimica: 2" onClick={(e) => handleCloseQuimica(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="quimica: 4" onClick={(e) => handleCloseQuimica(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowFilologia}>
                                                Filología
                                            </Button>
                                            <Modal show={showFilologia} onHide={handleCloseFilologia} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Filología</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="filologia: 2" onClick={(e) => handleCloseFilologia(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="filologia: 4" onClick={(e) => handleCloseFilologia(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowBiologia}>
                                                Biología
                                            </Button>
                                            <Modal show={showBiologia} onHide={handleCloseBiologia} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Biología</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="biologia: 2" onClick={(e) => handleCloseBiologia(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="biologia: 4" onClick={(e) => handleCloseBiologia(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                            <Button className="nextButton" onClick={handleShowZoologia}>
                                                Zoología
                                            </Button>
                                            <Modal show={showZoologia} onHide={handleCloseZoologia} backdrop='static' keyboard="False" centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Zoología</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Button variant="secondary" value="zoologia: 2" onClick={(e) => handleCloseZoologia(e)}>
                                                        Me gusta
                                                    </Button>
                                                    <Button variant="primary" value="zoologia: 4" onClick={(e) => handleCloseZoologia(e)}>
                                                        ¡Me encanta!
                                                    </Button>
                                                </Modal.Body>
                                            </Modal>
                                        </div>  {viewAlertActividades ? (<p>Elige mínimo 1</p>) : ""}
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <div>
                                <button type="button" onClick={() => { setViewActividades(false); setViewPeliculas(true) }}>Anterior</button>
                                <button type="button" onClick={() => {
                                    if (actividades.length >= 11) {
                                        setViewActividades(false)
                                        setViewCarnet(true)
                                    } else {
                                        setViewAlertActividades(true)
                                    }
                                }}>Siguiente</button>

                            </div>
                        </div>

                    ) : ""}


                    {viewCarnet ? (<div>
                        <label>¿Tienes carnet de conducir?</label>
                        <br />
                        <input type="radio" name="carnet" value="si" id="si" onChange={(e) => setCarnet(true)}></input><label htmlFor="si">&nbsp;Sí</label>
                        <br />
                        <input type="radio" name="carnet" value="no" id="no" onChange={(e) => setCarnet(false)}></input><label htmlFor="no">&nbsp;No</label>
                        {viewAlertCarnet ? (<p>Este campo es obligatorio</p>) : ""}
                        <div>
                            <button type="button" onClick={() => { setViewCarnet(false); setViewActividades(true) }}>Anterior</button>
                            <button type="button" onClick={() => {
                                if (carnet !== "") {
                                    setViewCarnet(false)
                                    setViewZona(true)
                                } else {
                                    setViewAlertCarnet(true)
                                }
                            }}>Siguiente</button>

                        </div>
                    </div >) : ""}


                    {
                        viewZona ? (<div>
                            <label>Estarías interesado en un coliving situado...</label>
                            <br />
                            <button type="button" value="costa" className="botonAfinidad" name="ubicacion" onClick={(e) => setUbicacion((ubicacion) => [...ubicacion, e.target.value])} >Cerca de la costa</button>
                            <button type="button" value="interior" className="botonAfinidad" name="ubicacion" onClick={(e) => setUbicacion((ubicacion) => [...ubicacion, e.target.value])} >En el interior</button>
                            <button type="button" value="montaña" className="botonAfinidad" name="ubicacion" onClick={(e) => setUbicacion((ubicacion) => [...ubicacion, e.target.value])} >Cerca de montañas</button>
                            <button type="button" value="ciudad" className="botonAfinidad" name="ubicacion" onClick={(e) => setUbicacion((ubicacion) => [...ubicacion, e.target.value])} >En una ciudad</button>

                            {viewAlertZona ? (<p>Este campo es obligatorio</p>) : ""}
                            <div>
                                <button type="button" onClick={() => { setViewZona(false); setViewCarnet(true) }}>Anterior</button>
                                <button type="button" onClick={() => {
                                    if (ubicacion !== "") {
                                        setViewZona(false)
                                        setViewTipoVivienda(true)
                                    } else {
                                        setViewAlertZona(true)
                                    }
                                }}>Siguiente</button>

                            </div>
                        </div>) : ""
                    }



                    {
                        viewTipoVivienda ? (<div>

                            <label>Estarías interesado en una vivienda del tipo...</label>
                            <br />
                            <button type="button" value="piso" className="botonAfinidad" name="tipoVivienda" onClick={(e) => setTipoVivienda((tipoVivienda) => [...tipoVivienda, e.target.value])} >Piso</button>
                            <button type="button" value="unifamiliar" className="botonAfinidad" name="tipoVivienda" onClick={(e) => setTipoVivienda((tipoVivienda) => [...tipoVivienda, e.target.value])} >Vivienda unifamiliar</button>
                            <button type="button" value="atico" className="botonAfinidad" name="tipoVivienda" onClick={(e) => setTipoVivienda((tipoVivienda) => [...tipoVivienda, e.target.value])} >Ático</button>
                            <button type="button" value="duplex" className="botonAfinidad" name="tipoVivienda" onClick={(e) => setTipoVivienda((tipoVivienda) => [...tipoVivienda, e.target.value])} >Dúplex</button>
                            <button type="button" value="chalet" className="botonAfinidad" name="tipoVivienda" onClick={(e) => setTipoVivienda((tipoVivienda) => [...tipoVivienda, e.target.value])} >Chalet</button>
                            <button type="button" value="otros" className="botonAfinidad" name="tipoVivienda" onClick={(e) => setTipoVivienda((tipoVivienda) => [...tipoVivienda, e.target.value])} >Otros tipos</button>
                            <br />
                            {viewAlertVivienda ? (<p>Este campo es obligatorio</p>) : ""}
                            <div>
                                <button type="button" onClick={() => { setViewTipoVivienda(false); setViewZona(true) }}>Anterior</button>
                                <button type="button" onClick={() => {
                                    if (tipoVivienda !== "") {
                                        setViewTipoVivienda(false)
                                        setViewRegion(true)
                                    } else {
                                        setViewAlertVivienda(true)
                                    }
                                }}>Siguiente</button>

                            </div>
                        </div>) : ""
                    }

                    {
                        viewRegion ? (<div>
                            <label>¿Dónde te gustaría vivir?</label>
                            <br />
                            <button type="button" value="andalucia" className="botonAfinidad" name="region" onClick={(e) => setRegion((region) => [...region, e.target.value])} >Andalucía</button>
                            <button type="button" value="aragon" className="botonAfinidad" name="region" onClick={(e) => setRegion((region) => [...region, e.target.value])} >Aragón</button>
                            <button type="button" value="asturias" className="botonAfinidad" name="region" onClick={(e) => setRegion((region) => [...region, e.target.value])} >Asturias</button>
                            <button type="button" value="baleares" className="botonAfinidad" name="region" onClick={(e) => setRegion((region) => [...region, e.target.value])} >Islas Baleares</button>
                            <button type="button" value="canarias" className="botonAfinidad" name="region" onClick={(e) => setRegion((region) => [...region, e.target.value])} >Islas Canarias</button>
                            <button type="button" value="cantabria" className="botonAfinidad" name="region" onClick={(e) => setRegion((region) => [...region, e.target.value])} >Cantabria</button>
                            <button type="button" value="castillaleon" className="botonAfinidad" name="region" onClick={(e) => setRegion((region) => [...region, e.target.value])} >Castilla y León</button>
                            <button type="button" value="castillalamancha" className="botonAfinidad" name="region" onClick={(e) => setRegion((region) => [...region, e.target.value])} >Castilla-La Mancha</button>
                            <button type="button" value="catalunya" className="botonAfinidad" name="region" onClick={(e) => setRegion((region) => [...region, e.target.value])} >Cataluña</button>
                            <button type="button" value="valencia" className="botonAfinidad" name="region" onClick={(e) => setRegion((region) => [...region, e.target.value])} >Comunidad Valenciana</button>
                            <button type="button" value="extremadura" className="botonAfinidad" name="region" onClick={(e) => setRegion((region) => [...region, e.target.value])} >Extremadura</button>
                            <button type="button" value="galicia" className="botonAfinidad" name="region" onClick={(e) => setRegion((region) => [...region, e.target.value])} >Galícia</button>
                            <button type="button" value="madrid" className="botonAfinidad" name="region" onClick={(e) => setRegion((region) => [...region, e.target.value])} >Comunidad de Madrid</button>
                            <button type="button" value="murcia" className="botonAfinidad" name="region" onClick={(e) => setRegion((region) => [...region, e.target.value])} >Región de Murcia</button>
                            <button type="button" value="navarra" className="botonAfinidad" name="region" onClick={(e) => setRegion((region) => [...region, e.target.value])} >Navarra</button>
                            <button type="button" value="paisvasco" className="botonAfinidad" name="region" onClick={(e) => setRegion((region) => [...region, e.target.value])} >País Vasco</button>
                            <button type="button" value="rioja" className="botonAfinidad" name="region" onClick={(e) => setRegion((region) => [...region, e.target.value])} >Rioja</button>
                            <button type="button" value="ceuta" className="botonAfinidad" name="region" onClick={(e) => setRegion((region) => [...region, e.target.value])} >Ceuta</button>
                            <button type="button" value="melilla" className="botonAfinidad" name="region" onClick={(e) => setRegion((region) => [...region, e.target.value])} >Melilla</button>
                            {viewAlertRegion ? (<p>Este campo es obligatorio</p>) : ""}
                            <div>
                                <button type="button" onClick={() => { setViewRegion(false); setViewTipoVivienda(true) }}>Anterior</button>
                                <button type="button" onClick={() => {
                                    if (region !== "") {
                                        setViewRegion(false)
                                        setViewInstalaciones(true)
                                    } else {
                                        setViewAlertRegion(true)
                                    }
                                }}>Siguiente</button>

                            </div>
                        </div>) : ""
                    }

                    {
                        viewInstalaciones ? (
                            <div>
                                <label>¿Qué instalaciones te gustaría tener?</label>
                                <br />
                                <div id="respuestasInstalaciones">
                                    <button type="button" value="salacine" className="botonAfinidad" name="instalaciones" onClick={(e) => setInstalaciones((instalaciones) => [...instalaciones, e.target.value])} >Sala de cine</button>
                                    <button type="button" value="recreativos" className="botonAfinidad" name="instalaciones" onClick={(e) => setInstalaciones((instalaciones) => [...instalaciones, e.target.value])} >Sala de recreativos</button>
                                    <button type="button" value="salamanualidades" className="botonAfinidad" name="instalaciones" onClick={(e) => setInstalaciones((instalaciones) => [...instalaciones, e.target.value])} >Sala de manualidades</button>
                                    <button type="button" value="gimnasio" className="botonAfinidad" name="instalaciones" onClick={(e) => setInstalaciones((instalaciones) => [...instalaciones, e.target.value])} >Gimnasio</button>
                                    <button type="button" value="rehabilitacion" className="botonAfinidad" name="instalaciones" onClick={(e) => setInstalaciones((instalaciones) => [...instalaciones, e.target.value])} >Sala de rehabilitación</button>
                                    <button type="button" value="spa" className="botonAfinidad" name="instalaciones" onClick={(e) => setInstalaciones((instalaciones) => [...instalaciones, e.target.value])} >Spa</button>
                                    <button type="button" value="pingpong" className="botonAfinidad" name="instalaciones" onClick={(e) => setInstalaciones((instalaciones) => [...instalaciones, e.target.value])} >Mesa de ping pong</button>
                                    <button type="button" value="billar" className="botonAfinidad" name="instalaciones" onClick={(e) => setInstalaciones((instalaciones) => [...instalaciones, e.target.value])} >Mesa de Billar</button>
                                    <button type="button" value="futbolin" className="botonAfinidad" name="instalaciones" onClick={(e) => setInstalaciones((instalaciones) => [...instalaciones, e.target.value])} >Futbolín</button>
                                    <button type="button" value="trastero" className="botonAfinidad" name="instalaciones" onClick={(e) => setInstalaciones((instalaciones) => [...instalaciones, e.target.value])} >Trastero</button>
                                    <button type="button" value="garage" className="botonAfinidad" name="instalaciones" onClick={(e) => setInstalaciones((instalaciones) => [...instalaciones, e.target.value])} >Plaza de garaje</button>
                                    <button type="button" value="cocina" className="botonAfinidad" name="instalaciones" onClick={(e) => setInstalaciones((instalaciones) => [...instalaciones, e.target.value])} >Cocina</button>
                                    <button type="button" value="buffet" className="botonAfinidad" name="instalaciones" onClick={(e) => setInstalaciones((instalaciones) => [...instalaciones, e.target.value])} >Buffet</button>
                                    <button type="button" value="lavavajillas" className="botonAfinidad" name="instalaciones" onClick={(e) => setInstalaciones((instalaciones) => [...instalaciones, e.target.value])} >Lavavajillas</button>
                                    <button type="button" value="lavanderia" className="botonAfinidad" name="instalaciones" onClick={(e) => setInstalaciones((instalaciones) => [...instalaciones, e.target.value])} >Lavandería</button>
                                </div>
                                {viewAlertInstalaciones ? (<p>Este campo es obligatorio</p>) : ""}
                                <div>
                                    <button type="button" onClick={() => { setViewInstalaciones(false); setViewRegion(true) }}>Anterior</button>
                                    <button type="button" onClick={() => {
                                        if (instalaciones !== "") {
                                            setViewInstalaciones(false)
                                            setViewLavabo(true)
                                        } else {
                                            setViewAlertInstalaciones(true)
                                        }
                                    }}>Siguiente</button>

                                </div>
                            </div>) : ""
                    }
                    {
                        viewLavabo ? (
                            <div>
                                <label>¿Qué tipo de baño prefieres?</label>
                                <br />
                                <input type="radio" name="lavabo" value="privado" id="privado" onChange={(e) => setLavabo(e.target.value)}></input><label htmlFor="privado">&nbsp;Privado</label>
                                <br />
                                <input type="radio" name="lavabo" value="compartido" id="compartido" onChange={(e) => setLavabo(e.target.value)}></input><label htmlFor="compartido">&nbsp;Compartido</label>
                                <br />
                                <br />
                                {viewAlertLavabo ? (<p>Este campo es obligatorio</p>) : ""}
                                <div>
                                    <button type="button" onClick={() => { setViewLavabo(false); setViewInstalaciones(true) }}>Anterior</button>
                                    <button type="button" onClick={() => {
                                        if (lavabo !== "") {
                                            setViewLavabo(false)
                                            setViewExteriores(true)
                                        } else {
                                            setViewAlertLavabo(true)
                                        }
                                    }}>Siguiente</button>

                                </div>
                            </div>) : ""
                    }
                    {
                        viewExteriores ? (<div>
                            <label>¿Con qué equipamientos exteriores te gustaría contar?</label>
                            <br />
                            <div id="respuestasExteriores">
                                <button type="button" value="no" className="botonAfinidad" name="exteriores" onClick={(e) => setExteriores((exteriores) => [...exteriores, e.target.value])} >Ninguno</button>
                                <button type="button" value="jardin" className="botonAfinidad" name="exteriores" onClick={(e) => setExteriores((exteriores) => [...exteriores, e.target.value])} >Jardín</button>
                                <button type="button" value="terraza" className="botonAfinidad" name="exteriores" onClick={(e) => setExteriores((exteriores) => [...exteriores, e.target.value])} >Terraza</button>
                                <button type="button" value="baloncesto" className="botonAfinidad" name="exteriores" onClick={(e) => setExteriores((exteriores) => [...exteriores, e.target.value])} >Cancha de baloncesto</button>
                                <button type="button" value="huerto"  className="botonAfinidad" name="exteriores" onClick={(e) => setExteriores((exteriores) => [...exteriores, e.target.value])} >Huerto</button>
                                <button type="button" value="barbacoa" className="botonAfinidad" name="exteriores" onClick={(e) => setExteriores((exteriores) => [...exteriores, e.target.value])} >Zona de barbacoa</button>
                                <button type="button" value="padel" className="botonAfinidad" name="exteriores" onClick={(e) => setExteriores((exteriores) => [...exteriores, e.target.value])} >Pista de pádel</button>
                                <button type="button" value="tenis" className="botonAfinidad" name="exteriores" onClick={(e) => setExteriores((exteriores) => [...exteriores, e.target.value])} >Pista de tenis</button>
                                <button type="button" value="piscina" className="botonAfinidad" name="exteriores" onClick={(e) => setExteriores((exteriores) => [...exteriores, e.target.value])} >Piscina</button>
                                <button type="button" value="cubierta" className="botonAfinidad" name="exteriores" onClick={(e) => setExteriores((exteriores) => [...exteriores, e.target.value])} >Piscina cubierta</button>
                                <button type="button" value="futbol" className="botonAfinidad" name="exteriores" onClick={(e) => setExteriores((exteriores) => [...exteriores, e.target.value])} >Campo de fútbol</button>
                                <button type="button" value="golf" className="botonAfinidad" name="exteriores" onClick={(e) => setExteriores((exteriores) => [...exteriores, e.target.value])} >Campo de golf</button>
                                <button type="button" value="hipica" className="botonAfinidad" name="exteriores" onClick={(e) => setExteriores((exteriores) => [...exteriores, e.target.value])} >Hípica</button>
                                <button type="button" value="esqui" className="botonAfinidad" name="exteriores" onClick={(e) => setExteriores((exteriores) => [...exteriores, e.target.value])} >Pistas de esquí</button>
                            </div>
                            {viewAlertExteriores ? (<p>Este campo es obligatorio</p>) : ""}
                            <div>
                                <button type="button" onClick={() => { setViewExteriores(false); setViewLavabo(true) }}>Anterior</button>
                                <button type="button" onClick={() => {
                                    if (exteriores !== "") {
                                        setViewExteriores(false)
                                        setViewRangoEdad(true)
                                    } else {
                                        setViewAlertExteriores(true)
                                    }
                                }}>Siguiente</button>

                            </div>
                        </div>) : ""
                    }

                    {
                        viewRangoEdad ? (<div>
                            <label>¿Con qué rangos de edad convivirías?</label>
                            <br />
                            <button type="button" value="50_60" className="botonAfinidad" name="rangoEdad" onClick={(e) => setRangoEdad((rangoEdad) => [...rangoEdad, e.target.value])} >Entre 50 y 60 años</button>
                            <button type="button" value="60_70" className="botonAfinidad" name="rangoEdad" onClick={(e) => setRangoEdad((rangoEdad) => [...rangoEdad, e.target.value])} >Entre 60 y 70 años</button>
                            <button type="button" value="70_80" className="botonAfinidad" name="rangoEdad" onClick={(e) => setRangoEdad((rangoEdad) => [...rangoEdad, e.target.value])} >Entre 70 y 80 años</button>
                            <button type="button" value="_80" className="botonAfinidad" name="rangoEdad" onClick={(e) => setRangoEdad((rangoEdad) => [...rangoEdad, e.target.value])} >Más de 80</button>

                            {viewAlertRangoEdad ? (<p>Este campo es obligatorio</p>) : ""}
                            <div>
                                <button type="button" onClick={() => { setViewRangoEdad(false); setViewExteriores(true) }}>Anterior</button>
                                <button type="button" onClick={() => {
                                    if (rangoEdad !== "") {
                                        setViewRangoEdad(false)
                                        setViewDinero(true)
                                    } else {
                                        setViewAlertRangoEdad(true)
                                    }
                                }}>Siguiente</button>

                            </div>
                        </div>) : ""
                    }
                    {
                        viewDinero ? (<div>
                            <br />
                            <label>¿Cuánto dinero máximo destinarías al Co-living al mes?</label>
                            <br />
                            <select name="dinero" id="dinero" onChange={(e) => setDinero(e.target.value)}>
                                <option></option>
                                <option value="200">Hasta 200 €</option>
                                <option value="300">Hasta 300 €</option>
                                <option value="400">Hasta 400 €</option>
                                <option value="500">Hasta 500 €</option>
                                <option value="600">Hasta 600 €</option>
                                <option value="700">Hasta 700 €</option>
                                <option value="800">Hasta 800 €</option>
                                <option value="900">Hasta 900 €</option>
                                <option value="1000">Hasta 1000 €</option>
                                <option value="1100">Hasta 1100 €</option>
                                <option value="1200">Hasta 1200 €</option>
                                <option value="1300">Hasta 1300 €</option>
                                <option value="1400">Hasta 1400 €</option>
                                <option value="1500">1500 € o más</option>
                            </select>
                            {viewAlertDinero ? (<p>Este campo es obligatorio</p>) : ""}
                            <div>
                                <button type="button" onClick={() => { setViewDinero(false); setViewRangoEdad(true) }}>Anterior</button>
                                <button type="button" onClick={() => {
                                    if (dinero !== "") {
                                        setViewDinero(false)
                                        setViewMetros(true)
                                    } else {
                                        setViewAlertDinero(true)
                                    }
                                }}>Siguiente</button>

                            </div>
                        </div>) : ""
                    }

                    {
                        viewMetros ? (<div>
                            <label>¿Qué dimensión mínima en m&sup2; debería tener el immueble?</label>
                            <br />
                            <select name="metros" id="metros" onChange={(e) => setMetros(e.target.value)}>
                                <option></option>
                                <option value="100">100 m&sup2;</option>
                                <option value="200">200 m&sup2;</option>
                                <option value="300">300 m&sup2;</option>
                                <option value="400">400 m&sup2;</option>
                                <option value="500">500 m&sup2;</option>
                                <option value="600">600 m&sup2;</option>
                                <option value="700">700 m&sup2;</option>
                                <option value="800">800 m&sup2;</option>
                                <option value="900">900 m&sup2;</option>
                                <option value="1000">1000 m&sup2;</option>
                                <option value="1500">1500 m&sup2;</option>
                                <option value="+1500">Más de 1500 m&sup2;</option>
                            </select>
                            {viewAlertMetros ? (<p>Este campo es obligatorio</p>) : ""}
                            <div>
                                <button type="button" onClick={() => { setViewMetros(false); setViewDinero(true) }}>Anterior</button>
                                <button type="button" onClick={() => {
                                    if (metros !== "") {
                                        setViewMetros(false)
                                        setViewGente(true)
                                    } else {
                                        setViewAlertMetros(true)
                                    }
                                }}>Siguiente</button>

                            </div>
                        </div>) : ""
                    }
                    {
                        viewGente ? (<div>
                            <label>¿Con cuánta gente como máximo compartirías el Co-living?</label>
                            <br />
                            <select name="gente" id="gente" onChange={(e) => setGente(e.target.value)}>
                                <option></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>

                            {viewAlertGente ? (<p>Este campo es obligatorio</p>) : ""}
                            <div>
                                <button type="button" onClick={() => { setViewGente(false); setViewMetros(true) }}>Anterior</button>
                                <button type="button" onClick={() => {
                                    if (gente !== "") {
                                        setViewGente(false)
                                        setViewSubmit(true)
                                    } else {
                                        setViewAlertGente(true)
                                    }
                                }}>Siguiente</button>

                            </div>
                        </div>) : ""
                    }
                    {
                        viewSubmit ? (<div>
                            <button type="button" onClick={handleSubmit} className="ButtonHome btn btn-primary btn-lg" variant="primary">Enviar</button>
                        </div>) : ""
                    }
                </div >
            </form >
        </div >
    )
}

export default TestAfinidadUser