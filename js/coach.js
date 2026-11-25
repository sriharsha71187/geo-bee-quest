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
  updated: "2026-11-24",
  focusTopics: ["capitals", "worldphys", "worldmap", "landmarks", "uslandmarks"],
  tierFloor: { states: 4, usmap: 3 },
  tierCap: { capitals: 3, worldphys: 3, worldmap: 4, uslandmarks: 3, usphys: 3, regions: 3, relate: 3, explorers: 2 },
  buzz: { targetTier: 2, regions: { oceania: 1.5, europe: 1.4, world: 1.4, asia: 1.3, canada: 1.3, us: 1.2, africa: 1.0, latam: 1.0 } },
  note: "11 days to Dec 5. No practice has synced for 11/23 or 11/24; his last day (11/22) was 95%. Reviews waiting are up to 552. Next session: 2 buzzer rounds first, then 15 minutes of Review (no need to clear the whole pile). Two new tossups on facts he missed: Finland and the compass rose. The buzzer level stays at 2 until two more strong rounds.",
};
