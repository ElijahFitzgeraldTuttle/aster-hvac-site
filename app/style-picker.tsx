"use client";

export const styleOptions = [
  { id: "contemporary", label: "Contemporary" },
  { id: "utilitarian", label: "Utilitarian" },
  { id: "modern", label: "Modern" },
  { id: "postmodern", label: "Postmodern" },
  { id: "basic", label: "Basic" },
] as const;

export type StyleId = (typeof styleOptions)[number]["id"];

type StylePickerProps = {
  activeStyle: StyleId;
  onSelect: (style: StyleId) => void;
};

export function StylePicker({ activeStyle, onSelect }: StylePickerProps) {
  return (
    <div className="style-picker" aria-label="Choose a visual style">
      <div className="style-picker-inner">
        <span className="style-picker-label">Site style</span>
        <div className="style-options" role="group" aria-label="Site style">
          {styleOptions.map((style) => (
            <button
              key={style.id}
              type="button"
              aria-pressed={activeStyle === style.id}
              onClick={() => onSelect(style.id)}
            >
              <span className={`style-swatch swatch-${style.id}`} aria-hidden="true" />
              {style.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
