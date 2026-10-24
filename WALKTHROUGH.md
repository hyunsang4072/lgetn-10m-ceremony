# LGETN 10 Million Production Ceremony – VIP Mobile Invitation
# LGETN 1,000만 대 생산 기념식 – VIP 모바일 초청장

---

## Update 6 – Refinement: lighter glass, transparent logo, calmer header / 고급감 개선

### English
Update 5 solved legibility but the opaque panel felt disconnected from the ribbons.
1. **Translucent glass hero panel**: `.glass-hero` is now a white→clear gradient (46% → 26%) with `blur(28px) saturate(170%)` and a thin white border, so the ribbons flow through. To keep text readable at this transparency, text gets a soft white halo (`.text-glow`) and the strong blur smooths the ribbons behind it. (A plain `bg-white/30` would have brought the legibility problem back.)
2. **Transparent 10M emblem**: the white rectangle was removed from `10m_milestone.png` by flood-filling only the outer background and the tiny letter counters; the washing machine's white body is kept. Edges were un-mixed from white for clean anti-aliasing and stray specks were removed. The file name is unchanged.
3. **Calm language toggle**: the red pill is gone; the container is warm gray (`stone`) and the active language is a white chip with dark text.
4. **Badge inside the panel**: `MILESTONE CELEBRATION` now sits at the top inside the card instead of straddling its edge.
- `npm run build` ✅

### 한국어
5번 업데이트에서 가독성은 확보했지만, 불투명한 패널이 웨이브 배경과 따로 노는 느낌이 있었습니다.
1. **반투명 글래스 히어로 패널**: `.glass-hero`를 흰색→투명 그라데이션(46% → 26%) + `blur(28px) saturate(170%)` + 얇은 흰 테두리로 변경해 웨이브가 비치도록 했습니다. 이 투명도에서도 글씨가 읽히도록 텍스트에 은은한 흰색 후광(`.text-glow`)을 주고, 강한 블러로 뒤 배경을 부드럽게 만들었습니다. (단순 `bg-white/30`은 가독성 문제가 다시 생길 수 있어 그대로 쓰지 않았습니다.)
2. **10M 엠블럼 투명 배경**: 외곽 배경과 글자 속 작은 흰 공간만 제거하고(세탁기 본체의 흰색은 유지) 가장자리를 흰색에서 분리해 깔끔하게 처리했으며, 잔점도 제거했습니다. 파일명은 그대로입니다.
3. **차분한 언어 토글**: 붉은 알약 제거. 웜그레이 컨테이너 + 선택된 언어는 흰색 칩/진한 글씨.
4. **배지를 패널 내부로**: `MILESTONE CELEBRATION` 배지가 카드 경계에 걸치지 않고 카드 최상단 내부에 위치합니다.
- `npm run build` ✅

---

## Update 5 – Hero legibility / 히어로 가독성 개선

### English
Dark text was hard to read over the red/gold ribbons. Combined option 1 (glass panel) with a light version of option 2 (white wash):
- **Frosted text panel**: the milestone logo, headline, key message, slogan, event info and invitation label now sit on one `.glass-hero` panel (`rgba(255,255,255,.68)` + `blur(20px)`), slightly more opaque than the `bg-white/60` suggestion because the ribbons are very saturated.
- **Gold badge** overlaps the panel's top edge for a layered look.
- **Event info** is now structured: date + time on one line, location below, each with a red icon (parsed from the existing `eventMeta` string, so EN/KO still work from `content.ts`).
- **White wash** gradient (`from-white/50 via-white/15 to-transparent`) over the backdrop calms contrast while the ribbons stay visible at the edges.
- Headline uses `clamp(32px, 10.5vw, 48px)` so `10 MILLION` never overflows narrow phones.
- Option 3 (white text + heavy shadow) was not used: it would clash with the light cards below.
- `npm run build` ✅

