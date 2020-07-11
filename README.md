## CODESTATES & TEAM HELL-THY
### :poultry_leg: PROJECT-CAL-CULATOR
## :green_book: 서비스 설명
###  Cal-Culator는....
- 유저가 식단을 관리할 수 있게끔 도와주는 웹 어플리케이션 입니다.
- 유저는 먹은 음식을 입력하고, 그래프/차트 등으로 자신이 얼마나 많은 칼로리를 섭취하였는지 알 수 있습니다.
  - 일별, 주별, 월별 데이터를 그래프와 차트로 한눈에 볼 수 있습니다.
- 유저의 성별, 나이에 따라 추가적으로 섭취를 해주어야 할 영양소, 섭취를 피해야 할 영양소를 추천해줍니다
- Spoonacular API를 사용하여 검색한 음식의 주 영양소(탄수화물, 단백질, 지방, 나트륨, 등...)들의 함유량을 받아옵니다.

## :wrench: 설치 & 사용방법
- Cal-culator는 Node.js 기반으로 만들어진 웹 어플리케이션입니다.
- Cal-culator를 설치하기 전, Node.js의 LTS버전과 npm을의 최신 버전을 설치하여 주시기 바랍니다.

```
https://nodejs.org/en/
https://www.npmjs.com/get-npm
```

- 이 레파지토리를 fork하여 본인의 로컬 레파지토리에 clone 합니다.

```
git clone https://github.com/codestates/im20-project-cal-culator
```

- 성공적으로 받아졌다면, server 폴더와 client 폴더에서 총 2번의 npm install 을 터미널에서 실행합니다.
- .env 파일을 server 폴더 내에서 생성하고 비밀번호와 api키를 저장합니다

```
FOOD_API_KEY = YOUR FOOD API KEY
PASSWORD = YOUR MYSQL PASSWORD
NODE_ENV = development
```

- 서버의 실행은 server 폴더에서 npm run server를, 클라이언트의 실행은 client 폴더에서 npm start를 터미널로 실행합니다.

### 클라이언트 실행시 화면
![1home](https://user-images.githubusercontent.com/62484853/87214165-467e0a80-c365-11ea-99ee-f6fbb6ab1d7c.gif)

### 로그인 하지 않고 summary, calculator, do & dont 탭 접근 시도시
![4block_sum_cal_do](https://user-images.githubusercontent.com/62484853/87214177-73cab880-c365-11ea-8d5a-816c72292c01.gif)

### 회원가입 화면
![5-1create](https://user-images.githubusercontent.com/62484853/87214183-7b8a5d00-c365-11ea-9c13-ba3f6f27b723.gif)

### Calculator 탭 이용
![7calculator](https://user-images.githubusercontent.com/62484853/87214229-ca37f700-c365-11ea-8321-ff6631e19bb5.gif)

![7-2addlist](https://user-images.githubusercontent.com/62484853/87214226-c99f6080-c365-11ea-8d42-7665b8f16966.gif)

![7-3confirm](https://user-images.githubusercontent.com/62484853/87214225-c4421600-c365-11ea-8259-d241b53d6019.gif)

### 먹은 음식 등록 후, 일/주/월별 요약
![8summary](https://user-images.githubusercontent.com/62484853/87214251-f5bae180-c365-11ea-996d-21654807becb.gif)

### 유저에게 필요한 영양소, 필요하지 않은 영양소 추천
![9dodont](https://user-images.githubusercontent.com/62484853/87214254-f8b5d200-c365-11ea-8e0d-e031508c358e.gif)

<br/>
**이 외에 프로젝트 과정에서의 기획과정, 회고, 진행 현황등 자세한 사항들은 Wiki에 기록하게 됩니다. [여기](https://github.com/codestates/im20-project-cal-culator/wiki)를 눌러 이동해 주세요**
