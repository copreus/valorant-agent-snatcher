const https = require('https');
const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
const CryptoJS = require('crypto-js');
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
const configFile = path.join(process.cwd(), 'config.json');
const config = JSON.parse(fs.readFileSync(configFile, 'utf8'));

const { check_delay, region, shard, ...maps } = config;


for (const mapName in maps) {
  if (Object.prototype.hasOwnProperty.call(maps, mapName)) {
    global[mapName] = maps[mapName];
  }
}

const agent = new https.Agent({
  rejectUnauthorized: false
});

function base64_encode(text) {
    const encodedWord = CryptoJS.enc.Utf8.parse(text);
    const encoded = CryptoJS.enc.Base64.stringify(encodedWord);
    return encoded;
  }

async function getLockfileData() {
    const lockfilePath = path.join(process.env['LOCALAPPDATA'], 'Riot Games\\Riot Client\\Config\\lockfile');
    const contents = await fs.promises.readFile(lockfilePath, 'utf8');
    let d = {};
    [d.name, d.pid, d.port, d.password, d.protocol] = contents.split(':');
    return d;
}


async function entitlements() {
  try {

    let lockfile = await getLockfileData();
    let password = base64_encode(`riot:${lockfile.password}`)
    let response = await fetch(`https://127.0.0.1:${lockfile.port}/entitlements/v1/token`, {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${password}`
      },
      agent: agent
    });

    response = await response.json();
    return response;
} catch (error) {
    console.log(error);
  }
}


let userid = "";
async function uuid(){
  try{
    let lockfile = await getLockfileData();
    let password = base64_encode(`riot:${lockfile.password}`)
    let response = await fetch(`https://127.0.0.1:${lockfile.port}/chat/v1/session`, {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${password}`
      },
      agent: agent
    });
    response = await response.json();
    //console.log(response)
    if (response.puuid === undefined){
      return 1;
    } else{
      userid = response.puuid;
      return 0;
      
    }
  }catch(e){
    return 1;
  }
}


async function matchid(){
  try{
    let ent = await entitlements();
    if (ent.token === undefined || ent.accessToken === undefined){
      console.log("Failed to fetch entitlements. Do you have Valorant running?")
    }
    //console.log(ent.token)
    //console.log(ent.accessToken)
    let response = await fetch(`https://glz-${region}-1.${shard}.a.pvp.net/pregame/v1/players/${userid}`, {
      method: 'GET',
      headers: {
        'X-Riot-ClientPlatform':'ew0KCSJwbGF0Zm9ybVR5cGUiOiAiUEMiLA0KCSJwbGF0Zm9ybU9TIjogIldpbmRvd3MiLA0KCSJwbGF0Zm9ybU9TVmVyc2lvbiI6ICIxMC4wLjE5MDQyLjEuMjU2LjY0Yml0IiwNCgkicGxhdGZvcm1DaGlwc2V0IjogIlVua25vd24iDQp9',
        'X-Riot-ClientVersion': `09.00.00.2628993`,
        'X-Riot-Entitlements-JWT': `${ent.token}`,
        'Authorization': `Bearer ${ent.accessToken}`
      }
    });
    response = await response.json(); 
    //console.log(response)
    return(response);
  }catch{
    //console.log("Error, network may be unstable.")
    return 0;
  }
}

async function fetch_agents(nameagent){
  let response = await fetch('https://valorant-api.com/v1/agents?isPlayableCharacter=true');response=await response.json();
  for (let x in response['data']){
    if (nameagent.toLowerCase() === response['data'][x]['displayName'].toLowerCase()){
      return response['data'][x]['uuid']
    }
  }
}

let maps_ = {}
async function fetch_maps(){
  let response = await fetch('https://valorant-api.com/v1/maps');response=await response.json();
  for (let x in response['data']){
    let displayn = response['data'][x]['mapUrl'];
    displayn = displayn.split('/');
    displayn = displayn[displayn.length - 1];
    let uuidn = response['data'][x]['displayName'];
    maps_[displayn] = uuidn;

  }
  return;
}


