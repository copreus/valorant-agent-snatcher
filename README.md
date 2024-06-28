## About
valorant instalocker, valorant instalock
This program utilizes VALORANTS API to instalock agents faster then humanly possible. This program is **much much** faster compared to macros.
 <br /> 
 ### Please consider leaving a star on this repo!
### Update 06/27/2024: Fixed the snatcher not locking agents.
 <br /> 
 Changed the headers for requests sent to Valorant to include 'X-Riot-ClientPlatform' and 'X-Riot-ClientVersion' because without them, the requests would be blocked.
  <br /> 
    <br /> 
## WARNING
This instalock utility utilizes the VALORANT API and carries inherent risks, including the possibility of receiving account-related consequences, such as bans, from Riot Games. While bans are unlikely, it is essential to recognize that they remain a potential risk. Users are advised to run this utility at their own discretion, assuming full responsibility for any potential outcomes related to its usage.
<br />
 <br />
 <br /> 07/27/2023  <br />
Valorant has recently flagged a binary (exe file) of another known instalock tool resulting in some of those users receiving a 2 week ban. I am not sure how long it will be before Valorant flags one of the compiled releases in this repo.
 <br />
  <br /> **Update 08/25/2023**  <br />
  Using the source version for a month, havent been banned yet :D
   <br />
  ### **TLDR USE COMPILED VERSION IN RELEASES AT YOUR OWN RISK, RUN FROM SOURCE TO AVOID THIS COMPLICATION.**


## Usage
Run the program **AFTER** Valorant is open.

 ## What if new maps or agents come out?
 If a new map comes out, simply add a new line in the config file with the map name. If a new agent comes out, simply type the name of the agent. (If it errors out, make sure the last line has no comma at the end). This program relies on valorant-api.com, so it does not need to update each time a new agent/map comes out. 
#### **If you get errors, use https://jsonlint.com/ to make sure your config is properly formatted. (If its not, the program will cease to work)**

## How to edit config.json
Simply type the agent name for each map. You are free to leave it blank. <br /> 
Below is an example config. **DON'T FORGET TO CHANGE YOUR REGION AND SHARD**. <br /> 
It is recommended to keep the check_delay at **1 second or more**.

{
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
~~If you're not that tech-savvy, use the bundled release instead of running from source.~~

~~1) Download the [release](https://github.com/copreus/valorant-agent-snatcher/releases/download/v1.0-hotfix/valorant-agent-snatcher.zip).~~
~~2) Extract **all** files.~~
~~3) Edit **config.json**.~~
~~4) Run **start.bat**.~~

**Note:** Latest release has been deleted as it's not updated. Please run from source.


### Running from source:

1) Download [NodeJS](https://nodejs.org/en)
2) Download the [source](https://github.com/copreus/valorant-agent-snatcher/archive/refs/heads/main.zip).
3) Extract **all** files.
4) Run **install_packages.bat**
5) Run **start.bat**


### Compiling from source:

[Here](https://letmegooglethat.com/?q=how+to+compile+nodejs)
 
## Contact 
 Discord tag: **gustogusto** <br /> 
 Join the discord for support:
 https://discord.gg/n26yuBpa25
 

 
## Disclaimer

**Note**: This repository is an independent project and is not officially associated, endorsed, or sponsored by Riot Games, Inc. "VALORANT" and all related trademarks are the property of their respective owners. The code and content provided in this repository are intended for educational and informational purposes. While every effort has been made to ensure accuracy and reliability, the use of this repository is at your own risk. The developer assumes no responsibility for any consequences that may arise from using this repository. Please be aware that the usage of this repository may be subject to the terms and conditions set by Riot Games. 
<br /> 
It is advisable to review their official documentation and policies before utilizing any code or software related to their products. By accessing and using this repository, you acknowledge that you have read and understood this disclaimer. If you do not agree with these terms, refrain from using this repository and its content. For any inquiries, please contact the developer.

## Licence
MIT License
<br /> 
<br /> 
Copyright (c) 2023 Gusto
<br /> 
<br /> 
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
<br /> 
<br /> 
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
<br /> 
<br /> 
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
