// 서비스 스택 정의

import * as cdk from '@aws-cdk/core'
import * as widget_service from '../lib/widget_service'

export class CdkStudyStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props)

        // The code that defines your stack goes here
        new widget_service.WidgetService(this, 'Widgets')
    }
}