### 한국어
빨강/금색 웨이브 위에서 어두운 글씨가 잘 안 보이던 문제를 해결하기 위해 1번(글래스 패널)과 2번(화이트 그라데이션)을 가볍게 조합했습니다.
- **글래스 텍스트 패널**: 마일스톤 로고, 제목, 키 메시지, 슬로건, 행사 정보, 초청장 라벨을 하나의 `.glass-hero` 패널(`rgba(255,255,255,.68)` + `blur(20px)`)에 담았습니다. 배경 채도가 높아 제안하신 `bg-white/60`보다 조금 더 불투명하게 했습니다.
- **골드 배지**는 패널 상단 모서리에 겹쳐 입체감을 줬습니다.
- **행사 정보** 구조화: 날짜+시간은 한 줄, 장소는 아래 줄, 각각 빨간 아이콘 (기존 `eventMeta` 문자열을 분리해 사용하므로 EN/KO 모두 `content.ts`에서 관리됩니다).
- **화이트 그라데이션**(`from-white/50 via-white/15 to-transparent`)으로 배경 대비를 낮추면서 가장자리의 웨이브는 그대로 보이게 했습니다.
- 제목은 `clamp(32px, 10.5vw, 48px)`로 좁은 폰도 `10 MILLION`이 넘치지 않습니다.
- 3번(흰 글씨 + 강한 그림자)은 아래의 밝은 카드들과 어울리지 않아 사용하지 않았습니다.
- `npm run build` ✅

---

## Update 4 – Remove RSVP card, swap logo / RSVP 카드 제거 및 로고 교체

### English
- **Removed** the glass card containing "You are cordially invited…" and the `ACCEPT INVITATION` / `DECLINE / REGRET` buttons, together with its RSVP state logic and the unused strings in `src/data/content.ts`.
- **Logo**: replaced `src/assets/images/lg_logo.webp` with the **LG Electronics** logo (circle symbol + "LG Electronics" wordmark). Because the new logo is much wider, it is rendered at `h-4` (still with `p-4` clear space), and the gold `VIP ACCESS` badge now appears only on screens ≥ 400px wide so the header row never overflows.
- The `EXCLUSIVE VIP DIGITAL INVITATION` pill is still kept below the event info (it previously labeled the removed card) – easy to remove if you want.
- `npm run build` ✅

### 한국어
- **삭제**: "You are cordially invited…" 문구와 `ACCEPT INVITATION` / `DECLINE / REGRET` 버튼이 들어있던 글래스 카드 전체와, RSVP 상태 로직 및 `src/data/content.ts`의 미사용 문구를 제거했습니다.
- **로고**: `src/assets/images/lg_logo.webp`를 **LG Electronics** 로고(원형 심볼 + "LG Electronics" 워드마크)로 교체했습니다. 새 로고는 가로로 길어서 `h-4`(여전히 `p-4` 여백 유지)로 표시하고, 헤더가 넘치지 않도록 골드 `VIP ACCESS` 배지는 화면 너비 400px 이상에서만 보이게 했습니다.
- `EXCLUSIVE VIP DIGITAL INVITATION` 필(pill)은 이전에 삭제된 카드의 라벨이었지만 일단 행사 정보 아래에 남겨두었습니다. 필요 없으시면 바로 제거하겠습니다.
- `npm run build` ✅

---

## Update 3 – Redesign to the reference mockup / 레퍼런스 시안 기준 전면 재디자인

### English

**Why**: The previous round (flat white cards on warm gray) did not match the supplied mockup. The target is the mockup's look: red/gold silk backdrop, frosted-glass (iOS-notification style) cards, serif "10 MILLION" headline.

**Changes**
- **Logo**: Uses the official LG logo supplied by the user (`src/assets/images/lg_logo.webp`; the file was a WebP despite the `.svg` name). The hand-made placeholder logo files were deleted. Header keeps `p-4` clear space around it.
- **Background**: AI-generated abstract red / orange / champagne-gold silk ribbons (`bg_swirl.jpg`) fading into a pale page; glassmorphism restored (`.glass-card`, `.glass-pill`, `.glass-header`).
- **Header**: gold `VIP ACCESS` badge, **live D-day countdown** (computed from Nov 13, 2026, no longer hard-coded), capsule `ENG / KOR` toggle. Fixed a bug where the VIP badge never appeared (missing `xs` breakpoint).
- **Hero**: gold `MILESTONE CELEBRATION` badge, 10M logo, serif gradient headline (`10 MILLION` / `PRODUCTION CEREMONY`), key message, sub-slogan, event line, `EXCLUSIVE VIP DIGITAL INVITATION` pill, glass RSVP card. Accept = crimson→orange gradient + check; Decline = frosted glass + X. RSVP result text is now localized.
- **Schedule**: 5 grouped sessions, red line and nodes, glass cards, location with pin icon on the right. Keynote card: gold→red gradient border, `KEYNOTE · REVEAL` tag, `SPECIAL MILLIONTH UNIT REVEAL` badge.
- **Menu**: real **CSS scroll-snap swipe** carousel (image on top, description below), black `CHEF CHOICE` badge, dots synced to scroll, separate `Complimentary Treat` glass card below.
- **Footer**: `LG Electronics, Clarksville, TN · Built for Excellence`.
- **Fixes**: added missing `fadeIn` animation; images are now imported through Vite (hashed, base-path safe for `/ceremony/`).

