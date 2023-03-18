import { create } from 'zustand'

interface ISavedSocket{
  socket: any;
}
interface IMessages{
  text: string;
  author: string;
  authorID: string;
}
interface IuseSocketStore{
  savedSocket: any;
  messages: IMessages[];
  setSocket: (content:any)=>void;
  setMessage: (content:any)=>void;
}
const useSocketStore = create<IuseSocketStore>((set) => ({
  savedSocket: null,
  messages: [],
  setSocket: (content:any) => set((state:any) => ({ savedSocket: content})),
  setMessage: (content:any) => set((state:any) => ({ messages: content})),
}))


export {useSocketStore};
