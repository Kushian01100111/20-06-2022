function firstNonRepeatingLetter(s) {
    // Add your code here
    let topo = s.toLowerCase().split(""),
        Obj = {};
    topo.forEach(n=>{
      Obj[n] = ++Obj[n] || 1
    })
    let entries = Object.entries(Obj).sort((a,b)=> a[1] - b[1])
    
    if(s === ""){
      return ""
    }else if(entries.length === 1 && topo.length > 1){
      return ""
    }else if(entries[0][0] !== s[topo.indexOf(entries[0][0])]){
      return entries[0][0].toUpperCase();
    }else if(entries[0][0] === s[topo.indexOf(entries[0][0])]) {
        return entries[0][0]
    }else{
        return ""
    }
  }

  firstNonRepeatingLetter("aaaaa")