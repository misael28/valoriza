import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./User";
import { Tags } from "./Tags";
@Entity("Compliments")
export class Compliments {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  message: string;

  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  update_at: Date;

  @ManyToOne(() => User, (user) => user.id)
  user_send: string;

  @ManyToOne(() => User, (user) => user.id)
  user_receiver: string;

  @ManyToOne(() => Tags, (tag) => tag.id)
  tag: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
