function handleLog(mess: string): never {
  // never: chắc chắn ko trả về giá trị
  // never chỉ dung đc ở function cũ
  throw Error(mess);
}
