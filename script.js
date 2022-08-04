function encrypt(){
  var message = document.getElementById('messageToEnc').value;
  var secretPassphrase = document.getElementById('encPass').value;

  if (message == "" || secretPassphrase == ""){
    document.getElementById('EncryptedMessage').innerHTML = "Message or Passcode is blank!";
  }
  else {
    var encrypted = CryptoJS.AES.encrypt(message, secretPassphrase);

    document.getElementById('EncryptedMessage').innerHTML = encrypted
  }
  
}

function decrypt(){
  var message = document.getElementById('messageToDec').value;
  var secretPassphrase = document.getElementById('decPass').value;

  if (message == "" || secretPassphrase == ""){
    document.getElementById('DecryptedMessage').innerHTML = "Message or Passcode is blank!";
  }
  else {
    var decrypted = CryptoJS.AES.decrypt(message, secretPassphrase);

    document.getElementById('DecryptedMessage').innerHTML = decrypted.toString(CryptoJS.enc.Utf8);
  }
}
