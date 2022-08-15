# Todo List Practice

> Initial Setting : [react-testing-library Github repository README](https://github.com/p-acid/react-tdd-practice/blob/main/react-testing-library/README.md)

## 스크린샷

![간단한 할 일 목록 앱](https://user-images.githubusercontent.com/87939521/184525810-03a25711-2189-42bd-b3fa-9368744681c3.gif)

# 학습 내용

## jest-styled-components

> 스타일드 컴포넌트를 테스팅 하기 위한 유틸리티 모음 라이브러리

```ts
// 아래와 같이 import로 호출하고 자유롭게 유틸리티 사용 가능

import 'jest-styled-components';
```

- `toHaveStyleRule(property, value, option)` : 해당 스타일 규칙을 갖고 있는지 판단
  - jest 내 `toHaveStyle` 과 유사
  - 차이는 `option` 을 추가하여 `:hover` 와 같은 `modifier` 를 추가할 수 있다는 점

## fireEvent

> 이벤트를 발생시켜 이벤트에 따른 변화를 테스트하기 위한 메서드 객체

```ts
import { fireEvent } from '@testing-library/react';

...

fireEvent.click(element);

...
```

- 위와 같이 해당하는 메서드를 호출하여 이를 테스팅할 수 있다.
  - ex) `toHaveBeenCalledTimes(count: number)` 를 통해 몇 번 호출되었는지 테스팅

## Method

- `getByDisplayValue(id: Matcher)` : `value` 값을 감지하여 요소를 가져옴
- `getByTestId(testId: string)` : `data-testid` 프로퍼티를 통해 정확하게 요소를 가져옴
  > ex) `<TodoListWrapper data-testid="todoList">`
  - DOM에 반영됨
