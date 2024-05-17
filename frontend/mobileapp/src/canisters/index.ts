import { CandidCanister } from "@bundly/ares-core";

import { TestActor, test } from "./test";

export type CandidActors = {
  test: TestActor;
};

export const candidCanisters: Record<keyof CandidActors, CandidCanister> = {
  test,
};
