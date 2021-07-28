import { ValidationError } from 'yup';

interface ErrorProps {
  [key: string]: string;
}
export default function getValidationErrors(err: ValidationError): ErrorProps {
  const ValidationErros:ErrorProps =  {};

  err.inner.forEach((err)=>{
    ValidationErros[err.path as string] = err.message;
  })

  return ValidationErros;
}
