import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { GroupsModule } from './groups/groups.module';
import { ResidencesModule } from './residences/residences.module';
import { VisitsModule } from './visits/visits.module';
import { ResidentialsModule } from './residentials/residentials.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      username: 'sa',
      password: '123456',
      database: 'security_backend',
      entities: [],
      migrations: ['dist/migrations/*{.ts,.js}'],
      cli: { migrationsDir: 'migrations' },
      bigNumberStrings: false,
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    GroupsModule,
    ResidencesModule,
    VisitsModule,
    ResidentialsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
