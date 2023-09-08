# Chalkak (찰칵)

## 프로젝트 개요

회사 워크샵 이후 사진을 원하는 그룹의 사람들과 공유 하고 싶은데 마땅한 플렛폼이 없어 간단한 토이 프로젝트로 만들었음.

배포된 url이 있으나 사진 공유 앱이라 대용량 업로드가 가능하여 url을 공개하기 어려움을 양해바람.

## 시작하기

```bash
yarn dev
```

http://localhost:3000/ 연결

```bash
cd ./hasura
hasura console
```

테이블 구조 등을 변경하려면 해당 콘솔 (<http://localhost:9695>)에서 작업하시면 됩니다. 단, 아래 유의사항이 있습니다.

- 변경 내역들은 전부 자동으로 `migrations` 폴더에 저장됩니다. 내용은 모두 git commit 하여 저장해주면 됩니다. (`migrations` 폴더에 있는 내용들은 직접 수정하지 마세요.)
- Hasura 요청에 대한 타입 지원을 위해 `graphql-codegen` 을 사용합니다. 그래서 테이블 구조를 바꾸거나 새로운 쿼리를 추가하면 `yarn gen` 을 한번 실행하여 타입을 최신화해주세요.
- enum table 에서 row를 추가하는 건, 해당 Enum Table 을 참조하는 컬럼의 속성을 변경하는 것이라고 볼 수 있기 때문에, Insert Row 시 `This is a migration`을 체크해야 합니다.

```bash
yarn codegen

```

### migration 적용하기

1. 새로운 Hasura 에서 `default` 데이터베이스의 `public` 스키마까지 있는지 확인합니다.
1. 새로운 Hasura 서버의 접속 정보로 `.env` 파일을 수정합니다.
   1. `HASURA_PROJECT_ENDPOINT`
   2. `HASURA_GRAPHQL_ENDPOINT`
   3. `HASURA_ADMIN_SECRET`
1. `hasura md export --admin-secret $HASURA_ADMIN_SECRET --project hasura` 명령어를 실행하여, DB 접속 정보를 가져옵니다. **`hasura/metadata/databases/databases.yaml` 파일만 수정되면 되므로**, 나머지 파일 변경은 전부 discard changes 해주세요.
1. `hasura deploy --admin-secret $HASURA_ADMIN_SECRET --project hasura` 를 실행합니다. (migrations 와 metadata 를 적절히 적용합니다.)
1. 시드를 적용하려면 `hasura seed apply --admin-secret $HASURA_ADMIN_SECRET --project hasura` 를 실행해주세요.

## NextAuth 세팅법 (최초)

1. Hasura Cloud 세팅
1. [next-auth-hasura-adapter](https://github.com/AmruthPillai/next-auth-hasura-adapter/blob/main/src/data/nextauth.sql) 에 맞게 sql 실행.
1. 로그인 시 에러가 날 것임. Hasura 콘솔에서 에러에 맞게 relation 생성. 예: `field 'accounts' not found in type: 'users_bool_exp'` 에러의 뜻 - users 테이블에 accounts 필드가 없다는 뜻이므로 users 테이블에 들어가서 accounts 필드를 relation 으로서 생성해준다.

[hasura 세팅 문서 참조](https://hasura.io/learn/graphql/hasura-authentication/integrations/nextjs-auth/)

## 배포

배포는 vercel로 배포 되어있음

## 사용된 기술

### 필요도구

- [hasura cli](https://hasura.io/docs/latest/hasura-cli/install-hasura-cli/)

### 프론트엔드

- Nextjs
- apollo/client
- emotion
- graphql
- trpc/client
- trpc/react-query
- browser-image-compression
- emoji-picker-react
- lucide
- next-auth
- react-grid-gallery
- react-image-lightbox
- react-modal
- react-query
- typescript

### 백엔드

- trpc/server
- aws-sdk
- hasura
- zod
