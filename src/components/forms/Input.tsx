import { InputProps } from "@/lib/definitions";

  

export default function Input({ label, error, ...props }: InputProps) {
    return (
      <div className="mb-4">
        <label className="block text-base leading-none pb-2" htmlFor={props.name}>
          {label}
        </label>
        <input
          className={`block w-full text-base p-3 rounded-md bg-gray-200 border border-gray-200 transition duration-200 focus:outline-none focus:border-blue-500 focus:bg-white focus:shadow-outline-blue hover:border-blue-500 hover:bg-white`}
          type="text"
          id={props.name}
          {...props}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    );
  }