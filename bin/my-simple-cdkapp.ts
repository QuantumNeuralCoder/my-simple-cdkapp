#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { MySimpleCdkappStack } from '../lib/my-simple-cdkapp-stack';

const app = new cdk.App();
new MySimpleCdkappStack(app, 'MySimpleCdkappStack');
