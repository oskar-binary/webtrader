define(["jquery","jquery-ui","color-picker"],function(a){function b(){a(this).dialog("close"),a(this).find("*").removeClass("ui-state-error")}function c(c,d){require(["css!charts/indicators/rsi/rsi.css"]);var e=function(a,b,c,d){this.level=a,this.stroke=b,this.strokeWidth=c,this.dashStyle=d},f=[new e(30,"red",1,"dash"),new e(70,"red",1,"dash")];require(["text!charts/indicators/rsi/rsi.html"],function(e){var g="#cd0a0a";e=a(e),e.appendTo("body"),e.find("input[type='button']").button(),e.find("#rsi_stroke").colorpicker({part:{map:{size:128},bar:{size:128}},select:function(b,c){a("#rsi_stroke").css({background:"#"+c.formatted}).val(""),g="#"+c.formatted},ok:function(b,c){a("#rsi_stroke").css({background:"#"+c.formatted}).val(""),g="#"+c.formatted}});var h=e.find("#rsi_levels").DataTable({paging:!1,scrollY:100,autoWidth:!0,searching:!1,info:!1});a.each(f,function(b,c){a(h.row.add([c.level,'<div style="background-color: '+c.stroke+';width:100%;height:20px;"></div>',c.strokeWidth,c.dashStyle]).draw().node()).data("level",c).on("click",function(){a(this).toggleClass("selected")})}),e.find("#rsi_level_delete").click(function(){h.rows(".selected").indexes().length<=0?require(["jquery","jquery-growl"],function(a){a.growl.error({message:"Select levels to delete!"})}):h.rows(".selected").remove().draw()}),e.find("#rsi_level_add").click(function(){require(["charts/indicators/rsi/rsi_level"],function(b){b.open(c,function(b){a.each(b,function(b,c){a(h.row.add([c.level,'<div style="background-color: '+c.stroke+';width:100%;height:20px;"></div>',c.strokeWidth,c.dashStyle]).draw().node()).data("level",c).on("click",function(){a(this).toggleClass("selected")})})})})}),e.dialog({autoOpen:!1,resizable:!1,width:350,modal:!0,my:"center",at:"center",of:window,buttons:[{text:"Ok",click:function(){return isNumericBetween(e.find(".rsi_input_width_for_period").val(),parseInt(e.find(".rsi_input_width_for_period").attr("min")),parseInt(e.find(".rsi_input_width_for_period").attr("max")))?(require(["charts/indicators/highcharts_custom/rsi"],function(b){b.init();var c=[];a.each(h.rows().nodes(),function(){var b=a(this).data("level");b&&c.push({color:b.stroke,dashStyle:b.dashStyle,width:b.strokeWidth,value:b.level,label:{text:b.level}})});var d={period:parseInt(e.find(".rsi_input_width_for_period").val()),stroke:g,strokeWidth:parseInt(e.find("#rsi_strokeWidth").val()),dashStyle:e.find("#rsi_dashStyle").val(),levels:c};a(a(".rsi").data("refererChartID")).highcharts().series[0].addRSI(d)}),void b.call(e)):void require(["jquery","jquery-growl"],function(a){a.growl.error({message:"Only numbers between "+e.find(".rsi_input_width_for_period").attr("min")+" to "+e.find(".rsi_input_width_for_period").attr("max")+" is allowed for "+e.find(".rsi_input_width_for_period").closest("tr").find("td:first").text()+"!"})})}},{text:"Cancel",click:function(){b.call(this)}}]}),"function"==typeof d&&d(c)})}return{open:function(b){return 0==a(".rsi").length?void c(b,this.open):void a(".rsi").data("refererChartID",b).dialog("open")}}});