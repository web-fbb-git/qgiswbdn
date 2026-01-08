var size = 0;
var placement = 'point';

var style_FBB_UABTEILUNGEN_abgegriffen_alte_FEUAbteilungen_abgegriffen_alte_FE_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "10.4px \'Arial\', sans-serif";
    var labelFill = "#555555";
    var bufferColor = "#fafafa";
    var bufferWidth = 3.0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (exp_label_FBB_UABTEILUNGEN_abgegriffen_alte_FEUAbteilungen_abgegriffen_alte_FE_2_eval_expression(context) !== null) {
        labelText = String(exp_label_FBB_UABTEILUNGEN_abgegriffen_alte_FEUAbteilungen_abgegriffen_alte_FE_2_eval_expression(context));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(85,85,236,1.0)', lineDash: [5.016,2.508], lineCap: 'butt', lineJoin: 'miter', width: 2.508}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
