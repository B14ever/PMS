import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { TranslationEn,TranslationAm ,TranslationOr,TranslationTi,TranslationSo} from './Languages'

i18n 
.use(LanguageDetector)
.use(initReactI18next)
.init({
    fallbackLng: 'en',
  resources:{
       en:{translation: TranslationEn},
       am:{translation:TranslationAm},
       or:{translation:TranslationOr},
       ti:{translation:TranslationTi},
       so:{translation:TranslationSo},
    }
}
)
export default i18n
