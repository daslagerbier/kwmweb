import { useLangContext } from "@/context/languageContext";
import { Select } from "antd";

export default function SingleSelect() {
  const { langs, lang, setLang } = useLangContext();
  return (
    <Select
      defaultValue={lang}
      onChange={(e) => setLang(e)}
      options={langs.map((lang) => ({
        value: lang,
        name: lang,
      }))}
    />
  );
}
