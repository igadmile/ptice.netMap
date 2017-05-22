var attrib = 'Kartu izradila <a href="http://www.biom.hr/">Udruga BIOM</a> u sklopu projekta Ptice oko nas',
    attrib2 = 'Kartu izradila <a href="http://www.biom.hr/">Udruga BIOM</a> u sklopu projekta Ptice oko nas. Podloge <a href="http://www.dgu.hr/">Državne Geodetske uprave</a>',
    basemap_0 = L.tileLayer.wms('http://geoportal.dgu.hr/wms', {
        layers: 'DOF',
        format: 'image/jpeg',
        attribution: attrib2
    }),
    basemap_1 = L.tileLayer.wms('http://geoportal.dgu.hr/wms', {
        layers: 'TK25',
        format: 'image/jpeg',
        attribution: attrib2
    }),
    basemap_2 = L.tileLayer('https://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=f13946a5090e4a73aded2506761ae4eb', {
        attribution: attrib
    }),
    selected = null,
    iwc = new L.geoJson(exp_iwc, {
        onEachFeature: onEachFeatureIwc,
        style: doStyleiwc
    }),
    piljIlas = new L.geoJson(exp_piljIlas, {
        onEachFeature: onEachFeaturePil,
        style: doStylepiljIlas
    }),
    zp = new L.geoJson(exp_zps, {
        onEachFeature: onEachFeatureZp,
        style: doStyleZp
    }),
    spas = new L.geoJson(exp_spas, {
        onEachFeature: onEachFeatureSpas,
        style: doStyleSpas
    }),
    pscis = new L.geoJson(exp_pscis, {
        onEachFeature: onEachFeaturePscis,
        style: doStylePscis
    }),
    rez = new L.geoJson(exp_rez, {
        onEachFeature: onEachFeatureRez,
        style: doStyleRez
    });

//dodavanje fucnkcije za promijenu boje
function highlight(layer) {
    layer.setStyle({
        weight: 6,
        color: 'yellow',
        fillColor: 'yellow',
        opacity: 0.7,
        fillOpacity: 0.7
    });
}

//dodavanje fucnkcije za vraćanje boje na staro
function dehighlight(layer, layerName) {
    if (selected === null || selected._leaflet_id !== layer._leaflet_id) {
        if (layerName === 'iwc') {
            iwc.resetStyle(layer);
        } else if (layerName === 'pil') {
            piljIlas.resetStyle(layer);
        } else if (layerName === 'zp') {
            zp.resetStyle(layer);
        } else if (layerName === 'spas') {
            spas.resetStyle(layer);
        } else if (layerName === 'pscis') {
            pscis.resetStyle(layer);
        } else if (layerName === 'rez') {
            rez.resetStyle(layer);
        }
    }
}

