var map = L.map('map', { fullscreenControl: true,zoomControl:false }).fitBounds([[42.3249920703,13.2426149546],[46.4813372927,22.6741992938]]);
var hash = new L.Hash(map); //add hashes to html address to easy share locations
var additional_attrib = 'Kartu izradila <a href="http://www.biom.hr/">Udruga BIOM</a> u sklopu projekta Ptice oko nas';
var additional_attrib2 = 'Kartu izradila <a href="http://www.biom.hr/">Udruga BIOM</a> u sklopu projekta Ptice oko nas. Podloge <a href="http://www.dgu.hr/">Državne Geodetske uprave</a>';

// home icon
var zoomHome = L.Control.zoomHome({position: 'topleft'});
zoomHome.addTo(map);

var basemap_0 = L.tileLayer.wms('http://geoportal.dgu.hr/wms', {
    layers: 'DOF',
    format: 'image/jpeg',
    attribution: additional_attrib2
});

var basemap_1 = L.tileLayer.wms('http://geoportal.dgu.hr/wms', {
    layers: 'TK25',
    format: 'image/jpeg',
    attribution: additional_attrib2
});

var basemap_2 = L.tileLayer('http://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png', {
    attribution: additional_attrib
});

basemap_2.addTo(map);

//dodavanje fucnkcije za promijenu boje
function highlight (layer) {
    layer.setStyle({
        weight: 6,
        color: 'yellow',
        fillColor:'yellow',
        opacity: 0.7,
        fillOpacity: 0.7
    });
//     layer.bringToFront();
}

//dodavanje fucnkcije za vraćanje boje na staro
function dehighlightIwc (layer) {
    if (selected === null || selected._leaflet_id !== layer._leaflet_id) {
        iwc.resetStyle(layer);
    }
}

function dehighlightPil (layer) {
    if (selected === null || selected._leaflet_id !== layer._leaflet_id) {
        piljIlas.resetStyle(layer);
    }
}

function dehighlightZp (layer) {
    if (selected === null || selected._leaflet_id !== layer._leaflet_id) {
        zp.resetStyle(layer);
    }
}

function dehighlightSpas (layer) {
    if (selected === null || selected._leaflet_id !== layer._leaflet_id) {
        spas.setStyle(doStyleSpas(layer));
        pscis.setStyle(doStylePscis(layer));
    }
}

var selected = null;

function select (layer) {
    // See if there is already a selection
    if (selected !== null) {
        // Store for now
        var previous = selected;
    }
    // Set new selection
    selected = layer;
    // If there was a previous selection
    if (previous) {
        // Dehighlight previous
        dehighlight(previous);
    }
}

//sklapanje gornjih funkcija u oneachfeature za biciklističke staze
function onEachFeatureIwc(feature, layer) {
    layer.on({
        'mouseover': function (e) {
            highlight(e.target);
        },
        'mouseout': function (e) {
            dehighlightIwc(e.target);
        },
        'click': function (e) {
            select(e.target);
        },
        'popupclose':function (e) {
            selected=null;
            iwc.resetStyle(layer);
        }
    });
    var popupContent = '<table><tr><th scope="row">Ime lokaliteta</th><td>' + Autolinker.link(String(feature.properties['Name'])) + '</td></tr><tr><th scope="row">Tip lokaliteta</th><td>' + Autolinker.link(String(feature.properties['tip'])) + '</td></tr></table>';
    layer.bindPopup(popupContent);
}

//sklapanje gornjih funkcija u oneachfeature za biciklističke staze
function onEachFeaturePil(feature, layer) {
    layer.on({
        'mouseover': function (e) {
            highlight(e.target);
        },
        'mouseout': function (e) {
            dehighlightPil(e.target);
        },
        'click': function (e) {
            select(e.target);
        },
        'popupclose':function (e) {
            selected=null;
            piljIlas.resetStyle(layer);
        }
    });
    var popupContent = '<table><tr><th scope="row">Kod kvadranta</th><td>' + Autolinker.link(String(feature.properties['Name'])) + '</td></tr><tr><th scope="row">Županija</th><td>' + Autolinker.link(String(feature.properties['Zupanija'])) + '</td></tr></table>';
    layer.bindPopup(popupContent);
}

