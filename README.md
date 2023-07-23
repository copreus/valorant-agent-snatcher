## About
This program utilizes VALORANTS API to instalock agents faster then humanly possible. This program is **much much** faster compared to macros.

## WARNING

This instalock utility utilizes the VALORANT API and carries inherent risks, including the possibility of receiving account-related consequences, such as bans, from Riot Games. While bans are unlikely, it is essential to recognize that they remain a potential risk. Users are advised to run this utility at their own discretion, assuming full responsibility for any potential outcomes related to its usage.
## Usage
 Run the program **AFTER** Valorant is open.

 ## What if new maps or agents come out?
 If a new map comes out, simply add a new line in the config file with the map name. If a new agent comes out, simply type the name of the agent. This program relies on valorant-api.com, so it does not need to update each time a new agent/map comes out.

## How to edit config.json
Simply type the agent name for each map. You are free to leave it blank. <br /> 
Below is an example config. **DON'T FORGET TO CHANGE YOUR REGION AND SHARD**. <br /> 
It is recommended to keep the check_delay at **1 second or more**.
```{
  "check_delay": 0.5,
  "region": "na",
  "shard": "na",

  "Ascent":"reyna",
  "Split":"reyna",
  "Fracture":"reyna",
  "Bind":"reyna",
  "Breeze":"reyna",
  "District":"reyna",
  "Lotus":"reyna",
  "Pearl":"reyna",
  "Icebox":"reyna",
  "Haven":"reyna"
}
```

## Region and Shard CONFIG
Refer to these tables for your region and shard.

| Region ID | Region Name      |
| --------- | ---------------- |
| na        | North America    |
| latam     | Latin America    |
| br        | Brazil           |
| eu        | Europe           |
| ap        | Asia Pacific     |
| kr        | Korea            |

| Shard | Region(s)      |
| ----- | -------------- |
| na    | latam, br, na  |
| pbe   | na             |
| eu    | eu             |
| ap    | ap             |
| kr    | kr             |




### Bundled Release:

1) Download the [release](https://github.com/copreus/valorant-agent-snatcher/releases/download/release/valorant-agent-snatcher.zip).
2) Extract **all** files.
3) Edit **config.json**.
4) Run **start.bat**.

### Running from source:

1) Download [NodeJS](https://nodejs.org/en)
2) Download the [source](https://github.com/copreus/valorant-agent-snatcher/archive/refs/heads/main.zip).
3) Run **install_packages.bat**
4) Run **start.bat**


### Compiling from source:

[Here](https://letmegooglethat.com/?q=how+to+compile+nodejs)
 
## Contact 
 Discord tag: **gustogusto** <br /> 
 Join the discord for support:
 https://discord.gg/n26yuBpa25
 

 
## Disclaimer

**Note**: This repository is an independent project and is not officially associated, endorsed, or sponsored by Riot Games, Inc. "VALORANT" and all related trademarks are the property of their respective owners. The code and content provided in this repository are intended for educational and informational purposes. While every effort has been made to ensure accuracy and reliability, the use of this repository is at your own risk. The developer assumes no responsibility for any consequences that may arise from using this repository. Please be aware that the usage of this repository may be subject to the terms and conditions set by Riot Games. It is advisable to review their official documentation and policies before utilizing any code or software related to their products. By accessing and using this repository, you acknowledge that you have read and understood this disclaimer. If you do not agree with these terms, refrain from using this repository and its content. For any inquiries, please contact the developer.
