interface InputProps {
    type: string;
    name: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    placeholder?: string;
}
function Input ({ type, name, value, onChange, required, placeholder }: InputProps) {
    return (
        <input
            className="my-1 w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            style={{ minWidth: "100%", display: "block" }}
            type={type || "text"}
            name={name || ""}
            value={value || ""}
            onChange={onChange || (() => {})}
            required = {required ? true : false}
            placeholder={placeholder || ""}
        />
    );
}

export default Input