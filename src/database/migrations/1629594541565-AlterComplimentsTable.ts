import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterComplimentsTable1629594541565 implements MigrationInterface {
    name = 'AlterComplimentsTable1629594541565'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_Compliments" ("id" varchar PRIMARY KEY NOT NULL, "message" varchar NOT NULL, "create_at" datetime NOT NULL DEFAULT (datetime('now')), "update_at" datetime NOT NULL DEFAULT (datetime('now')), "userSendId" varchar, "userReceiverId" varchar, "tagIdId" varchar, CONSTRAINT "FK_c084872d63c5636c93ac556d554" FOREIGN KEY ("userReceiverId") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_a4ff8664a3f5ad65983b003cca1" FOREIGN KEY ("userSendId") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_Compliments"("id", "message", "create_at", "update_at", "userSendId", "userReceiverId", "tagIdId") SELECT "id", "message", "create_at", "update_at", "userSendId", "userReceiverId", "tagIdId" FROM "Compliments"`);
        await queryRunner.query(`DROP TABLE "Compliments"`);
        await queryRunner.query(`ALTER TABLE "temporary_Compliments" RENAME TO "Compliments"`);
        await queryRunner.query(`CREATE TABLE "temporary_Compliments" ("id" varchar PRIMARY KEY NOT NULL, "message" varchar NOT NULL, "create_at" datetime NOT NULL DEFAULT (datetime('now')), "update_at" datetime NOT NULL DEFAULT (datetime('now')), "userSendId" varchar, "userReceiverId" varchar, CONSTRAINT "FK_c084872d63c5636c93ac556d554" FOREIGN KEY ("userReceiverId") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_a4ff8664a3f5ad65983b003cca1" FOREIGN KEY ("userSendId") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_Compliments"("id", "message", "create_at", "update_at", "userSendId", "userReceiverId") SELECT "id", "message", "create_at", "update_at", "userSendId", "userReceiverId" FROM "Compliments"`);
        await queryRunner.query(`DROP TABLE "Compliments"`);
        await queryRunner.query(`ALTER TABLE "temporary_Compliments" RENAME TO "Compliments"`);
        await queryRunner.query(`CREATE TABLE "temporary_Compliments" ("id" varchar PRIMARY KEY NOT NULL, "message" varchar NOT NULL, "create_at" datetime NOT NULL DEFAULT (datetime('now')), "update_at" datetime NOT NULL DEFAULT (datetime('now')), "userSendId" varchar, "userReceiverId" varchar, "tag" varchar NOT NULL, "tagsId" varchar, CONSTRAINT "FK_c084872d63c5636c93ac556d554" FOREIGN KEY ("userReceiverId") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_a4ff8664a3f5ad65983b003cca1" FOREIGN KEY ("userSendId") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_Compliments"("id", "message", "create_at", "update_at", "userSendId", "userReceiverId") SELECT "id", "message", "create_at", "update_at", "userSendId", "userReceiverId" FROM "Compliments"`);
        await queryRunner.query(`DROP TABLE "Compliments"`);
        await queryRunner.query(`ALTER TABLE "temporary_Compliments" RENAME TO "Compliments"`);
        await queryRunner.query(`CREATE TABLE "temporary_Compliments" ("id" varchar PRIMARY KEY NOT NULL, "message" varchar NOT NULL, "create_at" datetime NOT NULL DEFAULT (datetime('now')), "update_at" datetime NOT NULL DEFAULT (datetime('now')), "userSendId" varchar, "userReceiverId" varchar, "tag" varchar NOT NULL, "tagsId" varchar, CONSTRAINT "FK_c084872d63c5636c93ac556d554" FOREIGN KEY ("userReceiverId") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_a4ff8664a3f5ad65983b003cca1" FOREIGN KEY ("userSendId") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_61312620fc265016656afddf202" FOREIGN KEY ("tagsId") REFERENCES "tags" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_Compliments"("id", "message", "create_at", "update_at", "userSendId", "userReceiverId", "tag", "tagsId") SELECT "id", "message", "create_at", "update_at", "userSendId", "userReceiverId", "tag", "tagsId" FROM "Compliments"`);
        await queryRunner.query(`DROP TABLE "Compliments"`);
        await queryRunner.query(`ALTER TABLE "temporary_Compliments" RENAME TO "Compliments"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Compliments" RENAME TO "temporary_Compliments"`);
        await queryRunner.query(`CREATE TABLE "Compliments" ("id" varchar PRIMARY KEY NOT NULL, "message" varchar NOT NULL, "create_at" datetime NOT NULL DEFAULT (datetime('now')), "update_at" datetime NOT NULL DEFAULT (datetime('now')), "userSendId" varchar, "userReceiverId" varchar, "tag" varchar NOT NULL, "tagsId" varchar, CONSTRAINT "FK_c084872d63c5636c93ac556d554" FOREIGN KEY ("userReceiverId") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_a4ff8664a3f5ad65983b003cca1" FOREIGN KEY ("userSendId") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "Compliments"("id", "message", "create_at", "update_at", "userSendId", "userReceiverId", "tag", "tagsId") SELECT "id", "message", "create_at", "update_at", "userSendId", "userReceiverId", "tag", "tagsId" FROM "temporary_Compliments"`);
        await queryRunner.query(`DROP TABLE "temporary_Compliments"`);
        await queryRunner.query(`ALTER TABLE "Compliments" RENAME TO "temporary_Compliments"`);
        await queryRunner.query(`CREATE TABLE "Compliments" ("id" varchar PRIMARY KEY NOT NULL, "message" varchar NOT NULL, "create_at" datetime NOT NULL DEFAULT (datetime('now')), "update_at" datetime NOT NULL DEFAULT (datetime('now')), "userSendId" varchar, "userReceiverId" varchar, CONSTRAINT "FK_c084872d63c5636c93ac556d554" FOREIGN KEY ("userReceiverId") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_a4ff8664a3f5ad65983b003cca1" FOREIGN KEY ("userSendId") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "Compliments"("id", "message", "create_at", "update_at", "userSendId", "userReceiverId") SELECT "id", "message", "create_at", "update_at", "userSendId", "userReceiverId" FROM "temporary_Compliments"`);
        await queryRunner.query(`DROP TABLE "temporary_Compliments"`);
        await queryRunner.query(`ALTER TABLE "Compliments" RENAME TO "temporary_Compliments"`);
        await queryRunner.query(`CREATE TABLE "Compliments" ("id" varchar PRIMARY KEY NOT NULL, "message" varchar NOT NULL, "create_at" datetime NOT NULL DEFAULT (datetime('now')), "update_at" datetime NOT NULL DEFAULT (datetime('now')), "userSendId" varchar, "userReceiverId" varchar, "tagIdId" varchar, CONSTRAINT "FK_c084872d63c5636c93ac556d554" FOREIGN KEY ("userReceiverId") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_a4ff8664a3f5ad65983b003cca1" FOREIGN KEY ("userSendId") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "Compliments"("id", "message", "create_at", "update_at", "userSendId", "userReceiverId") SELECT "id", "message", "create_at", "update_at", "userSendId", "userReceiverId" FROM "temporary_Compliments"`);
        await queryRunner.query(`DROP TABLE "temporary_Compliments"`);
        await queryRunner.query(`ALTER TABLE "Compliments" RENAME TO "temporary_Compliments"`);
        await queryRunner.query(`CREATE TABLE "Compliments" ("id" varchar PRIMARY KEY NOT NULL, "message" varchar NOT NULL, "create_at" datetime NOT NULL DEFAULT (datetime('now')), "update_at" datetime NOT NULL DEFAULT (datetime('now')), "userSendId" varchar, "userReceiverId" varchar, "tagIdId" varchar, CONSTRAINT "FK_12107504224a881943fbae8529d" FOREIGN KEY ("tagIdId") REFERENCES "tags" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_c084872d63c5636c93ac556d554" FOREIGN KEY ("userReceiverId") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_a4ff8664a3f5ad65983b003cca1" FOREIGN KEY ("userSendId") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "Compliments"("id", "message", "create_at", "update_at", "userSendId", "userReceiverId", "tagIdId") SELECT "id", "message", "create_at", "update_at", "userSendId", "userReceiverId", "tagIdId" FROM "temporary_Compliments"`);
        await queryRunner.query(`DROP TABLE "temporary_Compliments"`);
    }

}
