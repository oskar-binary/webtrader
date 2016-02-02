define(["jquery","jquery-ui","color-picker","ddslick"],function(a){function b(){a(this).dialog("close"),a(this).find("*").removeClass("ui-state-error")}function c(c,d){require(["css!charts/indicators/sum/sum.css"]);var e=[];require(["text!charts/indicators/sum/sum.html"],function(f){var g="#cd0a0a";f=a(f),f.appendTo("body"),f.find("input[type='button']").button(),f.find("#sum_stroke").colorpicker({part:{map:{size:128},bar:{size:128}},select:function(b,c){a("#sum_stroke").css({background:"#"+c.formatted}).val(""),g="#"+c.formatted},ok:function(b,c){a("#sum_stroke").css({background:"#"+c.formatted}).val(""),g="#"+c.formatted}});var h="Solid";a("#sum_dashStyle").ddslick({imagePosition:"left",width:118,background:"white",onSelected:function(b){a("#sum_dashStyle .dd-selected-image").css("max-width","85px"),h=b.selectedData.value}}),a("#sum_dashStyle .dd-option-image").css("max-width","85px");var i=f.find("#sum_levels").DataTable({paging:!1,scrollY:100,autoWidth:!0,searching:!1,info:!1,columnDefs:[{className:"dt-center",targets:[0,1,2,3]}],aoColumnDefs:[{bSortable:!1,aTargets:[1,3]}]});a.each(e,function(b,c){a(i.row.add([c.level,'<div style="background-color: '+c.stroke+';width:100%;height:20px;"></div>',c.strokeWidth,'<div style="width:50px;overflow:hidden;"><img src="images/dashstyle/'+c.dashStyle+'.svg" /></div>']).draw().node()).data("level",c).on("click",function(){a(this).toggleClass("selected")})}),f.find("#sum_level_delete").click(function(){i.rows(".selected").indexes().length<=0?require(["jquery","jquery-growl"],function(a){a.growl.error({message:"Select levels to delete!"})}):i.rows(".selected").remove().draw()}),f.find("#sum_level_add").click(function(){require(["charts/indicators/sum/sum_level"],function(b){b.open(c,function(b){a.each(b,function(b,c){a(i.row.add([c.level,'<div style="background-color: '+c.stroke+';width:100%;height:20px;"></div>',c.strokeWidth,'<div style="width:50px;overflow:hidden;"><img src="images/dashstyle/'+c.dashStyle+'.svg" /></div>']).draw().node()).data("level",c).on("click",function(){a(this).toggleClass("selected")})})})})}),f.dialog({autoOpen:!1,resizable:!1,width:350,modal:!0,my:"center",at:"center",of:window,dialogClass:"sum-ui-dialog",buttons:[{text:"OK",click:function(){if(!isNumericBetween(f.find(".sum_input_width_for_period").val(),parseInt(f.find(".sum_input_width_for_period").attr("min")),parseInt(f.find(".sum_input_width_for_period").attr("max"))))return void require(["jquery","jquery-growl"],function(a){a.growl.error({message:"Only numbers between "+f.find(".sum_input_width_for_period").attr("min")+" to "+f.find(".sum_input_width_for_period").attr("max")+" is allowed for "+f.find(".sum_input_width_for_period").closest("tr").find("td:first").text()+"!"})});var c=[];a.each(i.rows().nodes(),function(){var b=a(this).data("level");b&&c.push({color:b.stroke,dashStyle:b.dashStyle,width:b.strokeWidth,value:b.level,label:{text:b.level}})});var d={period:parseInt(f.find(".sum_input_width_for_period").val()),stroke:g,strokeWidth:parseInt(f.find("#sum_strokeWidth").val()),dashStyle:h,appliedTo:parseInt(f.find("#sum_appliedTo").val()),levels:c};a(a(".sum").data("refererChartID")).highcharts().series[0].addIndicator("sum",d),b.call(f)}},{text:"Cancel",click:function(){b.call(this)}}]}),f.find("select").selectmenu(),"function"==typeof d&&d(c)})}return{open:function(b){return 0==a(".sum").length?void c(b,this.open):void a(".sum").data("refererChartID",b).dialog("open")}}});