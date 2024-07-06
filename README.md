# Valorant Agent Snatcher

## About
The Valorant Agent Snatcher is a program that utilizes the Valorant API to instalock agents faster than humanly possible. This program is **much faster** compared to macros.

**Please consider leaving a star on this repository!**

### Update: Fixed the Snatcher Not Locking Agents (06/27/2024)
The headers for requests sent to Valorant have been updated to include `'X-Riot-ClientPlatform'` and `'X-Riot-ClientVersion'`. Without these, the requests would be blocked.

## Update Logs
**06/27/2024:** Compiled releases in the Releases sections have been removed due to a new update. Run from source instead.

**07/27/2023:** Valorant has recently flagged a binary (executable file) of another known instalock tool, resulting in some users receiving a 2-week ban. It's uncertain how long it will be before Valorant flags one of the compiled releases in this repository.

**08/25/2023:** Using the source version for a month, no bans yet. :D

**TLDR:** Use the compiled version in the Releases section at your own risk. Running from the source is recommended to avoid this complication.

## Usage
<a href="#usage-instructions">Click here to scroll down to the usage instructions</a>

## Configuring `config.json`
Simply type the agent name for each map. You're free to leave it blank.

Here's an example `config.json`. **Remember to change your region and shard**. It's recommended to keep the `check_delay` at **3 seconds or more**.

```json
{
  "check_delay": 0.5,
  "region": "na",
  "shard": "na",
  "Ascent": "reyna",
  "Split": "reyna",
  "Fracture": "reyna",
  "Bind": "reyna",
  "Breeze": "reyna",
  "District": "reyna",
  "Lotus": "reyna",
  "Pearl": "reyna",
  "Icebox": "reyna",
  "Haven": "reyna"
}
```

## Region and Shard Configuration
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

<a id="usage-instructions"></a>
## Usage
Run the program **after** Valorant is open. If you switch accounts or restart valorant, restart the program.

## Handling New Maps or Agents
If a new map is released, simply add a new line in the `config.json` file with the map name. If a new agent is added, type the agent's name.

**Note:** If you encounter any errors, use [https://jsonlint.com/](https://jsonlint.com/) to ensure your `config.json` is properly formatted. Improperly formatted JSON will cause the program to stop working.

## Running from Source
1. Download and install [Node.js](https://nodejs.org/en)
2. Download the [source code](https://github.com/copreus/valorant-agent-snatcher/archive/refs/heads/main.zip)
3. Extract all the files
4. Run `install_packages.bat`
5. Run `start.bat`

## Contact
Discord tag: **yg07.**

Join the Discord server for support: [https://discord.gg/n26yuBpa25](https://discord.gg/n26yuBpa25)
