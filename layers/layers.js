var wms_layers = [];

var lyr_DOPNahesInfrarot_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.wms.nrw.de/geobasis/wms_nw_dop?language%3Dger",
                              attributions: ' ',
                              params: {
                                "LAYERS": "nw_dop_nir",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'DOP Nahes Infrarot',
                            popuplayertitle: 'DOP Nahes Infrarot',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_DOPNahesInfrarot_0, 0]);

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_FBB_UABTEILUNGEN_abgegriffen_alte_FEUAbteilungen_abgegriffen_alte_FE_2 = new ol.format.GeoJSON();
var features_FBB_UABTEILUNGEN_abgegriffen_alte_FEUAbteilungen_abgegriffen_alte_FE_2 = format_FBB_UABTEILUNGEN_abgegriffen_alte_FEUAbteilungen_abgegriffen_alte_FE_2.readFeatures(json_FBB_UABTEILUNGEN_abgegriffen_alte_FEUAbteilungen_abgegriffen_alte_FE_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FBB_UABTEILUNGEN_abgegriffen_alte_FEUAbteilungen_abgegriffen_alte_FE_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FBB_UABTEILUNGEN_abgegriffen_alte_FEUAbteilungen_abgegriffen_alte_FE_2.addFeatures(features_FBB_UABTEILUNGEN_abgegriffen_alte_FEUAbteilungen_abgegriffen_alte_FE_2);
var lyr_FBB_UABTEILUNGEN_abgegriffen_alte_FEUAbteilungen_abgegriffen_alte_FE_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FBB_UABTEILUNGEN_abgegriffen_alte_FEUAbteilungen_abgegriffen_alte_FE_2, 
                style: style_FBB_UABTEILUNGEN_abgegriffen_alte_FEUAbteilungen_abgegriffen_alte_FE_2,
                popuplayertitle: 'FBB_U-ABTEILUNGEN_abgegriffen_alte_FE — U-Abteilungen_abgegriffen_alte_FE',
                interactive: true,
                title: '<img src="styles/legend/FBB_UABTEILUNGEN_abgegriffen_alte_FEUAbteilungen_abgegriffen_alte_FE_2.png" /> FBB_U-ABTEILUNGEN_abgegriffen_alte_FE — U-Abteilungen_abgegriffen_alte_FE'
            });
var format_FBB_ABTEILUNGEN_abgegriffen_alte_FEAbteilungen_abgegriffen_alte_FE_3 = new ol.format.GeoJSON();
var features_FBB_ABTEILUNGEN_abgegriffen_alte_FEAbteilungen_abgegriffen_alte_FE_3 = format_FBB_ABTEILUNGEN_abgegriffen_alte_FEAbteilungen_abgegriffen_alte_FE_3.readFeatures(json_FBB_ABTEILUNGEN_abgegriffen_alte_FEAbteilungen_abgegriffen_alte_FE_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FBB_ABTEILUNGEN_abgegriffen_alte_FEAbteilungen_abgegriffen_alte_FE_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FBB_ABTEILUNGEN_abgegriffen_alte_FEAbteilungen_abgegriffen_alte_FE_3.addFeatures(features_FBB_ABTEILUNGEN_abgegriffen_alte_FEAbteilungen_abgegriffen_alte_FE_3);
var lyr_FBB_ABTEILUNGEN_abgegriffen_alte_FEAbteilungen_abgegriffen_alte_FE_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FBB_ABTEILUNGEN_abgegriffen_alte_FEAbteilungen_abgegriffen_alte_FE_3, 
                style: style_FBB_ABTEILUNGEN_abgegriffen_alte_FEAbteilungen_abgegriffen_alte_FE_3,
                popuplayertitle: 'FBB_ABTEILUNGEN_abgegriffen_alte_FE — Abteilungen_abgegriffen_alte_FE',
                interactive: true,
                title: '<img src="styles/legend/FBB_ABTEILUNGEN_abgegriffen_alte_FEAbteilungen_abgegriffen_alte_FE_3.png" /> FBB_ABTEILUNGEN_abgegriffen_alte_FE — Abteilungen_abgegriffen_alte_FE'
            });
