<p align="center">
  <a href="http://nestjs.com/" target="blank">
    <img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" />
  </a>
</p>

<p align="center">
  A thin wrapper around the [aws-sdk](https://github.com/aws/aws-sdk-js) library to use the AWS Secrets Manager in NestJs applications.
</p>

<p align="center">
  <a href="https://www.npmjs.com/org/vetsmm"><img src="https://img.shields.io/npm/v/@vetsmm/nestjs-aws-secrets-manager.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/org/vetsmm"><img src="https://img.shields.io/npm/l/@vetsmm/nestjs-aws-secrets-manager.svg" alt="Package License" /></a>
  <a href="https://www.npmjs.com/org/vetsmm"><img src="https://img.shields.io/npm/dm/@vetsmm/nestjs-aws-secrets-manager.svg" alt="NPM Downloads" /></a>
  <a href="https://opencollective.com/vmm#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
</p>


### Installation

```sh
npm install --save @vetsmm/nestjs-aws-secrets-manager
#or
yarn add @vetsmm/nestjs-aws-secrets-manager
```

## Getting Started
Add and initialize the global module to your App.module.ts

### Using `.registerAsync()` for dynamic values (preferred)

```typescript
import { AWSSecretsManagerModule } from '@vetsmm/nestjs-aws-secrets-manager';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { SecretsManager } from 'aws-sdk';

@Module({
    imports: [AWSSecretsManagerModule.forRoot(new SecretsManager())],
    providers: [AppService],
})
export class AppModule {}
```


```typescript
import { SecretsService } from '@vetsmm/nestjs-aws-secrets-manager';

export class MySweetService {
    constructor(private readonly secretsService: SecretsService) {}

    private async getCredentials(): Credentials {
        return await this.secretsService.getSecret<Credentials>('app-credentials');
    }
}
```

### Contributing
Please feel free to open a PR for any ideas you have. This was orginally created
with a narrow focus for our own use, but we are happy to expand it to be more
useful to the community.

### Contributors

* [Mark Tripoli](https://github.com/triippz)

### License

MIT

