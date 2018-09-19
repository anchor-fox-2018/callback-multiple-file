const fs = require('fs');
const sleep = require('sleep');

function match_data(parent_file, children_file, cb) {
  let parentJson = fs.readFileSync(parent_file)
  let childrenJson = fs.readFileSync(children_file)
  
  let parents = JSON.parse(parentJson)
  let childrens = JSON.parse(childrenJson)
  // console.log(childrens)
  for(let i = 0; i < parents.length; i++){
    parents[i].childrens = []
    for(let j = 0; j < childrens.length; j++){
      if(childrens[j].family == parents[i].last_name){
        parents[i].childrens.push(childrens[j].full_name)
      }
    }
  }
  // sleep.sleep(5)
  cb(5)
  console.log(parents)
 
}

match_data('./parents.json', './children.json', function(time){
  // console.log(parents)
  console.log("Notification : Data sedang diproses !");
  sleep.sleep(time)
})
// sleep.sleep(2)

