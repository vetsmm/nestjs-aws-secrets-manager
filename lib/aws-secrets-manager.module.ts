import {DynamicModule, Global, Module} from '@nestjs/common';

import {AWS_SECRETS_MANAGER_TOKEN} from './tokens';
import {SecretsManager} from 'aws-sdk';
import {SecretsService} from './secrets.service';

@Global()
@Module({})
export class AWSSecretsManagerModule {
    static forRoot(secretsManager: SecretsManager): DynamicModule {
        return {
            module: AWSSecretsManagerModule,
            providers: [
                SecretsService,
                {
                    provide: AWS_SECRETS_MANAGER_TOKEN,
                    useValue: secretsManager,
                },
            ],
            exports: [SecretsService],
        };
    }
}
