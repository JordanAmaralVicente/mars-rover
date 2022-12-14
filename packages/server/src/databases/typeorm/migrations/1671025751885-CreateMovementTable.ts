import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class CreateMovementTable1671025751885 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "movement",
            columns: [
                {
                    name: "id",
                    type: "varchar",
                    isPrimary: true,
                },
                {
                    name: "movement",
                    type: "enum",
                    enum: ["L", "R", "M"],
                    isNullable: false,
                },
                {
                    name: "start_position_fk",
                    type: "varchar",
                },
                {
                    name: "final_position_fk",
                    type: "varchar",
                },
                {
                    name: "rover_fk",
                    type: "varchar",
                },
            ]
        }));

        await queryRunner.createForeignKey("movement", new TableForeignKey({
            columnNames: ["start_position_fk"],
            referencedColumnNames: ["id"],
            referencedTableName: "position",
            onDelete: "CASCADE",
        }));

        await queryRunner.createForeignKey("movement", new TableForeignKey({
            columnNames: ["final_position_fk"],
            referencedColumnNames: ["id"],
            referencedTableName: "position",
            onDelete: "CASCADE",
        }));

        await queryRunner.createForeignKey("movement", new TableForeignKey({
            columnNames: ["rover_fk"],
            referencedColumnNames: ["id"],
            referencedTableName: "rover",
            onDelete: "CASCADE",
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("movement");
        const foreignKeys = table?.foreignKeys;

        if (!table || !foreignKeys) {
            return;
        }

        await queryRunner.dropForeignKeys(table, foreignKeys);
        await queryRunner.dropTable(table);
    }
}
