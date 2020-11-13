import * as core from "@aws-cdk/core";
import * as apigateway from "@aws-cdk/aws-apigateway";
import * as lambda from "@aws-cdk/aws-lambda";

export class CaptureItem extends core.Construct {
  constructor(scope: core.Construct, id: string) {
    super(scope, id);

    const handler = new lambda.Function(this, "CaptureItem", {
      runtime: lambda.Runtime.NODEJS_12_X, // So we can use async in widget.js
      code: lambda.Code.asset("resources"),
      handler: "capture-item.handler"
    });

    const api = new apigateway.RestApi(this, "capture-item-api", {
      restApiName: "Capture Item Service",
      description: "This service captures the line items payload"
    });

    const captureItemsIntegration = new apigateway.LambdaIntegration(handler, {
      requestTemplates: { "application/json": '{ "statusCode": "200" }' }
    });

    api.root.addMethod("POST", captureItemsIntegration); // GET /
  }
}