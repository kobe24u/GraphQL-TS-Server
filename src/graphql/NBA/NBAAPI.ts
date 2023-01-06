import { BatchedSQLDataSource } from "@nic-jennings/sql-datasource";

export default class NBAAPI extends BatchedSQLDataSource {
  getPlayers;

  constructor(config) {
    super(config);
    this.getPlayers = this.db.query.select("*").from("player").cache(10);
    this.getPlayers.then((players) => {
      console.log(players);
    });
  }
}
