$(function(){
var countryOptions;
var stateOptions;
var districtOptions;
	$.getJSON('js/countries.json',function(result){
		$.each(result, function(i,country) {
			//<option value='countrycode'>contryname</option>
			countryOptions+="<option value='"
			+country.code+
			"'>"
			+country.name+
			"</option>";
			 });
			 $('#country').html(countryOptions);
	});
	$("#country").change(function(){
	if($(this).val()=="IN"){
			$.getJSON('js/indianStates.json',function(result){
			$.each(result, function(stateCode,stateName) {
				//<option value='stateCode'>stateName</option>
				stateOptions+="<option value='"
				+stateCode+
				"'>"
				+stateName+
				"</option>";
				 });
				 $('#state').html(stateOptions);
			});
		}
	});	
	$("#state").change(function(){
	if($(this).val()=="AP"){
			$.getJSON('js/APDistricts.json',function(result){
			$.each(result, function(i,district) {
				//<option value='districtName'>districtName</option>
				districtOptions+="<option value='"
				+district.name+
				"'>"
				+district.name+
				"</option>";
				 });
				 $('#district').html(districtOptions);
			});
		}
	});	
});


$(function(){
var bcountryOptions;
var bstateOptions;
var bdistrictOptions;
	$.getJSON('js/countries.json',function(result){
		$.each(result, function(i,bcountry) {
			//<option value='countrycode'>contryname</option>
			bcountryOptions+="<option value='"
			+bcountry.code+
			"'>"
			+bcountry.name+
			"</option>";
			 });
			 $('#bcountry').html(bcountryOptions);
	});
	$("#bcountry").change(function(){
	if($(this).val()=="IN"){
			$.getJSON('js/indianStates.json',function(result){
			$.each(result, function(bstateCode,bstateName) {
				//<option value='stateCode'>stateName</option>
				bstateOptions+="<option value='"
				+bstateCode+
				"'>"
				+bstateName+
				"</option>";
				 });
				 $('#bstate').html(bstateOptions);
			});
		}
	});	
	$("#bstate").change(function(){
	if($(this).val()=="AP"){
			$.getJSON('js/APDistricts.json',function(result){
			$.each(result, function(i,bdistrict) {
				//<option value='districtName'>districtName</option>
				bdistrictOptions+="<option value='"
				+bdistrict.name+
				"'>"
				+bdistrict.name+
				"</option>";
				 });
				 $('#bdistrict').html(bdistrictOptions);
			});
		}
	});	
});


$(function(){
var pcountryOptions;
var pstateOptions;
var pdistrictOptions;
	$.getJSON('js/countries.json',function(result){
		$.each(result, function(i,pcountry) {
			//<option value='countrycode'>contryname</option>
			pcountryOptions+="<option value='"
			+pcountry.code+
			"'>"
			+pcountry.name+
			"</option>";
			 });
			 $('#pcountry').html(pcountryOptions);
	});
	$("#pcountry").change(function(){
	if($(this).val()=="IN"){
			$.getJSON('js/indianStates.json',function(result){
			$.each(result, function(pstateCode,pstateName) {
				//<option value='stateCode'>stateName</option>
				pstateOptions+="<option value='"
				+pstateCode+
				"'>"
				+pstateName+
				"</option>";
				 });
				 $('#pstate').html(pstateOptions);
			});
		}
	});	
	$("#pstate").change(function(){
	if($(this).val()=="AP"){
			$.getJSON('js/APDistricts.json',function(result){
			$.each(result, function(i,pdistrict) {
				//<option value='districtName'>districtName</option>
				pdistrictOptions+="<option value='"
				+pdistrict.name+
				"'>"
				+pdistrict.name+
				"</option>";
				 });
				 $('#pdistrict').html(pdistrictOptions);
			});
		}
	});	
});