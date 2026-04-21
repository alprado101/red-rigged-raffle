//     _    _                          _                  _           _   _
//    / \  | |__  ___ _ __   ___  __ _| | _____ _ __   __| | ___ _ __| | | | __ _ ___  ___
//   / _ \ | '_ \/ __| '_ \ / _ \/ _` | |/ / _ \ '_ \ / _` |/ _ \ '__| |_| |/ _` / __|/ _ \
//  / ___ \| |_) \__ \ | | |  __/ (_| |   <  __/ | | | (_| |  __/ |  |  _  | (_| \__ \  __/
// /_/   \_\_.__/|___/_| |_|\___|\__,_|_|\_\___|_| |_|\__,_|\___|_|  |_| |_|\__,_|___/\___|

import { PossibleWinner } from "./gewinnbarer_hase.ts";

export class RaffleEingine {
  constructor(
    private participants: string[],
    private availablePrizes: PossibleWinner[],
  ) {}

  //  _____________________________
  // < Finger weg von meinem Code! >
  //  -----------------------------
  //       \                    / \  //\
  //        \    |\___/|      /   \//  \\
  //             /0  0  \__  /    //  | \ \
  //            /     /  \/_/    //   |  \  \
  //            @_^_@'/   \/_   //    |   \   \
  //            //_^_/     \/_ //     |    \    \
  //         ( //) |        \///      |     \     \
  //       ( / /) _|_ /   )  //       |      \     _\
  //     ( // /) '/,_ _ _/  ( ; -.    |    _ _\.-~        .-~~~^-.
  //   (( / / )) ,-{        _      `-.|.-~-.           .~         `.
  //  (( // / ))  '/\      /                 ~-. _ .-~      .-~^-.  \
  //  (( /// ))      `.   {            }                   /      \  \
  //   (( / ))     .----~-.\        \-'                 .~         \  `. \^-.
  //              ///.----..>        \             _ -~             `.  ^-`  ^-_
  //                ///-._ _ _ _ _ _ _}^ - - - - ~                     ~-- ,.-~
  //
  public drawWinners(): Map<string, string> {
    const winnersMap = new Map<string, string>();
    const shuffledParticipants = new Array<string>();
    while (this.participants.length > 0) {
      const randomNummer = Math.random();
      const randomIndex = Math.floor(randomNummer * this.participants.length);
      const selectedParticipant = this.participants[randomIndex];
      shuffledParticipants.push(selectedParticipant); // Ich push die Brokies auf die Mokies, yeah!
      this.participants.pop();
    }
    while (this.availablePrizes.length > 0 && shuffledParticipants.length > 0) {
      const currentPrize = this.availablePrizes[0];
      const currentWinner = shuffledParticipants.shift() || "";
      winnersMap.set(currentWinner, currentPrize.winnerName);
      if (currentPrize.availableQuantity > 0) {
        this.availablePrizes.shift();
      } else {
        this.availablePrizes[0].availableQuantity--;
      }
    }
    return winnersMap;
  }
}
