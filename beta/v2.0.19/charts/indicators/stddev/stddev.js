define(["jquery","jquery-ui","color-picker","ddslick"],function(a){function b(){a(this).dialog("close"),a(this).find("*").removeClass("ui-state-error")}function c(c,d){require(["css!charts/indicators/stddev/stddev.css"]);require(["text!charts/indicators/stddev/stddev.html"],function(e){var f="#cd0a0a";e=a(e),e.appendTo("body"),e.find("input[type='button']").button(),e.find("#stddev_stroke").colorpicker({part:{map:{size:128},bar:{size:128}},select:function(b,c){a("#stddev_stroke").css({background:"#"+c.formatted}).val(""),f="#"+c.formatted},ok:function(b,c){a("#stddev_stroke").css({background:"#"+c.formatted}).val(""),f="#"+c.formatted}});var g="Solid";a("#stddev_dashStyle").ddslick({imagePosition:"left",width:118,background:"white",onSelected:function(b){a("#stddev_dashStyle .dd-selected-image").css("max-width","85px"),g=b.selectedData.value}}),a("#stddev_dashStyle .dd-option-image").css("max-width","85px");var h=e.find("#stddev_levels").DataTable({paging:!1,scrollY:100,autoWidth:!0,searching:!1,info:!1,columnDefs:[{className:"dt-center",targets:[0,1,2,3]}],aoColumnDefs:[{bSortable:!1,aTargets:[1,3]}]});e.find("#stddev_level_delete").click(function(){h.rows(".selected").indexes().length<=0?require(["jquery","jquery-growl"],function(a){a.growl.error({message:"Select levels to delete!"})}):h.rows(".selected").remove().draw()}),e.find("#stddev_level_add").click(function(){require(["charts/indicators/stddev/stddev_level"],function(b){b.open(c,function(b){a.each(b,function(b,c){a(h.row.add([c.level,'<div style="background-color: '+c.stroke+';width:100%;height:20px;"></div>',c.strokeWidth,'<div style="width:50px;overflow:hidden;"><img src="images/dashstyle/'+c.dashStyle+'.svg" /></div>']).draw().node()).data("level",c).on("click",function(){a(this).toggleClass("selected")})})})})}),e.dialog({autoOpen:!1,resizable:!1,width:350,modal:!0,my:"center",at:"center",of:window,dialogClass:"stddev-ui-dialog",buttons:[{text:"OK",click:function(){if(!isNumericBetween(e.find(".stddev_input_width_for_period").val(),parseInt(e.find(".stddev_input_width_for_period").attr("min")),parseInt(e.find(".stddev_input_width_for_period").attr("max"))))return void require(["jquery","jquery-growl"],function(a){a.growl.error({message:"Only numbers between "+e.find(".stddev_input_width_for_period").attr("min")+" to "+e.find(".stddev_input_width_for_period").attr("max")+" is allowed for "+e.find(".stddev_input_width_for_period").closest("tr").find("td:first").text()+"!"})});var c=[];a.each(h.rows().nodes(),function(){var b=a(this).data("level");b&&c.push({color:b.stroke,dashStyle:b.dashStyle,width:b.strokeWidth,value:b.level,label:{text:b.level}})});var d={period:parseInt(e.find(".stddev_input_width_for_period").val()),stroke:f,strokeWidth:parseInt(e.find("#stddev_strokeWidth").val()),dashStyle:g,levels:c};a(a(".stddev").data("refererChartID")).highcharts().series[0].addIndicator("stddev",d),b.call(e)}},{text:"Cancel",click:function(){b.call(this)}}]}),"function"==typeof d&&d(c)})}return{open:function(b){return 0==a(".stddev").length?void c(b,this.open):void a(".stddev").data("refererChartID",b).dialog("open")}}});