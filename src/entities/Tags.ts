import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";

import { v4 as uuid } from "uuid";
import { Compliments } from "./Compliments";
@Entity("tags")
export class Tags {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  update_at: Date;

  @OneToMany(() => Compliments, (compliment) => compliment.tag)
  compliment: Compliments[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