function onEachFeatureZp(feature, layer) {
    layer.on({
        'mouseover': function (e) {
            highlight(e.target);
        },
        'mouseout': function (e) {
            dehighlightZp(e.target);
        },
        'click': function (e) {
            select(e.target);
        },
        'popupclose':function (e) {
            selected=null;
            zp.resetStyle(layer);
        }
    });
    var popupContent = '<table><tr><th scope="row">Ime zaštićenog područja</th><td>' + Autolinker.link(String(feature.properties['Name'])) + '</td></tr><tr><th scope="row">Kategorija zaštite</th><td>' + Autolinker.link(String(feature.properties['kat'])) + '</td></tr><tr><th scope="row">Potkategorija zaštite</th><td>' + Autolinker.link(String(feature.properties['podkat']))+ '</td></tr><tr><th scope="row">Kategorija zaštite na engleskom jeziku</th><td>' + Autolinker.link(String(feature.properties['kat_eng']))+ '</td></tr><tr><th scope="row">Kategorija zaštite prema IUCN-u</th><td>' + Autolinker.link(String(feature.properties['IUCN']))+'</td></tr><tr><th scope="row">Zaštita proglašena godine</th><td>' + Autolinker.link(String(feature.properties['DAT_A']))+'</td></tr></table>';
    layer.bindPopup(popupContent);
}

function onEachFeatureSpas(feature, layer) {
    layer.on({
        'mouseover': function (e) {
            highlight(e.target);
        },
        'mouseout': function (e) {
            dehighlightSpas(e.target);
        },
        'click': function (e) {
            select(e.target);
        },
        'popupclose':function (e) {
            selected=null;
            spas.setStyle(doStyleSpas(layer));
            pscis.setStyle(doStylePscis(layer));
        }
    });
    var popupContent = '<table><tr><th scope="row">Ime zaštićenog područja</th><td>' + Autolinker.link(String(feature.properties['Name'])) + '</td></tr><tr><th scope="row">Kod područja</th><td>' + Autolinker.link(String(feature.properties['kod'])) + '</td></tr><tr><th scope="row">Dodatne informacije</th><td>' + Autolinker.link(String(feature.properties['url']))+'</td></tr></table>';
    layer.bindPopup(popupContent);
}

function doStyleiwc(feature) {
    switch (feature.properties.tipid) {
        case 1:
            return {
                weight: '1.3',
                fillColor: '#d4e64c',
                color: '#e31a1c',
                weight: '1',
                dashArray: '',
                opacity: '1.0',
                fillOpacity: '0.3',
            };
            break;
        case 2:
            return {
                weight: '1.3',
                fillColor: '#74ce3c',
                color: '#e31a1c',
                weight: '1',
                dashArray: '',
                opacity: '1.0',
                fillOpacity: '0.3',
            };
            break;
        case 3:
            return {
                weight: '1.3',
                fillColor: '#ef9d19',
                color: '#e31a1c',
                weight: '1',
                dashArray: '',
                opacity: '1.0',
                fillOpacity: '0.3',
            };
            break;
        case 4:
            return {
                weight: '1.3',
                fillColor: '#d713bd',
                color: '#e31a1c',
                weight: '1',
                dashArray: '',
                opacity: '1.0',
                fillOpacity: '0.3',
            };
            break;
        case 5:
            return {
                weight: '1.3',
                fillColor: '#43cbdd',
                color: '#e31a1c',
                weight: '1',
                dashArray: '',
                opacity: '1.0',
                fillOpacity: '0.3',
            };
            break;
        case 6:
            return {
                weight: '1.3',
                fillColor: '#1aee9d',
                color: '#e31a1c',
                weight: '1',
                dashArray: '',
                opacity: '1.0',
                fillOpacity: '0.3',
            };
            break;
        case 7:
            return {
                weight: '1.3',
                fillColor: '#8715c9',
                color: '#e31a1c',
                weight: '1',
                dashArray: '',
                opacity: '1.0',
                fillOpacity: '0.3',
            };
            break;
        case 8:
            return {
                weight: '1.3',
                fillColor: '#e13b25',
                color: '#e31a1c',
                weight: '1',
                dashArray: '',
                opacity: '1.0',
                fillOpacity: '0.3',
            };
            break;
        case 9:
            return {
                weight: '1.3',
                fillColor: '#4bd95b',
                color: '#e31a1c',
                weight: '1',
                dashArray: '',
                opacity: '1.0',
                fillOpacity: '0.3',
            };
            break;
        case 10:
            return {
                weight: '1.3',
                fillColor: '#3720c9',
                color: '#e31a1c',
                weight: '1',
                dashArray: '',
                opacity: '1.0',
                fillOpacity: '0.3',
            };
            break;
        case 11:
            return {
                weight: '1.3',
                fillColor: '#1261ea',
                color: '#e31a1c',
                weight: '1',
                dashArray: '',
                opacity: '1.0',
                fillOpacity: '0.3',
            };
            break;
        default:
            return {
                weight: '1.3',
                fillColor: '#e11f66',
                color: '#e31a1c',
                weight: '1',
                dashArray: '',
                opacity: '1.0',
                fillOpacity: '0.3',
            };
            break;
    }
};

