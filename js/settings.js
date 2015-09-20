if (localStorage.vibrate == 'undefined') {
           localStorage.vibrate = "yes";
         }
         if (localStorage.longti == 'undefined') {
           localStorage.longti = 0;
         }
         if (localStorage.miss == 'undefined') {
           localStorage.miss = "one";
         }
         if (localStorage.coin == 'undefined') {
           localStorage.coin = 0;
         }
         if (localStorage.unlocktlig == 'undefined') {
           localStorage.unlocktlig = "no";
         }
         if (localStorage.unlocksli == 'undefined') {
           localStorage.unlocksli = "no";
         }
         if (localStorage.ssh == 'undefined') {
           localStorage.ssh = 200;
         }
         if (localStorage.sshs == 'undefined') {
           localStorage.sshs = "Mish";
         }
         if (localStorage.sbh == 'undefined') {
           localStorage.sbh = 310;
         }
         if (localStorage.sbhs == 'undefined') {
           localStorage.sbhs = "Angel";
         }
         if (localStorage.slih == 'undefined') {
           localStorage.slih = 400;
         }
         if (localStorage.slihs == 'undefined') {
           localStorage.slihs = "Shaddai";
         }
         if (localStorage.slgh == 'undefined') {
           localStorage.slgh = 600;
         }
         if (localStorage.slghs == 'undefined') {
           localStorage.slghs = "Vera";
         }
         if (localStorage.tsh == 'undefined') {
           localStorage.tsh = 360;
         }
         if (localStorage.tshs == 'undefined') {
           localStorage.tshs = "Davies";
         }
         if (localStorage.tbh == 'undefined') {
           localStorage.tbh = 210;
         }
         if (localStorage.tbhs == 'undefined') {
           localStorage.tbhs = "Babarinsa";
         }
         if (localStorage.tlih == 'undefined') {
           localStorage.tlih = 170;
         }
         if (localStorage.tlihs == 'undefined') {
           localStorage.tlihs = "Jameson";
         }
         if (localStorage.tlgh == 'undefined') {
           localStorage.tlgh = 500;
         }
         if (localStorage.tlghs == 'undefined') {
           localStorage.tlghs = "Dipo-Adedoyin";
         }
         if (localStorage.pointadd == 'undefined') {
           localStorage.pointadd = "zero";
         }
         if (localStorage.timeadd == 'undefined') {
           localStorage.timeadd = "no";
         }
       window.setInterval("refreshDiv()", 1000);  
            function refreshDiv(){ 
               localStorage.longti = parseInt(localStorage.longti) + 1;

               if ((parseInt(localStorage.longti) % 18000) == 0) {
                  localStorage.free = parseInt(localStorage.free) + 1;
                  localStorage.coin = parseInt(localStorage.coin) + 5;
               }
               else {

               }
            }

        document.write(localStorage.coin);
        localStorage.stimer = 200;
      localStorage.btimer = 150;
      localStorage.litimer = 100;
      localStorage.lgtimer = 50;