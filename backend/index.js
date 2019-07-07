function parseBytes(file, socket){
    var reader = new FileReader();

    reader.onloadend = function(datafile) {
      console.log(datafile.target.result)
      socket.emit('data', datafile.target.result);
    };
    
    reader.readAsArrayBuffer(file);
}

