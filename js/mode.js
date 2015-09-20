localStorage.scorer = 0;
      var tunlocker = localStorage.unlocktlig;
      function scolo1() {

      var endes1 = document.getElementById("click_p_des1");
      var endos1 = document.getElementById("click_p_des_not1");
      var endes2 = document.getElementById("click_p_des2");
      var endos2 = document.getElementById("click_p_des_not2");

      if(tunlocker == "no") {
         endes1.style.display = "none";
         endos1.style.display = "block";
         endes2.style.display = "none";
         endos2.style.display = "block";
      }
      else if(tunlocker == "maybe") {
        endes1.style.display = "block";
        endos1.style.display = "none";
        endes2.style.display = "none";
        endos2.style.display = "block";
      }
      else {
        endes1.style.display = "block";
        endos1.style.display = "none";
        endes2.style.display = "block";
        endos2.style.display = "none";
      }

    }



     var tunlockers = localStorage.unlocksli;
      function scolo2() {

      var endes3 = document.getElementById("click_p_des3");
      var endos3 = document.getElementById("click_p_des_not3");
      var endes4 = document.getElementById("click_p_des4");
      var endos4 = document.getElementById("click_p_des_not4");

      if(tunlockers == "no") {
         endes3.style.display = "none";
         endos3.style.display = "block";
         endes4.style.display = "none";
         endos4.style.display = "block";
      }
      else if(tunlockers == "maybe") {
        endes3.style.display = "block";
        endos3.style.display = "none";
        endes4.style.display = "none";
        endos4.style.display = "block";
      }
      else {
        endes3.style.display = "block";
        endos3.style.display = "none";
        endes4.style.display = "block";
        endos4.style.display = "none";
      }

    }