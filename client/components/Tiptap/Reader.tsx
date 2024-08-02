import { LockOpen, TextFields } from "@mui/icons-material";
import { Box, Stack } from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  LinkBubbleMenu,
  MenuButton,
  RichTextEditor,
  TableBubbleMenu,
  insertImages,
  type RichTextEditorRef,
} from "mui-tiptap";
import EditorMenuControls from "./EditorMenuControls";
import useExtensions from "./useExtensions";

function fileListToImageFiles(fileList: FileList): File[] {
  return Array.from(fileList).filter((file) => {
    const mimeType = (file.type || "").toLowerCase();
    return mimeType.startsWith("image/");
  });
}

export default function Reader({ content }) {
  const [localContent, setLocalContent] = useState("");
  const extensions = useExtensions({
    placeholder: "Add your own content here...",
  });
  const rteRef = useRef<RichTextEditorRef>(null);
  const isEditable = false;
  const showMenuBar = false; 

  useEffect(() => {
    if (content) {
      const timeoutId = setTimeout(() => {
        setLocalContent(content);
      }, 500); 

      return () => clearTimeout(timeoutId);
    }
  }, [content]);

  useEffect(() => {
    if (rteRef.current?.editor) {
      rteRef.current.editor.commands.setContent(localContent);
    }
  }, [localContent]);

  const handleNewImageFiles = useCallback(
    (files: File[], insertPosition?: number): void => {
      if (!rteRef.current?.editor) {
        return;
      }

      const attributesForImageFiles = files.map((file) => ({
        src: URL.createObjectURL(file),
        alt: file.name,
      }));

      insertImages({
        images: attributesForImageFiles,
        editor: rteRef.current.editor,
        insertPosition,
      });
    },
    [],
  );

  const handleDrop: NonNullable<EditorOptions["editorProps"]["handleDrop"]> =
    useCallback(
      (view, event, _slice, _moved) => {
        if (!(event instanceof DragEvent) || !event.dataTransfer) {
          return false;
        }

        const imageFiles = fileListToImageFiles(event.dataTransfer.files);
        if (imageFiles.length > 0) {
          const insertPosition = view.posAtCoords({
            left: event.clientX,
            top: event.clientY,
          })?.pos;

          handleNewImageFiles(imageFiles, insertPosition);

          event.preventDefault();
          return true;
        }

        return false;
      },
      [handleNewImageFiles],
    );

  const handlePaste: NonNullable<EditorOptions["editorProps"]["handlePaste"]> =
    useCallback(
      (_view, event, _slice) => {
        if (!event.clipboardData) {
          return false;
        }

        const pastedImageFiles = fileListToImageFiles(
          event.clipboardData.files,
        );
        if (pastedImageFiles.length > 0) {
          handleNewImageFiles(pastedImageFiles);
          return true;
        }

        return false;
      },
      [handleNewImageFiles],
    );

  return (
    <Box
      sx={{
        "& .ProseMirror": {
          "& h1, & h2, & h3, & h4, & h5, & h6": {
            scrollMarginTop: showMenuBar ? 50 : 0,
          },
        },
      }}
    >
      <RichTextEditor
        ref={rteRef}
        extensions={extensions}
        content={localContent} // Use localContent
        editable={isEditable}
        editorProps={{
          handleDrop: handleDrop,
          handlePaste: handlePaste,
        }}
        renderControls={() => <EditorMenuControls />}
        RichTextFieldProps={{
          variant: "outlined",
          MenuBarProps: {
            hide: !showMenuBar,
          },
          footer: (
            <Stack
              direction="row"
              spacing={2}
              sx={{
                borderTopStyle: "solid",
                borderTopWidth: 1,
                borderTopColor: (theme) => theme.palette.divider,
                py: 1,
                px: 1.5,
              }}
            >
              <MenuButton
                value="formatting"
                tooltipLabel={
                  showMenuBar ? "Hide formatting" : "Show formatting"
                }
                size="small"
                IconComponent={TextFields}
                disabled // Disable the button
              />
              <MenuButton
                value="formatting"
                tooltipLabel={
                  isEditable
                    ? "Prevent edits (use read-only mode)"
                    : "Allow edits"
                }
                size="small"
                IconComponent={LockOpen}
                disabled // Disable the button
              />
            </Stack>
          ),
        }}
      >
        {() => (
          <>
            <LinkBubbleMenu />
            <TableBubbleMenu />
          </>
        )}
      </RichTextEditor>
    </Box>
  );
}
