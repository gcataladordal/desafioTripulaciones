import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from 'react-bootstrap/Modal'
import InfoAuth from "../hooks/InfoAuth";
import Accordion from 'react-bootstrap/Accordion'
import imgAnterior from "../img/left_arrow_(1).png"

function TestAfinidadUser() {

    const [usuario, auth] = InfoAuth("obtieneinfo")


    useEffect(() => {
        if (auth === true) {
        } else if (auth === false) {
            window.location.href = "/"
        }
    }, [auth])



    const [edad, setEdad] = useState("");
    const [genero, setGenero] = useState("");
    const [oficio, setOficio] = useState("");
    const [idiomas, setIdiomas] = useState("");
    const [orientacionSexual, setOrientacionSexual] = useState(false);
    const [religion, setReligion] = useState(false);
    const [politica, setPolitica] = useState(false);
    const [mascotas, setMascotas] = useState(false);
    const [fumador, setFumador] = useState(false);
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


    const [viewParteUno, setViewParteUno] = useState(true);
    const [viewParteDos, setViewParteDos] = useState(false);
    const [viewParteTres, setViewParteTres] = useState(false);
    const [viewParteCuatro, setViewParteCuatro] = useState(false)
    const [viewParteCinco, setViewParteCinco] = useState(false)
    const [viewParteSeis, setViewParteSeis] = useState(false)

    const [viewAlertGenero, setViewAlertGenero] = useState(false)
    const [viewAlertOficio, setViewAlertOficio] = useState(false)
    const [viewAlertEdad, setViewAlertEdad] = useState(false)
    const [viewAlertIdiomas, setViewAlertIdiomas] = useState(false)
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
        console.log(e.target.value)
        if (e !== undefined) {
            setPeliculas((peliculas) => [...peliculas, e.target.value])
            console.log(peliculas)
        }
        setShowWestern(false);
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



    function enviarDatos(e) {
        e.preventDefault();
        console.log(musica)
        console.log(deportes)
        console.log(peliculas)
        console.log(aficiones)

        let aficionesJuntas = aficiones.flat(1);
        console.log(aficionesJuntas)
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
            id_usuario: usuario.id_usuario
        }

        axios.post("/testafinidaduser", caracteristicasTest).then((res) => {
            sessionStorage.setItem("infoRecom", JSON.stringify(res.data))
            window.location.href = "/resultadotest"
        })

    }

    const clickImagenUno = () => {
        setViewParteDos(false);
        setViewParteUno(true);
        setViewAlertCaracter(false);
        setViewAlertIdiomas(false);
    }

    const clickImagenDos = () => {
        setViewParteTres(false);
        setViewParteDos(true);
        setViewAlertMusica(false);
        setViewAlertDeportes(false);
        setViewAlertPeliculas(false);
    }

    const clickImagenTres = () => {
        setViewParteCuatro(false);
        setViewParteTres(true);
        setViewAlertActividades(false);
    }

    const clickImagenCuatro = () => {
        setViewParteCinco(false);
        setViewParteCuatro(true);
        setViewAlertCarnet(false);
        setViewAlertZona(false);
        setViewAlertVivienda(false);
        setViewAlertRegion(false);
    }

    const clickImagenCinco = () => {
        setViewParteSeis(false);
        setViewParteCinco(true);
        setViewAlertInstalaciones(false);
        setViewAlertLavabo(false);
        setViewAlertExteriores(false);
        setViewAlertRangoEdad(false);
        setViewAlertDinero(false);
        setViewAlertMetros(false);
        setViewAlertGente(false)
    }


    return (
        <div className="test-Usuario">



            <form onSubmit={(e) => enviarDatos(e)}>
                {viewParteUno ? (<div>
                    <span className="spanTest">
                        ¿Qué edad tienes?
                    </span>
                    <br />
                    <input type="number" min="18" max="120" className="inputRegistro" onChange={(e) => setEdad(e.target.value)}></input>
                    {viewAlertEdad ? (<span className="alert-Register">Este campo es obligatorio</span>) : ""}
                    <br />
                    <span className="spanTest">
                        ¿Con qué género te identificas?
                    </span>
                    <br />
                    <select name="genero" id="genero" className="inputRegistro" onChange={(e) => setGenero(e.target.value)}>
                        <option></option>
                        <option value="hombre">Hombre</option>
                        <option value="mujer">Mujer</option>
                        <option value="otro">Otro</option>
                    </select>
                    {viewAlertGenero ? (<span className="alert-Register">Este campo es obligatorio</span>) : ""}
                    <br />
                    <span className="spanTest">¿En qué sector/es has trabajado?</span>
                    <div className="contenedor-Test">
                        <button type="button" value="sanidad" className="Label-button" name="oficio" onClick={(e) => setOficio((oficio) => [...oficio, e.target.value])} >Sanidad</button>
                        <button type="button" value="ingenieria" className="Label-button" name="oficio" onClick={(e) => setOficio((oficio) => [...oficio, e.target.value])} >Ingeniería</button>
                        <button type="button" value="forestal" className="Label-button" name="oficio" onClick={(e) => setOficio((oficio) => [...oficio, e.target.value])} >Agrario-forestal</button>
                        <button type="button" value="administrativo" className="Label-button" name="oficio" onClick={(e) => setOficio((oficio) => [...oficio, e.target.value])} >Administrativo</button>
                        <button type="button" value="artes" className="Label-button" name="oficio" onClick={(e) => setOficio((oficio) => [...oficio, e.target.value])} >Artes</button>
                        <button type="button" value="comunicacion" className="Label-button" name="oficio" onClick={(e) => setOficio((oficio) => [...oficio, e.target.value])} >Comunicación</button>
                        <button type="button" value="derecho" className="Label-button" name="oficio" onClick={(e) => setOficio((oficio) => [...oficio, e.target.value])} >Derecho</button>
                        <button type="button" value="empresariales" className="Label-button" name="oficio" onClick={(e) => setOficio((oficio) => [...oficio, e.target.value])} >Empresariales</button>
                        <button type="button" value="ensenanza" className="Label-button" name="oficio" onClick={(e) => setOficio((oficio) => [...oficio, e.target.value])} >Enseñanza</button>
                        <button type="button" value="investigacioncientifica" className="Label-button" name="oficio" onClick={(e) => setOficio((oficio) => [...oficio, e.target.value])} >Investigación científica</button>
                        <button type="button" value="construccion" className="Label-button" name="oficio" onClick={(e) => setOficio((oficio) => [...oficio, e.target.value])} >Construcción</button>
                        <button type="button" value="investigaciontecnica" className="Label-button" name="oficio" onClick={(e) => setOficio((oficio) => [...oficio, e.target.value])} >Investigación técnica</button>
                        <button type="button" value="musica" className="Label-button" name="oficio" onClick={(e) => setOficio((oficio) => [...oficio, e.target.value])} >Música</button>
                        <button type="button" value="seguridad" className="Label-button" name="oficio" onClick={(e) => setOficio((oficio) => [...oficio, e.target.value])} >Protección y Seguridad</button>
                        <button type="button" value="cineasta" className="Label-button" name="oficio" onClick={(e) => setOficio((oficio) => [...oficio, e.target.value])} >Cine/teatro</button>
                        <button type="button" value="rh" className="Label-button" name="oficio" onClick={(e) => setOficio((oficio) => [...oficio, e.target.value])} >Recursos Humanos</button>
                        <button type="button" value="amacasa" className="Label-button" name="oficio" onClick={(e) => setOficio((oficio) => [...oficio, e.target.value])} >Ama de casa</button>
                        <button type="button" value="mantenimiento" className="Label-button" name="oficio" onClick={(e) => setOficio((oficio) => [...oficio, e.target.value])} >Mantenimiento</button>

                        <button type="button" value="otro" className="Label-button" name="oficio" onClick={(e) => setOficio((oficio) => [...oficio, e.target.value])} >Otra profesión</button>
                    </div>

                    {viewAlertOficio ? (<span className="alert-Register">Este campo es obligatorio</span>) : ""}
                    <br />
                    <br />
                    <div>
                        <button type="button" className="Btn-Default" onClick={() => {

                            if (oficio === "" || edad === "" || genero === "") {
                                if (oficio === "") {
                                    setViewAlertOficio(true)
                                }
                                if (edad === "") {
                                    setViewAlertEdad(true)
                                }
                                if (genero === "") {
                                    setViewAlertGenero(true)
                                }
                            } else {
                                setViewParteUno(false)
                                setViewParteDos(true)
                                setViewAlertOficio(false)
                                setViewAlertEdad(false)
                                setViewAlertGenero(false)
                            }
                        }
                        }><span className="Texto-Blanco">Siguiente</span></button>

                    </div>
                </div>) : ""}


                {viewParteDos ? (<div>
                    <img src={imgAnterior} onClick={clickImagenUno}
                        className="Icon-left-arrow" alt="botonAtras"></img>
                    <br />
                    <span className="spanTest">¿Qué idiomas hablas?</span>
                    <br />
                    <div className="contenedor-Test">
                        <button type="button" value="castellano" className="Label-button" name="idiomas" onClick={(e) => setIdiomas((idiomas) => [...idiomas, e.target.value])} >Castellano</button>
                        <button type="button" value="catalan" className="Label-button" name="idiomas" onClick={(e) => setIdiomas((idiomas) => [...idiomas, e.target.value])} >Català</button>
                        <button type="button" value="euskera" className="Label-button" name="idiomas" onClick={(e) => setIdiomas((idiomas) => [...idiomas, e.target.value])} >Euskera</button>
                        <button type="button" value="gallego" className="Label-button" name="idiomas" onClick={(e) => setIdiomas((idiomas) => [...idiomas, e.target.value])} >Galego</button>
                        <button type="button" value="valenciano" className="Label-button" name="idiomas" onClick={(e) => setIdiomas((idiomas) => [...idiomas, e.target.value])} >Valencià</button>
                        <button type="button" value="coreano" className="Label-button" name="idiomas" onClick={(e) => setIdiomas((idiomas) => [...idiomas, e.target.value])} >한국어</button>
                        <button type="button" value="chino" className="Label-button" name="idiomas" onClick={(e) => setIdiomas((idiomas) => [...idiomas, e.target.value])} >中文</button>
                        <button type="button" value="japones" className="Label-button" name="idiomas" onClick={(e) => setIdiomas((idiomas) => [...idiomas, e.target.value])} >日本語</button>
                        <button type="button" value="ingles" className="Label-button" name="idiomas" onClick={(e) => setIdiomas((idiomas) => [...idiomas, e.target.value])} >English</button>
                        <button type="button" value="italiano" className="Label-button" name="idiomas" onClick={(e) => setIdiomas((idiomas) => [...idiomas, e.target.value])} >Italiano</button>
                        <button type="button" value="aleman" className="Label-button" name="idiomas" onClick={(e) => setIdiomas((idiomas) => [...idiomas, e.target.value])} >Deutsch</button>
                        <button type="button" value="frances" className="Label-button" name="idiomas" onClick={(e) => setIdiomas((idiomas) => [...idiomas, e.target.value])} >Français</button>
                        <button type="button" value="ruso" className="Label-button" name="idiomas" onClick={(e) => setIdiomas((idiomas) => [...idiomas, e.target.value])} >Pусский</button>
                        <button type="button" value="neerlandes" className="Label-button" name="idiomas" onClick={(e) => setIdiomas((idiomas) => [...idiomas, e.target.value])} >Nederlands</button>
                    </div>
                    {viewAlertIdiomas ? (<span className="alert-Register">Selecciona almenos un idioma</span>) : ""}
                    <br />
                    <span className="spanTest">¿Hay normas de convivencia?</span>
                    <div className="container-Test">
                        <button type="button" value="si" className="Label-button" name="orientacionsexual" onClick={() => setOrientacionSexual(false)} >LGBT+ friendly</button>
                        <button type="button" value="si" className="Label-button" name="religion" onClick={() => setReligion(false)} >Religión friendly</button>
                        <button type="button" value="si" className="Label-button" name="fumador" onClick={() => setFumador(false)} >Abierto a fumadores</button>
                        <button type="button" value="si" className="Label-button" name="mascotas" onClick={() => setMascotas(false)} >Mascotas</button>
                        <button type="button" value="si" className="Label-button" name="politica" onClick={() => setPolitica(false)} >Abierto a ideologías políticas</button>
                    </div>
                    <br />
                    <span className="spanTest">¿Cómo eres?</span>
                    <br />
                    <div className="container-Test">
                        <button type="button" value="activo" className="Label-button" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Activo</button>
                        <button type="button" value="deportista" className="Label-button" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Deportista</button>
                        <button type="button" value="calmado" className="Label-button" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Calmado</button>
                        <button type="button" value="atento" className="Label-button" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Atento</button>
                        <button type="button" value="alegre" className="Label-button" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Alegre</button>
                        <button type="button" value="colaborador" className="Label-button" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Colaborador</button>
                        <button type="button" value="creativo" className="Label-button" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Creativo</button>
                        <button type="button" value="decidido" className="Label-button" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Decidido</button>
                        <button type="button" value="tratofacil" className="Label-button" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >De trato fácil</button>
                        <button type="button" value="empatico" className="Label-button" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Empático</button>
                        <button type="button" value="entusiasta" className="Label-button" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Entusiasta</button>
                        <button type="button" value="flexible" className="Label-button" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Flexible</button>
                        <button type="button" value="amable" className="Label-button" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Amable</button>
                        <button type="button" value="divertido" className="Label-button" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Divertido</button>
                        <button type="button" value="honesto" className="Label-button" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Honesto</button>
                        <button type="button" value="gracioso" className="Label-button" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Gracioso</button>
                        <button type="button" value="optimista" className="Label-button" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Optimista</button>
                        <button type="button" value="ordenado" className="Label-button" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Ordenado</button>
                        <button type="button" value="apasionado" className="Label-button" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Apasionado</button>
                        <button type="button" value="practico" className="Label-button" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Práctico</button>
                        <button type="button" value="proactivo" className="Label-button" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Proactivo</button>
                        <button type="button" value="sensato" className="Label-button" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Sensato</button>
                        <button type="button" value="relajado" className="Label-button" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Relajado</button>
                        <button type="button" value="generoso" className="Label-button" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Generoso</button>
                    </div>
                    {viewAlertCaracter ? (<span className="alert-Register">Elige al menos 5</span>) : ""}
                    <br />
                    <div>
                        <button type="button" className="Btn-Default" onClick={() => {
                            if (caracter.length < 5 || idiomas === "") {
                                if (caracter.length < 5) {
                                    setViewAlertCaracter(true)
                                }
                                if (idiomas === "") {
                                    setViewAlertIdiomas(true)
                                }
                            } else {
                                setViewParteDos(false)
                                setViewParteTres(true)
                                setViewAlertCaracter(false);
                                setViewAlertIdiomas(false);
                            }
                        }}><span className="Texto-Blanco">Siguiente</span></button>
                    </div>
                </div>) : ""}
                {viewParteTres ? (<div>
                    <img src={imgAnterior} onClick={clickImagenDos}
                        className="Icon-left-arrow" alt="botonAtras"></img>
                    <br />
                    <span className="spanTest">¿Qué música escuchas? (mín. 5)</span>
                    <br />
                    <div className="contenedor-Test">
                        <button type="button" className="Label-button" onClick={handleShowAlternativa}>
                            Alternativa
                        </button>
                        <Modal show={showAlternativa} onHide={handleCloseAlternativa} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Alternativa</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" variant="secondary" className="Button-Overlay" value="alternativa: 2" onClick={(e) => handleCloseAlternativa(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" variant="primary" className="Button-Overlay" value="alternativa: 4" onClick={(e) => handleCloseAlternativa(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>

                        <button type="button" className="Label-button" onClick={handleShowBlues}>
                            Blues
                        </button>
                        <Modal show={showBlues} onHide={handleCloseBlues} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Blues</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" className="Button-Overlay" variant="secondary" value="blues: 2" onClick={(e) => handleCloseBlues(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" className="Button-Overlay" variant="primary" value="blues: 4" onClick={(e) => handleCloseBlues(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>

                        <button type="button" className="Label-button" onClick={handleShowClasica}>
                            Clásica
                        </button>
                        <Modal show={showClasica} onHide={handleCloseClasica} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Clásica</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" variant="secondary" value="clasica: 2" className="Button-Overlay" onClick={(e) => handleCloseClasica(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" variant="primary" value="clasica: 4" className="Button-Overlay" onClick={(e) => handleCloseClasica(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>

                        <button type="button" className="Label-button" onClick={handleShowElectronica}>
                            Electrónica
                        </button>
                        <Modal show={showElectronica} onHide={handleCloseElectronica} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Electrónica</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" variant="secondary" value="electronica: 2" className="Button-Overlay" onClick={(e) => handleCloseElectronica(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" variant="primary" value="electronica: 4" className="Button-Overlay" onClick={(e) => handleCloseElectronica(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>


                        <button type="button" className="Label-button" onClick={handleShowFolk}>
                            Folk
                        </button>
                        <Modal show={showFolk} onHide={handleCloseFolk} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Folk</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" variant="secondary" value="folk: 2" className="Button-Overlay" onClick={(e) => handleCloseFolk(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" variant="primary" value="folk: 4" className="Button-Overlay" onClick={(e) => handleCloseFolk(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>

                        <button type="button" className="Label-button" onClick={handleShowGospel}>
                            Gospel
                        </button>
                        <Modal show={showGospel} onHide={handleCloseGospel} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Gospel</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" variant="secondary" value="gospel: 2" className="Button-Overlay" onClick={(e) => handleCloseGospel(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" variant="primary" value="gospel: 4" className="Button-Overlay" onClick={(e) => handleCloseGospel(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>


                        <button type="button" className="Label-button" onClick={handleShowInstrumental}>
                            Instrumental
                        </button>
                        <Modal show={showInstrumental} onHide={handleCloseInstrumental} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Instrumental</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" variant="secondary" value="instrumental: 2" className="Button-Overlay" onClick={(e) => handleCloseInstrumental(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" variant="primary" value="instrumental: 4" className="Button-Overlay" onClick={(e) => handleCloseInstrumental(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>

                        <button type="button" className="Label-button" onClick={handleShowJazz}>
                            Jazz
                        </button>
                        <Modal show={showJazz} onHide={handleCloseJazz} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Jazz</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" variant="secondary" value="jazz: 2" className="Button-Overlay" onClick={(e) => handleCloseJazz(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" variant="primary" value="jazz: 4" className="Button-Overlay" onClick={(e) => handleCloseJazz(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>

                        <button type="button" className="Label-button" onClick={handleShowLatina}>
                            Latina
                        </button>
                        <Modal show={showLatina} onHide={handleCloseLatina} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Latina</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" variant="secondary" value="latina: 2" className="Button-Overlay" onClick={(e) => handleCloseLatina(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" variant="primary" value="latina: 4" className="Button-Overlay" onClick={(e) => handleCloseLatina(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>

                        <button type="button" className="Label-button" onClick={handleShowLounge}>
                            Lounge
                        </button>
                        <Modal show={showLounge} onHide={handleCloseLounge} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Lounge</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" variant="secondary" value="lounge: 2" className="Button-Overlay" onClick={(e) => handleCloseLounge(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" variant="primary" value="lounge: 4" className="Button-Overlay" onClick={(e) => handleCloseLounge(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>


                        <button type="button" className="Label-button" onClick={handleShowMetal}>
                            Metal
                        </button>
                        <Modal show={showMetal} onHide={handleCloseMetal} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Metal</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" variant="secondary" value="metal: 2" className="Button-Overlay" onClick={(e) => handleCloseMetal(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" variant="primary" value="metal: 4" className="Button-Overlay" onClick={(e) => handleCloseMetal(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>

                        <button type="button" className="Label-button" onClick={handleShowOpera}>
                            Ópera
                        </button>
                        <Modal show={showOpera} onHide={handleCloseOpera} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Ópera</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" variant="secondary" value="opera: 2" className="Button-Overlay" onClick={(e) => handleCloseOpera(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" variant="primary" value="opera: 4" className="Button-Overlay" onClick={(e) => handleCloseOpera(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>

                        <button type="button" className="Label-button" onClick={handleShowPunk}>
                            Punk
                        </button>
                        <Modal show={showPunk} onHide={handleClosePunk} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Punk</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" variant="secondary" value="punk: 2" className="Button-Overlay" onClick={(e) => handleClosePunk(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" variant="primary" value="punk: 4" className="Button-Overlay" onClick={(e) => handleClosePunk(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>
                        <button type="button" className="Label-button" onClick={handleShowRb}>
                            R&B
                        </button>
                        <Modal show={showRb} onHide={handleCloseRb} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>R&B</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" variant="secondary" value="rb: 2" className="Button-Overlay" onClick={(e) => handleCloseRb(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" variant="primary" value="rb: 4" className="Button-Overlay" onClick={(e) => handleCloseRb(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>

                        <button type="button" className="Label-button" onClick={handleShowReggae}>
                            Reggae
                        </button>
                        <Modal show={showReggae} onHide={handleCloseReggae} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Reggae</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" variant="secondary" value="reggae: 2" className="Button-Overlay" onClick={(e) => handleCloseReggae(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" variant="primary" value="reggae: 4" className="Button-Overlay" onClick={(e) => handleCloseReggae(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>

                        <button type="button" className="Label-button" onClick={handleShowRock}>
                            Rock
                        </button>
                        <Modal show={showRock} onHide={handleCloseRock} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title >Rock</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" variant="secondary" value="rock: 2" className="Button-Overlay" onClick={(e) => handleCloseRock(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" variant="primary" value="rock: 4" className="Button-Overlay" onClick={(e) => handleCloseRock(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>
                        <button type="button" className="Label-button" onClick={handleShowSoul}>
                            Soul
                        </button>
                        <Modal show={showSoul} onHide={handleCloseSoul} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Soul</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" variant="secondary" value="soul: 2" className="Button-Overlay" onClick={(e) => handleCloseSoul(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" variant="primary" value="soul: 4" className="Button-Overlay" onClick={(e) => handleCloseSoul(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>
                        <button type="button" className="Label-button" onClick={handleShowCopla}>
                            Copla
                        </button>
                        <Modal show={showCopla} onHide={handleCloseCopla} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Copla</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" variant="secondary" value="copla: 2" className="Button-Overlay" onClick={(e) => handleCloseCopla(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" variant="primary" value="copla: 4" className="Button-Overlay" onClick={(e) => handleCloseCopla(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>
                        <button type="button" className="Label-button" onClick={handleShowPachangueo}>
                            Pachangueo
                        </button>
                        <Modal show={showPachangueo} onHide={handleClosePachangueo} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Pachangueo</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" variant="secondary" value="pachangueo: 2" className="Button-Overlay" onClick={(e) => handleClosePachangueo(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" variant="primary" value="pachangueo: 4" className="Button-Overlay" onClick={(e) => handleClosePachangueo(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>
                        <button type="button" className="Label-button" onClick={handleShowYeye}>
                            Yé-yé
                        </button>
                        <Modal show={showYeye} onHide={handleCloseYeye} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Yé-yé</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" variant="secondary" value="yeye: 2" className="Button-Overlay" onClick={(e) => handleCloseYeye(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" variant="primary" value="yeye: 4" className="Button-Overlay" onClick={(e) => handleCloseYeye(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>
                        <button type="button" className="Label-button" onClick={handleShowBolero}>
                            Bolero
                        </button>
                        <Modal show={showBolero} onHide={handleCloseBolero} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Bolero</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" variant="secondary" value="bolero: 2" className="Button-Overlay" onClick={(e) => handleCloseBolero(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" variant="primary" value="bolero: 4" className="Button-Overlay" onClick={(e) => handleCloseBolero(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>
                        <button type="button" className="Label-button" onClick={handleShowZarzuela}>
                            Zarzuela
                        </button>
                        <Modal show={showZarzuela} onHide={handleCloseZarzuela} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Zarzuela</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" variant="secondary" value="zarzuela: 2" className="Button-Overlay" onClick={(e) => handleCloseZarzuela(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" variant="primary" value="zarzuela: 4" className="Button-Overlay" onClick={(e) => handleCloseZarzuela(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>
                        <button type="button" className="Label-button" onClick={handleShowFlamenco}>
                            Flamenco
                        </button>
                        <Modal show={showFlamenco} onHide={handleCloseFlamenco} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Flamenco</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" className="Button-Overlay" variant="secondary" value="flamenco: 2" onClick={(e) => handleCloseFlamenco(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" variant="primary" value="flamenco: 4" className="Button-Overlay" onClick={(e) => handleCloseFlamenco(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>
                    </div>
                    {viewAlertMusica ? (<span className="alert-Register">Elige al menos 5</span>) : ""}
                    <br />
                    <span className="spanTestDeportes">¿Qué deportes practicas? (mín. 5)</span>
                    <br />
                    <div>
                        <button type="button" className="Label-button" onClick={handleShowBadminton}>
                            Bádminton
                        </button>
                        <Modal show={showBadminton} onHide={handleCloseBadminton} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Bádminton</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" className="Button-Overlay" value="badminton: 2" onClick={(e) => handleCloseBadminton(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" className="Button-Overlay" value="badminton: 4" onClick={(e) => handleCloseBadminton(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>
                        <button type="button" className="Label-button" onClick={handleShowBeisbol}>
                            Béisbol
                        </button>
                        <Modal show={showBeisbol} onHide={handleCloseBeisbol} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Béisbol</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" className="Button-Overlay" value="beisbol: 2" onClick={(e) => handleCloseBeisbol(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" className="Button-Overlay" value="beisbol: 4" onClick={(e) => handleCloseBeisbol(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>
                        <button type="button" className="Label-button" onClick={handleShowBoxeo}>
                            Boxeo
                        </button>
                        <Modal show={showBoxeo} onHide={handleCloseBoxeo} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Boxeo</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" className="Button-Overlay" value="boxeo: 2" onClick={(e) => handleCloseBoxeo(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" className="Button-Overlay" value="boxeo: 4" onClick={(e) => handleCloseBoxeo(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>
                        <button type="button" className="Label-button" onClick={handleShowBaloncesto}>
                            Baloncesto
                        </button>
                        <Modal show={showBaloncesto} onHide={handleCloseBaloncesto} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Baloncesto</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" className="Button-Overlay" value="baloncesto: 2" onClick={(e) => handleCloseBaloncesto(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" className="Button-Overlay" value="baloncesto: 4" onClick={(e) => handleCloseBaloncesto(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>
                        <button type="button" className="Label-button" onClick={handleShowBolos}>
                            Bolos
                        </button>
                        <Modal show={showBolos} onHide={handleCloseBolos} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Bolos</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" className="Button-Overlay" value="bolos: 2" onClick={(e) => handleCloseBolos(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" className="Button-Overlay" value="bolos: 4" onClick={(e) => handleCloseBolos(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>
                        <button type="button" className="Label-button" onClick={handleShowPiraguismo}>
                            Piragüismo
                        </button>
                        <Modal show={showPiraguismo} onHide={handleClosePiraguismo} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Piragüismo</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" className="Button-Overlay" value="piraguismo: 2" onClick={(e) => handleClosePiraguismo(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" className="Button-Overlay" value="Piraguismo: 4" onClick={(e) => handleClosePiraguismo(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>

                        <button type="button" className="Label-button" onClick={handleShowBuceo}>
                            Buceo
                        </button>
                        <Modal show={showBuceo} onHide={handleCloseBuceo} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Buceo</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" className="Button-Overlay" value="buceo: 2" onClick={(e) => handleCloseBuceo(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" className="Button-Overlay" value="buceo: 4" onClick={(e) => handleCloseBuceo(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>
                        <button type="button" className="Label-button" onClick={handleShowFutbol}>
                            Fútbol
                        </button>
                        <Modal show={showFutbol} onHide={handleCloseFutbol} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Fútbol</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" className="Button-Overlay" value="futbol: 2" onClick={(e) => handleCloseFutbol(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" className="Button-Overlay" value="futbol: 4" onClick={(e) => handleCloseFutbol(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>
                        <button type="button" className="Label-button" onClick={handleShowCrossfit}>
                            Crossfit
                        </button>
                        <Modal show={showCrossfit} onHide={handleCloseCrossfit} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Crossfit</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" className="Button-Overlay" value="crossfit: 2" onClick={(e) => handleCloseCrossfit(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" className="Button-Overlay" value="crossfit: 4" onClick={(e) => handleCloseCrossfit(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>
                        <button type="button" className="Label-button" onClick={handleShowCiclismo}>
                            Ciclismo
                        </button>
                        <Modal show={showCiclismo} onHide={handleCloseCiclismo} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Ciclismo</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" className="Button-Overlay" value="ciclismo: 2" onClick={(e) => handleCloseCiclismo(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" className="Button-Overlay" value="ciclismo: 4" onClick={(e) => handleCloseCiclismo(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>
                        <button type="button" className="Label-button" onClick={handleShowGolf}>
                            Golf
                        </button>
                        <Modal show={showGolf} onHide={handleCloseGolf} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Golf</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" className="Button-Overlay" value="golf: 2" onClick={(e) => handleCloseGolf(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" className="Button-Overlay" value="golf: 4" onClick={(e) => handleCloseGolf(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>
                        <button type="button" className="Label-button" onClick={handleShowGimnasio}>
                            Gimnasio
                        </button>
                        <Modal show={showGimnasio} onHide={handleCloseGimnasio} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Gimnasio</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" className="Button-Overlay" value="gimnasio: 2" onClick={(e) => handleCloseGimnasio(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" className="Button-Overlay" value="gimnasio: 4" onClick={(e) => handleCloseGimnasio(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>
                        <button type="button" className="Label-button" onClick={handleShowExcursionismo}>
                            Excursionismo
                        </button>
                        <Modal show={showExcursionismo} onHide={handleCloseExcursionismo} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Excursionismo</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" className="Button-Overlay" value="excursionismo: 2" onClick={(e) => handleCloseExcursionismo(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" className="Button-Overlay" value="excursionismo: 4" onClick={(e) => handleCloseExcursionismo(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>
                        <button type="button" className="Label-button" onClick={handleShowHipica}>
                            Hípica
                        </button>
                        <Modal show={showHipica} onHide={handleCloseHipica} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Hípica</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" className="Button-Overlay" value="hipica: 2" onClick={(e) => handleCloseHipica(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" className="Button-Overlay" value="hipica: 4" onClick={(e) => handleCloseHipica(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>
                        <button type="button" className="Label-button" onClick={handleShowPadel}>
                            Pádel
                        </button>
                        <Modal show={showPadel} onHide={handleClosePadel} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Pádel</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" className="Button-Overlay" value="padel: 2" onClick={(e) => handleClosePadel(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" className="Button-Overlay" value="padel: 4" onClick={(e) => handleClosePadel(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>
                        <button type="button" className="Label-button" onClick={handleShowRemo}>
                            Remo
                        </button>
                        <Modal show={showRemo} onHide={handleCloseRemo} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Remo</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" className="Button-Overlay" value="remo: 2" onClick={(e) => handleCloseRemo(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" className="Button-Overlay" value="remo: 4" onClick={(e) => handleCloseRemo(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>
                        <button type="button" className="Label-button" onClick={handleShowCorrer}>
                            Correr
                        </button>
                        <Modal show={showCorrer} onHide={handleCloseCorrer} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Correr</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" className="Button-Overlay" value="correr: 2" onClick={(e) => handleCloseCorrer(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" className="Button-Overlay" value="correr: 4" onClick={(e) => handleCloseCorrer(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>
                        <button type="button" className="Label-button" onClick={handleShowEsqui}>
                            Esquí
                        </button>
                        <Modal show={showEsqui} onHide={handleCloseEsqui} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Esquí</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" className="Button-Overlay" value="esqui: 2" onClick={(e) => handleCloseEsqui(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" className="Button-Overlay" value="esqui: 4" onClick={(e) => handleCloseEsqui(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>
                        <button type="button" className="Label-button" onClick={handleShowFronton}>
                            Frontón
                        </button>
                        <Modal show={showFronton} onHide={handleCloseFronton} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Frontón</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" className="Button-Overlay" value="fronton: 2" onClick={(e) => handleCloseFronton(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" className="Button-Overlay" value="fronton: 4" onClick={(e) => handleCloseFronton(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>
                        <button type="button" className="Label-button" onClick={handleShowNatacion}>
                            Natación
                        </button>
                        <Modal show={showNatacion} onHide={handleCloseNatacion} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Natación</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" className="Button-Overlay" value="natacion: 2" onClick={(e) => handleCloseNatacion(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" className="Button-Overlay" value="natacion: 4" onClick={(e) => handleCloseNatacion(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>
                        <button type="button" className="Label-button" onClick={handleShowTenismesa}>
                            Tenis de mesa
                        </button>
                        <Modal show={showTenismesa} onHide={handleCloseTenismesa} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Tenis de mesa</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" className="Button-Overlay" value="tenismesa: 2" onClick={(e) => handleCloseTenismesa(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" className="Button-Overlay" value="tenismesa: 4" onClick={(e) => handleCloseTenismesa(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>
                        <button type="button" className="Label-button" onClick={handleShowTenis}>
                            Tenis
                        </button>
                        <Modal show={showTenis} onHide={handleCloseTenis} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Tenis</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>

                                <div className="contenedor-Overlay">
                                    <button type="button" className="Button-Overlay" value="tenis: 2" onClick={(e) => handleCloseTenis(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" className="Button-Overlay" value="tenis: 4" onClick={(e) => handleCloseTenis(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>
                        <button type="button" className="Label-button" onClick={handleShowAjedrez}>
                            Ajedrez
                        </button>
                        <Modal show={showAjedrez} onHide={handleCloseAjedrez} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Ajedrez</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>

                                <div className="contenedor-Overlay">
                                    <button type="button" className="Button-Overlay" value="ajedrez: 2" onClick={(e) => handleCloseAjedrez(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" className="Button-Overlay" value="ajedrez: 4" onClick={(e) => handleCloseAjedrez(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>
                        <button type="button" className="Label-button" onClick={handleShowMotociclismo}>
                            Motociclismo
                        </button>
                        <Modal show={showMotociclismo} onHide={handleCloseMotociclismo} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Motociclismo</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>

                                <div className="contenedor-Overlay">
                                    <button type="button" className="Button-Overlay" value="motociclismo: 2" onClick={(e) => handleCloseMotociclismo(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" className="Button-Overlay" value="motociclismo: 4" onClick={(e) => handleCloseMotociclismo(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>
                        <button type="button" className="Label-button" onClick={handleShowPetanca}>
                            Petanca
                        </button>
                        <Modal show={showPetanca} onHide={handleClosePetanca} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Petanca</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>

                                <div className="contenedor-Overlay">
                                    <button type="button" className="Button-Overlay" value="petanca: 2" onClick={(e) => handleClosePetanca(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" className="Button-Overlay" value="petanca: 4" onClick={(e) => handleClosePetanca(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>
                        <button type="button" className="Label-button" onClick={handleShowCaza}>
                            Caza
                        </button>
                        <Modal show={showCaza} onHide={handleCloseCaza} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Caza</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>

                                <div className="contenedor-Overlay">
                                    <button type="button" className="Button-Overlay" value="caza: 2" onClick={(e) => handleCloseCaza(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" className="Button-Overlay" value="caza: 4" onClick={(e) => handleCloseCaza(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>
                        <button type="button" className="Label-button" onClick={handleShowYoga}>
                            Yoga
                        </button>
                        <Modal show={showYoga} onHide={handleCloseYoga} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Yoga</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" className="Button-Overlay" value="yoga: 2" onClick={(e) => handleCloseYoga(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" className="Button-Overlay" value="yoga: 4" onClick={(e) => handleCloseYoga(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>
                        <button type="button" className="Label-button" onClick={handleShowPesca}>
                            Pesca
                        </button>
                        <Modal show={showPesca} onHide={handleClosePesca} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Pesca</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" className="Button-Overlay" value="pesca: 2" onClick={(e) => handleClosePesca(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" className="Button-Overlay" value="pesca: 4" onClick={(e) => handleClosePesca(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>
                    </div>

                    {viewAlertDeportes ? (<span className="alert-Register">Elige al menos 5</span>) : ""}

                    <br />

                    <span className="spanTest">¿Qué tipo de películas te gustan? (mín. 4)</span>
                    <br />
                    <div>
                        <button type="button" className="Label-button" onClick={handleShowAccion}>
                            Acción
                        </button>
                        <Modal show={showAccion} onHide={handleCloseAccion} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Películas de Acción</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" className="Button-Overlay" value="accion: 2" onClick={(e) => handleCloseAccion(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" className="Button-Overlay" value="accion: 4" onClick={(e) => handleCloseAccion(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>

                        <button type="button" className="Label-button" onClick={handleShowAventura}>
                            Aventura
                        </button>
                        <Modal show={showAventura} onHide={handleCloseAventura} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Películas de Aventura</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" className="Button-Overlay" value="aventura: 2" onClick={(e) => handleCloseAventura(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" className="Button-Overlay" value="aventura: 4" onClick={(e) => handleCloseAventura(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>
                        <button type="button" className="Label-button" onClick={handleShowComedia}>
                            Comedia
                        </button>
                        <Modal show={showComedia} onHide={handleCloseComedia} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Películas de Comedia</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" className="Button-Overlay" value="comedia: 2" onClick={(e) => handleCloseComedia(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" className="Button-Overlay" value="comedia: 4" onClick={(e) => handleCloseComedia(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>
                        <button type="button" className="Label-button" onClick={handleShowDocumental}>
                            Documentales
                        </button>
                        <Modal show={showDocumental} onHide={handleCloseDocumental} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Documentales</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" className="Button-Overlay" value="documental: 2" onClick={(e) => handleCloseDocumental(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" className="Button-Overlay" value="documental: 4" onClick={(e) => handleCloseDocumental(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>
                        <button type="button" className="Label-button" onClick={handleShowDrama}>
                            Drama
                        </button>
                        <Modal show={showDrama} onHide={handleCloseDrama} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Películas de Drama</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" className="Button-Overlay" value="drama: 2" onClick={(e) => handleCloseDrama(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" className="Button-Overlay" value="drama: 4" onClick={(e) => handleCloseDrama(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>
                        <button type="button" className="Label-button" onClick={handleShowCrimen}>
                            Crimen
                        </button>
                        <Modal show={showCrimen} onHide={handleCloseCrimen} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Películas de Crimen</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" className="Button-Overlay" value="crimen: 2" onClick={(e) => handleCloseCrimen(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" className="Button-Overlay" value="crimen: 4" onClick={(e) => handleCloseCrimen(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>
                        <button type="button" className="Label-button" onClick={handleShowNegro}>
                            Cine Negro
                        </button>
                        <Modal show={showNegro} onHide={handleCloseNegro} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Cine negro</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" className="Button-Overlay" value="negro: 2" onClick={(e) => handleCloseNegro(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" className="Button-Overlay" value="negro: 4" onClick={(e) => handleCloseNegro(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>
                        <button type="button" className="Label-button" onClick={handleShowFantasia}>
                            Fantasía
                        </button>
                        <Modal show={showFantasia} onHide={handleCloseFantasia} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Películas de Fantasía</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" className="Button-Overlay" value="fantasia: 2" onClick={(e) => handleCloseFantasia(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" className="Button-Overlay" value="fantasia: 4" onClick={(e) => handleCloseFantasia(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>
                        <button type="button" className="Label-button" onClick={handleShowRomantica}>
                            Romántica
                        </button>
                        <Modal show={showRomantica} onHide={handleCloseRomantica} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Películas románticas</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" className="Button-Overlay" value="romantica: 2" onClick={(e) => handleCloseRomantica(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" className="Button-Overlay" value="romantica: 4" onClick={(e) => handleCloseRomantica(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>
                        <button type="button" className="Label-button" onClick={handleShowHistoricas}>
                            Películas Históricas
                        </button>
                        <Modal show={showHistoricas} onHide={handleCloseHistoricas} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Películas Históricas</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" className="Button-Overlay" value="historicas: 2" onClick={(e) => handleCloseHistoricas(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" className="Button-Overlay" value="historicas: 4" onClick={(e) => handleCloseHistoricas(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>
                        <button type="button" className="Label-button" onClick={handleShowTerror}>
                            Terror
                        </button>
                        <Modal show={showTerror} onHide={handleCloseTerror} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Películas de Terror</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" className="Button-Overlay" value="terror: 2" onClick={(e) => handleCloseTerror(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" className="Button-Overlay" value="terror: 4" onClick={(e) => handleCloseTerror(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>
                        <button type="button" className="Label-button" onClick={handleShowMisterio}>
                            Misterio
                        </button>
                        <Modal show={showMisterio} onHide={handleCloseMisterio} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Películas de Misterio</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" className="Button-Overlay" value="misterio: 2" onClick={(e) => handleCloseMisterio(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" className="Button-Overlay" value="misterio: 4" onClick={(e) => handleCloseMisterio(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>
                        <button type="button" className="Label-button" onClick={handleShowPolitica}>
                            Política
                        </button>
                        <Modal show={showPolitica} onHide={handleClosePolitica} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Películas de Política</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" className="Button-Overlay" value="politicas: 2" onClick={(e) => handleClosePolitica(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" className="Button-Overlay" value="politicas: 4" onClick={(e) => handleClosePolitica(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>

                        <button type="button" className="Label-button" onClick={handleShowCienciaFiccion}>
                            Ciencia Ficción
                        </button>
                        <Modal show={showCienciaFiccion} onHide={handleCloseCienciaFiccion} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Películas de Ciencia Ficción</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" className="Button-Overlay" value="cienciaficcion: 2" onClick={(e) => handleCloseCienciaFiccion(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" className="Button-Overlay" value="cienciaficcion: 4" onClick={(e) => handleCloseCienciaFiccion(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>
                        <button type="button" className="Label-button" onClick={handleShowSuspense}>
                            Suspense
                        </button>
                        <Modal show={showSuspense} onHide={handleCloseSuspense} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Películas de Suspense</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" className="Button-Overlay" value="suspense: 2" onClick={(e) => handleCloseSuspense(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" className="Button-Overlay" value="suspense: 4" onClick={(e) => handleCloseSuspense(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>
                        <button type="button" className="Label-button" onClick={handleShowMusical}>
                            Musicales
                        </button>
                        <Modal show={showMusical} onHide={handleCloseMusical} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Musicales</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" className="Button-Overlay" value="musical: 2" onClick={(e) => handleCloseMusical(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" className="Button-Overlay" value="musical: 4" onClick={(e) => handleCloseMusical(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>
                        <button type="button" className="Label-button" onClick={handleShowBelico}>
                            Bélico
                        </button>
                        <Modal show={showBelico} onHide={handleCloseBelico} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Películas Bélicas</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button" className="Button-Overlay" value="belico: 2" onClick={(e) => handleCloseBelico(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" className="Button-Overlay" value="belico: 4" onClick={(e) => handleCloseBelico(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>
                        <button type="button" className="Label-button" onClick={handleShowWestern}>
                            Westerns
                        </button>
                        <Modal show={showWestern} onHide={handleCloseWestern} backdrop='static' keyboard="False" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Westerns</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="contenedor-Overlay">
                                    <button type="button"  value="western: 2" onClick={(e) => handleCloseWestern(e)}>
                                        <span className="Texto-Overlay">Me gusta</span>
                                    </button>
                                    <button type="button" className="Button-Overlay" value="western: 4" onClick={(e) => handleCloseWestern(e)}>
                                        <span className="Texto-Overlay">¡Me encanta!</span>
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>
                        <br />
                        {viewAlertPeliculas ? (<span className="alert-Register">Elige al menos 4</span>) : ""}
                        
                        <div>
                            <br />
                            <button type="button" className="Btn-Default" onClick={() => {
                                console.log(musica)
                                console.log(peliculas)
                                console.log(deportes)
                                if (musica.length < 5 || deportes.length < 5 || peliculas.length < 4) {
                                    if (musica.length < 5) {
                                        setViewAlertMusica(true)
                                    }
                                    if (deportes.length < 5) {
                                        setViewAlertDeportes(true)
                                    }
                                    if (peliculas.length < 4) {
                                        setViewAlertPeliculas(true)
                                    }
                                } else {
                                    setViewParteTres(false)
                                    setViewParteCuatro(true)
                                    setViewAlertMusica(false);
                                    setViewAlertDeportes(false);
                                    setViewAlertPeliculas(false);
                                }
                            }}><span className="Texto-Blanco">Siguiente</span></button>
                            <br />
                        </div>
                    </div>

                </div>) : ""}
                {viewParteCuatro ? (<div>
                    <img src={imgAnterior} onClick={clickImagenTres}
                        className="Icon-left-arrow" alt="botonAtras"></img>
                    <br />
                    <span className="spanTest">¿Cuáles son tus aficiones? (mín. 10 en total)</span>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                Actividades al aire libre
                            </Accordion.Header>
                            <Accordion.Body>
                                <div>
                                    <button type="button" className="Label-button" onClick={handleShowPlaya}>
                                        Actividades en la Playa
                                    </button>
                                    <Modal show={showPlaya} onHide={handleClosePlaya} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Actividades en la Playa</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="playa: 2" onClick={(e) => handleClosePlaya(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="playa: 4" onClick={(e) => handleClosePlaya(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowAves}>
                                        Observación de Aves
                                    </button>
                                    <Modal show={showAves} onHide={handleCloseAves} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Observación de Aves</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="aves: 2" onClick={(e) => handleCloseAves(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="aves: 4" onClick={(e) => handleCloseAves(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowJardineria}>
                                        Jardinería
                                    </button>
                                    <Modal show={showJardineria} onHide={handleCloseJardineria} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Jardinería</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="jardineria: 2" onClick={(e) => handleCloseJardineria(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="jardineria: 4" onClick={(e) => handleCloseJardineria(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowMontanismo}>
                                        Montañismo
                                    </button>
                                    <Modal show={showMontanismo} onHide={handleCloseMontanismo} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Montañismo</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="montanismo: 2" onClick={(e) => handleCloseMontanismo(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="montanismo: 4" onClick={(e) => handleCloseMontanismo(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>

                                </div>

                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                Hazlo tú mismo
                            </Accordion.Header>
                            <Accordion.Body>
                                <div>
                                    <button type="button" className="Label-button" onClick={handleShowManualidades}>
                                        Manualidades
                                    </button>
                                    <Modal show={showManualidades} onHide={handleCloseManualidades} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Manualidades</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="manualidades: 2" onClick={(e) => handleCloseManualidades(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="manualidades: 4" onClick={(e) => handleCloseManualidades(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowArtesanias}>
                                        Artesanía
                                    </button>
                                    <Modal show={showArtesanias} onHide={handleCloseArtesanias} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Artesanía</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="artesanias: 2" onClick={(e) => handleCloseArtesanias(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="artesanias: 4" onClick={(e) => handleCloseArtesanias(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowTejido}>
                                        Tejido
                                    </button>
                                    <Modal show={showTejido} onHide={handleCloseTejido} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Tejido</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="tejido: 2" onClick={(e) => handleCloseTejido(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="tejido: 4" onClick={(e) => handleCloseTejido(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowCroche}>
                                        Croché
                                    </button>
                                    <Modal show={showCroche} onHide={handleCloseCroche} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Croché</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="croche: 2" onClick={(e) => handleCloseCroche(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="croche: 4" onClick={(e) => handleCloseCroche(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowGanchillo}>
                                        Ganchillo
                                    </button>
                                    <Modal show={showGanchillo} onHide={handleCloseGanchillo} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Ganchillo</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="ganchillo: 2" onClick={(e) => handleCloseGanchillo(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="ganchillo: 4" onClick={(e) => handleCloseGanchillo(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowMacrame}>
                                        Macramé
                                    </button>
                                    <Modal show={showMacrame} onHide={handleCloseMacrame} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Macramé</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="macrame: 2" onClick={(e) => handleCloseMacrame(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="macrame: 4" onClick={(e) => handleCloseMacrame(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowBordado}>
                                        Bordado
                                    </button>
                                    <Modal show={showBordado} onHide={handleCloseBordado} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Bordado</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="bordado: 2" onClick={(e) => handleCloseBordado(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="bordado: 4" onClick={(e) => handleCloseBordado(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowPuntocruz}>
                                        Punto de cruz
                                    </button>
                                    <Modal show={showPuntocruz} onHide={handleClosePuntocruz} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Punto de cruz</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="puntocruz: 2" onClick={(e) => handleClosePuntocruz(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="puntocruz: 4" onClick={(e) => handleClosePuntocruz(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowBolillo}>
                                        Bolillo
                                    </button>
                                    <Modal show={showBolillo} onHide={handleCloseBolillo} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Bolillo</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="bolillo: 2" onClick={(e) => handleCloseBolillo(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="bolillo: 4" onClick={(e) => handleCloseBolillo(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowCeramica}>
                                        Cerámica
                                    </button>
                                    <Modal show={showCeramica} onHide={handleCloseCeramica} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Cerámica</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="ceramica: 2" onClick={(e) => handleCloseCeramica(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="ceramica: 4" onClick={(e) => handleCloseCeramica(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowModelismo}>
                                        Modelismo
                                    </button>
                                    <Modal show={showModelismo} onHide={handleCloseModelismo} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Modelismo</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="modelismo: 2" onClick={(e) => handleCloseModelismo(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="modelismo: 4" onClick={(e) => handleCloseModelismo(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowCarpinteria}>
                                        Carpintería
                                    </button>
                                    <Modal show={showCarpinteria} onHide={handleCloseCarpinteria} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Carpintería</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="carpinteria: 2" onClick={(e) => handleCloseCarpinteria(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="carpinteria: 4" onClick={(e) => handleCloseCarpinteria(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowCostura}>
                                        Costura
                                    </button>
                                    <Modal show={showCostura} onHide={handleCloseCostura} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Costura</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="costura: 2" onClick={(e) => handleCloseCostura(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="costura: 4" onClick={(e) => handleCloseCostura(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowBricolaje}>
                                        Bricolaje
                                    </button>
                                    <Modal show={showBricolaje} onHide={handleCloseBricolaje} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Bricolaje</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="bricolaje: 2" onClick={(e) => handleCloseBricolaje(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="bricolaje: 4" onClick={(e) => handleCloseBricolaje(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowRobotica}>
                                        Robótica
                                    </button>
                                    <Modal show={showRobotica} onHide={handleCloseRobotica} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Robótica</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="robotica: 2" onClick={(e) => handleCloseRobotica(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="robotica: 4" onClick={(e) => handleCloseRobotica(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>
                                Actividades de Cocina
                            </Accordion.Header>
                            <Accordion.Body>
                                <div>
                                    <button type="button" className="Label-button" onClick={handleShowCerveza}>
                                        Cerveza Artesanal
                                    </button>
                                    <Modal show={showCerveza} onHide={handleCloseCerveza} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Cerveza Artesanal</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="cerveza: 2" onClick={(e) => handleCloseCerveza(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="cerveza: 4" onClick={(e) => handleCloseCerveza(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowCocina}>
                                        Cocina
                                    </button>
                                    <Modal show={showCocina} onHide={handleCloseCocina} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Cocina</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="cocina: 2" onClick={(e) => handleCloseCocina(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="cocina: 4" onClick={(e) => handleCloseCocina(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowReposteria}>
                                        Repostería
                                    </button>
                                    <Modal show={showReposteria} onHide={handleCloseReposteria} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Repostería</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="reposteria: 2" onClick={(e) => handleCloseReposteria(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="reposteria: 4" onClick={(e) => handleCloseReposteria(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowGastronomia}>
                                        Gastronomía Molecular
                                    </button>
                                    <Modal show={showGastronomia} onHide={handleCloseGastronomia} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Gastronomía Molecular</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="gastronomia: 2" onClick={(e) => handleCloseGastronomia(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="gastronomia: 4" onClick={(e) => handleCloseGastronomia(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowIndia}>
                                        Cocina India
                                    </button>
                                    <Modal show={showIndia} onHide={handleCloseIndia} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Cocina India</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="india: 2" onClick={(e) => handleCloseIndia(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="india: 4" onClick={(e) => handleCloseIndia(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowOriental}>
                                        Cocina Oriental
                                    </button>
                                    <Modal show={showOriental} onHide={handleCloseOriental} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Cocina Oriental</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="oriental: 2" onClick={(e) => handleCloseOriental(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="oriental: 4" onClick={(e) => handleCloseOriental(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowMexicana}>
                                        Cocina Mexicana
                                    </button>
                                    <Modal show={showMexicana} onHide={handleCloseMexicana} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Cocina Mexicana</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="mexicana: 2" onClick={(e) => handleCloseMexicana(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="mexicana: 4" onClick={(e) => handleCloseMexicana(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowMediterranea}>
                                        Cocina Mediterránea
                                    </button>
                                    <Modal show={showMediterranea} onHide={handleCloseMediterranea} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Cocina Mediterránea</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="mediterranea: 2" onClick={(e) => handleCloseMediterranea(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="mediterranea: 4" onClick={(e) => handleCloseMediterranea(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>
                                Actividades de Arte
                            </Accordion.Header>
                            <Accordion.Body>
                                <div>
                                    <button type="button" className="Label-button" onClick={handleShowMuseos}>
                                        Museos
                                    </button>
                                    <Modal show={showMuseos} onHide={handleCloseMuseos} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Museos</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="museos: 2" onClick={(e) => handleCloseMuseos(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="museos: 4" onClick={(e) => handleCloseMuseos(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowEscritura}>
                                        Escritura
                                    </button>
                                    <Modal show={showEscritura} onHide={handleCloseEscritura} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Escritura</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="escritura: 2" onClick={(e) => handleCloseEscritura(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="escritura: 4" onClick={(e) => handleCloseEscritura(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>

                                    <button type="button" className="Label-button" onClick={handleShowBeatboxing}>
                                        Beatboxing
                                    </button>
                                    <Modal show={showBeatboxing} onHide={handleCloseBeatboxing} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Beatboxing</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="beatboxing: 2" onClick={(e) => handleCloseBeatboxing(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="beatboxing: 4" onClick={(e) => handleCloseBeatboxing(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowBaile}>
                                        Baile
                                    </button>
                                    <Modal show={showBaile} onHide={handleCloseBaile} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Baile</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="baile: 2" onClick={(e) => handleCloseBaile(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="baile: 4" onClick={(e) => handleCloseBaile(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowFotografia}>
                                        Fotografía
                                    </button>
                                    <Modal show={showFotografia} onHide={handleCloseFotografia} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Fotografía</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="fotografia: 2" onClick={(e) => handleCloseFotografia(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="fotografia: 4" onClick={(e) => handleCloseFotografia(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowDibujo}>
                                        Dibujo
                                    </button>
                                    <Modal show={showDibujo} onHide={handleCloseDibujo} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Dibujo</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="dibujo: 2" onClick={(e) => handleCloseDibujo(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="dibujo: 4" onClick={(e) => handleCloseDibujo(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowInstrumentos}>
                                        Instrumentos
                                    </button>
                                    <Modal show={showInstrumentos} onHide={handleCloseInstrumentos} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Instrumentos</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="instrumentos: 2" onClick={(e) => handleCloseInstrumentos(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="instrumentos: 4" onClick={(e) => handleCloseInstrumentos(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowCanto}>
                                        Canto
                                    </button>
                                    <Modal show={showCanto} onHide={handleCloseCanto} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Canto</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="canto: 2" onClick={(e) => handleCloseCanto(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="canto: 4" onClick={(e) => handleCloseCanto(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowConciertos}>
                                        Conciertos
                                    </button>
                                    <Modal show={showConciertos} onHide={handleCloseConciertos} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Conciertos</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="conciertos: 2" onClick={(e) => handleCloseConciertos(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="conciertos: 4" onClick={(e) => handleCloseConciertos(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowTeatro}>
                                        Teatro
                                    </button>
                                    <Modal show={showTeatro} onHide={handleCloseTeatro} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Teatro</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="teatro: 2" onClick={(e) => handleCloseTeatro(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="teatro: 4" onClick={(e) => handleCloseTeatro(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowPintura}>
                                        Pintura
                                    </button>
                                    <Modal show={showPintura} onHide={handleClosePintura} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Pintura</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="pintura: 2" onClick={(e) => handleClosePintura(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="pintura: 4" onClick={(e) => handleClosePintura(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowLiteratura}>
                                        Literatura
                                    </button>
                                    <Modal show={showLiteratura} onHide={handleCloseLiteratura} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Literatura</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="literatura: 2" onClick={(e) => handleCloseLiteratura(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="literatura: 4" onClick={(e) => handleCloseLiteratura(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowPoesia}>
                                        Poesía
                                    </button>
                                    <Modal show={showPoesia} onHide={handleClosePoesia} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Poesía</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="poesia: 2" onClick={(e) => handleClosePoesia(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="poesia: 4" onClick={(e) => handleClosePoesia(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowComics}>
                                        Cómics
                                    </button>
                                    <Modal show={showComics} onHide={handleCloseComics} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Cómics</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="comics: 2" onClick={(e) => handleCloseComics(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="comics: 4" onClick={(e) => handleCloseComics(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowBlogging}>
                                        Blogging
                                    </button>
                                    <Modal show={showBlogging} onHide={handleCloseBlogging} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Blogging</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="blogging: 2" onClick={(e) => handleCloseBlogging(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="blogging: 4" onClick={(e) => handleCloseBlogging(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowCine}>
                                        Cine
                                    </button>
                                    <Modal show={showCine} onHide={handleCloseCine} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Cine</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="cine: 2" onClick={(e) => handleCloseCine(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="cine: 4" onClick={(e) => handleCloseCine(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>
                                Actividades de entretenimiento
                            </Accordion.Header>
                            <Accordion.Body>
                                <div>
                                    <button type="button" className="Label-button" onClick={handleShowMesa}>
                                        Juegos de mesa
                                    </button>
                                    <Modal show={showMesa} onHide={handleCloseMesa} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Juegos de Mesa</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="mesa: 2" onClick={(e) => handleCloseMesa(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="mesa: 4" onClick={(e) => handleCloseMesa(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowDardos}>
                                        Dardos
                                    </button>
                                    <Modal show={showDardos} onHide={handleCloseDardos} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Dardos</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="dardos: 2" onClick={(e) => handleCloseDardos(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="dardos: 4" onClick={(e) => handleCloseDardos(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowCrucigramas}>
                                        Crucigramas
                                    </button>
                                    <Modal show={showCrucigramas} onHide={handleCloseCrucigramas} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Crucigramas</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="crucigramas: 2" onClick={(e) => handleCloseCrucigramas(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="crucigramas: 4" onClick={(e) => handleCloseCrucigramas(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowCartas}>
                                        Juegos de cartas
                                    </button>
                                    <Modal show={showCartas} onHide={handleCloseCartas} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Juegos de cartas</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="cartas: 2" onClick={(e) => handleCloseCartas(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="cartas: 4" onClick={(e) => handleCloseCartas(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowRompecabezas}>
                                        Rompecabezas
                                    </button>
                                    <Modal show={showRompecabezas} onHide={handleCloseRompecabezas} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Rompecabezas</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="rompecabezas: 2" onClick={(e) => handleCloseRompecabezas(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="rompecabezas: 4" onClick={(e) => handleCloseRompecabezas(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowPoker}>
                                        Póker
                                    </button>
                                    <Modal show={showPoker} onHide={handleClosePoker} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Póker</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="poker: 2" onClick={(e) => handleClosePoker(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="poker: 4" onClick={(e) => handleClosePoker(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowVideojuegos}>
                                        Videojuegos
                                    </button>
                                    <Modal show={showVideojuegos} onHide={handleCloseVideojuegos} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Videojuegos</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="videojuegos: 2" onClick={(e) => handleCloseVideojuegos(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="videojuegos: 4" onClick={(e) => handleCloseVideojuegos(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowBingo}>
                                        Bingo
                                    </button>
                                    <Modal show={showBingo} onHide={handleCloseBingo} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Bingo</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="bingo: 2" onClick={(e) => handleCloseBingo(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="bingo: 4" onClick={(e) => handleCloseBingo(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowCasino}>
                                        Casino
                                    </button>
                                    <Modal show={showCasino} onHide={handleCloseCasino} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Casino</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="casino: 2" onClick={(e) => handleCloseCasino(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="casino: 4" onClick={(e) => handleCloseCasino(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowMagia}>
                                        Magia
                                    </button>
                                    <Modal show={showMagia} onHide={handleCloseMagia} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Magia</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="magia: 2" onClick={(e) => handleCloseMagia(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="magia: 4" onClick={(e) => handleCloseMagia(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowTelenovelas}>
                                        Telenovelas
                                    </button>
                                    <Modal show={showTelenovelas} onHide={handleCloseTelenovelas} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Telenovelas</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="telenovelas: 2" onClick={(e) => handleCloseTelenovelas(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="telenovelas: 4" onClick={(e) => handleCloseTelenovelas(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>
                                Actividades de sociedad
                            </Accordion.Header>
                            <Accordion.Body>
                                <div>
                                    <button type="button" className="Label-button" onClick={handleShowReciclaje}>
                                        Reciclaje
                                    </button>
                                    <Modal show={showReciclaje} onHide={handleCloseReciclaje} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Reciclaje</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="reciclaje: 2" onClick={(e) => handleCloseReciclaje(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="reciclaje: 4" onClick={(e) => handleCloseReciclaje(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowIglesia}>
                                        Iglesia
                                    </button>
                                    <Modal show={showIglesia} onHide={handleCloseIglesia} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Iglesia</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="iglesia: 2" onClick={(e) => handleCloseIglesia(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="iglesia: 4" onClick={(e) => handleCloseIglesia(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowSocializar}>
                                        Socializar
                                    </button>
                                    <Modal show={showSocializar} onHide={handleCloseSocializar} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Socializar</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="socializar: 2" onClick={(e) => handleCloseSocializar(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="socializar: 4" onClick={(e) => handleCloseSocializar(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowVoluntariado}>
                                        Voluntariado
                                    </button>
                                    <Modal show={showVoluntariado} onHide={handleCloseVoluntariado} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Voluntariado</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="voluntariado: 2" onClick={(e) => handleCloseVoluntariado(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="voluntariado: 4" onClick={(e) => handleCloseVoluntariado(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowAnimales}>
                                        Animales
                                    </button>
                                    <Modal show={showAnimales} onHide={handleCloseAnimales} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Animales</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="animales: 2" onClick={(e) => handleCloseAnimales(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="animales: 4" onClick={(e) => handleCloseAnimales(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowAstrologia}>
                                        Astrología
                                    </button>
                                    <Modal show={showAstrologia} onHide={handleCloseAstrologia} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Astrología</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="astrologia: 2" onClick={(e) => handleCloseAstrologia(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="astrologia: 4" onClick={(e) => handleCloseAstrologia(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowTarot}>
                                        Tarot
                                    </button>
                                    <Modal show={showTarot} onHide={handleCloseTarot} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Tarot</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="tarot: 2" onClick={(e) => handleCloseTarot(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="tarot: 4" onClick={(e) => handleCloseTarot(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowMeditacion}>
                                        Meditación
                                    </button>
                                    <Modal show={showMeditacion} onHide={handleCloseMeditacion} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Meditación</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="meditacion: 2" onClick={(e) => handleCloseMeditacion(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="meditacion: 4" onClick={(e) => handleCloseMeditacion(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowCorazon}>
                                        Revistas del corazón
                                    </button>
                                    <Modal show={showCorazon} onHide={handleCloseCorazon} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Revistas del corazón</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="corazon: 2" onClick={(e) => handleCloseCorazon(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="corazon: 4" onClick={(e) => handleCloseCorazon(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6">
                            <Accordion.Header>
                                Actividades grupales
                            </Accordion.Header>
                            <Accordion.Body>
                                <div>
                                    <button type="button" className="Label-button" onClick={handleShowViajar}>
                                        Viajar
                                    </button>
                                    <Modal show={showViajar} onHide={handleCloseViajar} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Viajar</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="viajar: 2" onClick={(e) => handleCloseViajar(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="viajar: 4" onClick={(e) => handleCloseViajar(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowVino}>
                                        Catas de Vino
                                    </button>
                                    <Modal show={showVino} onHide={handleCloseVino} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Catas de Vino</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="vino: 2" onClick={(e) => handleCloseVino(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="vino: 4" onClick={(e) => handleCloseVino(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowCosplay}>
                                        Cosplay
                                    </button>
                                    <Modal show={showCosplay} onHide={handleCloseCosplay} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Cosplay</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="cosplay: 2" onClick={(e) => handleCloseCosplay(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="cosplay: 4" onClick={(e) => handleCloseCosplay(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal><button type="button" className="Label-button" onClick={handleShowDisfraces}>
                                        Disfraces
                                    </button>
                                    <Modal show={showDisfraces} onHide={handleCloseDisfraces} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Disfraces</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="disfraces: 2" onClick={(e) => handleCloseDisfraces(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="disfraces: 4" onClick={(e) => handleCloseDisfraces(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowTurismo}>
                                        Turismo local
                                    </button>
                                    <Modal show={showTurismo} onHide={handleCloseTurismo} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Turismo local</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="turismo: 2" onClick={(e) => handleCloseTurismo(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="turismo: 4" onClick={(e) => handleCloseTurismo(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowRol}>
                                        Juegos de rol
                                    </button>
                                    <Modal show={showRol} onHide={handleCloseRol} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Juegos de rol</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="rol: 2" onClick={(e) => handleCloseRol(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="rol: 4" onClick={(e) => handleCloseRol(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowVivo}>
                                        Rol en vivo
                                    </button>
                                    <Modal show={showVivo} onHide={handleCloseVivo} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Rol en vivo</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="vivo: 2" onClick={(e) => handleCloseVivo(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="vivo: 4" onClick={(e) => handleCloseVivo(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowHistorica}>
                                        Recreación histórica
                                    </button>
                                    <Modal show={showHistorica} onHide={handleCloseHistorica} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Recreación histórica</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="historica: 2" onClick={(e) => handleCloseHistorica(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="historica: 4" onClick={(e) => handleCloseHistorica(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowFumadores}>
                                        Club de fumadores
                                    </button>
                                    <Modal show={showFumadores} onHide={handleCloseFumadores} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Club de fumadores</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="fumadores: 2" onClick={(e) => handleCloseFumadores(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="fumadores: 4" onClick={(e) => handleCloseFumadores(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="7">
                            <Accordion.Header>
                                Coleccionismo
                            </Accordion.Header>
                            <Accordion.Body>
                                <div>
                                    <button type="button" className="Label-button" onClick={handleShowAntiguedades}>
                                        Antigüedades
                                    </button>
                                    <Modal show={showAntiguedades} onHide={handleCloseAntiguedades} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Antigüedades</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="antiguedades: 2" onClick={(e) => handleCloseAntiguedades(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="antiguedades: 4" onClick={(e) => handleCloseAntiguedades(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowFilatelia}>
                                        Filatelia
                                    </button>
                                    <Modal show={showFilatelia} onHide={handleCloseFilatelia} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Filatelia</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="filatelia: 2" onClick={(e) => handleCloseFilatelia(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="filatelia: 4" onClick={(e) => handleCloseFilatelia(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowNumismatica}>
                                        Numismática
                                    </button>
                                    <Modal show={showNumismatica} onHide={handleCloseNumismatica} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Numismática</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="numismatica: 2" onClick={(e) => handleCloseNumismatica(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="numismatica: 4" onClick={(e) => handleCloseNumismatica(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
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
                                    <button type="button" className="Label-button" onClick={handleShowAstronomia}>
                                        Astronomía
                                    </button>
                                    <Modal show={showAstronomia} onHide={handleCloseAstronomia} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Astronomía</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="astronomia: 2" onClick={(e) => handleCloseAstronomia(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="astronomia: 4" onClick={(e) => handleCloseAstronomia(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowHistoria}>
                                        Historia
                                    </button>
                                    <Modal show={showHistoria} onHide={handleCloseHistoria} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Historia</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="historia: 2" onClick={(e) => handleCloseHistoria(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="historia: 4" onClick={(e) => handleCloseHistoria(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowMatematicas}>
                                        Matemáticas
                                    </button>
                                    <Modal show={showMatematicas} onHide={handleCloseMatematicas} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Matemáticas</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="matematicas: 2" onClick={(e) => handleCloseMatematicas(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="matematicas: 4" onClick={(e) => handleCloseMatematicas(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowFisica}>
                                        Física
                                    </button>
                                    <Modal show={showFisica} onHide={handleCloseFisica} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Física</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="fisica: 2" onClick={(e) => handleCloseFisica(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="fisica: 4" onClick={(e) => handleCloseFisica(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowQuimica}>
                                        Química
                                    </button>
                                    <Modal show={showQuimica} onHide={handleCloseQuimica} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Química</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="quimica: 2" onClick={(e) => handleCloseQuimica(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="quimica: 4" onClick={(e) => handleCloseQuimica(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowFilologia}>
                                        Filología
                                    </button>
                                    <Modal show={showFilologia} onHide={handleCloseFilologia} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Filología</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="filologia: 2" onClick={(e) => handleCloseFilologia(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="filologia: 4" onClick={(e) => handleCloseFilologia(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowBiologia}>
                                        Biología
                                    </button>
                                    <Modal show={showBiologia} onHide={handleCloseBiologia} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Biología</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="biologia: 2" onClick={(e) => handleCloseBiologia(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="biologia: 4" onClick={(e) => handleCloseBiologia(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <button type="button" className="Label-button" onClick={handleShowZoologia}>
                                        Zoología
                                    </button>
                                    <Modal show={showZoologia} onHide={handleCloseZoologia} backdrop='static' keyboard="False" centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Zoología</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="contenedor-Overlay">
                                                <button type="button" className="Button-Overlay" value="zoologia: 2" onClick={(e) => handleCloseZoologia(e)}>
                                                    <span className="Texto-Overlay">Me gusta</span>
                                                </button>
                                                <button type="button" className="Button-Overlay" value="zoologia: 4" onClick={(e) => handleCloseZoologia(e)}>
                                                    <span className="Texto-Overlay">¡Me encanta!</span>
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    {viewAlertActividades ? (<span className="alert-Register">Elige mínimo 10 aficiones en total</span>) : ""}
                    <br />
                    <div>
                        <button type="button" className="Btn-Default" onClick={() => {
                            if (actividades.length < 10) {
                                setViewAlertActividades(true)
                            } else {
                                setAficiones([actividades, musica, deportes, peliculas])
                                setViewParteCuatro(false)
                                setViewParteCinco(true)
                                setViewAlertActividades(false)
                            }
                        }}><span className="Texto-Blanco">Siguiente</span></button>
                    </div>

                </div>) : ""}


                {viewParteCinco ? (<div>
                    <img src={imgAnterior} onClick={clickImagenCuatro}
                        className="Icon-left-arrow" alt="botonAtras"></img>
                    <br />
                    <span className="spanTest">¿Tienes carnet de conducir?</span>
                    <br />
                    <div className="contenedor-Boolean">
                        <button type="button" name="carnet" className="Label-button-Boolean" value="si" id="si" onClick={(e) => setCarnet(true)}>Sí</button>
                        <br />
                        <button type="button" name="carnet" className="Label-button-Boolean" value="no" id="no" onClick={(e) => setCarnet(false)}>No</button>
                    </div>

                    {viewAlertCarnet ? (<span className="alert-Register">Este campo es obligatorio</span>) : ""}
                    <br />
                    <span className="spanTest">Estarías interesado en un coliving situado...</span>
                    <br />

                    <button type="button" value="costa" className="Label-button" name="ubicacion" onClick={(e) => setUbicacion((ubicacion) => [...ubicacion, e.target.value])} >Cerca de la costa</button>
                    <button type="button" value="ciudad" className="Label-button" name="ubicacion" onClick={(e) => setUbicacion((ubicacion) => [...ubicacion, e.target.value])} >En una ciudad</button>
                    <button type="button" value="interior" className="Label-button" name="ubicacion" onClick={(e) => setUbicacion((ubicacion) => [...ubicacion, e.target.value])} >En el interior</button>
                    <button type="button" value="montana" className="Label-button" name="ubicacion" onClick={(e) => setUbicacion((ubicacion) => [...ubicacion, e.target.value])} >Cerca de montañas</button>

                    <br />
                    {viewAlertZona ? (<span className="alert-Register">Este campo es obligatorio</span>) : ""}

                    
                    <br />
                    <span className="spanTest">Estarías interesado en una vivienda del tipo...</span>
                    <br />
                    <button type="button" value="piso" className="Label-button" name="tipoVivienda" onClick={(e) => setTipoVivienda((tipoVivienda) => [...tipoVivienda, e.target.value])} >Piso</button>
                    <button type="button" value="unifamiliar" className="Label-button" name="tipoVivienda" onClick={(e) => setTipoVivienda((tipoVivienda) => [...tipoVivienda, e.target.value])} >Vivienda unifamiliar</button>
                    <button type="button" value="atico" className="Label-button" name="tipoVivienda" onClick={(e) => setTipoVivienda((tipoVivienda) => [...tipoVivienda, e.target.value])} >Ático</button>
                    <button type="button" value="duplex" className="Label-button" name="tipoVivienda" onClick={(e) => setTipoVivienda((tipoVivienda) => [...tipoVivienda, e.target.value])} >Dúplex</button>
                    <button type="button" value="chalet" className="Label-button" name="tipoVivienda" onClick={(e) => setTipoVivienda((tipoVivienda) => [...tipoVivienda, e.target.value])} >Chalet</button>
                    <button type="button" value="otros" className="Label-button" name="tipoVivienda" onClick={(e) => setTipoVivienda((tipoVivienda) => [...tipoVivienda, e.target.value])} >Otros tipos</button>
                    <br />
                    {viewAlertVivienda ? (<span className="alert-Register">Este campo es obligatorio</span>) : ""}
                   
                    <br />

                    <span className="spanTest">¿Dónde te gustaría vivir?</span>
                    <br />
                    <button type="button" value="andalucia" className="Label-button" name="region" onClick={(e) => setRegion((region) => [...region, e.target.value])} >Andalucía</button>
                    <button type="button" value="aragon" className="Label-button" name="region" onClick={(e) => setRegion((region) => [...region, e.target.value])} >Aragón</button>
                    <button type="button" value="asturias" className="Label-button" name="region" onClick={(e) => setRegion((region) => [...region, e.target.value])} >Asturias</button>
                    <button type="button" value="baleares" className="Label-button" name="region" onClick={(e) => setRegion((region) => [...region, e.target.value])} >Islas Baleares</button>
                    <button type="button" value="canarias" className="Label-button" name="region" onClick={(e) => setRegion((region) => [...region, e.target.value])} >Islas Canarias</button>
                    <button type="button" value="cantabria" className="Label-button" name="region" onClick={(e) => setRegion((region) => [...region, e.target.value])} >Cantabria</button>
                    <button type="button" value="castillaleon" className="Label-button" name="region" onClick={(e) => setRegion((region) => [...region, e.target.value])} >Castilla y León</button>
                    <button type="button" value="castillalamancha" className="Label-button" name="region" onClick={(e) => setRegion((region) => [...region, e.target.value])} >Castilla-La Mancha</button>
                    <button type="button" value="catalunya" className="Label-button" name="region" onClick={(e) => setRegion((region) => [...region, e.target.value])} >Cataluña</button>
                    <button type="button" value="valencia" className="Label-button" name="region" onClick={(e) => setRegion((region) => [...region, e.target.value])} >Comunidad Valenciana</button>
                    <button type="button" value="extremadura" className="Label-button" name="region" onClick={(e) => setRegion((region) => [...region, e.target.value])} >Extremadura</button>
                    <button type="button" value="galicia" className="Label-button" name="region" onClick={(e) => setRegion((region) => [...region, e.target.value])} >Galícia</button>
                    <button type="button" value="madrid" className="Label-button" name="region" onClick={(e) => setRegion((region) => [...region, e.target.value])} >Comunidad de Madrid</button>
                    <button type="button" value="murcia" className="Label-button" name="region" onClick={(e) => setRegion((region) => [...region, e.target.value])} >Región de Murcia</button>
                    <button type="button" value="navarra" className="Label-button" name="region" onClick={(e) => setRegion((region) => [...region, e.target.value])} >Navarra</button>
                    <button type="button" value="paisvasco" className="Label-button" name="region" onClick={(e) => setRegion((region) => [...region, e.target.value])} >País Vasco</button>
                    <button type="button" value="rioja" className="Label-button" name="region" onClick={(e) => setRegion((region) => [...region, e.target.value])} >Rioja</button>
                    <button type="button" value="ceuta" className="Label-button" name="region" onClick={(e) => setRegion((region) => [...region, e.target.value])} >Ceuta</button>
                    <button type="button" value="melilla" className="Label-button" name="region" onClick={(e) => setRegion((region) => [...region, e.target.value])} >Melilla</button>
                    {viewAlertRegion ? (<span className="alert-Register">Este campo es obligatorio</span>) : ""}
                    <br />
                    <br />
                    <div>
                        <button type="button" className="Btn-Default" onClick={() => {
                            if (carnet === "" || ubicacion === "" || tipoVivienda === "" || region === "") {
                                if (carnet === "") {
                                    setViewAlertCarnet(true)
                                }
                                if (ubicacion === "") {
                                    setViewAlertZona(true)
                                }
                                if (tipoVivienda === "") {
                                    setViewAlertVivienda(true)
                                }
                                if (region === "") {
                                    setViewAlertRegion(true)
                                }
                            } else {
                                setViewParteCinco(false);
                                setViewParteSeis(true);
                                setViewAlertCarnet(false);
                                setViewAlertZona(false);
                                setViewAlertVivienda(false);
                                setViewAlertRegion(false);
                            }
                        }}><span className="Texto-Blanco">Siguiente</span></button>

                    </div>
                </div>) : ""
                }

                {viewParteSeis ? (
                    <div>
                        <img src={imgAnterior} onClick={clickImagenCinco}
                            className="Icon-left-arrow" alt="botonAtras"></img>
                        <br />
                        <span className="spanTest">¿Qué instalaciones te gustaría tener?</span>
                        <br />
                        <div>
                            <button type="button" value="salacine" className="Label-button" name="instalaciones" onClick={(e) => setInstalaciones((instalaciones) => [...instalaciones, e.target.value])} >Sala de cine</button>
                            <button type="button" value="recreativos" className="Label-button" name="instalaciones" onClick={(e) => setInstalaciones((instalaciones) => [...instalaciones, e.target.value])} >Sala de recreativos</button>
                            <button type="button" value="salamanualidades" className="Label-button" name="instalaciones" onClick={(e) => setInstalaciones((instalaciones) => [...instalaciones, e.target.value])} >Sala de manualidades</button>
                            <button type="button" value="salagimnasio" className="Label-button" name="instalaciones" onClick={(e) => setInstalaciones((instalaciones) => [...instalaciones, e.target.value])} >Gimnasio</button>
                            <button type="button" value="rehabilitacion" className="Label-button" name="instalaciones" onClick={(e) => setInstalaciones((instalaciones) => [...instalaciones, e.target.value])} >Sala de rehabilitación</button>
                            <button type="button" value="spa" className="Label-button" name="instalaciones" onClick={(e) => setInstalaciones((instalaciones) => [...instalaciones, e.target.value])} >Spa</button>
                            <button type="button" value="pingpong" className="Label-button" name="instalaciones" onClick={(e) => setInstalaciones((instalaciones) => [...instalaciones, e.target.value])} >Mesa de ping pong</button>
                            <button type="button" value="billar" className="Label-button" name="instalaciones" onClick={(e) => setInstalaciones((instalaciones) => [...instalaciones, e.target.value])} >Mesa de Billar</button>
                            <button type="button" value="futbolin" className="Label-button" name="instalaciones" onClick={(e) => setInstalaciones((instalaciones) => [...instalaciones, e.target.value])} >Futbolín</button>
                            <button type="button" value="trastero" className="Label-button" name="instalaciones" onClick={(e) => setInstalaciones((instalaciones) => [...instalaciones, e.target.value])} >Trastero</button>
                            <button type="button" value="garage" className="Label-button" name="instalaciones" onClick={(e) => setInstalaciones((instalaciones) => [...instalaciones, e.target.value])} >Plaza de garaje</button>
                            <button type="button" value="salacocina" className="Label-button" name="instalaciones" onClick={(e) => setInstalaciones((instalaciones) => [...instalaciones, e.target.value])} >Cocina</button>
                            <button type="button" value="buffet" className="Label-button" name="instalaciones" onClick={(e) => setInstalaciones((instalaciones) => [...instalaciones, e.target.value])} >Buffet</button>
                            <button type="button" value="lavavajillas" className="Label-button" name="instalaciones" onClick={(e) => setInstalaciones((instalaciones) => [...instalaciones, e.target.value])} >Lavavajillas</button>
                            <button type="button" value="lavanderia" className="Label-button" name="instalaciones" onClick={(e) => setInstalaciones((instalaciones) => [...instalaciones, e.target.value])} >Lavandería</button>
                        </div>
                        {viewAlertInstalaciones ? (<span className="alert-Register">Este campo es obligatorio</span>) : ""}
                        <br />
                        <span className="spanTest">¿Qué tipo de baño prefieres?</span>
                        <br />
                        <div className="contenedor-Boolean">
                            <button type="button" name="lavabo" value="privado" className="Label-button" onClick={() => setLavabo("privado")}>Privado</button>
                            <button type="button" name="lavabo" value="compartido" className="Label-button" onClick={() => setLavabo("compartido")}>Compartido</button>
                        </div>
                        {viewAlertLavabo ? (<span className="alert-Register">Este campo es obligatorio</span>) : ""}

                        <br />
                        <span className="spanTest">¿Con qué equipamientos exteriores te gustaría contar?</span>
                        <br />
                        <div id="respuestasExteriores">
                            <button type="button" value="no" className="Label-button" name="exteriores" onClick={(e) => setExteriores((exteriores) => [...exteriores, e.target.value])} >Ninguno</button>
                            <button type="button" value="jardin" className="Label-button" name="exteriores" onClick={(e) => setExteriores((exteriores) => [...exteriores, e.target.value])} >Jardín</button>
                            <button type="button" value="terraza" className="Label-button" name="exteriores" onClick={(e) => setExteriores((exteriores) => [...exteriores, e.target.value])} >Terraza</button>
                            <button type="button" value="canchabaloncesto" className="Label-button" name="exteriores" onClick={(e) => setExteriores((exteriores) => [...exteriores, e.target.value])} >Cancha de baloncesto</button>
                            <button type="button" value="huerto" className="Label-button" name="exteriores" onClick={(e) => setExteriores((exteriores) => [...exteriores, e.target.value])} >Huerto</button>
                            <button type="button" value="barbacoa" className="Label-button" name="exteriores" onClick={(e) => setExteriores((exteriores) => [...exteriores, e.target.value])} >Zona de barbacoa</button>
                            <button type="button" value="canchapadel" className="Label-button" name="exteriores" onClick={(e) => setExteriores((exteriores) => [...exteriores, e.target.value])} >Pista de pádel</button>
                            <button type="button" value="piscina" className="Label-button" name="exteriores" onClick={(e) => setExteriores((exteriores) => [...exteriores, e.target.value])} >Piscina</button>
                            <button type="button" value="cubierta" className="Label-button" name="exteriores" onClick={(e) => setExteriores((exteriores) => [...exteriores, e.target.value])} >Piscina cubierta</button>
                            <button type="button" value="campofutbol" className="Label-button" name="exteriores" onClick={(e) => setExteriores((exteriores) => [...exteriores, e.target.value])} >Campo de fútbol</button>
                            <button type="button" value="campogolf" className="Label-button" name="exteriores" onClick={(e) => setExteriores((exteriores) => [...exteriores, e.target.value])} >Campo de golf</button>
                            <button type="button" value="campohipica" className="Label-button" name="exteriores" onClick={(e) => setExteriores((exteriores) => [...exteriores, e.target.value])} >Hípica</button>
                            <button type="button" value="esqui" className="Label-button" name="exteriores" onClick={(e) => setExteriores((exteriores) => [...exteriores, e.target.value])} >Pistas de esquí</button>
                        </div>
                        {viewAlertExteriores ? (<span className="alert-Register">Este campo es obligatorio</span>) : ""}
                        <br />
                        <span className="spanTest">¿Con qué rangos de edad convivirías?</span>
                        <br />
                        <button type="button" value="50_60" className="Label-button" name="rangoEdad" onClick={(e) => setRangoEdad((rangoEdad) => [...rangoEdad, e.target.value])} >Entre 50 y 60 años</button>
                        <button type="button" value="60_70" className="Label-button" name="rangoEdad" onClick={(e) => setRangoEdad((rangoEdad) => [...rangoEdad, e.target.value])} >Entre 60 y 70 años</button>
                        <button type="button" value="70_80" className="Label-button" name="rangoEdad" onClick={(e) => setRangoEdad((rangoEdad) => [...rangoEdad, e.target.value])} >Entre 70 y 80 años</button>
                        <button type="button" value="_80" className="Label-button" name="rangoEdad" onClick={(e) => setRangoEdad((rangoEdad) => [...rangoEdad, e.target.value])} >Más de 80</button>
                        <br />
                        {viewAlertRangoEdad ? (<span className="alert-Register">Este campo es obligatorio</span>) : ""}
                        
                        <br />
                        <span className="spanTest">¿Cuánto dinero máximo destinarías al Co-living al mes?</span>
                        <br />
                        <select name="dinero" id="dinero" className="inputRegistro" onChange={(e) => setDinero(e.target.value)}>
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
                        {viewAlertDinero ? (<span className="alert-Register">Este campo es obligatorio</span>) : ""}
                        <br />
                        <br />
                        <span className="spanTest">¿Qué dimensión mínima en m&sup2; debería tener el immueble?</span>
                        <br />
                        <select name="metros" id="metros" className="inputRegistro" onChange={(e) => setMetros(e.target.value)}>
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
                        {viewAlertMetros ? (<span className="alert-Register">Este campo es obligatorio</span>) : ""}
                        <br />
                        <br />
                        <span className="spanTest">¿Con cuánta gente como máximo compartirías el Co-living?</span>
                        <br />
                        <select name="gente" id="gente" className="inputRegistro" onChange={(e) => setGente(e.target.value)}>
                            <option></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>

                        {viewAlertGente ? (<span className="alert-Register">Este campo es obligatorio</span>) : ""}
                        <br />
                        <br />
                        <div>
                            <button type="button" onClick={(e) => {
                                if (instalaciones === "" || lavabo === "" || exteriores === "" || rangoEdad === "" || dinero === "" || metros === "" || gente === "") {
                                    if (instalaciones === "") {
                                        setViewAlertInstalaciones(true)
                                    }
                                    if (lavabo === "") {
                                        setViewAlertLavabo(true)
                                    }
                                    if (exteriores === "") {
                                        setViewAlertExteriores(true)
                                    }
                                    if (rangoEdad === "") {
                                        setViewAlertRangoEdad(true)
                                    }
                                    if (dinero === "") {
                                        setViewAlertDinero(true)
                                    }
                                    if (metros === "") {
                                        setViewAlertMetros(true)
                                    }
                                    if (gente === "") {
                                        setViewAlertGente(true)
                                    }
                                } else {
                                    enviarDatos(e)
                                }
                            }} className="Btn-Default" variant="primary"><span className="Texto-Blanco">Finalizar</span></button>
                        </div>
                        <br />
                    </div>) : ""}
            </form >
        </div >
    )
}

export default TestAfinidadUser