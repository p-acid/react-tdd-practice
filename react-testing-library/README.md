# react-testing-library

> 리액트 컴포넌트를 테스트하기 위한 매우 가벼운 솔루션으로, 유지 보수가 가능한 리액트 컴포넌트용 테스트 코드를 작성할 수 있다.

## 프로젝트 준비

### CRA

```sh
npx create-react-app [directory-name]
```

### 이외 프로젝트

- 프로젝트 세팅을 마친 후 별도로 `react-testing-library` 설치

```sh
yarn add -D @testing-library/react
```

## 장점

- 컴포넌트 세부 구현 사항을 포함하지 않으면서도 신뢰할 수 있는 테스트 코드 작성에 도움을 준다.
  - 세부 구현 사항을 포함하지 않기에 테스트 코드 수정 횟수를 줄일 수 있고 긴 시간 유지할 수 있다.
- `react-dom` 위에서 동작하기에 실제 DOM 노드에서 작동하고 더 신뢰할 수 있는 테스트가 가능하다.
- 사용자 중심의 테스트 유틸리티를 제공한다.
  - DOM을 찾는 기능이 실제 사용자가 DOM을 사용하는 방식과 유사한 형태로 제공된다.

## 사용 기초

- `render` : 메모리상에 돔을 만드는 메서드
- `screen` : 메모리상의 돔에 접근하는 메서드

### Matcher

- `toBeInTheDocument()` : 도큐먼트에 해당 노드가 존재하는지
- `toHaveLength(count: number)` : 해당 요소들(배열)이 몇 개인지
- `toHaveAttribute(key: string, value: any)` : 특정 속성에 값이 존재하는지
- `toHaveTextContent(text: string)` : 텍스트 값을 갖는지 (내부에 광범위하게)

### 기타

- `toMatchSnapshot()` : 스냅샷 테스트 = 화면에 표시되는 내용이 변경되었는지 확인

## 타입스크립트

> 마이그레이션 내용 정리

### CRA Version

```sh
npx create-react-app --template=typescript [directory-name]
```

### 패키지 설치

```sh
yarn add typescript @types/node @types/react @types/react-dom @types/jest
```

### tsConfig.json 세팅

- [Link : tsConfig.json](https://github.com/p-acid/react-tdd-practice/blob/main/react-testing-library/tsconfig.json)

### SVG 파일 `import` 관련

```ts
// custom.d.ts

declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGAElement> & { title?: string }
  >;

  const src: string;
  export default src;
}
```

## Prettier, lint-staged, husky

### 패키지 설치

```sh
yarn add -D prettier lint-staged husky
```

- `prettier` : 코드 포맷터
- `lint-staged` : git stage 된 파일들에 특정 동작 수행 가능
- `husky` : `package.json` 에서 `githook` 사용 가능
  - `githook` : git의 특정 이벤트를 감지하여 명령 수행

### `.prettierrc.json` 추가

```json
// exmaple
{
  "jsxBracketSameLine": true,
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 100
}
```

### `package.json` 수정

```json
// exmaple
"script": {
  ...
},
"husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
"lint-staged": {
  "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}": [
    "prettier --write"
  ]
},

...
```

# 코드 리팩토링

## 58p. 리액트 테스팅 라이브러리 기본 사용 예제

> [`container` 메서드 사용 금지](https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-container.md)
>
> `container` 메서드를 사용하면 리액트 테스팅 라이브러리의 장점인 **실제로 UI와 상호작용 한다는 확신을 주는 것**을 잃어버릴 수 있고, 테스트가 읽기 어려워지며 자주 망가집니다.

- `getByRoll` 등의 메서드로 요소를 가져옵니다.
- `container` 자체를 사용하는 경우 `screen` 을 활용하여 이를 대체합니다.

```js
// before

...

    const { container } = render(<App />);

    expect(container.getElementsByClassName("App-logo")).toHaveLength(1);
    expect(container.getElementsByClassName("App-logo")[0]).toHaveAttribute(
      "src",
      "logo.svg"
    );

...
```

```js
// after

...

    const imageElements = screen.getAllByRole("img");

    expect(imageElements).toHaveLength(1);
    expect(imageElements[0]).toHaveAttribute("src", "logo.svg");

...
```
