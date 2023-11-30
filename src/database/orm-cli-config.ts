import { DataSource } from 'typeorm';
import { dataSourceOptions } from './database.module';
import { CreateCoursesTable1701346707869 } from 'src/migrations/1701346707869-CreateCoursesTable';
import { CreateTagsTable1701348204441 } from 'src/migrations/1701348204441-CreateTagsTable';
import { CreateCoursesTagsTable1701349561824 } from 'src/migrations/1701349561824-CreateCoursesTagsTable';
import { AddCoursesIdToCoursesTagsTable1701350069784 } from 'src/migrations/1701350069784-AddCoursesIdtoCoursesTagsTable';
import { AddTagsIdToCoursesTagsTable1701350846316 } from 'src/migrations/1701350846316-AddTagsIdToCoursesTagsTable';

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [
    CreateCoursesTable1701346707869,
    CreateTagsTable1701348204441,
    CreateCoursesTagsTable1701349561824,
    AddCoursesIdToCoursesTagsTable1701350069784,
    AddTagsIdToCoursesTagsTable1701350846316,
  ],
});
