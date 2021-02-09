import Amplify from 'aws-amplify';
import awsConfig from './aws-exports';

Amplify.configure({
    Auth: {
        // REQUIRED - Amazon Cognito Identity Pool ID
        userPoolId: awsConfig.userPoolId,
        // REQUIRED - Amazon Cognito Region
        region: awsConfig.aws_appsync_region,
        // OPTIONAL - Amazon Cognito User Pool ID
        identityPoolId: awsConfig.identityPoolId,
        // OPTIONAL - Amazon Cognito Web Client ID
        userPoolWebClientId: awsConfig.userPoolWebClientId,
    },
    API: {
        'aws_appsync_graphqlEndpoint': awsConfig.aws_appsync_graphqlEndpoint,
        'aws_appsync_region': awsConfig.aws_appsync_region,
        'aws_appsync_authenticationType': awsConfig.aws_appsync_authenticationType,
    },
});