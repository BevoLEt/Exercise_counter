1. layout-레이아웃 
    - navbar.vue (메인 상단 메뉴)
    - home-layout
        - 메인 상단 메뉴 
        - 컨텐츠 영역 
    - left-layout
        - 메인 상단 메뉴 
        - 왼쪽 메뉴
        - 컨텐츠 영역 
                 
2. views- 페이지 
    - group01
        - 게시물 페이지 
    - group02
        - 이미지 카드 페이지 
    - login
        - 로그인 페이지 
    - main
        - 홈 페이지 
    
3. router
    - 메인 라우트 정보 - index.js
        - 홈 페이지
            - homeLayout 사용 
        - 로그인 페이지 
            - layout  미사용

    - group01 - group01Router.js
        - 게시물 페이지
            - left-layout 사용

    - group02 - group02Router.js
        - 이미지 카드 페이지
            - homeLayout 사용 



4. 서브 페이지 추가 방법
    - 단계01: 페이지 만들기
        - @/views/group01/Sample.vue
        
    - 단계02: 라우터에 연결하기 
        - @/views/router/modules/group01Router.js

    - 단계03: 메인 메뉴에 추가
        - @/layout/Navbar.vue

    - 단계04: 서브 메뉴에 추가 
        - @/layout/group01/components/Sidebar.vue

5. 그룹 추가 방법
    - 단계01: 그룹 만들기
    - 단계02: 페이지 만들기 
    - 단계03: 라우터에 그룹 및 페이지 연결 
    - 단계04: 메인 메뉴에 추가
    - 단계05: 서브 메뉴에 추가 
