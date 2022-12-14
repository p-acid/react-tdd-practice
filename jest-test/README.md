# Vanilla JavaScript + Jest

## 사용법 기초

- `describe` : 여러 테스트를 한 그룹으로 묶고 설명을 붙이기 위해 사용
  - 첫 번째 인자는 "명령 프롬프트 설명"이고 두 번째는 여러 테스트를 그룹으로 묶을 "콜백 함수"이다.
- `it` : 실제 테스트가 실행되는 테스트 명세를 작성할 때 사용
  - 첫 번째 매개변수는 "테스트 명세의 설명"을 두 번째 매개변수는 실제로 테스트를 실행하는 "테스트 코드"를 작성한다.

## Matcher

> 결과 값을 비교하여 테스트의 성공 여부를 판단하는 함수

- `toBe` : 테스트 결과 값이 해당하는 값이 될 것이라고 비교하는 메서드
- `toEqual` : 오브젝트 내용을 비교할 때 사용하는 메서드
  - 자바스크립트의 오브젝트는 참조 값을 갖기에 `toBe` 를 사용하면 단순 값 비교를 진행하여 다른 값이라고 반환한다.
- `toBeTruthy`, `toBeFalsy` : `Boolean` 타입 값을 비교할 때 사용
  - `not` 을 통해 결과 값이 아님을 전제로 테스트할 수 있다.
- `toContain` : 배열 내 해당하는 값이 포함됨을 확인

## 코드 커버리지

> 테스트 대상이 되는 소스 코드 중 테스트 코드를 통해 검증된 코드의 비율

다음의 명령어를 통해 가능

```sh
npx jest --coverage
```

# 궁금증 모음

- [ ] ES6 `import`, `export` 문 안 된다. Why?