function select(layer) {
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

//onEachFeature funkcije
function onEachFeatureIwc(feature, layer) {
    layer.on({
        'mouseover': function (e) {
            highlight(e.target);
        },
        'mouseout': function (e) {
            dehighlight(e.target, 'iwc');
        },
        'click tap': function (e) {
            select(e.target);
            highlight(e.target);
        },
        'popupclose': function (e) {
            selected = null;
            iwc.resetStyle(e.target);
        }
    });
    var popupContent = '<div style="text-align:center"><h3>' + feature.properties.n + '</h3></div>' + '<table><tr><th scope="row">Tip lokaliteta</th><td>' + feature.properties.t + '</td></tr></table>';
    layer.bindPopup(popupContent);
    layer._leaflet_id = feature.properties.n;
}

function onEachFeaturePil(feature, layer) {
    layer.on({
        'mouseover': function (e) {
            highlight(e.target);
        },
        'mouseout': function (e) {
            dehighlight(e.target, 'pil');
        },
        'click tap': function (e) {
            select(e.target);
            highlight(e.target);
        },
        'popupclose': function (e) {
            selected = null;
            piljIlas.resetStyle(e.target);
        }
    });
    var popupContent = '<div style="text-align:center"><h3>' + feature.properties.n + '</h3></div>' + '<table><tr><th scope="row">Županija</th><td>' + feature.properties.z + '</td></tr></table>';
    layer.bindPopup(popupContent);
    layer._leaflet_id = feature.properties.n;
}

function onEachFeatureZp(feature, layer) {
    layer.on({
        'mouseover': function (e) {
            highlight(e.target);
        },
        'mouseout': function (e) {
            dehighlight(e.target, 'zp');
        },
        'click tap': function (e) {
            select(e.target);
            highlight(e.target);
        },
        'popupclose': function (e) {
            selected = null;
            zp.resetStyle(e.target);
        }
    });
    var popupContent = '<div style="text-align:center"><h3>' + feature.properties.n + '</h3></div>' + '<table><tr><th scope="row">Kategorija zaštite</th><td>' + feature.properties.kat + '</td></tr><tr><th scope="row">Potkategorija zaštite</th><td>' + feature.properties.pkat + '</td></tr><tr><th scope="row">Kategorija zaštite na engleskom jeziku</th><td>' + feature.properties.kateng + '</td></tr><tr><th scope="row">Kategorija zaštite prema IUCN-u</th><td>' + feature.properties.i + '</td></tr><tr><th scope="row">Zaštita proglašena godine</th><td>' + feature.properties.g + '</td></tr></table>';
    layer.bindPopup(popupContent);
    layer._leaflet_id = feature.properties.n;
}

function onEachFeatureSpas(feature, layer) {
    layer.on({
        'mouseover': function (e) {
            highlight(e.target);
        },
        'mouseout': function (e) {
            dehighlight(e.target, 'spas');
        },
        'click tap': function (e) {
            select(e.target);
            highlight(e.target);
        },
        'popupclose': function (e) {
            selected = null;
            spas.resetStyle(e.target);
        }
    });
    var popupContent = '<div style="text-align:center"><h3>' + feature.properties.n + '</h3></div>' + '<table><tr><th scope="row">Kod područja</th><td>' + feature.properties.k + '</td></tr><tr><th scope="row">Dodatne informacije</th><td><a href=' + feature.properties.u + feature.properties.k + '>SDF obrazac</a></td></tr></table>';
    layer.bindPopup(popupContent);
    layer._leaflet_id = feature.properties.n;
}

function onEachFeaturePscis(feature, layer) {
    layer.on({
        'mouseover': function (e) {
            highlight(e.target);
        },
        'mouseout': function (e) {
            dehighlight(e.target, 'pscis');
        },
        'click tap': function (e) {
            select(e.target);
            highlight(e.target);
        },
        'popupclose': function (e) {
            selected = null;
            pscis.resetStyle(e.target);
        }
    });
    var popupContent = '<div style="text-align:center"><h3>' + feature.properties.n + '</h3></div>' + '<table><tr><th scope="row">Kod područja</th><td>' + feature.properties.k + '</td></tr><tr><th scope="row">Dodatne informacije</th><td><a href=' + feature.properties.u + feature.properties.k + '>SDF obrazac</a></td></tr></table>';
    layer.bindPopup(popupContent);
    layer._leaflet_id = feature.properties.n;
}

function onEachFeatureRez(feature, layer) {
    layer.on({
        'mouseover': function (e) {
            highlight(e.target);
        },
        'mouseout': function (e) {
            dehighlight(e.target, 'rez');
        },
        'click tap': function (e) {
            select(e.target);
            highlight(e.target);
        },
        'popupclose': function (e) {
            selected = null;
            rez.resetStyle(e.target);
        }
    });
    var popupContent = '<div style="text-align:center"><h3>' + feature.properties.n + '</h3></div>' + '<table><tr><th scope="row">Osnovne informacije</th><td>' + feature.properties.in + '</td></tr><tr><th scope="row">Tip rezervata</th><td>' + feature.properties.pkat + '</td></tr><tr><th scope="row">Županija</th><td>' + feature.properties.z + '</td></tr><tr><th scope="row">Općina</th><td>' + feature.properties.o + '</td></tr><tr><th scope="row">Zaštita proglašena</th><td>' + feature.properties.g + '</td></tr><tr><th scope="row">Površina (Ha)</th><td>' + feature.properties.p + '</td></tr></table>';
    layer.bindPopup(popupContent);
    layer._leaflet_id = feature.properties.n;
}

function doStyleiwc(feature) {
    return {
        weight: '1.3',
        fillColor: '#e11f66',
        color: '#e31a1c',
        weight: '1',
        opacity: '1.0',
        fillOpacity: '0.3',
    };
}

function doStylepiljIlas(feature) {
    return {
        weight: '1.3',
        fillColor: '#e11f66',
        color: '#e31a1c',
        weight: '1',
        opacity: '1.0',
        fillOpacity: '0',
    };
}

function doStyleZp(feature) {
    return {
        weight: '1.3',
        fillColor: '#89cb3c',
        color: '#66982d',
        weight: '1',
        opacity: '1.0',
        fillOpacity: '0.3',
    };
}

function doStyleSpas(feature) {
    return {
        weight: '1.3',
        fillColor: '#4542c8',
        color: '#343298',
        weight: '1',
        opacity: '1.0',
        fillOpacity: '0.3',
    };
}

function doStylePscis(feature) {
    return {
        weight: '1.3',
        fillColor: '#d833d6',
        color: '#771c77',
        weight: '1',
        opacity: '1.0',
        fillOpacity: '0.3',
    };
}

function doStyleRez(feature) {
    return {
        weight: '1.3',
        fillColor: '#dc627b',
        color: '#974355',
        weight: '1',
        opacity: '1.0',
        fillOpacity: '0.3',
    };
}

var baseMaps = [
    {
        groupName: "Pozadinske karte",
        expanded: true,
        layers: {
            'Thunderforest Landscape': basemap_2,
            'TK25': basemap_1,
            'Digitalni ortofoto': basemap_0
        }
    }
];

var overlays2 = [
    {
        groupName: "Zaštićena područja",
        expanded: true,
        layers: {
            "Ornitološki rezervati": rez,
            "Zaštićena područja u RH": zp,
            "Područja značajna za očuvanje divljih ptica": spas,
            "Područja značajna za očuvanje drugih divljih vrsta i njihovih staništa": pscis
        }
    },
    {
        groupName: "Istraživanja ptica",
        expanded: true,
        layers: {
            "Lokaliteti za zimsko prebrojavanje ptica": iwc,
            "Kvadranti za monitoring piljaka i lastavica": piljIlas
        }
    }
];

/*
var base = {
    "osm":basemap_2,
    "tk25":basemap_1,
    "dof":basemap_0
}*/

// var baseLayer = (base[params.base]) ? [base[params.base]] : [base.Topographic];

var params = {};
window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
    params[key] = decodeURIComponent(value);
});

