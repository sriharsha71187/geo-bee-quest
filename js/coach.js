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
  updated: "2026-11-02",
  focusTopics: ["capitals", "worldphys", "worldmap", "relate"],
  tierFloor: {},
  tierCap: {},
  buzz: { targetTier: 2, regions: { asia: 1.3, us: 1.2, europe: 1.2 } },
  note: "Start plan: IAC weights Asia, US and Europe heaviest; world capitals and rivers/mountains are his thinnest topics (11% and 17% known).",
};
