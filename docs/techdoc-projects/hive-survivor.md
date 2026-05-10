# Hive Survivor — 기술문서 프로젝트 프로필

> 이 문서는 `/techdoc-research` 와 `/techdoc-write` 가 참조하는 **프로젝트별 메타데이터**입니다.
> 본문 콘텐츠는 여기에 두지 않고 `docs/techdoc-drafts/hive-survivor.md` 에 둡니다.
> 스키마/컨벤션은 `docs/AGENT_TECHDOC.md` 를 참조하세요.

---

## 프로젝트 메타

| 항목 | 값 |
|------|---|
| 프로젝트명 | Hive Survivor |
| slug | hive-survivor |
| 프로젝트 라벨 | PROJECT 01 |
| docTitle | Hive Survivor |
| 헤더 prefix | `Hive Survivor /` |
| 분석 md 파일명 | `Hive Survivor_analysis.md` |

## 파일 경로

| 종류 | 경로 |
|------|------|
| HTML 파일 | `HiveSurvivor_Tech_Doc.html` |
| data 파일 | `techdoc.data.js` |
| 자산 폴더 | `assets/techdocs/hive-survivor/` |
| Unity 프로젝트 경로 | `D:/GitHub/2D_project` |

> data 파일이 `hivesurvivor.data.js` 가 아닌 `techdoc.data.js` 인 이유:
> 첫 프로젝트라 단수형으로 만든 레거시. 이 컨벤션은 하이브에만 적용하고,
> 신규 프로젝트는 `{slug없는소문자}.data.js` 패턴으로 만든다.

---

## 페이지 매핑 (총 16페이지)

| pageNum | type | 내용 |
|---------|------|------|
| 01 | cover | 표지 + 메타 + TOC |
| 02 | overview | 게임 흐름 4단계 + 핵심 기능 3장 카드 |
| 03 | featureCover | F1 표지 |
| 04 | structure | F1 클래스 다이어그램 |
| 05 | decision | F1 의사결정 |
| 06 | codeTabs | F1 구현 코드 |
| 07 | featureCover | F2 표지 |
| 08 | structure | F2 클래스 다이어그램 |
| 09 | decision | F2 의사결정 |
| 10 | codeTabs | F2 구현 코드 |
| 11 | featureCover | F3 표지 |
| 12 | structure | F3 클래스 다이어그램 |
| 13 | decision | F3 의사결정 |
| 14 | codeTabs | F3 구현 코드 |
| 15 | troubleshoot | TS-01 (F3 연관) |
| 16 | retro | KEEP / PROBLEM / TRY |

---

## 피쳐 목록

### F1 — 장비 리롤 + 락 시스템
- pageNum: 03~06
- id prefix: `f1`
- 한 줄: 한 번 뽑은 장비를 버리지 않고, 옵션을 잠금하고 나머지만 다시 굴림
- 핵심 클래스: `Equipment` (interface), `WeaponContainer` / `ArmorContainer` / `BootsContainer`, `EquipmentManager`, `LobbyUI`, `PlayerState`

### F2 — 9종 패시브 증강 시스템
- pageNum: 07~10
- id prefix: `f2`
- 한 줄: 레벨업마다 9종 중 무작위 3종 추천, 선택으로 즉시 빌드 반영
- 핵심 클래스: `IAugmentation` (interface), 9개 구현체 (Health / Fortitude / Intelligence …), `SetAugmentation`, `PlayerState`

### F3 — 인게임 스킬 생성
- pageNum: 11~14
- id prefix: `f3`
- 한 줄: 전투 중 마나석 조각으로 스킬을 제작·교체해 빌드를 바꿈
- 핵심 클래스: `GameManager`, `EnemyController` / `ScarabController`, `CreateManaStoneUI`, `GemListUI`, `SkillManager`

---

## 트러블슈팅 목록

### TS-01 — 몬스터 생성마다 프레임이 떨어진다
- pageNum: 15
- 연관 피쳐: F3
- 원인: 반복적인 `Instantiate`/`Destroy` 호출이 GC 스파이크 유발
- 해결: 적 종류별 `Queue<GameObject>` 풀 + `SetActive(true/false)` 재사용
- 측정: GC Alloc/Frame `0 B`, 30분 평균 `58.7 FPS`
- 핵심 코드: `EnemySpawner.cs`

---

## 자산 보유 현황

| 자산 | 경로 | 상태 |
|------|------|------|
| F1 UML | `assets/techdocs/hive-survivor/feature-1-uml.png` | ✅ |
| F1 Detail 1 | `assets/techdocs/hive-survivor/feature-1-detail-1.png` | ✅ |
| F1 Detail 2 GIF | `assets/techdocs/hive-survivor/feature-1-detail-2.gif` | ✅ |
| F2 UML | `assets/techdocs/hive-survivor/feature-2-uml.png` | ❌ 추후 제작 |
| F2 Detail 1 | `assets/techdocs/hive-survivor/feature-2-detail-1.png` | ❌ 추후 제작 |
| F2 Detail 2 GIF | `assets/techdocs/hive-survivor/feature-2-detail-2.gif` | ❌ 추후 제작 |
| F3 UML | `assets/techdocs/hive-survivor/feature-3-uml.png` | ❌ 추후 제작 |
| F3 Detail 1 | `assets/techdocs/hive-survivor/feature-3-detail-1.png` | ❌ 추후 제작 |
| F3 Detail 2 GIF | `assets/techdocs/hive-survivor/feature-3-detail-2.gif` | ❌ 추후 제작 |
| Cover Hero | (미등록 — heroPlaceholder 사용 중) | ❌ |
| Overview Gameplay | (미등록 — gameplayPlaceholder 사용 중) | ❌ |
