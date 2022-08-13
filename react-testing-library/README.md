# react-testing-library

> 리액트 컴포넌트를 테스트하기 위한 매우 가벼운 솔루션으로, 유지 보수가 가능한 리액트 컴포넌트용 테스트 코드를 작성할 수 있다.

## 프로젝트 준비

```sh
npx create-react-app [directory-name]
```

```sh
yarn add -D @testing-library/react
```

## 장점

- 컴포넌트 세부 구현 사항을 포함하지 않으면서도 신뢰할 수 있는 테스트 코드 작성에 도움을 준다.
  - 세부 구현 사항을 포함하지 않기에 테스트 코드 수정 횟수를 줄일 수 있고 긴 시간 유지할 수 있다.
- `react-dom` 위에서 동작하기에 실제 DOM 노드에서 작동하고 더 신뢰할 수 있는 테스트가 가능하다.
- 사용자 중심의 테스트 유틸리티를 제공한다.
  - DOM을 찾는 기능이 실제 사용자가 DOM을 사용하는 방식과 유사한 형태로 제공된다.