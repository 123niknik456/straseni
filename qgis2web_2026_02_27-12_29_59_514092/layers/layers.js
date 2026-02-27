var wms_layers = [];

var lyr_DEM_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'DEM<br />\
    <img src="styles/legend/DEM_0_0.png" /> 30,00<br />\
    <img src="styles/legend/DEM_0_1.png" /> 75,00<br />\
    <img src="styles/legend/DEM_0_2.png" /> 90,00<br />\
    <img src="styles/legend/DEM_0_3.png" /> 103,00<br />\
    <img src="styles/legend/DEM_0_4.png" /> 115,00<br />\
    <img src="styles/legend/DEM_0_5.png" /> 126,00<br />\
    <img src="styles/legend/DEM_0_6.png" /> 137,00<br />\
    <img src="styles/legend/DEM_0_7.png" /> 148,00<br />\
    <img src="styles/legend/DEM_0_8.png" /> 159,00<br />\
    <img src="styles/legend/DEM_0_9.png" /> 170,00<br />\
    <img src="styles/legend/DEM_0_10.png" /> 181,00<br />\
    <img src="styles/legend/DEM_0_11.png" /> 192,00<br />\
    <img src="styles/legend/DEM_0_12.png" /> 203,00<br />\
    <img src="styles/legend/DEM_0_13.png" /> 216,00<br />\
    <img src="styles/legend/DEM_0_14.png" /> 231,00<br />\
    <img src="styles/legend/DEM_0_15.png" /> 248,00<br />\
    <img src="styles/legend/DEM_0_16.png" /> 269,00<br />\
    <img src="styles/legend/DEM_0_17.png" /> 293,00<br />\
    <img src="styles/legend/DEM_0_18.png" /> 322,00<br />\
    <img src="styles/legend/DEM_0_19.png" /> 386,00<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DEM_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [3142842.984861, 5940192.648635, 3204347.003525, 5996949.869522]
        })
    });
var lyr_Base_map_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Base_map<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Base_map_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [3142500.878474, 5939769.750498, 3204892.257077, 5997732.454085]
        })
    });
var format_PunctedeInteres_2 = new ol.format.GeoJSON();
var features_PunctedeInteres_2 = format_PunctedeInteres_2.readFeatures(json_PunctedeInteres_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PunctedeInteres_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PunctedeInteres_2.addFeatures(features_PunctedeInteres_2);
var lyr_PunctedeInteres_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PunctedeInteres_2, 
                style: style_PunctedeInteres_2,
                popuplayertitle: 'Puncte de Interes',
                interactive: true,
                title: '<img src="styles/legend/PunctedeInteres_2.png" /> Puncte de Interes'
            });
var format_Drumuri_3 = new ol.format.GeoJSON();
var features_Drumuri_3 = format_Drumuri_3.readFeatures(json_Drumuri_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Drumuri_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Drumuri_3.addFeatures(features_Drumuri_3);
var lyr_Drumuri_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Drumuri_3, 
                style: style_Drumuri_3,
                popuplayertitle: 'Drumuri',
                interactive: true,
                title: '<img src="styles/legend/Drumuri_3.png" /> Drumuri'
            });
var format_BazineAcvatice_4 = new ol.format.GeoJSON();
var features_BazineAcvatice_4 = format_BazineAcvatice_4.readFeatures(json_BazineAcvatice_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BazineAcvatice_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BazineAcvatice_4.addFeatures(features_BazineAcvatice_4);
var lyr_BazineAcvatice_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BazineAcvatice_4, 
                style: style_BazineAcvatice_4,
                popuplayertitle: 'Bazine Acvatice',
                interactive: true,
                title: '<img src="styles/legend/BazineAcvatice_4.png" /> Bazine Acvatice'
            });
var format_StrasaniLimite_5 = new ol.format.GeoJSON();
var features_StrasaniLimite_5 = format_StrasaniLimite_5.readFeatures(json_StrasaniLimite_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StrasaniLimite_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StrasaniLimite_5.addFeatures(features_StrasaniLimite_5);
var lyr_StrasaniLimite_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StrasaniLimite_5, 
                style: style_StrasaniLimite_5,
                popuplayertitle: 'Strasani Limite',
                interactive: true,
                title: '<img src="styles/legend/StrasaniLimite_5.png" /> Strasani Limite'
            });
var group_Localiatati_SHP = new ol.layer.Group({
                                layers: [lyr_PunctedeInteres_2,lyr_Drumuri_3,lyr_BazineAcvatice_4,lyr_StrasaniLimite_5,],
                                fold: 'open',
                                title: 'Localiatati_SHP'});

lyr_DEM_0.setVisible(true);lyr_Base_map_1.setVisible(true);lyr_PunctedeInteres_2.setVisible(true);lyr_Drumuri_3.setVisible(true);lyr_BazineAcvatice_4.setVisible(true);lyr_StrasaniLimite_5.setVisible(true);
var layersList = [lyr_DEM_0,lyr_Base_map_1,group_Localiatati_SHP];
lyr_PunctedeInteres_2.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_Drumuri_3.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_BazineAcvatice_4.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_StrasaniLimite_5.set('fieldAliases', {'UA2_STATUS': 'UA2_STATUS', 'RESEDINTA': 'RESEDINTA', 'name': 'name', 'GlobalID': 'GlobalID', 'CNTR_CODE': 'CNTR_CODE', 'LANG': 'LANG', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_PunctedeInteres_2.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', });
lyr_Drumuri_3.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', });
lyr_BazineAcvatice_4.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', });
lyr_StrasaniLimite_5.set('fieldImages', {'UA2_STATUS': 'TextEdit', 'RESEDINTA': 'TextEdit', 'name': 'TextEdit', 'GlobalID': 'TextEdit', 'CNTR_CODE': 'TextEdit', 'LANG': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PunctedeInteres_2.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', });
lyr_Drumuri_3.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_BazineAcvatice_4.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', });
lyr_StrasaniLimite_5.set('fieldLabels', {'UA2_STATUS': 'no label', 'RESEDINTA': 'no label', 'name': 'no label', 'GlobalID': 'no label', 'CNTR_CODE': 'no label', 'LANG': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_StrasaniLimite_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});