var format_TEST_HIGWAY_LINEhighway_4 = new ol.format.GeoJSON();
var features_TEST_HIGWAY_LINEhighway_4 = format_TEST_HIGWAY_LINEhighway_4.readFeatures(json_TEST_HIGWAY_LINEhighway_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TEST_HIGWAY_LINEhighway_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TEST_HIGWAY_LINEhighway_4.addFeatures(features_TEST_HIGWAY_LINEhighway_4);
var lyr_TEST_HIGWAY_LINEhighway_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TEST_HIGWAY_LINEhighway_4, 
                style: style_TEST_HIGWAY_LINEhighway_4,
                popuplayertitle: 'TEST_HIGWAY_LINE — highway',
                interactive: true,
    title: 'TEST_HIGWAY_LINE — highway<br />\
    <img src="styles/legend/TEST_HIGWAY_LINEhighway_4_0.png" /> cycleway<br />\
    <img src="styles/legend/TEST_HIGWAY_LINEhighway_4_1.png" /> footway<br />\
    <img src="styles/legend/TEST_HIGWAY_LINEhighway_4_2.png" /> path<br />\
    <img src="styles/legend/TEST_HIGWAY_LINEhighway_4_3.png" /> primary<br />\
    <img src="styles/legend/TEST_HIGWAY_LINEhighway_4_4.png" /> residential<br />\
    <img src="styles/legend/TEST_HIGWAY_LINEhighway_4_5.png" /> secondary<br />\
    <img src="styles/legend/TEST_HIGWAY_LINEhighway_4_6.png" /> secondary_link<br />\
    <img src="styles/legend/TEST_HIGWAY_LINEhighway_4_7.png" /> service<br />\
    <img src="styles/legend/TEST_HIGWAY_LINEhighway_4_8.png" /> steps<br />\
    <img src="styles/legend/TEST_HIGWAY_LINEhighway_4_9.png" /> tertiary<br />\
    <img src="styles/legend/TEST_HIGWAY_LINEhighway_4_10.png" /> track<br />\
    <img src="styles/legend/TEST_HIGWAY_LINEhighway_4_11.png" /> unclassified<br />\
    <img src="styles/legend/TEST_HIGWAY_LINEhighway_4_12.png" /> <br />' });
var group_OSM_Haus_Weg_etc = new ol.layer.Group({
                                layers: [lyr_TEST_HIGWAY_LINEhighway_4,],
                                fold: 'open',
                                title: 'OSM_Haus_Weg_etc'});

