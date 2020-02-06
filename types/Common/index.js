const Ability = `
  type Ability {
    is_hidden: Boolean
      slot: Int
      ability:  AdditionalResource
  }
`;
const AdditionalResource = `
  type AdditionalResource {
    name: String
    url: String
  }
`;
const GameIndex = `
  type GameIndex {
    game_index: Int
    version: AdditionalResource
  }
`;
const HeldItem = `
  type HeldItem {
    item: AdditionalResource
    version_details: [HeldItemVersionDetail]
  }
`;
const HeldItemVersionDetail = `
  type HeldItemVersionDetail {
    rarity: Int
    version: AdditionalResource
  }
`;
const LocationAreaEncounter = `
  type LocationAreaEncounter {
    location_area: AdditionalResource
    version_details: [LocationAreaEncounterVersionDetails]
  }
`;
const LocationAreaEncounterVersionDetails = `
  type LocationAreaEncounterVersionDetails {
    max_chance: Int
    encounter_details: [EncounterDetails]
    version: AdditionalResource
  }
`;
const EncounterDetails = `
  type EncounterDetails {
    min_level: Int
    max_level: Int
    condition_values: [AdditionalResource]
    chance: Int
    method: AdditionalResource
  }
`;
const Move = `
  type Move {}
`;
const Species = `
  type Species {}
`;
const PokeStat = `
  type PokeStat {}
`;
const PokeType = `
  type PokeType {}
`;

module.exports = {
	Ability,
	AdditionalResource,
	GameIndex,
	HeldItem,
	HeldItemVersionDetail,
	LocationAreaEncounter,
	LocationAreaEncounterVersionDetails,
	EncounterDetails,
	Move,
	Species,
	PokeStat,
	PokeType,
};
