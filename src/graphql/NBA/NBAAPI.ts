import DataLoader from "dataloader";
import { Player, PlayerPosition } from "../DB/DBEntities/Player";
import { DataSource } from "typeorm";

export default class NBAAPI {
  dataSource: DataSource;

  constructor(datasource: DataSource) {
    this.dataSource = datasource;
  }

  async getAllPlayers(): Promise<Player[]> {
    return await this.dataSource.manager.find(Player);
  }

  async createPlayer(
    firstName: String,
    lastName: String,
    age: number,
    jerseyNum: number,
    position: String
  ): Promise<Player> {
    const player = new Player();
    player.firstName = firstName as string;
    player.lastName = lastName as string;
    player.age = age as number;
    player.jerseyNumber = jerseyNum as number;
    player.position = Object.values(PlayerPosition).find(
      (value) => value === position
    );

    return this.dataSource.manager.save(player);
  }
}
