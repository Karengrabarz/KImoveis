import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateAddressColumn1698691851032 implements MigrationInterface {
    name = 'UpdateAddressColumn1698691851032'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" ADD "number" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "realEstates" ALTER COLUMN "value" TYPE numeric(12,2)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "realEstates" ALTER COLUMN "value" TYPE numeric(10,1)`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "number"`);
    }

}
