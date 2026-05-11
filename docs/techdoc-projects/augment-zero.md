# Augment Zero — 기술문서 프로젝트 프로필

> 이 문서는 `/techdoc-research` 와 `/techdoc-write` 가 참조하는 **프로젝트별 메타데이터**입니다.
> 본문 콘텐츠는 여기에 두지 않고 `docs/techdoc-drafts/augment-zero.md` 에 둡니다.
> 스키마/컨벤션은 `docs/AGENT_TECHDOC.md` 를 참조하세요.

---

## 프로젝트 메타

| 항목 | 값 |
|------|---|
| 프로젝트명 | Augment Zero |
| slug | augment-zero |
| 프로젝트 라벨 | PROJECT 03 |
| docTitle | Augment Zero |
| 헤더 prefix | `Augment Zero /` |
| 분석 md 파일명 | `Augment Zero_analysis.md` |

## 파일 경로

| 종류 | 경로 |
|------|------|
| HTML 파일 | `AugmentZero_Tech_Doc.html` |
| data 파일 | `augmentzero.data.js` |
| 자산 폴더 | `assets/techdocs/augment-zero/` |
| Unity 프로젝트 경로 | `D:/GitHub/FPS_Hyper_shooting` |

> data 파일 컨벤션: `{slug없는소문자}.data.js` → `augmentzero.data.js`.

---

## 페이지 매핑 (총 17페이지)

| pageNum | type | 내용 |
|---------|------|------|
| 01 | cover | 표지 + 메타 + TOC |
| 02 | overview | 게임 흐름 4단계 + 핵심 기능 3장 카드 |
| 03 | featureCover | F1 표지 — 다중 무기 선택/전환 |
| 04 | structure | F1 클래스 다이어그램 |
| 05 | decision | F1 의사결정 (무기별 독립 컴포넌트 vs 슬롯 enum + Manager) |
| 06 | codeTabs | F1 구현 코드 |
| 07 | featureCover | F2 표지 — 상점 + 무기 강화 연동 |
| 08 | structure | F2 클래스 다이어그램 |
| 09 | decision | F2 의사결정 (강화 로직 분산 vs 상점 골격 단일 매니저) |
| 10 | codeTabs | F2 구현 코드 |
| 11 | featureCover | F3 표지 — 보스 AI (Nasty) State 패턴 |
| 12 | structure | F3 클래스 다이어그램 |
| 13 | decision | F3 의사결정 (거대 switch 분기 vs IBossState 객체 분리) |
| 14 | codeTabs | F3 구현 코드 |
| 15 | troubleshoot | TS-01 시점 변경 시 캐릭터 모델 노출 (F1 연관) |
| 16 | troubleshoot | TS-02 보스 공격 진입 시 NavMesh 추격 정지 누락 (F3 연관) |
| 17 | retro | KEEP / PROBLEM / TRY |

---

## 피쳐 목록

### F1 — 다중 무기 선택/전환
- pageNum: 03~06
- id prefix: `f1`
- 한 줄: 4슬롯 enum + 추상 `WeaponController` + `WeaponDataSO` 분리로 7종 무기를 단일 입력 흐름에서 전환·관리
- 핵심 클래스: `WeaponManager`, `WeaponController` (abstract), `Weapon` (POCO), `WeaponDataSO` (ScriptableObject), 7개 구현체 (`Rifle` / `Pistol` / `Shotgun` / `Smg` / `Sniper` / `Knife` / `Grenade`)

### F2 — 상점 시스템 + 무기 강화 연동
- pageNum: 07~10
- id prefix: `f2`
- 한 줄: 단일 `StorePanelManager` 가 아이템샵·무기/방어구 강화 3탭을 일원화하고, `Weapon` 인스턴스를 통해 강화 시스템과 옵션 누적을 연동
- 핵심 클래스: `StorePanelManager`, `ItemShopManager`, `UpgradeWeaponSystem`, `UpgradeArmorSystem`, `MyWeaponLoader`, `WeaponUpgradeUImanager`, `DroppedItem`
- 본인 기여 영역: 상점 골격(매니저, 탭 흐름, SO 통합, 구매 시스템, 이전 무기 드롭) — 강화 알고리즘 자체는 팀원(Yun0don) 기여

### F3 — 보스 AI (Nasty) — State 패턴
- pageNum: 11~14
- id prefix: `f3`
- 한 줄: `IBossState` 인터페이스로 6개 상태(Move/Attack/Smash/Stunned/Brass/Die) 를 객체 단위로 분리하고, 거리·체력 기반으로 자동 전환
- 핵심 클래스: `IBossState`, `BossController` (abstract), `NastyController`, `Nasty`, `BossMoveState` / `BossAttackState` / `BossSmashState` / `BossStunnedState` / `BossBrassState` / `BossDieState`

---

## 트러블슈팅 목록

### TS-01 — 시점 변경 시 캐릭터 모델 노출
- pageNum: 15
- 연관 피쳐: F1 (플레이어 컨트롤)
- 원인: 캐릭터 몸체는 좌우 회전, 카메라는 상하 회전 독립 → 카메라가 아래를 향할 때 캐릭터 상체·하체가 1인칭 시야에 들어옴
- 해결: 캐릭터 상체 본(bone) 또는 루트 Transform 을 카메라 pitch 회전과 동기화 (싱글 플레이어 환경 가정)
- 핵심 코드: `PlayerController.cs` `RotatePlayer()`

### TS-02 — 보스 공격 진입 시 NavMesh 추격 정지 누락
- pageNum: 16
- 연관 피쳐: F3
- 원인: 공격/스매시 State 진입 시 `NavMeshAgent.isStopped` 미설정으로 추격이 계속됨
- 해결: `BossMoveState` 의 거리 분기에서 근접 진입 직전 `agent.isStopped = true` 호출 + `LookAt(target)` 으로 자세 고정
- 핵심 코드: `BossMoveState.cs` `UpdateState()`

---

## 자산 보유 현황

| 자산 | 경로 | 상태 |
|------|------|------|
| F1 UML | `assets/techdocs/augment-zero/feature-1-uml.png` | ❌ 추후 제작 |
| F1 Detail 1 | `assets/techdocs/augment-zero/feature-1-detail-1.png` | ❌ 추후 제작 |
| F1 Detail 2 GIF | `assets/techdocs/augment-zero/feature-1-detail-2.gif` | ❌ 추후 제작 |
| F2 UML | `assets/techdocs/augment-zero/feature-2-uml.png` | ❌ 추후 제작 |
| F2 Detail 1 | `assets/techdocs/augment-zero/feature-2-detail-1.png` | ❌ 추후 제작 |
| F2 Detail 2 GIF | `assets/techdocs/augment-zero/feature-2-detail-2.gif` | ❌ 추후 제작 |
| F3 UML | `assets/techdocs/augment-zero/feature-3-uml.png` | ❌ 추후 제작 |
| F3 Detail 1 | `assets/techdocs/augment-zero/feature-3-detail-1.png` | ❌ 추후 제작 |
| F3 Detail 2 GIF | `assets/techdocs/augment-zero/feature-3-detail-2.gif` | ❌ 추후 제작 |
| TS-01 캡처 | `assets/techdocs/augment-zero/ts-01.png` | ❌ 추후 제작 (사용자 보유 슬라이드 활용 가능) |
| TS-02 캡처 | `assets/techdocs/augment-zero/ts-02.png` | ❌ 추후 제작 |
| Cover Hero | (미등록 — heroPlaceholder 사용 중) | ❌ |
| Overview Gameplay | (미등록 — gameplayPlaceholder 사용 중) | ❌ |
