import {MigrationInterface, QueryRunner} from "typeorm";

export class createTags1629043505959 implements MigrationInterface {
    name = 'createTags1629043505959'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tags" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "create_at" datetime NOT NULL DEFAULT (datetime('now')), "update_at" datetime NOT NULL DEFAULT (datetime('now')))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "tags"`);
    }

}
