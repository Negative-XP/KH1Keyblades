const express = require('express')
const app = express()
const PORT = 8000

const kh1 = {
  'kingdom key':{
  'Location': 'Start',
  'stats': "Strength + 3",
  'MP Boost': ""
  },

  'oathkeeper':{
  'Location': 'Traverse Town',
  'stats': "Strength + 9",
  'MP Boost': "+ 1"
  },
  'oblivion':{
  'Location': 'Hollow Bastion',
  'stats': "Strength + 11",
  'MP Boost': "- 1"
  },
  'lady luck':{
  'Location': 'Wonderland',
  'stats': "Strength + 8",
  'MP Boost': "+ 2"
  },
  'olympia':{
    'Location': 'Olympus Coliseum',
    'stats': "Strength + 9",
    'MP Boost': ""
  },
  'jungle key':{
    'Location': 'Deep Jungle',
    'stats': "Strength + 5",
    'MP Boost': ""
  },
  'three wishes':{
    'Location': 'Agrabah',
    'stats': "Strength + 6",
    'MP Boost': "+ 2"
  },
  'pumpkinhead':{
    'Location': 'Halloween Town',
    'stats': "Strength + 7",
    'MP Boost': ""
  },
  'wishing star':{
    'Location': 'Traverse Town',
    'stats': "Strength + 5",
    'MP Boost': ""
  },
  'spellbinder':{
    'Location': 'Traverse Town',
    'stats': "Strength + 4",
    'MP Boost': "+ 2"
  },
  'metal chocobo':{
    'Location': 'Olympus Coliseum',
    'stats': "Strength + 10",
    'MP Boost': "- 1"
  },
  'lionheart':{
    'Location': 'Olympus Coliseum',
    'stats': "Strength + 10",
    'MP Boost': "+ 1"
  },
  'ultima weapon':{
    'Location': 'Wonderland',
    'stats': "Strength + 8",
    'MP Boost': "- 2"
  },
  'crabclaw':{
    'Location': 'Atlantis',
    'stats': "Strength + 6",
    'MP Boost': "+ 1"
  },
  'fairy harp':{
    'Location': 'Neverland',
    'stats': "Strength + 8",
    'MP Boost': "+ 2"
  },
  "fail": {
    "result": "This doesn't exist!"
  }

}



app.get('/', (req, res) =>{
  res.sendFile(__dirname + `/index.html`)
})

app.get('/kh1/:keyblade', (req, res) =>{
  const keyblade = req.params.keyblade.toLowerCase()
  if(kh1[keyblade]){
  res.json(kh1[keyblade])
}else{
  res.json(kh1[`fail`])
}
})

app.listen(process.env.PORT || PORT,()=>{
  console.log(`the server is running on port ${PORT}`)
})
