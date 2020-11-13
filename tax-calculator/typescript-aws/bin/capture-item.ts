#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CaptureItem } from '../lib/capture-item-stack';

const app = new cdk.App();
new CaptureItem(app, 'CaptureItem');
