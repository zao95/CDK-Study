#!/usr/bin/env node
// 어플리케이션의 메인 엔트리포인트
// cdk synth 작성 시, AWS CloudFormation 템플릿으로 컴파일

// 연결 순서
// /bin/cdk-study.ts            // 메인 엔트리포인트
// /lib/cdk-study-stack.ts      // 스택 - Multiple 가능
// /lib/widget_service          // 위젯 서비스
// /resources/widgets.js        // lambda function

import 'source-map-support/register'
import * as cdk from '@aws-cdk/core'
import { CdkStudyStack } from '../lib/cdk-study-stack'

const app = new cdk.App()
new CdkStudyStack(app, 'CdkStudyStack')
