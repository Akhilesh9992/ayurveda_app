var j = jQuery.noConflict();
var defaultPagePath='app/pages/';
var headerMsg = "Expenzing";
var pgRef;
var headerBackBtn;


 function init() {
 	
    
		headerBackBtn=defaultPagePath+'headerHtml.html';
		pgRef=defaultPagePath+'HomePage/'+'homePage.html';
	
	/*j('#mainHeader').load(headerBackBtn);*/
		j('#mainContainer').load(pgRef);

 }
 
  
function isJsonString(str) {
	try {
		JSON.parse(str);
	} catch (e) {
		return false;
	}
	return true;
}


function getDisplayAyurvedaList(){
	//headerBackBtn=defaultPagePath+'headerHtml.html';
		pgRef=defaultPagePath+'index.html';
	//j('#mainHeader').load(headerBackBtn);
		j('#mainContainer').load(pgRef);

	appPageHistory.push(pgRef);
}


function getDisplayDiseasesList(){
	//headerBackBtn=defaultPagePath+'headerHtml.html';
		pgRef=defaultPagePath+'by_Diseases/'+'diseases_index.html';
	//j('#mainHeader').load(headerBackBtn);
		j('#mainContainer').load(pgRef);

	appPageHistory.push(pgRef);
}

function getDisplaynaturalBeautyList(){
	//headerBackBtn=defaultPagePath+'headerHtml.html';
		pgRef=defaultPagePath+'by_beautiful/'+'natural_beauti_index.html';
	//j('#mainHeader').load(headerBackBtn);
		j('#mainContainer').load(pgRef);

	appPageHistory.push(pgRef);
}

function rateus(){

	window.open("market://details?id=air.HanumanChalisaV1.A5","_system");
}
function usefullApps(){

	window.open("https://play.google.com/store/search?q=digitalhawk2016&hl=en","_system");
}

function shareAppsViaWhatsapp(){

window.open("whatsapp://send?text=hello world", "_system");

}
