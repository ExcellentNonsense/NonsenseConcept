window.onload=function(){startTimer(),switchOnReminder(),fillBand()};var timerInterval=121,timerDuration=36e5;function startTimer(){var e=setInterval(updateTime,timerInterval);setTimeout(function(){clearInterval(e)},timerDuration)}var passedMs=0;function updateTime(){passedMs+=timerInterval,document.getElementById("spent_time").innerHTML=convertMsToTime(passedMs)}function convertMsToTime(e){if(1<=e){var t=e,n=0,o=0;if(999<e){var s=(e-(t=e%1e3))/1e3;59<s?o=(s-(n=s%60))/60:n=s}return(o=0===o?"00":o<10?"0"+o:o)+":"+(n=0===n?"00":n<10?"0"+n:n)+":"+(t=0===t?"000":t<10?"00"+t:t<100?"0"+t:t)}return"00:00:000"}function switchOnReminder(){setTimeout(showOverlay,12e5,0),setTimeout(showOverlay,24e5,1),setTimeout(showOverlay,36e5,2)}function showOverlay(e){var t=document.querySelector("#page_overlay .active_suggestion"),n=document.querySelectorAll("#page_overlay p")[e],o=document.getElementById("page_overlay");(null!=t&&t.classList.remove("active_suggestion"),n.classList.add("active_suggestion"),o.style.opacity="1",o.style.display="block",2===e)&&(document.querySelector("#page_overlay input").style.display="none")}function hideOverlay(){var e=document.querySelectorAll("#page_overlay .active_suggestion span");e[0].classList.add("suggestion_row1"),e[1].classList.add("suggestion_row2"),e[2].classList.add("suggestion_row3");var t=document.getElementById("page_overlay");t.style.opacity="0",setTimeout(function(){t.style.display="none"},900)}function fillBand(){for(var e=1;e<=4;e++){var t=document.getElementById("message_tmpl");t.content.querySelector("img").src="../content/images/"+e+".jpg";var n=document.importNode(t.content,!0);document.getElementById("messages_container").appendChild(n)}}