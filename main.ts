// __     __        _
// \ \   / /__ _ __| | ___  ___ _   _ _ __   __ _
//  \ \ / / _ \ '__| |/ _ \/ __| | | | '_ \ / _` |
//   \ V /  __/ |  | | (_) \__ \ |_| | | | | (_| |
//    \_/ \___|_|  |_|\___/|___/\__,_|_| |_|\__, |

import { RaffleEingine } from "./absneakender_hase.ts";
import { PossibleWinner } from "./gewinnbarer_hase.ts";

export class Verlosung {
  //  __________________________________
  // < Main-Methode des Main-Characters >
  //  ----------------------------------
  //    \         __------~~-,
  //     \      ,'            ,
  //           /               \
  //          /                :
  //         |                  '
  //         |                  |
  //         |                  |
  //          |   _--           |
  //          _| =-.     .-.   ||
  //          o|/o/       _.   |
  //          /  ~          \ |
  //        (____@)  ___~    |
  //           |_===~~~.`    |
  //        _______.--~     |
  //        \________       |
  //                 \      |
  //               __/-___-- -__
  //              /            _ \
  public main() {
    const redArmy = [
      "@Gangsta2007",
      "@LockeDerBoss",
      "@MiiMiiSeinBruder",
      "@AlphaKevin",
      "@RedSoldier499",
      "@Louisa12",
      "@Drachenlord",
      "@Tanzverbot",
      "@tiger10ab",
      "@kaesekrokette99",
      "@fortnite4ever",
      "@ColdplayFan",
      "@Sören2013",
      "@MichiJackson",
      "@WBSLegal",
      "@Ronaldo7",
      "@Timmmäääh",
      "@SonGoku2011",
      "@NarutoBoy2000",
      "@Diggah69",
      "@roflomat",
      "@waifu_weeb",
      "@derp",
      "@MaxPower9000",
      "@MikrowellenPizza2006",
      "@MeddlFan",
      "@SpecialNeedChild37",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@SimonDesue",
      "@SimonDesue",
      "@SimonDesue",
      "@SimonDesue",
      "@SimonDesue",
      "@SimonDesue",
      "@PrinzPuma",
      "@PrinzPuma",
      "@PrinzPuma",
      "@PrinzPuma",
    ];
    const fiktivePreise = [
      new PossibleWinner("iPhone 17 Pro", 1),
      new PossibleWinner("Trip nach Dubi", 1),
      new PossibleWinner("Stepper nach Isti", 1),
      new PossibleWinner("Flug nach Zypi", 1),
      new PossibleWinner("10 kg Haribo", 2),
      new PossibleWinner("PlayStation 5 Slim", 3),
      new PossibleWinner("gebrauchte Sneaker", 5),
    ];
    const players = new RaffleEingine(redArmy, fiktivePreise).drawWinners();
    for (const [winner, preis] of players.entries()) {
      console.log(`${winner} gewinnt ${preis}`);
    }
  }
}

new Verlosung().main();
