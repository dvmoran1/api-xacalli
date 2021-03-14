<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Test consumir WebService</title>
  <script src='http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js'></script>

  <script type="text/javascript">
    // Procesar resultados del webservice
    function webServiceResult(data)
    {
      $("#resultado_json").empty();    

      $("#resultado_json").append("Nombre: "+data.name+"<br>");
      $("#resultado_json").append("Pais: "+data.name+"<br>");
      $("#resultado_json").append("Longitud: "+data.lastname+"<br>");
      $("#resultado_json").append("Latitud: "+data.telephoneNumber+"<br>");
    }
      
    // Llamada al webservice
    function callWebService()
    {
      try
      { 
        $.ajax({
          url: "http://localhost:3000/employee",
          data:
          {
              q: "",
          },
          type: "get",
          async: true,
          contentType: "text/json; charset=utf-8",
          //dataType: "jsonp",        
          success: function(msg) { webServiceResult(msg); console.log(msg); },
          error: function(jqXmlHttpRequest, textStatus, errorThrown) { alert("Error leyendo datos."); }
        });
      } 
      catch (err) 
      {
        alert(err);
      }
    }
  </script>
  
</head>

<body>

<button type="button" onclick="javascript:callWebService();">Llamar a WS</button>

<div id="resultado_json"></div>

</body>