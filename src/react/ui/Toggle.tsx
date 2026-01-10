import { useState } from 'react';

interface ToggleProps {
  leftLabel: string;
  rightLabel: string;
  saveLabel?: string;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export default function Toggle({
  leftLabel,
  rightLabel,
  saveLabel,
  defaultChecked = false,
  onChange,
  className = '',
}: ToggleProps) {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const handleChange = (checked: boolean) => {
    setIsChecked(checked);
    onChange?.(checked);

    // Dispatch custom event for Astro components
    const event = new CustomEvent('pricing-toggle', {
      detail: { isAnnually: checked },
    });
    document.dispatchEvent(event);
  };

  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      <span
        className={`text-sm font-medium transition-colors ${
          !isChecked ? 'text-neutral-900' : 'text-neutral-500'
        }`}
      >
        {leftLabel}
      </span>
      <button
        type="button"
        role="switch"
        aria-checked={isChecked}
        aria-label={`Switch to ${isChecked ? leftLabel : rightLabel}`}
        onClick={() => handleChange(!isChecked)}
        className="relative inline-flex h-8 w-16 items-center rounded-full bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
      >
        <span
          className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
            isChecked ? 'translate-x-9' : 'translate-x-1'
          }`}
        />
      </button>
      <div className="flex items-center space-x-2">
        <span
          className={`text-sm font-medium transition-colors ${
            isChecked ? 'text-neutral-900' : 'text-neutral-500'
          }`}
        >
          {rightLabel}
        </span>
        {saveLabel && isChecked && (
          <span className="text-xs font-semibold text-primary-600 bg-primary-100 px-2 py-1 rounded">
            {saveLabel}
          </span>
        )}
      </div>
    </div>
  );
}
