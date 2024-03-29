export enum SubtaskStatus {
  pending = 'pending',
  completed = 'completed',
}

export interface SubtaskFillable {
  title: string;
  todoId: number;
}

export interface SubtaskStatusUpdatable {
  status: SubtaskStatus;
}

export interface SubtaskDto {
  id: number;
  title: string;
  status: SubtaskStatus;
  createdAt: Date;
}
