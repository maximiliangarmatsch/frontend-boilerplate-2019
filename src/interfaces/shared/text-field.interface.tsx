export interface ITextField {
	variant?: "outlined" | "filled",
	required?: true | false,
	fullWidth?: true,
	id: string,
	label?: string,
	type: string,
	name?: string,
	autoComplete?: "on" | "off",
	defaultValue?: string,
	helperText?: string
}