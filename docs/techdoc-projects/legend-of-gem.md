# Legend of Gem — 기술문서 프로젝트 프로필

> 이 문서는 `/techdoc-research` 와 `/techdoc-write` 가 참조하는 **프로젝트별 메타데이터**입니다.
> 본문 콘텐츠는 여기에 두지 않고 `docs/techdoc-drafts/legend-of-gem.md` 에 둡니다.
> 스키마/컨벤션은 `docs/AGENT_TECHDOC.md` 를 참조하세요.

---

## 프로젝트 메타

| 항목 | 값 |
|------|---|
| 프로젝트명 | Legend of Gem |
| slug | legend-of-gem |
| 프로젝트 라벨 | PROJECT 02 |
| docTitle | Legend of Gem |
| 헤더 prefix | `Legend of Gem /` |
| 분석 md 파일명 | `LegendOfGem_analysis.md` |

## 파일 경로

| 종류 | 경로 |
|------|------|
| HTML 파일 | `LegendOfGem_Tech_Doc.html` |
| data 파일 | `legendofgem.data.js` |
| 자산 폴더 | `assets/techdocs/legend-of-gem/` |
| Unity 프로젝트 경로 | `D:/GitHub/3D_Project` |

> data 파일 컨벤션: `{slug없는소문자}.data.js` → `legendofgem.data.js`.

---

## 페이지 매핑 (총 19페이지)

| pageNum | type | 내용 |
|---------|------|------|
| 01 | cover | 표지 + 메타 + TOC |
| 02 | overview | 게임 흐름 4단계 + 핵심 기능 3장 카드 |
| 03 | featureCover | F1 표지 |
| 04 | structure | F1 클래스 다이어그램 |
| 05 | decision | F1 의사결정 (Skill 내부 포함 vs DI 주입) |
| 06 | codeTabs | F1 구현 코드 |
| 07 | featureCover | F2 표지 |
| 08 | structure | F2 클래스 다이어그램 |
| 09 | decision | F2 의사결정 |
| 10 | codeTabs | F2 구현 코드 |
| 11 | featureCover | F3 표지 |
| 12 | structure | F3 클래스 다이어그램 |
| 13 | decision | F3 의사결정 |
| 14 | codeTabs | F3 구현 코드 |
| 15 | troubleshoot | TS-01 카메라 시점과 이동 방향 |
| 16 | troubleshoot | TS-02 이동 애니메이션 (블렌드 트리) |
| 17 | troubleshoot | TS-03 몬스터의 플레이어 인식 (벽 너머) |
| 18 | troubleshoot | TS-04 몬스터 공격 연속 히트 |
| 19 | retro | KEEP / PROBLEM / TRY |

---

## 피쳐 목록

### F1 — 젬 조합 스킬 시스템
- pageNum: 03~06
- id prefix: `f1`
- 한 줄: 메인 젬과 보조 젬을 슬롯에 끼워 스킬을 실시간으로 생성하고 변형
- 핵심 클래스: `Skill`, `GemSet`, `SkillManager`, `FireBall` / `Explosion`, `FasterCast` / `FasterProjectiles` / `IncreasedAOE` / `Proliferation` / `MultipleProjectiles`
- 의사결정 슬라이드 보유: PROBLEM / SOLUTION / HOW IT WORKS / RESULT 4장 (F1 Decision으로 흡수)

### F2 — 아이템 옵션 랜덤 생성
- pageNum: 07~10
- id prefix: `f2`
- 한 줄: 부위별 가중치 확률 테이블로 드랍 시점에 옵션·레어도 결정
- 핵심 클래스: `IEquipment`/`IArmour`, `BodyArmour` / `Helmet` / `Gloves` / `Boots`, `EquipmentManager`, `ItemTableManager`, `TableSAO`

### F3 — 몬스터 팩 스폰
- pageNum: 11~14
- id prefix: `f3`
- 한 줄: 스폰 포인트 절반을 무작위 활성화하고 포인트당 3~5마리를 원형으로 배치
- 핵심 클래스: `MonsterSpawnManager`, `MonsterController`, `MonsterStat`, `Goblin`