### 한국어

**배경**: 직전 수정(웜그레이 + 플랫 화이트 카드)이 제공해주신 시안과 달랐습니다. 이번에는 시안 그대로 — 레드/골드 실크 배경, 반투명 글래스 카드(iOS 알림 스타일), 세리프체 "10 MILLION" 헤드라인 — 으로 재구성했습니다.

**변경 사항**
- **로고**: 제공해주신 공식 LG 로고 사용 (`src/assets/images/lg_logo.webp`. 확장자는 `.svg`였지만 실제 파일은 WebP였습니다). 제가 임시로 만든 로고 파일은 삭제했습니다. 헤더에서 로고 주위 `p-4` 여백 유지.
- **배경**: AI로 생성한 레드/오렌지/샴페인골드 실크 리본(`bg_swirl.jpg`)이 페이지 아래로 자연스럽게 사라지도록 구성. 글래스모피즘 복원 (`.glass-card`, `.glass-pill`, `.glass-header`).
- **헤더**: 골드 `VIP ACCESS` 배지, **실시간 D-day 카운트다운**(2026-11-13 기준 자동 계산, 하드코딩 제거), 캡슐형 `ENG / KOR` 토글. VIP 배지가 한 번도 보이지 않던 버그(`xs` 브레이크포인트 누락) 수정.
- **히어로**: 골드 `MILESTONE CELEBRATION` 배지, 10M 로고, 세리프 그라데이션 헤드라인, 키 메시지, 서브 슬로건, 행사 정보 한 줄, `EXCLUSIVE VIP DIGITAL INVITATION` 필, 글래스 RSVP 카드. 수락 = 진홍→오렌지 그라데이션 + 체크, 거절 = 프로스티드 글래스 + X. RSVP 결과 문구도 언어 전환 적용.
- **일정**: 5개 그룹 세션, 빨간 세로선/노드, 글래스 카드, 우측 하단 위치(핀 아이콘). 키노트 카드는 골드→레드 그라데이션 테두리 + `KEYNOTE · REVEAL` 태그 + `SPECIAL MILLIONTH UNIT REVEAL` 배지.
- **메뉴**: 실제 **CSS scroll-snap 스와이프** 캐러셀(상단 이미지, 하단 설명), 검정 `CHEF CHOICE` 배지, 스크롤과 연동되는 점 표시, 하단에 별도 `Complimentary Treat` 글래스 카드.
- **푸터**: `LG Electronics, Clarksville, TN · Built for Excellence`.
- **수정**: 정의되지 않았던 `fadeIn` 애니메이션 추가, 이미지는 Vite import로 처리(`/ceremony/` base 경로에서도 안전).

### Verification / 검증
- `npm run build` ✅ (tsc + vite)
- Visual check in browser: not possible in the agent sandbox (Playwright download failed) – please review on your running `npm run dev`. / 에이전트 환경에서 브라우저 실행이 불가하여, 실행 중인 `npm run dev` 화면에서 직접 확인 부탁드립니다.

---

## Update 2 – White-card theme (superseded) / 화이트 카드 테마 (대체됨)
Flat white cards on warm gray, red timeline, gold keynote border, black CHEF CHOICE badge. Superseded by Update 3.

## Update 1 – Initial build / 초기 구축
Vite + React + TS + Tailwind v3, `base: '/ceremony/'`, brand colors, EN/KO context (`src/data/content.ts`), Header / Hero / Timeline / MenuCarousel / Footer.
