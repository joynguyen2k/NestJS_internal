import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { TestModule } from './test/test.module';
import { TestRepository } from './test/test.repository';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configValidationSchema } from 'config.schema';

@Module({
  imports:[
    ConfigModule.forRoot({
      envFilePath: [`.env.stage.${process.env.STAGE}`],
      validationSchema: configValidationSchema,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject:[ConfigService],
      useFactory: async(configService: ConfigService)=>({
          type: 'postgres',
          autoLoadEntities: true,
          synchronize: true, 
          // host:'localhost',
          // port:5432,
          // username:'postgres',
          // password:'123456',
          // database:'task-management',
          host:configService.get('DB_HOST'),
          port: configService.get('DB_PORT'),
          username:configService.get('DB_USERNAME'),
          password:configService.get('DB_PASSWORD'),
          database:configService.get('DB_DATABASE'),       
    })
  }),
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   autoLoadEntities: true,
    //   synchronize: true,
    // }),
    // TypeOrmModule.forFeature([TestRepository]),

    TestModule,
    AuthModule,

  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
