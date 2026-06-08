export type RootStackParamList = {
  Home: undefined;
  Quests: undefined;
  AddQuest: undefined;
  QuestDetail: { quest: Quest };
  EditQuest: { quest: Quest };
};

export interface Quest {
  id: string;
  title: string;
  sector: string;
  rank: string;
}