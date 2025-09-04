"use client"
import { createContext, useContext, useState, useEffect } from "react"
import en from "@/app/i18/en.json"
import uz from "@/app/i18/uz.json"
import ru from "@/app/i18/ru.json"

const translations = { en, uz, ru }

const I18nContext = createContext()

export function I18nProvider({ children }) {
  const [lang, setLang] = useState("uz")


  useEffect(() => {
    const saved = localStorage.getItem("lang")
    if (saved) setLang(saved)
  }, [])

  function changeLang(newLang) {
    setLang(newLang)
    localStorage.setItem("lang", newLang)
  }

  function t(key) {
    return translations[lang]?.[key] || translations["uz"][key] || key
  }

  return (
    <I18nContext.Provider value={{ t, lang, changeLang }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  return useContext(I18nContext)
}
