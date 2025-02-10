import { RootState, useAppSelector } from "..";


export function useSettingVersion():string{
  return useAppSelector((state:RootState)=>state.setting.version)
}