lyr_DOPNahesInfrarot_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_FBB_UABTEILUNGEN_abgegriffen_alte_FEUAbteilungen_abgegriffen_alte_FE_2.setVisible(true);lyr_FBB_ABTEILUNGEN_abgegriffen_alte_FEAbteilungen_abgegriffen_alte_FE_3.setVisible(true);lyr_TEST_HIGWAY_LINEhighway_4.setVisible(true);
var layersList = [lyr_DOPNahesInfrarot_0,lyr_OpenStreetMap_1,lyr_FBB_UABTEILUNGEN_abgegriffen_alte_FEUAbteilungen_abgegriffen_alte_FE_2,lyr_FBB_ABTEILUNGEN_abgegriffen_alte_FEAbteilungen_abgegriffen_alte_FE_3,group_OSM_Haus_Weg_etc];
lyr_FBB_UABTEILUNGEN_abgegriffen_alte_FEUAbteilungen_abgegriffen_alte_FE_2.set('fieldAliases', {'fid': 'fid', 'abteilung': 'abteilung', 'u_abteilung': 'u_abteilung', 'abt_ut': 'abt_ut', 'ha': 'ha', 'sonderflaeche': 'sonderflaeche', 'SF_Art': 'SF_Art', 'Teil_fl': 'Teil_fl', 'Wege': 'Wege', 'MiB_1': 'MiB_1', 'MiB_2': 'MiB_2', 'wild_aesung': 'wild_aesung', 'teil': 'teil', 'no_geom': 'no_geom', 'kataster': 'kataster', 'flrst_id': 'flrst_id', 'anz_flrst': 'anz_flrst', });
lyr_FBB_ABTEILUNGEN_abgegriffen_alte_FEAbteilungen_abgegriffen_alte_FE_3.set('fieldAliases', {'fid': 'fid', 'abteilung': 'abteilung', 'kataster': 'kataster', 'flrst_id': 'flrst_id', });
lyr_TEST_HIGWAY_LINEhighway_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'agricultural': 'agricultural', 'access:destination': 'access:destination', 'crossing:island': 'crossing:island', 'railing': 'railing', 'cycleway:right': 'cycleway:right', 'cycleway:left': 'cycleway:left', 'crossing': 'crossing', 'ford': 'ford', 'informal': 'informal', 'change:lanes': 'change:lanes', 'railway': 'railway', 'abandoned:railway': 'abandoned:railway', 'turn:lanes:forward': 'turn:lanes:forward', 'bus': 'bus', 'zone:traffic': 'zone:traffic', 'operator': 'operator', 'hazmat:water': 'hazmat:water', 'wikimedia_commons': 'wikimedia_commons', 'footway': 'footway', 'step:length': 'step:length', 'step:height': 'step:height', 'step:condition': 'step:condition', 'overtaking': 'overtaking', 'trail_visibility': 'trail_visibility', 'wheelchair': 'wheelchair', 'material': 'material', 'source:width': 'source:width', 'maxspeed:type': 'maxspeed:type', 'step.condition': 'step.condition', 'step_count': 'step_count', 'step.length': 'step.length', 'step.height': 'step.height', 'ramp': 'ramp', 'handrail': 'handrail', 'tactile_paving': 'tactile_paving', 'hgv': 'hgv', 'website': 'website', 'waterway': 'waterway', 'tunnel': 'tunnel', 'cutline': 'cutline', 'description:de': 'description:de', 'noexit': 'noexit', 'motorcycle': 'motorcycle', 'noname': 'noname', 'maxheight': 'maxheight', 'sidewalk:right': 'sidewalk:right', 'handrail:left': 'handrail:left', 'lcn': 'lcn', 'horse': 'horse', 'sidewalk:left': 'sidewalk:left', 'hiking': 'hiking', 'mtb:scale': 'mtb:scale', 'sac_scale': 'sac_scale', 'oneway:bicycle': 'oneway:bicycle', 'motorcar': 'motorcar', 'handrail:right': 'handrail:right', 'surface.material': 'surface.material', 'emergency': 'emergency', 'vehicle': 'vehicle', 'dog': 'dog', 'service': 'service', 'width': 'width', 'smoothness': 'smoothness', 'check_date': 'check_date', 'description': 'description', 'abandoned:highway': 'abandoned:highway', 'zone:maxspeed': 'zone:maxspeed', 'check_date:surface': 'check_date:surface', 'motor_vehicle': 'motor_vehicle', 'cycleway': 'cycleway', 'access': 'access', 'bicycle': 'bicycle', 'segregated': 'segregated', 'traffic_sign': 'traffic_sign', 'tracktype': 'tracktype', 'maxweight:conditional': 'maxweight:conditional', 'maxweight': 'maxweight', 'maxspeed:forward': 'maxspeed:forward', 'maxspeed:backward': 'maxspeed:backward', 'postal_code': 'postal_code', 'maxspeed:hazmat:forward': 'maxspeed:hazmat:forward', 'lane_markings': 'lane_markings', 'layer': 'layer', 'bridge': 'bridge', 'access:N3': 'access:N3', 'shoulder': 'shoulder', 'maxweight:hazmat': 'maxweight:hazmat', 'maxspeed:hazmat:backward': 'maxspeed:hazmat:backward', 'incline': 'incline', 'source:maxspeed': 'source:maxspeed', 'sidewalk': 'sidewalk', 'junction': 'junction', 'oneway': 'oneway', 'foot': 'foot', 'destination': 'destination', 'turn:lanes:backward': 'turn:lanes:backward', 'lit': 'lit', 'lanes:forward': 'lanes:forward', 'lanes:backward': 'lanes:backward', 'cycleway:both': 'cycleway:both', 'name': 'name', 'surface': 'surface', 'ref': 'ref', 'maxspeed': 'maxspeed', 'lanes': 'lanes', });
lyr_FBB_UABTEILUNGEN_abgegriffen_alte_FEUAbteilungen_abgegriffen_alte_FE_2.set('fieldImages', {'fid': 'TextEdit', 'abteilung': 'Range', 'u_abteilung': 'TextEdit', 'abt_ut': 'TextEdit', 'ha': 'TextEdit', 'sonderflaeche': 'Range', 'SF_Art': 'TextEdit', 'Teil_fl': 'TextEdit', 'Wege': 'TextEdit', 'MiB_1': 'TextEdit', 'MiB_2': 'TextEdit', 'wild_aesung': 'Range', 'teil': 'Range', 'no_geom': 'Range', 'kataster': 'TextEdit', 'flrst_id': 'TextEdit', 'anz_flrst': 'Range', });
lyr_FBB_ABTEILUNGEN_abgegriffen_alte_FEAbteilungen_abgegriffen_alte_FE_3.set('fieldImages', {'fid': 'TextEdit', 'abteilung': 'Range', 'kataster': 'TextEdit', 'flrst_id': 'TextEdit', });
lyr_TEST_HIGWAY_LINEhighway_4.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'agricultural': 'TextEdit', 'access:destination': 'TextEdit', 'crossing:island': 'TextEdit', 'railing': 'TextEdit', 'cycleway:right': 'TextEdit', 'cycleway:left': 'TextEdit', 'crossing': 'TextEdit', 'ford': 'TextEdit', 'informal': 'TextEdit', 'change:lanes': 'TextEdit', 'railway': 'TextEdit', 'abandoned:railway': 'TextEdit', 'turn:lanes:forward': 'TextEdit', 'bus': 'TextEdit', 'zone:traffic': 'TextEdit', 'operator': 'TextEdit', 'hazmat:water': 'TextEdit', 'wikimedia_commons': 'TextEdit', 'footway': 'TextEdit', 'step:length': 'TextEdit', 'step:height': 'TextEdit', 'step:condition': 'TextEdit', 'overtaking': 'TextEdit', 'trail_visibility': 'TextEdit', 'wheelchair': 'TextEdit', 'material': 'TextEdit', 'source:width': 'TextEdit', 'maxspeed:type': 'TextEdit', 'step.condition': 'TextEdit', 'step_count': 'TextEdit', 'step.length': 'TextEdit', 'step.height': 'TextEdit', 'ramp': 'TextEdit', 'handrail': 'TextEdit', 'tactile_paving': 'TextEdit', 'hgv': 'TextEdit', 'website': 'TextEdit', 'waterway': 'TextEdit', 'tunnel': 'TextEdit', 'cutline': 'TextEdit', 'description:de': 'TextEdit', 'noexit': 'TextEdit', 'motorcycle': 'TextEdit', 'noname': 'TextEdit', 'maxheight': 'TextEdit', 'sidewalk:right': 'TextEdit', 'handrail:left': 'TextEdit', 'lcn': 'TextEdit', 'horse': 'TextEdit', 'sidewalk:left': 'TextEdit', 'hiking': 'TextEdit', 'mtb:scale': 'TextEdit', 'sac_scale': 'TextEdit', 'oneway:bicycle': 'TextEdit', 'motorcar': 'TextEdit', 'handrail:right': 'TextEdit', 'surface.material': 'TextEdit', 'emergency': 'TextEdit', 'vehicle': 'TextEdit', 'dog': 'TextEdit', 'service': 'TextEdit', 'width': 'TextEdit', 'smoothness': 'TextEdit', 'check_date': 'TextEdit', 'description': 'TextEdit', 'abandoned:highway': 'TextEdit', 'zone:maxspeed': 'TextEdit', 'check_date:surface': 'TextEdit', 'motor_vehicle': 'TextEdit', 'cycleway': 'TextEdit', 'access': 'TextEdit', 'bicycle': 'TextEdit', 'segregated': 'TextEdit', 'traffic_sign': 'TextEdit', 'tracktype': 'TextEdit', 'maxweight:conditional': 'TextEdit', 'maxweight': 'TextEdit', 'maxspeed:forward': 'TextEdit', 'maxspeed:backward': 'TextEdit', 'postal_code': 'TextEdit', 'maxspeed:hazmat:forward': 'TextEdit', 'lane_markings': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'access:N3': 'TextEdit', 'shoulder': 'TextEdit', 'maxweight:hazmat': 'TextEdit', 'maxspeed:hazmat:backward': 'TextEdit', 'incline': 'TextEdit', 'source:maxspeed': 'TextEdit', 'sidewalk': 'TextEdit', 'junction': 'TextEdit', 'oneway': 'TextEdit', 'foot': 'TextEdit', 'destination': 'TextEdit', 'turn:lanes:backward': 'TextEdit', 'lit': 'TextEdit', 'lanes:forward': 'TextEdit', 'lanes:backward': 'TextEdit', 'cycleway:both': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'ref': 'TextEdit', 'maxspeed': 'TextEdit', 'lanes': 'TextEdit', });
lyr_FBB_UABTEILUNGEN_abgegriffen_alte_FEUAbteilungen_abgegriffen_alte_FE_2.set('fieldLabels', {'fid': 'no label', 'abteilung': 'no label', 'u_abteilung': 'no label', 'abt_ut': 'no label', 'ha': 'no label', 'sonderflaeche': 'no label', 'SF_Art': 'no label', 'Teil_fl': 'no label', 'Wege': 'no label', 'MiB_1': 'no label', 'MiB_2': 'no label', 'wild_aesung': 'no label', 'teil': 'no label', 'no_geom': 'no label', 'kataster': 'no label', 'flrst_id': 'no label', 'anz_flrst': 'no label', });
lyr_FBB_ABTEILUNGEN_abgegriffen_alte_FEAbteilungen_abgegriffen_alte_FE_3.set('fieldLabels', {'fid': 'no label', 'abteilung': 'no label', 'kataster': 'no label', 'flrst_id': 'no label', });
lyr_TEST_HIGWAY_LINEhighway_4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'agricultural': 'no label', 'access:destination': 'no label', 'crossing:island': 'no label', 'railing': 'no label', 'cycleway:right': 'no label', 'cycleway:left': 'no label', 'crossing': 'no label', 'ford': 'no label', 'informal': 'no label', 'change:lanes': 'no label', 'railway': 'no label', 'abandoned:railway': 'no label', 'turn:lanes:forward': 'no label', 'bus': 'no label', 'zone:traffic': 'no label', 'operator': 'no label', 'hazmat:water': 'no label', 'wikimedia_commons': 'no label', 'footway': 'no label', 'step:length': 'no label', 'step:height': 'no label', 'step:condition': 'no label', 'overtaking': 'no label', 'trail_visibility': 'no label', 'wheelchair': 'no label', 'material': 'no label', 'source:width': 'no label', 'maxspeed:type': 'no label', 'step.condition': 'no label', 'step_count': 'no label', 'step.length': 'no label', 'step.height': 'no label', 'ramp': 'no label', 'handrail': 'no label', 'tactile_paving': 'no label', 'hgv': 'no label', 'website': 'no label', 'waterway': 'no label', 'tunnel': 'no label', 'cutline': 'no label', 'description:de': 'no label', 'noexit': 'no label', 'motorcycle': 'no label', 'noname': 'no label', 'maxheight': 'no label', 'sidewalk:right': 'no label', 'handrail:left': 'no label', 'lcn': 'no label', 'horse': 'no label', 'sidewalk:left': 'no label', 'hiking': 'no label', 'mtb:scale': 'no label', 'sac_scale': 'no label', 'oneway:bicycle': 'no label', 'motorcar': 'no label', 'handrail:right': 'no label', 'surface.material': 'no label', 'emergency': 'no label', 'vehicle': 'no label', 'dog': 'no label', 'service': 'no label', 'width': 'no label', 'smoothness': 'no label', 'check_date': 'no label', 'description': 'no label', 'abandoned:highway': 'no label', 'zone:maxspeed': 'no label', 'check_date:surface': 'no label', 'motor_vehicle': 'no label', 'cycleway': 'no label', 'access': 'no label', 'bicycle': 'no label', 'segregated': 'no label', 'traffic_sign': 'no label', 'tracktype': 'no label', 'maxweight:conditional': 'no label', 'maxweight': 'no label', 'maxspeed:forward': 'no label', 'maxspeed:backward': 'no label', 'postal_code': 'no label', 'maxspeed:hazmat:forward': 'no label', 'lane_markings': 'no label', 'layer': 'no label', 'bridge': 'no label', 'access:N3': 'no label', 'shoulder': 'no label', 'maxweight:hazmat': 'no label', 'maxspeed:hazmat:backward': 'no label', 'incline': 'no label', 'source:maxspeed': 'no label', 'sidewalk': 'no label', 'junction': 'no label', 'oneway': 'no label', 'foot': 'no label', 'destination': 'no label', 'turn:lanes:backward': 'no label', 'lit': 'no label', 'lanes:forward': 'no label', 'lanes:backward': 'no label', 'cycleway:both': 'no label', 'name': 'no label', 'surface': 'no label', 'ref': 'no label', 'maxspeed': 'no label', 'lanes': 'no label', });
lyr_TEST_HIGWAY_LINEhighway_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});