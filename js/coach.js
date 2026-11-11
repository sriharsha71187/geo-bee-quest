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
  updated: "2026-11-10",
  focusTopics: ["capitals", "worldphys", "landmarks", "uslandmarks", "relate"],
  tierFloor: { states: 4, usmap: 3 },
  tierCap: { capitals: 3, worldphys: 3, worldmap: 3, uslandmarks: 3, regions: 3, relate: 3, explorers: 2 },
  buzz: { targetTier: 2, regions: { oceania: 1.6, canada: 1.5, africa: 1.3, europe: 1.3, asia: 1.1 } },
  note: "25 days to Dec 5: only 4 Field Book answers on 11/9-11/10 and 422 reviews waiting - please do 15 min of Review daily. Good news: the 11/10 Final rose to 37 pts (8 wrong, was 13). One buzzer round he buzzed at 15% and went 1 for 3 - wait for a clue he knows. Adding Oceania/Canada tossups (his weakest buzzer regions).",
};
