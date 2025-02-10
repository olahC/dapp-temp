/**多语言hook */

import { LocalsLanaugaeKey } from '@/locales';
import { getLocale, setLocale, useIntl } from 'umi';


export default function useIntlLanguage(){
  const intl = useIntl()
  const language:LocalsLanaugaeKey = getLocale()

  function t(key:string,values?:Record<string,any>){
    const value = intl.formatMessage({
      id: key,
    },values);
    return value || key
  }

  function setLocaleLanguage(key:LocalsLanaugaeKey){
    setLocale(key,false)
  }

  return {t, language, setLocaleLanguage}

}