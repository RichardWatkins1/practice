import * as cdk from '@aws-cdk/core';
import * as captureItem from './capture-item';

export class CaptureItem extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    new captureItem.CaptureItem(this, 'CaptureItem');
  }
}
