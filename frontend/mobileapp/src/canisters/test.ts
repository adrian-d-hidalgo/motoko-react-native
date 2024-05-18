import { ActorSubclass } from "@dfinity/agent";

import { CandidCanister } from "@bundly/ares-core";

import { idlFactory } from "../declarations/test";
import { _SERVICE } from "../declarations/test/test.did";

export type TestActor = ActorSubclass<_SERVICE>;

export const test: CandidCanister = {
  idlFactory,
  actorConfig: {
    canisterId: process.env.EXPO_PUBLIC_TEST_CANISTER_ID!,
  },
};
