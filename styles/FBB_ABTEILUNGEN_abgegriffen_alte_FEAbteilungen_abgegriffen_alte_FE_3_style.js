var size = 0;
var placement = 'point';

var style_FBB_ABTEILUNGEN_abgegriffen_alte_FEAbteilungen_abgegriffen_alte_FE_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "26.0px \'Arial Narrow\', sans-serif";
    var labelFill = "#626262";
    var bufferColor = "#fafafa";
    var bufferWidth = 1.5000000000000004;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("abteilung") !== null) {
        labelText = String(feature.get("abteilung"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(197,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.748}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
