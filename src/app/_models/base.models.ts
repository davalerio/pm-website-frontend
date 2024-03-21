export class BaseModel {
  actived: boolean;
  deleted: boolean;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;

  constructor(obj: any = null) {
    this.actived = obj && obj.actived || undefined;
    this.deleted = obj && obj.deleted || undefined;
    this.created_at = obj && obj.created_at || undefined
    this.updated_at = obj && obj.updated_at || undefined
    this.deleted_at = obj && obj.deleted_at || undefined
  }
}