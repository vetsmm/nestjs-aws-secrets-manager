import { Inject, Injectable, Logger } from '@nestjs/common';

import { AWS_SECRETS_MANAGER_TOKEN } from './tokens';
import { SecretsManager } from 'aws-sdk';

@Injectable()
export class SecretsService {
    private readonly baseLogger: Logger;

    constructor(
        @Inject(AWS_SECRETS_MANAGER_TOKEN)
        private readonly secretsManager: SecretsManager,
    ) {
        this.baseLogger = new Logger(SecretsService.name);
    }

    async getSecret<T>(secretId: string) {
        const response = await this.secretsManager
            .getSecretValue({ SecretId: secretId })
            .promise();
        return JSON.parse(response.SecretString) as T;
    }
}
