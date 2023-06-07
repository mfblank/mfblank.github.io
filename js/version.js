//проверка устройства
if(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)){
  
//сам скрипт проверки обновления  
  if (document.querySelector('#version').textContent !== "0.0.1")
  {
    $(".backupdate").css("display", "block");
    $(".update").css("display", "block");
  }

    
    
}      

    
    
