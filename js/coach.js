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
  updated: "2026-11-08",
  focusTopics: ["capitals", "worldphys", "worldmap", "landmarks", "uslandmarks"],
  tierFloor: { states: 4, usmap: 3 },
  tierCap: { capitals: 3, worldphys: 3, worldmap: 3, uslandmarks: 3, regions: 3, explorers: 2 },
  buzz: { targetTier: 2, regions: { oceania: 1.5, europe: 1.4, africa: 1.3, asia: 1.3, canada: 1.2 } },
  note: "27 days to Dec 5: good week (5 days, ~85%), but the 11/7 Final went -3 (13 wrong) - remind him a wrong buzz costs points, buzz only when sure. Steering to Oceania/Europe and common capitals.",
};
