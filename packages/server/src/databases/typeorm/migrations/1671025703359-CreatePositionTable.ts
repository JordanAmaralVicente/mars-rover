import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreatePositionTable1671025703359 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "position",
            columns: [
                {
                    name: "id",
                    type: "varchar",
                    isPrimary: true,
                },
                {
                    name: "x_coord",
                    type: "int",
                    isNullable: false,
                    default: 0,
                },
                {
                    name: "y_coord",
                    type: "int",
                    isNullable: false,
                    default: 0,
                },
                {
                    name: "head",
                    type: "enum",
                    enum: ["N", "S", "W", "E"],
                    isNullable: false,
                },
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("position");
    }
}
