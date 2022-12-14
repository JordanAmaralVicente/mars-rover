import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class CreateRoverTable1671025742437 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "rover",
            columns: [
                {
                    name: "id",
                    type: "varchar",
                    isPrimary: true,
                },
                {
                    name: "start_position_fk",
                    type: "varchar",
                },
                {
                    name: "current_position_fk",
                    type: "varchar",
                },
                {
                    name: "plateau_fk",
                    type: "varchar",
                },
            ]
        }));

        await queryRunner.createForeignKey("rover", new TableForeignKey({
            columnNames: ["start_position_fk"],
            referencedColumnNames: ["id"],
            referencedTableName: "position",
            onDelete: "CASCADE",
        }));

        await queryRunner.createForeignKey("rover", new TableForeignKey({
            columnNames: ["current_position_fk"],
            referencedColumnNames: ["id"],
            referencedTableName: "position",
            onDelete: "CASCADE",
        }));

        await queryRunner.createForeignKey("rover", new TableForeignKey({
            columnNames: ["plateau_fk"],
            referencedColumnNames: ["id"],
            referencedTableName: "plateau",
            onDelete: "CASCADE",
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("rover");
        const foreignKeys = table?.foreignKeys;

        if (!table || !foreignKeys) {
            return;
        }

        await queryRunner.dropForeignKeys(table, foreignKeys);
        await queryRunner.dropTable(table);
    }

}
