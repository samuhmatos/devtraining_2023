import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from 'src/courses/entities/courses.entity';
import { Tag } from 'src/courses/entities/tags.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async (ConfigService: ConfigService) => {
        return {
          type: 'postgres',
          host: ConfigService.get('DB_HOST'),
          port: Number(ConfigService.get('DB_PORT')),
          username: ConfigService.get('DB_USER'),
          password: ConfigService.get('DB_PASS'),
          database: ConfigService.get('DB_NAME'),
          entities: [Course, Tag],
          synchronize: false,
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
