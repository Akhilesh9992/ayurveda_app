var j = jQuery.noConflict();
var defaultPagePath='app/pages/';
var pgRef;
var headerBackBtn;
var isAutoshowInterstitial = false;

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

/*  function onDeviceReady(){
  alert("device ready");
      adSetter();
	  adAndroidSetter();
  }
*/
function backCall(e){
  
// pormt when back button is pressed on home screen
var value1 = goBackEvent();
//alert(" or "+value1);
  e.preventDefault();
  if (e == 2) { //If User select a No, then return back;
        headerBackBtn=defaultPagePath+'headerHtml.html';
      pgRef=defaultPagePath+'HomePage/'+'homePage.html';
  
      j('#mainHeader').load(headerBackBtn);
      j('#mainContainer').load(pgRef);
      //reset
      appPageHistory=[];
        return;
    }
  if(value1 == 1){
    
  }else if(value1 == 2){
    
  var action=confirm("Do you want to Exit");
  if(action){
     
      navigator.app.exitApp();
  }  
  }
  
}


 var isAppForeground = true;

    function initAds() {
      if (admob) {
        var adPublisherIds = {
          ios : {
            banner : "ca-app-pub-3670000423095472/3826999342",
            interstitial : "ca-app-pub-3670000423095472/5303732548"
          },
          android : {
            banner : "ca-app-pub-3670000423095472/3826999342",
            interstitial : "ca-app-pub-3670000423095472/5303732548"
          }
        };

        var admobid = (/(android)/i.test(navigator.userAgent)) ? adPublisherIds.android : adPublisherIds.ios;

        admob.setOptions({
          publisherId:      admobid.banner,
          interstitialAdId: admobid.interstitial,
          tappxIdiOs:       "/XXXXXXXXX/Pub-XXXX-iOS-IIII",
          tappxIdAndroid:   "/XXXXXXXXX/Pub-XXXX-Android-AAAA",
          tappxShare:       0.5
          //,
          //autoShowInterstitial: true

        });

        registerAdEvents();

      } else {
        alert('AdMobAds plugin not ready');
      }
    }

    function onAdLoaded(e) {
      if (isAppForeground) {
        if (e.adType === admob.AD_TYPE.INTERSTITIAL) {
          //admob.showInterstitialAd();
          console.log("An interstitial has been loaded and autoshown. If you want to load the interstitial first and show it later, set 'autoShowInterstitial: false' in admob.setOptions() and call 'admob.showInterstitialAd();' here");
        } else if (e.adType === admob.AD_TYPE_BANNER) {
          console.log("New banner received");
        }
      }
    }

    function onPause() {
      if (isAppForeground) {
        admob.destroyBannerView();
        isAppForeground = false;
      }
    }

    function onResume() {
      if (!isAppForeground) {
        setTimeout(admob.createBannerView, 1);
        setTimeout(admob.requestInterstitialAd, 1);
        isAppForeground = true;
      }
    }

    // optional, in case respond to events
    function registerAdEvents() {
      document.addEventListener(admob.events.onAdLoaded, onAdLoaded);
      document.addEventListener(admob.events.onAdFailedToLoad, function (e) {});
      document.addEventListener(admob.events.onAdOpened, function (e) {});
      document.addEventListener(admob.events.onAdClosed, function (e) {});
      document.addEventListener(admob.events.onAdLeftApplication, function (e) {});
      document.addEventListener(admob.events.onInAppPurchaseRequested, function (e) {});

      document.addEventListener("pause", onPause, false);
      document.addEventListener("resume", onResume, false);
    }

    function onDeviceReady() {
    	
      
      document.addEventListener("backbutton", backCall, false);
//navigator.notification.confirm("Are you sure want to exit from App?", onConfirmExit, "Confirmation", "Yes,No");
  //  }, false );
      document.removeEventListener('deviceready', onDeviceReady, false);
      initAds();

      // display a banner at startup
      admob.createBannerView();

      // request an interstitial
      admob.requestInterstitialAd();


    }

  document.addEventListener("deviceready", onDeviceReady, false);
    //document.addEventListener("deviceready", onDeviceReady, false);