import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Compliments } from "./Compliments";
@Entity("users")
export class User {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  admin: boolean;

  @Column()
  password: string;

  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  update_at: Date;

  @OneToMany(() => Compliments, (compliment) => compliment.user_send)
  compliment_send: Compliments[];

  @OneToMany(() => Compliments, (compliment) => compliment.user_receiver)
  compliment_receiver: Compliments[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
