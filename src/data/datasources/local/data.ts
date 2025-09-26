
export interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export const Tasks: Task[] = [
  {id:1, text:"text1", completed:true},
  {id:2, text:"text2", completed:false},
  {id:3, text:"text3", completed:true},
]
