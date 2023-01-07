import { gql } from "graphql-request";

export const schema = gql`
  "Five positions available on Basketball court"
  enum NBAPlayerPosition {
    "e.g. CP3, Dame, Steph Curry"
    PointGuard
    "e.g. KOBE, MJ, WADE"
    ShootGuard
    "e.g. LBJ, KD"
    SmallForward
    "e.g. Tim Duncan, KG"
    PowerForward
    "e.g. SHAQ, YAO"
    Center
  }

  type NBAPlayer {
    id: ID
    firstName: String
    lastName: String
    age: Int
    position: NBAPlayerPosition
    jerseyNumber: Int
  }
`;
