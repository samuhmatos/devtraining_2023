import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddTagsIdToCoursesTagsTable1701350846316
  implements MigrationInterface
{
  private tableName = 'courses_tags_tags';
  private foreignKey = `${this.tableName}_tags`;
  private columnName = 'tagsId';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      this.tableName,
      new TableColumn({
        name: this.columnName,
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        name: this.foreignKey,
        columnNames: [this.columnName],
        referencedTableName: 'tags',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(this.tableName, this.foreignKey);

    await queryRunner.dropColumn(this.tableName, this.columnName);
  }
}
