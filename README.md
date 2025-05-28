# Project

05/23
```
각 파일 디렉토리 구조 정리
webpack -> dist디렉토리에 정리
실제 화면 dist/html/(파일명).html 에서 확인 가능

html 파일에 PB_Insert.html, PB_Insert.css 파일 추가, ← src 파일에서 확인 가능
images파일에 PB_insert_button.png 이미지 추가, PB_List.html 수정 ← src 파일에서 확인 가능
```
05/24
```
PB_Insert 페이지 웹팩 추가
JSON 정보 중 이미지 경로 -> id로 변경(이미지는 '(이름).png'로 접근)
PB_Insert와 PB_Edit 페이지에서 해당하는 프로필 정보 표기
```
05/25
```
src 파일에 있는 모든 HTML, CSS 수정(디자인 부분만)
src 파일에서 js 폴더에 Clock.js, Timer.js 추가
(Clock은 모든 HTML에서 사용되고, Timer는 PB_Call.html에서 사용됨)
Clock.js와 Timer.js 웹팩 적용
```
05/27
```
src/images 경로에 gallery 추가(각 이미지 분류 및 추가는 하위 디렉토리에서 가능)
Album.html 화면 구현 및 선택한 메뉴에 따라 이미지 로드(완료 버튼은 아직 구현X)
Album.html과 Album.css 웹팩 적용
PB_Insert_css에서 navigation(margin-top) 부분 수정(src, dist 둘다 수정)
```