var iwc = new L.geoJson(exp_iwc,{
    onEachFeature: onEachFeatureIwc,
    style: doStyleiwc
});

function doStylepiljIlas(feature) {
    return {
        weight: '1.3',
        fillColor: '#e11f66',
        color: '#e31a1c',
        weight: '1',
        dashArray: '',
        opacity: '1.0',
        fillOpacity: '0',
    };
}

var piljIlas = new L.geoJson(exp_piljIlas,{
    onEachFeature: onEachFeaturePil,
    style: doStylepiljIlas
});

function doStyleZp(feature) {
    return {
        weight: '1.3',
        fillColor: '#89cb3c',
        color: '#66982d',
        weight: '1',
        dashArray: '',
        opacity: '1.0',
        fillOpacity: '0.3',
    };
}

var zp = new L.geoJson(exp_zps,{
    onEachFeature: onEachFeatureZp,
    style: doStyleZp
});

zp.addTo(map);

function doStyleSpas(feature) {
    return {
        weight: '1.3',
        fillColor: '#4542c8',
        color: '#343298',
        weight: '1',
        dashArray: '',
        opacity: '1.0',
        fillOpacity: '0.3',
    };
}

var spas = new L.geoJson(exp_spas,{
    onEachFeature: onEachFeatureSpas,
    style: doStyleSpas
});

function doStylePscis(feature) {
    return {
        weight: '1.3',
        fillColor: '#d833d6',
        color: '#771c77',
        weight: '1',
        dashArray: '',
        opacity: '1.0',
        fillOpacity: '0.3',
    };
}

var pscis = new L.geoJson(exp_pscis,{
    onEachFeature: onEachFeatureSpas,
    style: doStylePscis
});

var baseMaps = [
    { 
        groupName : "Pozadinske karte",
        expanded : true,
        layers    : {
            'Thunderforest Landscape': basemap_2,
            'TK25':basemap_1,
            'Digitalni ortofoto':basemap_0
        }
    }                      
]; 

var baseMaps = [
    { 
        groupName : "Pozadinske karte",
        expanded : true,
        layers    : {
            'Thunderforest Landscape': basemap_2,
            'TK25':basemap_1,
            'Digitalni ortofoto':basemap_0
        }
    }                      
]; 

var overlays = [
    {
    groupName : "Zaštićena područja",
    expanded  : true,
    layers    : { 
        "Zaštićena područja u RH": zp,
        "Područja značajna za očuvanje divljih ptica": spas,
        "Područja značajna za očuvanje drugih divljih vrsta i njihovih staništa":pscis
    }   
    },  
    {
    groupName : "Istraživanja ptica",
    expanded  : true,
    layers    : { 
        "Lokaliteti za zimsko prebrojavanje ptica": iwc,
        "Kvadranti za monitoring piljaka i lastavica":piljIlas
    }   
    }
];

// var sidebar = L.control.sidebar('sidebar').addTo(map);

// check if mobile or desktop and load elevation profile and controls accordingly
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    L.Control.styledLayerControl(baseMaps, overlays, {collapsed:true}).addTo(map);
}
else {
    L.Control.styledLayerControl(baseMaps, overlays, {collapsed:false}).addTo(map);
} 

// locate control
L.control.locate().addTo(map);

L.control.scale({options: {position: 'bottomleft',maxWidth: 100,metric: true,imperial: false,updateWhenIdle: false}}).addTo(map);