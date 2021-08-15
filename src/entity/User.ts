import { Entity } from "typeorm";

@Entity()
export class User {
	id: string;
	name: string;
	
}
