
function superbowlWin(record){
  let win = record.find(obj => obj.result === 'W')
  if(win === undefined){
      return win
  }else{
    return win.year
  } 
}
