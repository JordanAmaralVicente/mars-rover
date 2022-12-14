import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePlateauTable1670972876571 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "plateau",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true,
                    },
                    {
                        name: "x_coord",
                        type: "int",
                    },
                    {
                        name: "y_coord",
                        type: "int",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "NOW()",
                    },
                ],
            }),
            true,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("plateau");
    }
}
