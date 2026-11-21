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
  updated: "2026-11-20",
  focusTopics: ["capitals", "worldphys", "worldmap", "landmarks", "uslandmarks"],
  tierFloor: { states: 4, usmap: 3 },
  tierCap: { capitals: 3, worldphys: 3, worldmap: 3, uslandmarks: 3, usphys: 3, regions: 3, relate: 3, explorers: 2 },
  buzz: { targetTier: 2, regions: { us: 1.4, world: 1.4, oceania: 1.3, canada: 1.3, asia: 1.2, europe: 1.1, africa: 1.1, latam: 1.1 } },
  note: "15 days to Dec 5. Third day with nothing synced: no Field Book since 11/17, no buzzer round since 11/12 (8 days). Please check Family Sync is still signed in on his device. The bee is all buzzer tossups, so 2 short buzzer rounds a day matters most, then 15 minutes of Review (531 due). New tossups: Pacific Ocean, Statue of Liberty (easy wins to restart the buzzer habit).",
};
