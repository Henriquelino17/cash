function Floculante() {
    var QTD_Pct = document.getElementById("Pct_Floculante").value; 
    var Tbs = document.getElementById("TBS").value;
  
  
    var G_T_Pct = (QTD_Pct*20*1000);
    var G_T_Real = (G_T_Pct/Tbs).toFixed(2);
    
    var elemento = document.getElementById("Resultado");document.getElementById("g_t").innerHTML = G_T_Real +" g/t real"; 

    console.log(QTD_Pct);
    console.log(Tbs);
  }