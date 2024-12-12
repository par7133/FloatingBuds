/*
 *  Display the current hash for the config file
 *  
 *  @returns void
 */
function showEncodedPassword() {
  if ($("#Password").val() === "") {
    $("#Password").addClass("emptyfield");
    return;  
  }
  //if ($("#Salt").val() === "") {
  //  $("#Salt").addClass("emptyfield");
  //  return;  
  //}	   	
  passw = encryptSha2( $("#Password").val() + $("#Salt").val());
  msg = "Please set your hash in the config file with this value";
  alert(msg + "\n\n" + passw);	
}
