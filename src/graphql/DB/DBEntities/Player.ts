import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

export enum PlayerPosition {
  PointGuard = "PG",
  ShootGuard = "SG",
  SmallForward = "SF",
  PowerForward = "PF",
  Center = "C",
}

@Entity()
export class Player {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column()
  jerseyNumber: number;

  @Column({
    type: "enum",
    enum: PlayerPosition,
    default: PlayerPosition.PointGuard,
  })
  position: PlayerPosition;
}