async function lockagent(pre_ID, agent){
  let ent = await entitlements();
  let response = await fetch(`https://glz-${region}-1.${shard}.a.pvp.net/pregame/v1/matches/${pre_ID}/lock/${await fetch_agents(agent)}`, {
    method: 'POST',
    headers: {
     'X-Riot-ClientPlatform':'ew0KCSJwbGF0Zm9ybVR5cGUiOiAiUEMiLA0KCSJwbGF0Zm9ybU9TIjogIldpbmRvd3MiLA0KCSJwbGF0Zm9ybU9TVmVyc2lvbiI6ICIxMC4wLjE5MDQyLjEuMjU2LjY0Yml0IiwNCgkicGxhdGZvcm1DaGlwc2V0IjogIlVua25vd24iDQp9',
      'X-Riot-ClientVersion': `09.00.00.2628993`,
      'X-Riot-Entitlements-JWT': `${ent.token}`,
      'Authorization': `Bearer ${ent.accessToken}`
    }
  });
  response = await response.json();
  if (response['ID'] === pre_ID){
    return 0;
  } else{
    return 1;
  }
  
}


async function current_game_match(mid){

  let ent = await entitlements();
  let response = await fetch(`https://glz-${region}-1.${shard}.a.pvp.net/pregame/v1/matches/${mid}`, {
    method: 'GET',
    headers: {
      'X-Riot-ClientPlatform':'ew0KCSJwbGF0Zm9ybVR5cGUiOiAiUEMiLA0KCSJwbGF0Zm9ybU9TIjogIldpbmRvd3MiLA0KCSJwbGF0Zm9ybU9TVmVyc2lvbiI6ICIxMC4wLjE5MDQyLjEuMjU2LjY0Yml0IiwNCgkicGxhdGZvcm1DaGlwc2V0IjogIlVua25vd24iDQp9',
      'X-Riot-ClientVersion': `09.00.00.2628993`,
      'X-Riot-Entitlements-JWT': `${ent.token}`,
      'Authorization': `Bearer ${ent.accessToken}`
    },
    agent: agent
  });
  response = await response.json(); 
  const parts = response['MapID'].split('/');
  const endText = parts[parts.length - 1];
  // console.log(response)
  return (endText);

}
let matchlist = [];

//chris loves tits

async function start(){
  console.log('\x1b[32m%s\x1b[0m',"Valorant Agent Snatcher by github.com/copreus")
  let uuidstatus = await uuid();
  if (uuidstatus === 1){
    if (uuidstatus === 1){console.log("Failed to fetch PUUID. Is Valorant running?")}
  } else{
    console.log('\x1b[36m%s\x1b[0m', 'Instalock started, fetched entitlements');
    while (true){
      let preMIDI = await matchid();
      if (preMIDI !=0){
        if (preMIDI['MatchID'] != undefined && matchlist.indexOf(preMIDI['MatchID'])===-1){

          await fetch_maps();
          let mapname = await current_game_match(preMIDI['MatchID'])
          if (maps[maps_[mapname]].length === 0){
            console.log('\x1b[31m%s\x1b[0m', "You did not have any agent selected for this map.")
            matchlist.push(preMIDI['MatchID'])
          } else{
            console.log('\x1b[32m%s\x1b[0m', `Match ID found ${preMIDI['MatchID']}`)
            //console.log(maps[maps_[mapname]])
            let agentresponse = await lockagent(preMIDI['MatchID'], maps[maps_[mapname]]);
            if (agentresponse === 0){
              console.log('\x1b[32m%s\x1b[0m', `Locked ${maps[maps_[mapname]].toUpperCase()}`)
              matchlist.push(preMIDI['MatchID'])
            } else{
              console.log('\x1b[31m%s\x1b[0m', "Failed to lock agent.")
              matchlist.push(preMIDI['MatchID'])
            }
          }
          if(preMIDI['MatchID'] === undefined){
            //console.log("Waiting for new match...")
          }
          }
      }
      //console.log("hi")
      await delay((check_delay*1000)+2000)
    }
  }
}

start()