if (params.layers) {
    var overlays = {
        "rez": rez,
        "zp": zp,
        "spas": spas,
        "pscis": pscis,
        "iwc": iwc,
        "piljIlas": piljIlas
    };
    var layers = params.layers.split(',').map(function (item) {
        return overlays[item];
    });
}

var map = L.map('map', {
    center: [params.lat || 44.598, params.lng || 16.589],
    zoom: 7,
    fullscreenControl: true,
    layers: layers || zp
});

// check if mobile or desktop and load elevation profile and controls accordingly
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    L.control.locate().addTo(map);
    L.Control.styledLayerControl(baseMaps, overlays2, {
        collapsed: true
    }).addTo(map);
} else if (document.getElementById("map").offsetWidth < 1025) {
    L.Control.styledLayerControl(baseMaps, overlays2, {
        collapsed: true
    }).addTo(map);
} else {
    L.Control.styledLayerControl(baseMaps, overlays2, {
        collapsed: false
    }).addTo(map);
}
if (params.layers && params.feat) {
    boundsParams = {
        maxZoom: 17
    }
    var featureCoordinates = layers[0]._layers[params.feat];
    layers[0]._layers[params.feat].fire('click', {
        latlng: featureCoordinates[Math.round((featureCoordinates.length) / 2)]
    });
    map.fitBounds(layers[0]._layers[params.feat].getBounds(), boundsParams);
}
// addTomap initializations
L.Control.geocoder({
    position: "topleft",
    placeholder: "Traži..."
}).addTo(map);
basemap_2.addTo(map);
L.control.scale({
    options: {
        position: 'bottomleft',
        maxWidth: 100,
        metric: true,
        imperial: false,
        updateWhenIdle: false
    }
}).addTo(map);