---

## 트러블슈팅 목록

### TS-01 — 카메라 시점과 이동 방향 불일치
- pageNum: 15
- 연관 피쳐: 플레이어 컨트롤 (F 외 공통)
- 원인: 카메라/월드/로컬 좌표계 미매핑
- 해결: 메인 카메라 `forward`/`right`를 y=0 평면으로 투영 → 정규화 → 입력 합성
- 핵심 코드: `PlayerController.cs`

### TS-02 — 이동 애니메이션 블렌드 트리 오작동
- pageNum: 16
- 연관 피쳐: 플레이어 컨트롤
- 원인: TS-01 후속 — 블렌드 트리에 월드 좌표가 들어가 이상 동작
- 해결: `InverseTransformDirection()`으로 로컬 변환 → `DirX`/`DirZ` 파라미터 전달
- 핵심 코드: `PlayerController.cs` 또는 애니메이션 입력 처리부

### TS-03 — 몬스터의 플레이어 인식이 벽을 넘어옴
- pageNum: 17
- 연관 피쳐: F3
- 원인: 인식 범위를 단순 `Distance`로 계산
- 해결: `NavMeshPath.CalculatePath()` + `corners` 배열 거리 합산으로 실제 경로 길이 사용
- 핵심 코드: `MonsterController.cs` 또는 `MonsterAttack.cs`

### TS-04 — 몬스터 공격 연속 히트
- pageNum: 18
- 연관 피쳐: F3
- 원인: 콜라이더 충돌 기반 처리로 콜라이더 On 동안 매 프레임 피격 판정
- 해결: `StateMachineBehaviour.OnStateUpdate` + `normalizedTime` 으로 `startNormalizedTime`~`endNormalizedTime` 구간만 콜라이더 On
- 핵심 코드: `MonsterAttackLogic.cs` 또는 `AttackLogic.cs`

---

## 자산 보유 현황

| 자산 | 경로 | 상태 |
|------|------|------|
| F1 UML | `assets/techdocs/legend-of-gem/feature-1-uml.png` | ❌ 추후 제작 |
| F1 Detail 1 (Decision) | `assets/techdocs/legend-of-gem/feature-1-detail-1.png` | ❌ 추후 제작 (사용자 슬라이드 4장 활용 가능) |
| F1 Detail 2 GIF | `assets/techdocs/legend-of-gem/feature-1-detail-2.gif` | ❌ 추후 제작 |
| F2 UML | `assets/techdocs/legend-of-gem/feature-2-uml.png` | ❌ 추후 제작 |
| F2 Detail 1 | `assets/techdocs/legend-of-gem/feature-2-detail-1.png` | ❌ 추후 제작 |
| F2 Detail 2 GIF | `assets/techdocs/legend-of-gem/feature-2-detail-2.gif` | ❌ 추후 제작 |
| F3 UML | `assets/techdocs/legend-of-gem/feature-3-uml.png` | ❌ 추후 제작 |
| F3 Detail 1 | `assets/techdocs/legend-of-gem/feature-3-detail-1.png` | ❌ 추후 제작 |
| F3 Detail 2 GIF | `assets/techdocs/legend-of-gem/feature-3-detail-2.gif` | ❌ 추후 제작 |
| TS-01 캡처 | `assets/techdocs/legend-of-gem/ts-01.png` | ❌ 추후 제작 (사용자 보유 슬라이드 활용 가능) |
| TS-02 캡처 | `assets/techdocs/legend-of-gem/ts-02.png` | ❌ 추후 제작 (사용자 보유 슬라이드 활용 가능) |
| TS-03 캡처 | `assets/techdocs/legend-of-gem/ts-03.png` | ❌ 추후 제작 (사용자 보유 슬라이드 활용 가능) |
| TS-04 캡처 | `assets/techdocs/legend-of-gem/ts-04.png` | ❌ 추후 제작 (사용자 보유 슬라이드 활용 가능) |
| Cover Hero | (미등록 — heroPlaceholder 사용 중) | ❌ |
| Overview Gameplay | (미등록 — gameplayPlaceholder 사용 중) | ❌ |
