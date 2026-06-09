export type RootStackParamList = {
  Home: undefined;
  Quests: undefined;
  AddQuest: undefined;
  QuestDetail: { quest: Ocorrencia };
  EditQuest: { quest: Ocorrencia };
};

export interface Ocorrencia {
  id: string;
  cultura: string;
  setor: string;
  criticidade: 'Baixa' | 'Média' | 'Alta';
}