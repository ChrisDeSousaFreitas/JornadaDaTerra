// Contrato de dados rigoroso
export interface Ocorrencia {
  id: string;
  cultura: string;
  setor: string;
  criticidade: string;
}

// Mapeamento exato das rotas de navegação
export type RootStackParamList = {
  Home: undefined;
  Quests: undefined;
  AddQuest: undefined;
  QuestDetail: { quest: Ocorrencia };
  EditQuest: { quest: Ocorrencia };
  Stats: undefined;
  Map: undefined;
};