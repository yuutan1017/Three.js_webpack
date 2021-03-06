
// authSlice.ts

export interface LOGIN_USER {
  id: number;
  username: string;
}

export interface FILE extends Blob {
  readonly lastModified: number;
  readonly name: string;
}

export interface PROFILE {
  id: number;
  user_profile: number;
  img: string | null;
}

export interface POST_PROFILE {
  id: number;
  img: File | null;
}

export interface CRED {
  username: string;
  password: string;
}

export interface JWT {
  refresh: string;
  access: string;
}

export interface USER {
  id: number;
  username: string;
}

export interface AUTH_STATE {
  loginView: boolean;
  loginUser: LOGIN_USER;
  profiles: PROFILE[];
}

// taskSlice.ts
export interface READ_TASK {
  id: number;
  task: string;
  description: string;
  status: string;
  status_name: string;
  category: number;
  category_item: string;
  deadline: string;
  owner: number;
  owner_username: string;
  created_at: string;
  updated_at: string;
}

export interface POST_TASK {
  id: number;
  task: string;
  description: string;
  status: string;
  category: number;
  deadline: string;
  owner: number;
}

export interface CATEGORY {
  id: number;
  item: string;
}

export interface TASK_STATE {
  tasks: READ_TASK[];
  editedTask: POST_TASK;
  selectedTask: READ_TASK;
  users: USER[];
  category: CATEGORY[];
}

export interface SORT_STATE {
  rows: READ_TASK[];
  order: "desc" | "asc";
  activeKey: string;
}

export interface Props{
  // onClick: (active: React.MouseEvent<HTMLInputElement>) => void;
  showModal: boolean;
  setShowModal: (active:boolean) => void;
};
