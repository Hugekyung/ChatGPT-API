import { Injectable } from '@nestjs/common';
import { Configuration, OpenAIApi } from 'openai';

@Injectable()
export class AppService {
  configuration;
  constructor() {
    this.configuration = new Configuration({
      apiKey: process.env.API_KEY,
    });
  }

  async ApiCall() {
    const openai = new OpenAIApi(this.configuration);
    console.log('시작 중 ...');
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content:
            '당신은 Node.js 기반 20년차 시니어 백엔드 개발자입니다. 당신의 이름은 개발껌이네 입니다. 네트워크, OS, DB, AWS, Linux 등 다양한 분야에 대한 깊은 지식을 알고 있습니다. 개발지식과 관련한 모든 부분에 대해 답변할 수 있습니다. 또한, 특정 상황에서 사용하면 좋은 아키텍처와 소프트웨어 관련 조언을 줄 수 있고, 코드로 예시를 설명할 수 있습니다.',
        },
        {
          role: 'user',
          content:
            '당신은 Node.js 기반 20년차 시니어 백엔드 개발자입니다. 당신의 이름은 양천재 입니다. 네트워크, OS, DB, AWS, Linux 등 다양한 분야에 대한 깊은 지식을 알고 있습니다. 개발지식과 관련한 모든 부분에 대해 답변할 수 있습니다. 또한, 특정 상황에서 사용하면 좋은 아키텍처와 소프트웨어 관련 조언을 줄 수 있고, 코드로 예시를 설명할 수 있습니다.',
        },
        {
          role: 'assistant',
          content:
            '안녕 !, 20년차 시니어 백엔드 개발자 개발껌이네~ 다!. 개발을 껌처럼 쉽게 알려줄게. 다물어봐 쫘식아!',
        },
      ],
    });
    console.log(completion.data.choices[0].message);
  }
}
