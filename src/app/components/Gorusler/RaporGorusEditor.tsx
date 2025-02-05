import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Box, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  ClassicEditor,
  AccessibilityHelp,
  Autoformat,
  AutoImage,
  AutoLink,
  Autosave,
  Bold,
  CloudServices,
  Code,
  CodeBlock,
  Essentials,
  GeneralHtmlSupport,
  Heading,
  HtmlComment,
  HtmlEmbed,
  ImageBlock,
  ImageCaption,
  ImageInline,
  ImageInsert,
  ImageInsertViaUrl,
  ImageResize,
  ImageStyle,
  ImageTextAlternative,
  ImageToolbar,
  ImageUpload,
  Italic,
  Link,
  LinkImage,
  List,
  ListProperties,
  PageBreak,
  Paragraph,
  PasteFromOffice,
  RemoveFormat,
  SelectAll,
  ShowBlocks,
  SimpleUploadAdapter,
  SourceEditing,
  Table,
  TableCaption,
  TableCellProperties,
  TableColumnResize,
  TableProperties,
  TableToolbar,
  TextPartLanguage,
  TextTransformation,
  Undo,
} from "ckeditor5";
import translations from "ckeditor5/translations/tr.js";
import { AppState } from "@/store/store";
import { useSelector } from "@/store/hooks";
import "ckeditor5/ckeditor5.css";

interface Veri {
  id: number;
  baslik: string;
  text: string;
}

interface RaporGorusEditorProps {
  id: number;
  text?: string;
  gorusVeriler: Veri[];
  setGorusVeriler: (x: Veri[]) => void;
}

const RaporGorusEditor: React.FC<RaporGorusEditorProps> = ({
  id,
  text,
  gorusVeriler,
  setGorusVeriler,
}) => {
  const lgDown = useMediaQuery((theme: any) => theme.breakpoints.down("lg"));
  const customizer = useSelector((state: AppState) => state.customizer);
  const [editorData, setEditorData] = useState(text); // Track editor data

  useEffect(() => {
    const loadStyles = async () => {
      if (customizer.activeMode === "dark") {
        await import("@/app/components/Editor/custom.css");
      } else {
        await import("@/app/components/Editor/light.css");
      }
    };
    loadStyles();
  }, [customizer.activeMode]);

  const handleChange = (event: any, editor: any) => {
    const data = editor.getData();
    console.log("Editor data changed:", data);
    setEditorData(data); // Update editor data state
    setGorusVeriler(
      gorusVeriler.map((veri) =>
        veri.id == id ? { ...veri, text: data } : veri
      )
    );
  };

  // Trigger the update when editor data changes
  useEffect(() => {
    if (editorData) {
      setGorusVeriler(
        gorusVeriler.map((veri) =>
          veri.id == id ? { ...veri, text: editorData } : veri
        )
      );
    }
  }, [editorData]);

  const editorConfig = {
    toolbar: {
      items: [
        "sourceEditing",
        "|",
        "undo",
        "redo",
        "|",
        "showBlocks",
        "selectAll",
        "textPartLanguage",
        "|",
        "heading",
        "|",
        "bold",
        "italic",
        "removeFormat",
        "|",
        "pageBreak",
        "link",
        "insertTable",
        "|",
        "bulletedList",
        "numberedList",
        "|",
        "accessibilityHelp",
      ],
      shouldNotGroupWhenFull: false,
    },
    plugins: [
      AccessibilityHelp,
      Autoformat,
      AutoImage,
      AutoLink,
      Autosave,
      Bold,
      CloudServices,
      Code,
      CodeBlock,
      Essentials,
      GeneralHtmlSupport,
      Heading,
      HtmlComment,
      HtmlEmbed,
      ImageBlock,
      ImageCaption,
      ImageInline,
      ImageInsert,
      ImageInsertViaUrl,
      ImageResize,
      ImageStyle,
      ImageTextAlternative,
      ImageToolbar,
      ImageUpload,
      Italic,
      Link,
      LinkImage,
      List,
      ListProperties,
      PageBreak,
      Paragraph,
      PasteFromOffice,
      RemoveFormat,
      SelectAll,
      ShowBlocks,
      SimpleUploadAdapter,
      SourceEditing,
      Table,
      TableCaption,
      TableCellProperties,
      TableColumnResize,
      TableProperties,
      TableToolbar,
      TextPartLanguage,
      TextTransformation,
      Undo,
    ],
    heading: {
      options: [
        {
          model: "paragraph" as const,
          view: "p",
          title: "Paragraph",
          class: "ck-heading_paragraph",
        },
        {
          model: "heading1" as const,
          view: "h1",
          title: "Heading 1",
          class: "ck-heading_heading1",
        },
        {
          model: "heading2" as const,
          view: "h2",
          title: "Heading 2",
          class: "ck-heading_heading2",
        },
        {
          model: "heading3" as const,
          view: "h3",
          title: "Heading 3",
          class: "ck-heading_heading3",
        },
        {
          model: "heading4" as const,
          view: "h4",
          title: "Heading 4",
          class: "ck-heading_heading4",
        },
        {
          model: "heading5" as const,
          view: "h5",
          title: "Heading 5",
          class: "ck-heading_heading5",
        },
        {
          model: "heading6" as const,
          view: "h6",
          title: "Heading 6",
          class: "ck-heading_heading6",
        },
      ],
    },
    language: "tr",
    placeholder: "Type or paste your content here!",
    translations: [translations],
  };

  return (
    <Box
      sx={
        lgDown
          ? {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }
          : {}
      }
    >
      <Box sx={{ width: "100%", margin: "auto" }}>
        <CKEditor
          editor={ClassicEditor}
          config={editorConfig}
          data={editorData}
          onChange={handleChange} // Update content when changed
        />
      </Box>
    </Box>
  );
};

export default RaporGorusEditor;
