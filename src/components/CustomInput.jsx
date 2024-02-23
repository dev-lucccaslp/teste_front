import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'


export function CustomInput({
  icon,
  placeholder,
  type,
  dataTestId,
  name,
  id
}) {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState)
  }

  return (
    <div className="flex items-center bg-gray-900 p-2 rounded-sm gap-3 w-full">
      {icon}
      <input
        name={name} 
        id={id}
        data-testid={dataTestId}
        type={showPassword ? 'text' : type}
        placeholder={placeholder}
        className="bg-transparent border border-none tracking-tight outline-none placeholder:text-slate-500 text-slate-300 w-full"
      />
      {type === 'password' && (
        <button
          onClick={togglePasswordVisibility}
          aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
        >
          {showPassword ? (
            <EyeOff className="text-white" />
          ) : (
            <Eye className="text-white" />
          )}
        </button>
      )}
    </div>
  )
}