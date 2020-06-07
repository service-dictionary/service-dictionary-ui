export interface ISource {
  id: number;
  name: string;
  source_uuid: string;
  description: string;
  is_deleted: boolean;
  created: Date;
  endpoint: string;
}

export interface ISources {
  sources: ISource[];
}
