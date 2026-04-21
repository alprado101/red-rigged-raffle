//   ____               _             _                         _   _
//  / ___| _____      _(_)_ __  _ __ | |__   __ _ _ __ ___ _ __| | | | __ _ ___  ___
// | |  _ / _ \ \ /\ / / | '_ \| '_ \| '_ \ / _` | '__/ _ \ '__| |_| |/ _` / __|/ _ \
// | |_| |  __/\ V  V /| | | | | | | | |_) | (_| | | |  __/ |  |  _  | (_| \__ \  __/
//  \____|\___| \_/\_/ |_|_| |_|_| |_|_.__/ \__,_|_|  \___|_|  |_| |_|\__,_|___/\___|
export class PossibleWinner {
  //  _________________________
  // < Mich kann man gewinnen! >
  //  -------------------------
  //   \
  //    \   \
  //         \ /\
  //         ( )
  //       .( o ).
  //
  constructor(
    private personName: string,
    private quantity: number,
  ) {}

  public get winnerName(): string {
    return this.personName;
  }

  public get availableQuantity(): number {
    return this.quantity;
  }

  public set availableQuantity(newQuantity: number) {
    this.quantity = newQuantity;
  }
}
