import 'dotenv/config';
import { DataSource, DataSourceOptions } from 'typeorm';

import { Course } from 'src/courses/entities/courses.entity';
import { Tag } from 'src/courses/entities/tags.entity';

import { CreateCoursesTable1701346707869 } from 'src/migrations/1701346707869-CreateCoursesTable';
import { CreateTagsTable1701348204441 } from 'src/migrations/1701348204441-CreateTagsTable';
import { CreateCoursesTagsTable1701349561824 } from 'src/migrations/1701349561824-CreateCoursesTagsTable';
import { AddCoursesIdToCoursesTagsTable1701350069784 } from 'src/migrations/1701350069784-AddCoursesIdtoCoursesTagsTable';
import { AddTagsIdToCoursesTagsTable1701350846316 } from 'src/migrations/1701350846316-AddTagsIdToCoursesTagsTable';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [Course, Tag],
  synchronize: false,
};

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
