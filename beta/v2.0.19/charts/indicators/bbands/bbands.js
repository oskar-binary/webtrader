define(["jquery","jquery-ui","color-picker","ddslick"],function(a){function b(){a(this).dialog("close")}function c(c,d){require(["css!charts/indicators/bbands/bbands.css"]),require(["text!charts/indicators/bbands/bbands.html"],function(e){e=a(e),e.appendTo("body"),e.find("#bbands_mdl_stroke,#bbands_up_stroke,#bbands_lwr_stroke").each(function(){a(this).colorpicker({part:{map:{size:128},bar:{size:128}},select:function(b,c){a(this).css({background:"#"+c.formatted}).val(""),a(this).data("color","#"+c.formatted)},ok:function(b,c){a(this).css({background:"#"+c.formatted}).val(""),a(this).data("color","#"+c.formatted)}})});var f="Solid";a("#bbands_dashStyle").ddslick({imagePosition:"left",width:148,background:"white",onSelected:function(b){a("#bbands_dashStyle .dd-selected-image").css("max-width","115px"),f=b.selectedData.value}}),a("#bbands_dashStyle .dd-option-image").css("max-width","115px"),e.dialog({autoOpen:!1,resizable:!1,width:350,modal:!0,my:"center",at:"center",of:window,dialogClass:"bbands-ui-dialog",buttons:[{text:"OK",click:function(){if(!isNumericBetween(e.find(".bbands_input_width_for_period").val(),parseInt(e.find(".bbands_input_width_for_period").attr("min")),parseInt(e.find(".bbands_input_width_for_period").attr("max"))))return void require(["jquery","jquery-growl"],function(a){a.growl.error({message:"Only numbers between "+e.find(".bbands_input_width_for_period").attr("min")+" to "+e.find(".bbands_input_width_for_period").attr("max")+" is allowed for "+e.find(".bbands_input_width_for_period").closest("tr").find("td:first").text()+"!"})});var c={period:parseInt(a("#bbands_time_period").val()),devUp:parseInt(a("#bbands_dev_up").val()),devDn:parseInt(a("#bbands_dev_dn").val()),maType:a("#bbands_ma_type").val(),mdlBndStroke:a("#bbands_mdl_stroke").css("background-color"),uprBndStroke:a("#bbands_up_stroke").css("background-color"),lwrBndStroke:a("#bbands_lwr_stroke").css("background-color"),strokeWidth:parseInt(a("#bbands_strokeWidth").val()),dashStyle:f,appliedTo:parseInt(a("#bbands_appliedTo").val())};a(a(".bbands").data("refererChartID")).highcharts().series[0].addIndicator("bbands",c),b.call(e)}},{text:"Cancel",click:function(){b.call(this)}}]}),e.find("select").selectmenu(),a.isFunction(d)&&d(c)})}return{open:function(b){return 0==a(".bbands").length?void c(b,this.open):void a(".bbands").data("refererChartID",b).dialog("open")}}});