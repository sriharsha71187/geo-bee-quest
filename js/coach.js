/* GeoBee Quest — daily coach plan.
 * Rewritten each day by the coaching agent after it reviews the child's
 * progress (see COACHING.md). Pure data; every field is optional and the
 * app falls back to its own adaptive defaults when a field is absent.
 *
 *   focusTopics  topic ids that new material should favour (about half the time)
 *   tierFloor    {topicId: 1..5} never pick new facts easier than this
 *   tierCap      {topicId: 1..5} never pick new facts harder than this
 *   buzz.targetTier  1..5, the tossup level a buzzer round aims at
 *   buzz.regions     {region: weight}, >1 favours a region (asia, us, europe,
 *                    africa, latam, canada, oceania, world)
 *   note         one line for the parent, shown nowhere in the kid's UI
 */
window.GBQ_COACH = {
  updated: "2026-11-21",
  focusTopics: ["capitals", "worldphys", "worldmap", "landmarks", "uslandmarks"],
  tierFloor: { states: 4, usmap: 3 },
  tierCap: { capitals: 3, worldphys: 3, worldmap: 3, uslandmarks: 3, usphys: 3, regions: 3, relate: 3, explorers: 2 },
  buzz: { targetTier: 2, regions: { oceania: 1.6, canada: 1.4, us: 1.2, asia: 1.2, europe: 1.1, africa: 1.1, latam: 1.0, world: 1.0 } },
  note: "14 days to Dec 5. Great comeback on 11/21: 84 Field Book answers (89%), a buzzer round with 5 of 6 right and his earliest buzzing yet (58%), and a final round with 12 right and 3 powers. Oceania is still his weakest buzzer region (11 of 29), so it's weighted up, with new tossups on Easter Island, Guam and the Outback. Keep 2 buzzer rounds a day; if they stay this good, the level goes up next.",
};
