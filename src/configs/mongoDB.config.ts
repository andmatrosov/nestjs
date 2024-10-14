import { ConfigService } from '@nestjs/config';
import { MongooseModuleOptions } from '@nestjs/mongoose';

export const getMongoDBConfig = async (
	configService: ConfigService,
): Promise<MongooseModuleOptions> => {
	return {
		uri: await getMongoString(configService),
	};
};

const getMongoString = async (configService: ConfigService) => {
	const dbHost = configService.get('MONGO_DB_HOST');
	const dbPort = configService.get('MONGO_DB_PORT');
	const login = configService.get('MONGO_DB_USER');
	const password = configService.get('MONGO_DB_PASSWORD');
	const db = configService.get('MONGO_DB_DATABASE');

	return `mongodb://${login}:${password}@${dbHost}:${dbPort}/${db}`;
};
