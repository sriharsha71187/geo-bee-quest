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
  updated: "2026-11-18",
  focusTopics: ["capitals", "worldphys", "worldmap", "landmarks", "uslandmarks"],
  tierFloor: { states: 4, usmap: 3 },
  tierCap: { capitals: 3, worldphys: 3, worldmap: 3, uslandmarks: 3, usphys: 3, regions: 3, relate: 3, explorers: 2 },
  buzz: { targetTier: 2, regions: { us: 1.4, oceania: 1.4, asia: 1.3, canada: 1.3, europe: 1.2, africa: 1.2, latam: 1.1, world: 1.1 } },
  note: "17 days to Dec 5. No Field Book practice on 11/18 and no buzzer round since 11/12 (6 days), and the bee is all buzzer tossups: please do 2 buzzer rounds a day, starting today. On 11/18 he scored 31/40 and 25/40 on written rounds but left three others at 0-4/40; finishing one round beats restarting. New tossups: Hudson River, Tamil Nadu, Perth.",
};
