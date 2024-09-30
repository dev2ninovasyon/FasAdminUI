/**
 * @preserve
 * Authors: 2N Innovation
 * Last updated: Aug 3, 2024
 *
 * Description: Definition file for Turkish - Turkey language-country.
 */

import Handsontable from "handsontable";

const C = Handsontable.languages.dictionaryKeys;

export const dictionary = {
  languageCode: "tr-TR",
  [C.CONTEXTMENU_ITEMS_NO_ITEMS]: "Mevcut seçenek yok",
  [C.CONTEXTMENU_ITEMS_ROW_ABOVE]: "Üstüne satır ekle",
  [C.CONTEXTMENU_ITEMS_ROW_BELOW]: "Altına satır ekle",
  [C.CONTEXTMENU_ITEMS_INSERT_LEFT]: "Sola sütun ekle",
  [C.CONTEXTMENU_ITEMS_INSERT_RIGHT]: "Sağa sütun ekle",
  [C.CONTEXTMENU_ITEMS_REMOVE_ROW]: ["Satırı sil", "Satırları sil"],
  [C.CONTEXTMENU_ITEMS_REMOVE_COLUMN]: ["Sütunu sil", "Sütunları sil"],
  [C.CONTEXTMENU_ITEMS_UNDO]: "Geri al",
  [C.CONTEXTMENU_ITEMS_REDO]: "Yinele",
  [C.CONTEXTMENU_ITEMS_READ_ONLY]: "Salt okunur",
  [C.CONTEXTMENU_ITEMS_CLEAR_COLUMN]: "Sütunu temizle",

  [C.CONTEXTMENU_ITEMS_ALIGNMENT]: "Hizalama",
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_LEFT]: "Sol",
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_CENTER]: "Merkez",
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT]: "Sağ",
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY]: "Yasla",
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_TOP]: "Üst",
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE]: "Orta",
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM]: "Alt",

  [C.CONTEXTMENU_ITEMS_FREEZE_COLUMN]: "Sütunu dondur",
  [C.CONTEXTMENU_ITEMS_UNFREEZE_COLUMN]: "Sütunun dondurmasını kaldır",

  [C.CONTEXTMENU_ITEMS_BORDERS]: "Kenarlıklar",
  [C.CONTEXTMENU_ITEMS_BORDERS_TOP]: "Üst",
  [C.CONTEXTMENU_ITEMS_BORDERS_RIGHT]: "Sağ",
  [C.CONTEXTMENU_ITEMS_BORDERS_BOTTOM]: "Alt",
  [C.CONTEXTMENU_ITEMS_BORDERS_LEFT]: "Sol",
  [C.CONTEXTMENU_ITEMS_REMOVE_BORDERS]: "Kenarlığı kaldır",

  [C.CONTEXTMENU_ITEMS_ADD_COMMENT]: "Yorum ekle",
  [C.CONTEXTMENU_ITEMS_EDIT_COMMENT]: "Yorumu düzenle",
  [C.CONTEXTMENU_ITEMS_REMOVE_COMMENT]: "Yorumu sil",
  [C.CONTEXTMENU_ITEMS_READ_ONLY_COMMENT]: "Salt okunur yorum",

  [C.CONTEXTMENU_ITEMS_MERGE_CELLS]: "Hücreleri birleştir",
  [C.CONTEXTMENU_ITEMS_UNMERGE_CELLS]: "Hücreleri ayır",

  [C.CONTEXTMENU_ITEMS_COPY]: "Kopyala",
  [C.CONTEXTMENU_ITEMS_COPY_WITH_COLUMN_HEADERS]: [
    "Başlık ile kopyala",
    "Başlıklarla kopyala",
  ],
  [C.CONTEXTMENU_ITEMS_COPY_WITH_COLUMN_GROUP_HEADERS]: [
    "Grup başlığı ile kopyala",
    "Grup başlıkları ile kopyala",
  ],
  [C.CONTEXTMENU_ITEMS_COPY_COLUMN_HEADERS_ONLY]: [
    "Yalnızca başlığı kopyala",
    "Yalnızca başlıkları kopyala",
  ],
  [C.CONTEXTMENU_ITEMS_CUT]: "Kes",

  [C.CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD]: "Alt satır ekle",
  [C.CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD]: "Ebeveynden ayır",

  [C.CONTEXTMENU_ITEMS_HIDE_COLUMN]: ["Sütunu gizle", "Sütunları gizle"],
  [C.CONTEXTMENU_ITEMS_SHOW_COLUMN]: ["Sütunu göster", "Sütunları göster"],

  [C.CONTEXTMENU_ITEMS_HIDE_ROW]: ["Satırı gizle", "Satırları gizle"],
  [C.CONTEXTMENU_ITEMS_SHOW_ROW]: ["Satırı göster", "Satırları göster"],

  [C.FILTERS_CONDITIONS_NONE]: "Yok",
  [C.FILTERS_CONDITIONS_EMPTY]: "Boş",
  [C.FILTERS_CONDITIONS_NOT_EMPTY]: "Dolu",
  [C.FILTERS_CONDITIONS_EQUAL]: "Eşit",
  [C.FILTERS_CONDITIONS_NOT_EQUAL]: "Eşit değil",
  [C.FILTERS_CONDITIONS_BEGINS_WITH]: "İle başlar",
  [C.FILTERS_CONDITIONS_ENDS_WITH]: "İle biter",
  [C.FILTERS_CONDITIONS_CONTAINS]: "İçerir",
  [C.FILTERS_CONDITIONS_NOT_CONTAIN]: "İçermez",
  [C.FILTERS_CONDITIONS_GREATER_THAN]: "Büyüktür",
  [C.FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL]: "Büyük veya eşittir",
  [C.FILTERS_CONDITIONS_LESS_THAN]: "Küçüktür",
  [C.FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL]: "Küçük veya eşittir",
  [C.FILTERS_CONDITIONS_BETWEEN]: "Arasındadır",
  [C.FILTERS_CONDITIONS_NOT_BETWEEN]: "Arasında değildir",
  [C.FILTERS_CONDITIONS_AFTER]: "Sonra",
  [C.FILTERS_CONDITIONS_BEFORE]: "Önce",
  [C.FILTERS_CONDITIONS_TODAY]: "Bugün",
  [C.FILTERS_CONDITIONS_TOMORROW]: "Yarın",
  [C.FILTERS_CONDITIONS_YESTERDAY]: "Dün",

  [C.FILTERS_VALUES_BLANK_CELLS]: "Boş hücreler",

  [C.FILTERS_DIVS_FILTER_BY_CONDITION]: "Koşula göre filtrele",
  [C.FILTERS_DIVS_FILTER_BY_VALUE]: "Değere göre filtrele",

  [C.FILTERS_LABELS_CONJUNCTION]: "Ve",
  [C.FILTERS_LABELS_DISJUNCTION]: "Veya",

  [C.FILTERS_BUTTONS_SELECT_ALL]: "Hepsini seç",
  [C.FILTERS_BUTTONS_CLEAR]: "Temizle",
  [C.FILTERS_BUTTONS_OK]: "Tamam",
  [C.FILTERS_BUTTONS_CANCEL]: "İptal",

  [C.FILTERS_BUTTONS_PLACEHOLDER_SEARCH]: "Ara",
  [C.FILTERS_BUTTONS_PLACEHOLDER_VALUE]: "Değer",
  [C.FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE]: "İkinci değer",

  [C.CHECKBOX_CHECKED]: "İşaretli",
  [C.CHECKBOX_UNCHECKED]: "İşaretsiz",
};

Handsontable.languages.registerLanguageDictionary(dictionary);
