export interface ISource {
  sourceid: number;
  name: string;
  description: string;
  source_type: string;
  endpoint: string;
  is_active: boolean;
  created: Date;
}

export interface ISources {
  sources: ISource[];
}
