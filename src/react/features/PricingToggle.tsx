import Toggle from '../ui/Toggle';

interface PricingToggleProps {
  monthlyLabel: string;
  annuallyLabel: string;
  saveLabel: string;
  defaultChecked?: boolean;
}

export default function PricingToggle({
  monthlyLabel,
  annuallyLabel,
  saveLabel,
  defaultChecked = false,
}: PricingToggleProps) {
  return (
    <Toggle
      leftLabel={monthlyLabel}
      rightLabel={annuallyLabel}
      saveLabel={saveLabel}
      defaultChecked={defaultChecked}
    />
  );
}
