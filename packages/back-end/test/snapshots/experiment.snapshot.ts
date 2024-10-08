export const experimentSnapshot = {
  id: "exp_dd4gxd4lyel8bwi",
  trackingKey: "add-cart",
  organization: "org_dd4g20lalsnhhpa2",
  project: "",
  owner: "u_dd4g20lalsnhhp9x",
  datasource: "ds_dd4gxd4lyel5js1",
  userIdType: "anonymous",
  dateCreated: new Date("2024-07-09T15:50:32.514+00:00"),
  dateUpdated: new Date("2024-07-31T15:43:21.789+00:00"),
  exposureQueryId: "user_id",
  hashAttribute: "id",
  hashVersion: 2,
  name: "Add To Cart",
  tags: [],
  description: "",
  hypothesis: "",
  goalMetrics: ["metric-aacc"],
  secondaryMetrics: ["metric-ccdd"],
  guardrailMetrics: ["metric-eeff"],
  metrics: ["met_dd4gxd4lyel6394"],
  pastNotifications: [],
  metricOverrides: [],
  guardrails: ["met_dd4gxd4lyel6394"],
  activationMetric: "met_dd4gxd4lyel6394",
  segment: "",
  queryFilter: "",
  skipPartialData: false,
  attributionModel: "firstExposure",
  archived: false,
  status: "running",
  analysis: "",
  releasedVariationId: "",
  excludeFromPayload: true,
  autoAssign: false,
  implementation: "code",
  previewURL: "",
  targetURLRegex: "",
  variations: [
    {
      id: "var_lyel8229",
      name: "Control",
      description: "",
      key: "0",
      screenshots: [],
      dom: [],
    },
    {
      id: "var_lyel822a",
      name: "Variation 1",
      description: "",
      key: "1",
      screenshots: [],
      dom: [],
    },
  ],
  phases: [
    {
      dateStarted: new Date("2023-07-09T15:53:00.000Z"),
      name: "Main",
      reason: "",
      coverage: 1,
      condition: "{}",
      savedGroups: [],
      prerequisites: [],
      namespace: {
        enabled: false,
        name: "",
        range: [0, 1],
      },
      seed: "add-cart",
      variationWeights: [0.5, 0.5],
      groups: [],
    },
  ],
  lastSnapshotAttempt: new Date("2024-07-31T15:43:21.789Z"),
  nextSnapshotAttempt: new Date("2024-07-31T21:43:21.789Z"),
  autoSnapshots: true,
  ideaSource: "",
  linkedFeatures: [],
  sequentialTestingEnabled: false,
  sequentialTestingTuningParameter: 5000,
  manualLaunchChecklist: [],
  bucketVersion: 1,
  disableStickyBucketing: false,
  fallbackAttribute: "",
  minBucketVersion: 0,
};
