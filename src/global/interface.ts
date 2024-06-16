import { loaiThich } from "./type";

export interface ICategory {
  id: number;
  name: string;
  pathName: string;
}

export interface IBookThuVien {
  id: number;
  urlImage: string | null;
  name: string | null;
  description: string | null;
}

export interface IUser {
  id: number;
  name: string;
  avatar: string;
}

export interface IBaiViet {
  id: number;
  tieuDe: string;
  anhTieuDe: string;
  noiDung: string;
  tacGia: IUser;
  createdAt: string;
}

export interface IMenu {
  id: number;
  name: string;
  pathName: string;
  listCategories: ICategory[];
}

export interface INguoiThich {
  user: IUser;
  thoiGianThich: string;
  loaiThich: string;
}
