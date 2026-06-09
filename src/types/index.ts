// src/types/index.ts

export interface Ocorrencia {
  id: string;
  cultura: 'Milho' | 'Soja' | 'Trigo' | 'Outra'; // Adicionada a propriedade com tipos definidos
  setor: string;
  criticidade: 'Baixa' | 'Média' | 'Alta';
}

export type RootStackParamList = {
  Home: undefined;
  Quests: undefined;
  AddQuest: undefined;
  QuestDetail: { quest: Ocorrencia };
  EditQuest: { quest: Ocorrencia };
  Stats: undefined;
  Map: undefined;
};